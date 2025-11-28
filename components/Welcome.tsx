'use client'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

type FontWeightType = 'subtitle' | 'title'

interface FontWeightConfig {
    min: number
    max: number
    default: number
}

const FONT_WEIGHTS: Record<FontWeightType, FontWeightConfig> = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 900, default: 400 },
}

const renderText = (text: string, className?: string, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span 
            key={i} 
            className={className} 
            //style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
            style={{ fontWeight: baseWeight }}
        >
            {char === " " ? `\u00A0` : char}
        </span>
    ))
}

const setupTextHover = (
    container: HTMLElement | null, 
    type: FontWeightType
): (() => void) | void => {
    if (!container) return () => {}

    const letters = container.querySelectorAll<HTMLSpanElement>("span")
    const { min, max, default: base } = FONT_WEIGHTS[type]

    const animateLetter = (
        letter: HTMLSpanElement, 
        weight: number, 
        duration: number = 0.25
    ): GSAPTween => {
        return gsap.to(letter, {
            duration,
            //fontVariationSettings: `'wght' ${weight}`,
            fontWeight: weight,
            ease: "power2.out",
        })
    }

    const handleMouseMove = (e: MouseEvent): void => {
        const { left } = container.getBoundingClientRect()
        const mouseX = e.clientX - left

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect()
            const distance = Math.abs(mouseX - (l - left + w / 2))
            const intensity = Math.exp(-(distance ** 2) / 2000)

            animateLetter(letter, min + (max - min) * intensity)
        })
    }
    const handleMouseLeave = () => letters.forEach((letter) => animateLetter(letter, base, 0.3))

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseleave', handleMouseLeave)
    }
}

const Welcome = () => {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)

    useGSAP(() => {
        const cleanupTitle = setupTextHover(titleRef.current, 'title')
        const cleanupSubtitle = setupTextHover(subtitleRef.current, 'subtitle')

        return () => {
            cleanupTitle?.()
            cleanupSubtitle?.()
        }
    }, [])

  return (
    <section id="welcome">
        <p ref={subtitleRef}>
            {renderText(
                "Hi There, I'm Guilherme! Welcome to my", 
                'text-3xl font-georama', 
                100
            )}
        </p>
        <h1 ref={titleRef} className="mt-7">
            {renderText(
                "Portfolio.",
                'text-9xl italic font-georama',
                400,
            )}
        </h1>

        <div className="small-screen">
            <p>This Portfolio is designed for desktop/tablet screens only.</p>
        </div>
    </section>
  )
}

export default Welcome