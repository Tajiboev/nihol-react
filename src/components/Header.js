import React, { useState, useEffect, useRef } from 'react'
import '../sass/header.sass'

import Container from './Container'
import Icon from './Icon';

import hamburger from '../images/icons/hamburger.svg'
import cancel from '../images/icons/cancel.svg'
import Logo from '../images/nihol-logo-small.png'

const Header = () => {
    const [showLangDropdown, setShowLangDropdown] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const dropdownRef = useRef()
    const liRef = useRef()

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !liRef.current.contains(event.target)) {
            setShowLangDropdown(false)
        }
    }

    return (
        <header className='header'>
            <Container>
                <div className="navbar-wrap">
                    <div className='logo-wrap'>
                        <img src={Logo} alt="Nihol Salomatlik Sihatgohi"/>
                    </div>
                    {showMenu && <nav className="navigation">
                        <ul className='nav-list'>
                            <li className='nav-item'>
                                <a href="#about" className='nav-link'>Sihatgoh haqida</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#features" className='nav-link'>Davolanish</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#gallery" className='nav-link'>Foto gallereya</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#contact" className='nav-link'>Biz bilan bog'lanish</a>
                            </li>
                            <li className='nav-item lang-select-li' ref={liRef}>
                                <button className='nav-link lang-select-btn' onClick={() => setShowLangDropdown(prev => !prev)}>O'zbekcha</button>
                                { showLangDropdown && <div className='lang-wrap' ref={dropdownRef}>
                                    <ul>
                                        <li className='lang lang-active'>O'zbekcha</li>
                                        <li className='lang'>Русский</li>
                                    </ul>
                                </div>}
                            </li>
                        </ul>
                    </nav>}
                    <div className="toggler-wrap">
                        <button className="toggler" onClick={() => setShowMenu(prev => !prev)}>
                            <Icon source={showMenu ? cancel : hamburger}/>
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
