'use client'

import Image from "next/image"
import Link from "next/link"
import { navIcons, navLinks } from "@/constants"

import dayjs from "dayjs"
import useWindowStore from "@/store/window"

const Navbar = () => {
  const { openWindow } = useWindowStore()

  return (
    <nav>
      <div className="">
        <Image src={'/images/logo.svg'} alt="Logo" height={16} width={16} />
        <p className="font-medium">Guilherme's Portfolio</p>

        <ul>
          {navLinks.map(({id, name, type}) => (
            <li key={id} onClick={() => openWindow(type)}>
              <Link href={'/'}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="">
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}><Image src={img} alt="Navigation Icons" width={16} height={16}/></li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  )
}

export default Navbar