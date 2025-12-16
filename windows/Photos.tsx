'use client'

import { WindowControlls } from '@/components'
import { photosLinks, gallery } from '@/constants'
import WindowsWrapper from '@/hoc/WindowsWrapper'
import { Search } from 'lucide-react'
import Image from 'next/image'

const Photos = () => {

  return (
    <>
      <div id="window-header">
        <WindowControlls target='photos' />
        <Search className='icon' />
      </div>

      <div className="flex h-full">
        <div className="sidebar">
          <h3>Photos</h3>
          
          <ul>
            {(photosLinks.map((item) => (
              <li key={item.id}>
                <Image 
                  src={item.icon} 
                  alt={item.title} 
                  width={16} 
                  height={16}
                />

                <p className="text-sm font-medium">
                  {item.title}
                </p>
              </li>
            )))}
          </ul>
        </div>

        <div className="gallery">
          {/*<ul>
            {gallery.map((item) => (
              <li key={item.id}>
                <Image 
                  src={item.img} 
                  alt={`Gallery ${item.id}`}
                  width={500}
                  height={500}
                />
              </li>
            ))}
          </ul>*/}
          <div className="flex items-center justify-center h-full w-lg">
            <span>No items found</span>
          </div>
        </div>
      </div>
    </>
  )
}

const PhotosWindow = WindowsWrapper(Photos, 'photos')

export default PhotosWindow