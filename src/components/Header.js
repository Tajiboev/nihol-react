import React, { useState } from 'react'
import { useLocale } from '../contexts/LocaleContext'
import '../sass/header.sass'

import Container from './Container'
import Icon from './Icon';

import hamburger from '../images/icons/hamburger.svg'
import cancel from '../images/icons/cancel.svg'
import Logo from '../images/nihol-logo-small.png'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { locale, setLocale, Translation} = useLocale()
    const { navigation } = Translation[locale]

    const changeLocale = () => {
        if(locale === "uz") {
            setLocale('ru')
        } else if(locale === "ru") {
            setLocale('uz')
        }
    }

    return (
        <header className='header'>
            <Container>
                <div className="navbar-wrap">
                    <div className='logo-wrap'>
                        <img src={Logo} alt={navigation.logo_alt}/>
                    </div>
                    <nav className={showMenu ? 'navigation' : 'navigation navigation-hidden'}>
                        <ul className='nav-list'>
                            <li className='nav-item'>
                                <a href="#about" className='nav-link'>{navigation.link_1}</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#features" className='nav-link'>{navigation.link_2}</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#gallery" className='nav-link'>{navigation.link_3}</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#contact" className='nav-link'>{navigation.link_4}</a>
                            </li>
                            <li className='nav-item'>
                                <button className={'lang-btn'} onClick={changeLocale}>{navigation.changeLangTo} now {locale}</button>
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
