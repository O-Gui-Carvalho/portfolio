'use client'

import { WindowControlls } from "@/components"
import WindowsWrapper from "@/hoc/WindowsWrapper"
import { Download } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

const ResumeViewer = dynamic(() => import("@/components/ResumeView"), {
  ssr: false,
  loading: () => <p>Carregando PDF...</p>
});

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControlls target="resume"/>
        <h2>Resume.pdf</h2>

        <Link 
          href={"files/resume.pdf"} 
          download
        >
          <Download className="icon"/>
        </Link>
      </div>

      <div className="pdf-container">
         <ResumeViewer />
      </div>
    </>
  )
}

const ResumeWindow = WindowsWrapper(Resume, 'resume')

export default ResumeWindow