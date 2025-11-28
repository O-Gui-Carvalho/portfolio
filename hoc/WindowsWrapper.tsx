'use client'

import useWindowStore from "@/store/window"
import type { WindowId } from "@/constants"
import { useRef, ComponentType, useLayoutEffect } from "react"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable)

const WindowsWrapper = <P extends object>(
    Component: ComponentType<P>, 
    windowKey: WindowId
) => {
    const Wrapped = (props: P) => {
        const { focusWindow, windows } = useWindowStore()
        const { isOpen, zIndex } = windows[windowKey]
        const ref = useRef<HTMLElement>(null)

        useGSAP(() => {
            const el = ref.current
            if(!el || !isOpen) return

            el.style.display = "block"

            gsap.fromTo(
                el,
                { scale: 0.8, opacity: 0, y: 40 },
                { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "power3.out"}
            )
        }, [isOpen])

        useGSAP(() => {
            const el = ref.current
            if (!el) return
            const [instance] = Draggable.create(el, { onPress: () => focusWindow(windowKey) })
        
            return () => instance.kill()
        }, [])

        useLayoutEffect(() => {
            const el = ref.current
            if (!el) return
            el.style.display = isOpen ? "block" : "none"
        }, [isOpen])

        return (
            <section 
                id={windowKey} 
                ref={ref} 
                style={{ zIndex }}
                className="absolute"
            >
                <Component {...props as P}/>
            </section>
        )
    }

    Wrapped.displayName = `WindowWrapper(${
        (Component as any).displayName || 
        (Component as any).name || 
        "Component"
    })`

    return Wrapped
}

export default WindowsWrapper