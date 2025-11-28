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

export interface DockApps {
  id: string;
  name: string;
  icon: string;
  canOpen: boolean;
}

export const dockApps: DockApps[] = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];