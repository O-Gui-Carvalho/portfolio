'use client'

import { dockApps } from '@/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useRef } from 'react'

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Dock = () => {
    const dockRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const dock = dockRef.current
        if (!dock) return () => {}

        const icons = dock.querySelectorAll<HTMLDivElement>(".dock-icon")

        const animateIcons = (mouseX: number) => {
            const { left } = dock.getBoundingClientRect()

            icons.forEach((icon: HTMLDivElement) => {
                const { left: iconLeft, width } = icon.getBoundingClientRect()
                const center = iconLeft - left + width / 2
                const distance = Math.abs(mouseX - center)

                const intensity = Math.exp(-(distance ** 3) / 2000)

                gsap.to(icon, {
                    scale: 1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: 'power1.out',
                })
            })
        }

        const handleMouseMove = (e: MouseEvent) => {
            const { left } = dock.getBoundingClientRect()

            animateIcons(e.clientX - left)
        }

        const resetIcons = () => {
            icons.forEach((icon: HTMLDivElement) => {
                gsap.to(icon, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power1.out'
                })
            })
        }

        dock.addEventListener('mousemove', handleMouseMove)
        dock.addEventListener('mouseleave', resetIcons)

        return () => {
            dock.removeEventListener('mousemove', handleMouseMove)
            dock.removeEventListener('mouseleave', resetIcons)
        }

    }, [])

    const toggleApp = (_app: { id: string; canOpen: boolean }) => {

    }
  return (
    <section id="dock">
        <div ref={dockRef} className="dock-container">
            {dockApps.map(({ id, name, icon, canOpen }) => (
                <div key={id} className="relative flex justify-center">
                    <button 
                        type='button' 
                        className='dock-icon'
                        aria-label={name}
                        data-tooltip-id='dock-tooltip'
                        data-tooltip-content={name}
                        data-tooltip-delay-show={150}
                        disabled={!canOpen}
                        onClick={() => toggleApp({ id, canOpen })}
                    >
                        <Image 
                            src={`/images/${icon}`}
                            alt={name}
                            loading='lazy'
                            className={canOpen ? "" : "opacity-60"}
                            width={64}
                            height={64}
                        />
                    </button>
                </div>
            ))}

            <Tooltip id="dock-tooltip" place='top' className='tooltip'/>
        </div>
    </section>
  )
}

export default Dock