import React from 'react'
import { useLocale } from '../contexts/LocaleContext'

import '../sass/about.sass'


import Section from './Section';
import Icon from './Icon';

import addressIcon from '../images/icons/noun_address.svg'
import timeIcon from '../images/icons/noun_time.svg'
import telephoneIcon from '../images/icons/noun_telephone.svg'


const About = () => {
    const { locale, Translation} = useLocale()
    const { about } = Translation[locale]

    return (
        <Section id="about" className="about" title={about.title} subtitle={about.subtitle}>
            <div className="about-grid">
                <div className="about-left">
                    <p className='about-text'>
                        {about.p_about_text_1}
                    </p>
                    <p className='about-text'>
                        {about.p_about_text_2}
                    </p>
                </div>
                <div className="about-right">               
                    <p className='about-text'>
                        {about.p_about_text_3}
                    </p>
                    <p className='about-text'>
                        {about.p_about_text_4}
                    </p>
                </div>
            </div>
            <div className="about-info">
                <div className='info-wrap'>
                    <p className='info-name'><span><Icon source={addressIcon} name={'Address'} /></span>{about.info_name_1}</p>
                    <address>
                        {about.address_L1} <br/>
                        {about.address_L2}

                    </address>
                </div>
                <div className='info-wrap'>
                    <p className='info-name'><span><Icon source={telephoneIcon} name={'Phone'} /></span>{about.info_name_2}</p>
                    <a href="tel:+998903008885">+998 (90)300-88-85</a>
                    <a href="tel:+9989435001096">+998 (94) 500-10-96</a>
                </div>
                <div className='info-wrap'>
                    <p className='info-name'><span><Icon source={timeIcon} name={'Time'} /></span>{about.info_name_3}</p>
                    <p>{about.time_days}</p>
                    <p>{about.time_hours}</p>
                </div>
            </div>
        </Section>
    )
}

export default About
