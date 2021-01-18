import React from 'react'
import '../sass/header.sass'

import Container from './Container'
import Logo from '../images/nihol-logo-small.png'

const Header = () => {
    return (
        <header className='header'>
            <Container>
                <div className="navbar-wrap">
                    <div className='logo-wrap'>
                        <img src={Logo} alt="Nihol Salomatlik Sihatgohi"/>
                    </div>
                    <nav className="navigation">
                        <ul className='nav-list'>
                            <li className='nav-item'>
                                <a href="/" className='nav-link'>Sihatgoh haqida</a>
                            </li>
                            <li className='nav-item'>
                                <a href="/" className='nav-link'>Davolanish</a>
                            </li>
                            <li className='nav-item'>
                                <a href="/" className='nav-link'>Foto gallereya</a>
                            </li>
                            <li className='nav-item'>
                                <a href="/" className='nav-link'>Biz bilan bog'lanish</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    )
}

export default Header
