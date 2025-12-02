import { Dock, Navbar, Welcome } from "@/components"
import { Browser, Finder, Resume, Terminal } from "@/windows"

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
    </main>
  )
}
