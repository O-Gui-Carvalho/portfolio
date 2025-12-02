'use client'

import { WindowControlls } from "@/components"
import { blogPosts } from "@/constants"
import WindowsWrapper from "@/hoc/WindowsWrapper"
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Browser = () => {
  return (
    <>
        <div id="window-header">
            <WindowControlls target="safari"/>

            <PanelLeft className="ml-10 icon" />

            <div className="flex items-center gap-1 ml-5">
                <ChevronLeft className="icon" />
                <ChevronRight className="icon" />
            </div>

            <div className="flex-1 flex-center gap-3">
                <ShieldHalf className="icon" />

                <div className="search">
                    <Search className="icon" />

                    <input 
                        type="text" 
                        placeholder="Search or enter website name" 
                        className="flex-1"
                    />
                </div>
            </div>
        
            <div className="flex items-center gap-5">
                <Share className="icon"/>
                <Plus className="icon" />
                <Copy className="icon" />
            </div>
        </div>

        <div className="blog">
            <h2>My Developer Blog</h2>

            <div className="space-y-8">
                {blogPosts.map(({ id, image, title, date, link }) => (
                    <div key={id} className="blog-post">
                        <div className="col-span-2">
                            <Image 
                                src={image} 
                                alt={title} 
                                width={64} 
                                height={64}
                            />
                        </div>

                        <div className="content">
                            <p>{date}</p>
                            <h3>{title}</h3>
                            <Link href={link} target="_blank" rel="noopener noreferrer">
                                Check out the full post <MoveRight className="icon-hover" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

const BrowserWindow = WindowsWrapper(Browser, "safari")

export default BrowserWindow