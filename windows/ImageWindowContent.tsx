'use client'

import { WindowControlls } from "@/components"
import WindowsWrapper from "@/hoc/WindowsWrapper"
import useWindowStore from "@/store/window"
import Image from "next/image"

const ImageWindowContent = () => {
    const { windows } = useWindowStore()
    const data = windows.imgfile?.data

    if ( !data ) return null

    const { name, imageUrl } = data
  return (
    <>
        <div id="window-header">
            <WindowControlls target="imgfile" />
            <h2>{name}</h2>
        </div>

        <div className="p-5 bg-white">
            {imageUrl ? (
                <div className="w-full">
                    <Image src={imageUrl} alt={name} width={400} height={400} className="w-full h-auto max-h-[70vh] object-contain rounded"/>
                </div>
            ): null}
        </div>
    </>
  )
}

const ImageWindow = WindowsWrapper(ImageWindowContent, 'imgfile')

export default ImageWindow