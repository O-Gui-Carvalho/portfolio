'use client'

import { WindowControlls } from "@/components"
import { locations, Location, Item } from "@/constants"
import WindowsWrapper from "@/hoc/WindowsWrapper"
import useLocationStore from "@/store/location"
import useWindowStore from "@/store/window"
import clsx from "clsx"
import { Search } from "lucide-react"
import Image from "next/image"

const Trash = () => {
  const { openWindow } = useWindowStore()
  const { activeLocations, setActiveLocation } = useLocationStore()

  const activeLocation = activeLocations.trash

    const openItem = (item: Item) => {
        if (item.kind === 'file') {
            switch (item.fileType) {
                case 'pdf':
                    return openWindow("resume")

                case 'url':
                    if (item.href) {
                        return window.open(item.href, '_blank')
                    }
                    break

                case 'fig':
                    if (item.href) {
                        return window.open(item.href, '_blank')
                    }
                    break

                case 'txt':
                    return openWindow("txtfile", item)
                
                case 'img':
                    return openWindow("imgfile", item)

                default:
                    console.log('Tipo de arquivo não suportado')
            }
        }

        else if (item.kind === 'folder' && item.children) {
            setActiveLocation('trash', item as Location)
        }
    }

    const renderList = (name: string, items: (Location | Item)[]) => (
        <div>
            <h3>{name}</h3>

            <ul>
                {items.map((item) => (
                    <li 
                        key={item.id} 
                        onClick={() => setActiveLocation('trash', item as Location)}
                        className={clsx(item.id === activeLocation.id ? "active" : "not-active")}
                    >
                        <Image 
                            src={item.icon} 
                            className="w-4" 
                            alt={item.name} 
                            width={32} 
                            height={32}
                        />
                        <p className="text-sm font-medium truncate">
                            {item.name}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
  return (
    <>
            <div id="window-header">
                <WindowControlls target="trash"/>
                <Search className="icon"/>
            </div>
    
            <div className="bg-white flex h-full">
                <div className="sidebar">
                    {renderList('Favorites', Object.values(locations))}
                    {renderList('Work', locations.work.children || [])}
                </div>
    
                <ul className="content">
                    {activeLocation?.children?.map((item) => (
                        <li 
                            key={item.id} 
                            className={item.position} 
                            onClick={() => openItem(item)}
                        >
                            <Image src={item.icon} alt={item.name} width={32} height={32}/>
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
  )
}

const TrashWindow = WindowsWrapper(Trash, 'trash')

export default TrashWindow