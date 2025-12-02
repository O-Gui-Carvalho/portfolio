'use client'

import { WindowControlls } from "@/components"
import WindowsWrapper from "@/hoc/WindowsWrapper"
import { Download } from "lucide-react"
import Link from "next/link"

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

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

      <Document file="/files/resume.pdf">
        <Page 
          pageNumber={1} 
          renderTextLayer 
          renderAnnotationLayer
        />
      </Document>
    </>
  )
}

const ResumeWindow = WindowsWrapper(Resume, 'resume')

export default ResumeWindow