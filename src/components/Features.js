import React from 'react'
import { useLocale } from '../contexts/LocaleContext'

import '../sass/features.sass'
import Section from './Section';
import Icon from './Icon';

// icons
import abdominal_pain from '../images/icons/noun_pain.svg'
import spinal_pain from '../images/icons/noun_pain_2.svg'
import migraine from '../images/icons/noun_migraine.svg'
import woman from '../images/icons/noun_women.svg'
import man from '../images/icons/noun_male.svg'
import heart from '../images/icons/noun_heart.svg'
import kidney from '../images/icons/noun_kidney.svg'
import blood from '../images/icons/noun_normal_blood.svg'


const Features = () => {
    const { locale, Translation} = useLocale()
    const { features } = Translation[locale]
    return (
        <Section id="features" className="features" title={features.title} subtitle={features.subtitle}>
            <div className="feature-grid">
                <div className="feature">
                    <div className="icon-wrap">
                        <Icon source={spinal_pain} name={'Pain'} />
                    </div>
                    <h3 className='feature-title'>{features.feature_1.h3}</h3>
                    <p className='feature-text'>{features.feature_1.p}</p>
                </div>
                <div className="feature">
                    <div className="icon-wrap">
                        <Icon source={migraine} name={'Depression'} />
                    </div>
                    <h3 className='feature-title'>{features.feature_2.h3}</h3>
                    <p className='feature-text'>{features.feature_2.p}</p>
                </div>
                <div className="feature">
                    <div className="icon-wrap">
                        <Icon source={abdominal_pain} name={'Abdominal Pain'} />
                    </div>
                    <h3 className='feature-title'>{features.feature_3.h3}</h3>
                    <p className='feature-text'>{features.feature_3.p}</p>
                </div>
                <div className="feature">
                    <div className="icon-wrap">
                        <Icon source={woman} name={'Women'} />
                    </div>
                    <h3 className='feature-title'>{features.feature_4.h3}</h3>
                    <p className='feature-text'>{features.feature_4.p}</p>
                </div>
                <div className="feature">
                    <div className="icon-wrap">
                        <Icon source={man} name={'Men'} />
                    </div>
                    <h3 className='feature-title'>{features.feature_5.h3}</h3>
                    <p className='feature-text'>{features.feature_5.p}</p>
                </div>
                <div className="feature">
                    <div className="icon-wrap">
                        <Icon source={heart} name={'Heart'} />
                    </div>
                    <h3 className='feature-title'>{features.feature_6.h3}</h3>
                    <p className='feature-text'>{features.feature_6.p}</p>
                </div>
                <div className="feature">
                    <div className="icon-wrap">
                        <Icon source={blood} name={'Diabetes'} />
                    </div>
                    <h3 className='feature-title'>{features.feature_7.h3}</h3>
                    <p className='feature-text'>{features.feature_7.p}</p>
                </div>
                <div className="feature">
                    <div className="icon-wrap">
                        <Icon source={kidney} name={'Kidney'} />
                    </div>
                    <h3 className='feature-title'>{features.feature_8.h3}</h3>
                    <p className='feature-text'>{features.feature_8.p}</p>
                </div>
            </div>
        </Section>
    )
}

export default Features
