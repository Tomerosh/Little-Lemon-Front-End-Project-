import logo from '../assets/images/Logo.svg'
import Basket from '../assets/images/Basket.svg'
import hamburger from '../assets/images/icon _hamburger menu.svg'
import { useEffect, useRef } from 'react'

export default function Nav({menuOpen, setMenuOpen}) {
    return <nav style={{position: menuOpen? 'sticky': 'relative'}}>
        <img className='hamburger' src={hamburger} onClick={()=> setMenuOpen(!menuOpen)}/>
        <img id='logo' src={logo}></img>
        <ul className='menu' id={menuOpen? "menu-open": "menu-closed"}>
            <img className='hamburger' src={hamburger} onClick={()=> setMenuOpen(!menuOpen)}/>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        <img className='basket' src={Basket}></img>
    </nav>
}