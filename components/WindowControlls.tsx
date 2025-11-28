import useWindowStore from "@/store/window"
import type { WindowId } from "@/constants"

interface WindowControllsProps {
  target: WindowId;
}

const WindowControlls = ({ target }: WindowControllsProps) => {
  const { closeWindow } = useWindowStore()

  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)}></div>
      <div className="minimize"></div>
      <div className="maximize"></div>
    </div>
  )
}

export default WindowControlls