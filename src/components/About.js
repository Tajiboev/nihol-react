import React from 'react'
import '../sass/about.sass'


import Section from './Section';
import Icon from './Icon';

import addressIcon from '../images/icons/noun_address.svg'
import timeIcon from '../images/icons/noun_time.svg'
import telephoneIcon from '../images/icons/noun_telephone.svg'


const About = () => {
    return (
        <Section id="about" className="about" title="Sihatgoh haqida" subtitle='"Nihol salomatlik sihatgohi" MChJ - Zamolnaviy laborator va tibbiy-diagnostik asbob uskunalar bilan jihozlangan, yevropa tipidagi sihatgohdir'>
            <div className="about-grid">
                <div className="about-left">
                    <p className='about-text'>
                        Sihatgoh Namangan shaxridan 40km masofada, Tyan-shan tizmalaridan oqib keluvchi 
                        Norin daryosi va Katta Fargo'ona kanali yoqasida joylashgan. 
                        Sihatgohdagi har bir dam oluvchiga yuqori sifatli kompleks davolash hizmatlari taklif qilinadi va qulay va foydali 
                        dam olish va davolanish uchun barcha sharoitlar muhayyo qilinadi.
                    </p>
                    <p className='about-text'>
                        Sihatgoh hududida 2245 metr qaridan oqib chiquvchi termal buloq joylashgan bolib, uning odam organizmiga foydali 
                        bolgan mikroelementlar, yod-brom va boshqa elementlarga boy bolgan madanli suvi davolash vannalari va balchiq bilan 
                        davolash jarayonlarida ishlatiladi. Tabiiy davolash vositalaridan tashqari sihatgohda zamonaviy fizioterapiya, psixoterapiya, 
                        fitoterapiya, dietologiya, igna sanchish, LFK va massaj, hamda, turli travmatik va nevrologik kasalliklarni boshdan kechirgan 
                        bemorlarning reabilitatsiyasi o'tkaziladi.
                    </p>
                </div>
                <div className="about-right">               
                    <p className='about-text'>
                        Sihatgohda yurak-qon tomir, ovqat hazm qilish, harakat-tayanch a'zolari, asab tizimi, ginekologik kasalliklar bilan 
                        og'rigan bemorlar uchun shifobaxsh tabiiy omillar bo'lib 2245 metr chuqurlikdan chiquvchi yod-bromli va boshqa kopgina 
                        minerallarga boy bo'lgan termal ma'danli suvlar ichish va vannalar berish uchun qollaniladi. 
                        Turli xil terapevtik va nevrologik kasalliklar bilan og'rigan bemorlarning sog'ligini tiklash va reabilitatsiya o'tkaziladi.
                    </p>
                    <p className='about-text'>
                        Zamolnaviy tashxislash va davolash asbob-uskunalari yordamida fizioterapiya, mineral suv bilan davolash, davolash badan-tarbiyasi, 
                        uqalsh, psixoterapiya, igloterapiya, parafin va shifobaxt balchiq bilan davolash, fitobar va parhez ovqatlar sizning 
                        sog'ligingizni tiklash uchun faoliyat ko'rsatadi.
                    </p>
                </div>
            </div>
            <div className="about-info">
                <div className='info-wrap'>
                    <p className='info-name'><span><Icon source={addressIcon} name={'Address'} /></span>Manzil</p>
                    <address>
                        Namangan violoyati,
                        Uchqo'rgon tumani,<br/>
                        Yangiyer qishlog'i,
                        Yog'du mahallasi, 1-uy
                    </address>
                </div>
                <div className='info-wrap'>
                    <p className='info-name'><span><Icon source={telephoneIcon} name={'Phone'} /></span>Telefonlar</p>
                    <a href="tel:+998903008885">+998 (90)300-88-85</a>
                    <a href="tel:+9989435001096">+998 (94) 500-10-96</a>
                </div>
                <div className='info-wrap'>
                    <p className='info-name'><span><Icon source={timeIcon} name={'Time'} /></span>Ish vaqti</p>
                    <p>Dushanba - Juma</p>
                    <p><time>9:00</time>  dan <time>17:00</time>  gacha</p>
                </div>
            </div>
        </Section>
    )
}

export default About
