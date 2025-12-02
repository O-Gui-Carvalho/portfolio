import { Dock, Navbar, Welcome } from "@/components"
import { Browser, Finder, Image, Resume, Terminal, Text } from "@/windows"

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
    </main>
  )
}
