'use client'

import { Item, Location, locations } from "@/constants"
import useLocationStore from "@/store/location"
import useWindowStore from "@/store/window"
import { useGSAP } from "@gsap/react"
import clsx from "clsx"
import { Draggable } from "gsap/Draggable"
import Image from "next/image"

const projects = locations.work?.children ?? []

const DesktopFolders = () => {
    const { setActiveLocation } = useLocationStore()
    const { openWindow } = useWindowStore()

    const handleOpenProjectFinder = (project: Item) => {
        const projectAsLocation = {
            ...project,
            type: 'work' as const
        } as Location
            
        setActiveLocation('finder', projectAsLocation)
        openWindow('finder')
    }

    useGSAP(() => {
        Draggable.create(".folder")
    }, [])

  return (
    <section id="home">
        <ul>
            {projects.map((project) => (
                <li 
                    key={project.id}
                    className={clsx("group folder", project.windowPosition)}
                    onClick={() => handleOpenProjectFinder(project)}
                >
                    <Image src={'/images/folder.png'} alt={project.name} height={64} width={64}/>
                    <p>{project.name}</p>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default DesktopFolders