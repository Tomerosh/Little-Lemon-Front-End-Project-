import logo from '../assets/images/Logo.svg'
import Basket from '../assets/images/Basket.svg'

export default function Nav() {
    return <nav>
        <img id='logo' src={logo}></img>
        <ul>
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