import { DesktopFolders, Dock, Navbar, Welcome } from "@/components"
import { Browser, Contact, Finder, Image, Photos, Resume, Terminal, Text, Trash } from "@/windows"

import gsap from "gsap"
import { Draggable } from "gsap/Draggable"

gsap.registerPlugin(Draggable)

export default function Home() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Browser />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <DesktopFolders />
      <Photos />
      <Trash />
    </main>
  )
}
