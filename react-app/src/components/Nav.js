import logo from '../assets/images/Logo.svg'
import Basket from '../assets/images/Basket.svg'
import hamburger from '../assets/images/icon _hamburger menu.svg'
import { useState } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
    return <nav style={{position: menuOpen? 'sticky': 'relative'}}>
        <img className='hamburger' src={hamburger} onClick={()=> setMenuOpen(!menuOpen)}/>
        <img id='logo' src={logo}></img>
        <ul className='menu' id={menuOpen? "menu-open": "menu-closed"}>
            <img className='hamburger' src={hamburger} onClick={()=> setMenuOpen(!menuOpen)}/>
            <li><a href='/' onClick={() => console.log(123)}>Home</a></li>
            <li><a href='/' >About</a></li>
            <li><a href='/' >Menu</a></li>
            <li><a href='/booking' >Reservations</a></li>
            <li><a href='/' >Order Online</a></li>
            <li><a href='/' >Login</a></li>
        </ul>
        <img className='basket' src={Basket}></img>
    </nav>
}