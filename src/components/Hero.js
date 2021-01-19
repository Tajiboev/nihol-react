import React from 'react'
import '../sass/hero.sass'

import Video from './Video'
import Button from './Button';
import Section from './Section';
import promo from '../video/promo.webm';
import poster from '../images/medium/nihol-2-m.webp';

const Hero = () => {

    return (
        <Section name="hero">
            <div className="hero-left">
                <h1 className="leading-text">Nihol salomatlik sihatgohi - sog'lom hayot makoni!</h1>
                <p className="sub-text">"Nihol" salomatlik sihatgohi Uchqorgon tumanining baxavo hududida joylashgan, vodiyning haqiqiy marvarid maskanidir.</p>
                <ul className="offer-list">
                    <li className="offer-item">So'lim tabiyat</li>
                    <li className="offer-item">xush muomila hodimlar</li>
                    <li className="offer-item">sifatli hizmat</li>
                    <li className="offer-item">totli taomlar</li>
                    <li className="offer-item">maroqli hordiq</li>
                    <li className="offer-item">2250 metr qaridanotilib chiquvchi shifobaxsh madanli suv</li>
                </ul>
                <p className="sub-text">Bularning bari "Nihol" salomatlik sihatgohida.</p>
                <div className="cta">
                    <Button variant="primary" scrollto='about'>Batafsil ma'lumot</Button>
                    <Button variant="secondary" scrollto='contact'>Aloqa</Button>
                </div>
            </div>
            <div className="hero-right">
                <Video sources={[{path: promo, type: 'video/webm'}]} poster={poster}></Video>
            </div>
        </Section>
    )
}

export default Hero
