import React, { useState} from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import LogoImage from '../assets/images/home_back.jpg';

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
    
    return(
        <div className='header'>
            <nav>
                <Link to="home" class="logo-link" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>
                    <div class="logo-container">
                        <img className="logo-img" src={LogoImage} alt="TechVista Icon" />
                        <h1 className='logo-name'>TechVista</h1>
                    </div>
                </Link>

                <div>
                    <ul id="navbar" className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'>
                            <Link to="Home" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="About Us" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About Us</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="Services" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Services</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="Our Team" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Our Team</Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to="" spy={true} smooth={true} offset={-95} duration={500} onClick={closeMenu}>About</Link>
                        </li> */}
                        <li className='nav-item'>
                            <Link to="Contact Us" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Contact Us</Link>
                        </li>
                    </ul>
                </div>

                <div id="mobile" onClick={handleClick}>
                     <i id="bar" className={click? "fas fa-times" : "fas fa-bars"}></i>
                </div>

            </nav>
        
        </div>
    )
}

export default Navbar;