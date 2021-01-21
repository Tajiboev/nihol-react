import React from 'react'
import { useLocale } from '../contexts/LocaleContext'
import '../sass/hero.sass'

import Video from './Video'
import Button from './Button';
import Section from './Section';
import promo from '../video/promo.webm';
import poster from '../images/small/nihol-2-s.webp';

const Hero = () => {
    const { locale, Translation} = useLocale()
    const { hero } = Translation[locale]


    return (
        <Section className="hero">
            <div className="hero-left">
                <h1 className="leading-text">{hero.h1_leading}</h1>
                <p className="sub-text">{hero.p_sub}</p>
                <ul className="offer-list">
                    <li className="offer-item">{hero.li_offer_item_1}</li>
                    <li className="offer-item">{hero.li_offer_item_2}</li>
                    <li className="offer-item">{hero.li_offer_item_3}</li>
                    <li className="offer-item">{hero.li_offer_item_4}</li>
                    <li className="offer-item">{hero.li_offer_item_5}</li>
                    <li className="offer-item">{hero.li_offer_item_6}</li>
                </ul>
                <p className="sub-text">{hero.p_sub_2}</p>
                <div className="cta">
                    <Button variant="primary" scrollto='about'>{hero.cta_primary}</Button>
                    <Button variant="secondary" scrollto='contact'>{hero.cta_secondary}</Button>
                </div>
            </div>
            <div className="hero-right">
                <Video sources={[{path: promo, type: 'video/webm'}]} poster={poster}></Video>
            </div>
        </Section>
    )
}

export default Hero
