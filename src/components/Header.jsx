import { useState } from 'react'

const links = ['About', 'Skills', 'Projects', 'Contact']
export default function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><nav className="nav container" aria-label="Điều hướng chính">
    <a className="brand" href="#top" onClick={() => setOpen(false)}>Phong</a>
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="main-menu" aria-label="Mở menu" onClick={() => setOpen(!open)}>Menu</button>
    <ul id="main-menu" className={open ? 'nav-links is-open' : 'nav-links'}>{links.map(link => <li key={link}><a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a></li>)}</ul>
  </nav></header>
}
