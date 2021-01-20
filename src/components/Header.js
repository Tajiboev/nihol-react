import React, { useState } from 'react'
import '../sass/header.sass'

import Container from './Container'
import Icon from './Icon';

import hamburger from '../images/icons/hamburger.svg'
import cancel from '../images/icons/cancel.svg'
import Logo from '../images/nihol-logo-small.png'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [locale, setLocale] = useState('uz')

    return (
        <header className='header'>
            <Container>
                <div className="navbar-wrap">
                    <div className='logo-wrap'>
                        <img src={Logo} alt="Nihol Salomatlik Sihatgohi"/>
                    </div>
                    <nav className={showMenu ? 'navigation' : 'navigation navigation-hidden'}>
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
                            <li className='nav-item'>
                                <button className={locale === 'uz' ? 'lang-btn lang-btn-active' : 'lang-btn'}>O'zbekcha</button>
                            </li>
                            <li className='nav-item'>
                                <button className={locale === 'ru' ? 'lang-btn lang-btn-active' : 'lang-btn'}>Русский</button>
                            </li>
                        </ul>
                    </nav>
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
