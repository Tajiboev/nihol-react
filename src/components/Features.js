import React from 'react'

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
    return (
        <Section id="features" className="features" title="Davolanish" subtitle="Sihatgohimizda quyidagi kasalliklar bo'yicha yuqori sifatli kompleks davolash hizmatlari taklif qilinadi">
            <div className="feature-grid">
                <div className="feature">
                    <div className="icon-wrap">
                        <Icon source={spinal_pain} name={'Pain'} />
                    </div>
                    <h3 className='feature-title'>Tayanch-harakat a'zolari kasalliklari</h3>
                    <p className='feature-text'>Artrit, poliartrit, osteoartrit, osteohandroz, spondiloartroz, revmatoid artrit, umurtqalararo disk churrasi</p>
                </div>
                <div className="feature">
                    <div className="icon-wrap">
                        <Icon source={migraine} name={'Depression'} />
                    </div>
                    <h3 className='feature-title'>Asab (markaziy va perifik) tizimi kasalliklari</h3>
                    <p className='feature-text'>Nevrasteniya, lyumbalgiya, lyumboishialgiya, nevrit, polinevrit.</p>
                </div>
                <div className="feature">
                    <div className="icon-wrap">
                        <Icon source={abdominal_pain} name={'Abdominal Pain'} />
                    </div>
                    <h3 className='feature-title'>Ozqat hazm qilish a'zolari kasalliklari</h3>
                    <p className='feature-text'>Surunkali oshqozon va ichak yalliglanishi (gastrit, kolit) remissiya davri, suruknali oshqozon va 12 barmoqli ichak yara kasalliklarining remissiya davri, surunkali gepatit, holiesistit.</p>
                </div>
                <div className="feature">
                    <div className="icon-wrap">
                        <Icon source={woman} name={'Women'} />
                    </div>
                    <h3 className='feature-title'>Ginekologik kasalliklar</h3>
                    <p className='feature-text'>Ginekologik a'zolar yalliglanishi kasalliklari, eroziyalar.</p>
                </div>
                <div className="feature">
                    <div className="icon-wrap">
                        <Icon source={man} name={'Men'} />
                    </div>
                    <h3 className='feature-title'>Andrologik kasalliklar</h3>
                    <p className='feature-text'>Prostata bezi kasalliklari va jinsiy quvvatsizlik</p>
                </div>
                <div className="feature">
                    <div className="icon-wrap">
                        <Icon source={heart} name={'Heart'} />
                    </div>
                    <h3 className='feature-title'>Yurak-qon tomir kasalliklari</h3>
                    <p className='feature-text'>Gipertoniya kasalliklari (1-2-bosqichi), yurak ishemik kasalliklari (asoratlarsiz)</p>
                </div>
                <div className="feature">
                    <div className="icon-wrap">
                        <Icon source={blood} name={'Diabetes'} />
                    </div>
                    <h3 className='feature-title'>Endokrinologik kasalliklar</h3>
                    <p className='feature-text'>Qandli diabet (yengil va o'rta darajadagi), qalqonsimon bez kasalliklari</p>
                </div>
                <div className="feature">
                    <div className="icon-wrap">
                        <Icon source={kidney} name={'Kidney'} />
                    </div>
                    <h3 className='feature-title'>Buyrak va siydik yo'li kasalliklari</h3>
                    <p className='feature-text'>Surunkali pielonefrit, uretrit.</p>
                </div>
            </div>
        </Section>
    )
}

export default Features
