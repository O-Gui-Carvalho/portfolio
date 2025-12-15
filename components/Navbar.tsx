'use client'

import Image from "next/image"
import Link from "next/link"
import { navIcons, navLinks } from "@/constants"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import dayjs from "dayjs"
import useWindowStore from "@/store/window"
import ThemeSelector from "./ThemeSwitcher"

const Navbar = () => {
  const { openWindow } = useWindowStore()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav>
      <div>
        <Image 
          src={'/images/logo.svg'} 
          alt="Logo" 
          height={16} 
          width={16}
          className={`transition-all duration-300 ${mounted && theme === "dark" ? "invert" : ""}`}
        />
        <p className="transition-colors duration-300 font-medium">Guilherme's Portfolio</p>

        <ul>
          {navLinks.map(({id, name, type}) => (
            <li key={id} onClick={() => openWindow(type)} className="transition-colors duration-300 font-medium">
              <Link href={'/'}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li 
              key={id}  
              className="hover:bg-white/50 p-1 rounded-sm cursor-pointer transition-colors duration-300"
            >
              <Image 
                src={img} 
                alt="Navigation Icons" 
                width={16} 
                height={16}
                className={`transition-all duration-300 ${mounted && theme === "dark" ? "invert" : ""}`}
              />
            </li>
          ))}
        </ul>

        <ThemeSelector />

        <time className={`transition-all duration-300 ${mounted && theme === "dark" ? "invert" : ""}`}>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  )
}

export default Navbar