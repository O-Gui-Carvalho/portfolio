export interface NavLink {
  id: number;
  name: string;
  type: string;
}

export const navLinks: NavLink[] = [
  { id: 1, name: "Projects", type: "finder" },
  { id: 2, name: "Contact", type: "constact" },
  { id: 3, name: "Resume", type: "resume" },
]

export interface NavIcons {
    id: number;
    img: string;
}

export const navIcons: NavIcons[] = [
    {id: 1, img: "/icons/wifi.svg"},
    {id: 2, img: "/icons/search.svg"},
    {id: 3, img: "/icons/user.svg"},
    {id: 4, img: "/icons/mode.svg"},
]