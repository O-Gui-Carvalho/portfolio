'use client'

import { WindowControlls } from "@/components"
import { socials } from "@/constants"
import WindowsWrapper from "@/hoc/WindowsWrapper"
import Image from "next/image"
import Link from "next/link"

const Contact = () => {
  return (
    <>
        <div id="window-header">
            <WindowControlls target="contact" />
            <h2>Contact Me</h2>
        </div>

        <div className="p-5 space-y-5">
            <Image 
                src={'/images/profile.png'} 
                alt="Guilherme" 
                className="w-20 rounded-full"
                width={64}
                height={64}
            />

            <h3>Let's Connect</h3>
            <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>
            <p>guilhermefreitas117@gmail.com</p>
        
            <ul>
                {socials.map(({ id, bg, link, icon, text }) => (
                    <li key={id} style={{ backgroundColor: bg }}>
                        <Link href={link} target="_blank" rel="noopener noreferrer" title={text}>
                            <Image 
                                src={icon} 
                                alt={text} 
                                className="size-5"
                                width={64}
                                height={64}
                            />
                            <p>{text}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

const ContactWindow = WindowsWrapper(Contact, "contact")

export default ContactWindow