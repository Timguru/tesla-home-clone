import React from 'react'
import Logo from '../assets/teslaLogoSmall.svg'
import './css/Header.css'
import  {Link} from 'react-scroll'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src={Logo} alt="Tesla Logo" style={{ width: 80}}/>
            </div>
            <div className="header__center">
                <ul className="nav__links">
                    <li className="nav__link"><Link to="model-S" activeClass="active" spy={true} smooth={true} suppressHydrationWarning>Model S</Link></li>
                    <li className="nav__link"><Link to="model-3" spy={true} smooth={true} suppressHydrationWarning>Model 3</Link></li>
                    <li className="nav__link"><Link to="model-X" spy={true} smooth={true} suppressHydrationWarning>Model X</Link></li>
                    <li className="nav__link"><Link to="model-Y" spy={true} smooth={true} suppressHydrationWarning>Model Y</Link></li>
                    <li className="nav__link"><Link to="solar-roof" spy={true} smooth={true} suppressHydrationWarning>Solar Roof</Link></li>
                    <li className="nav__link"><Link to="solar-panel" spy={true} smooth={true} suppressHydrationWarning>Solar Panel</Link></li>
                </ul>
            </div>
            <div className="header__right">
                <p>Shop</p>
                <p>Tesla Account</p>
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Header
