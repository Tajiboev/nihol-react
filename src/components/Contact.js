import React, { useRef } from 'react'
import { useLocale } from '../contexts/LocaleContext'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
import '../sass/contact.sass'


import Section from './Section';

const Contact = () => {
    const { locale, Translation} = useLocale()
    const { contact } = Translation[locale]

    const nameRef = useRef()
    const telRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nameRef.current.value, telRef.current.value)
        toast.success(contact.success, {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        e.target.reset()
    }

    return (
        <Section id="contact" className="contact" title={contact.title} subtitle={contact.subtitle} >
            <div className="contact-grid">
                <div className="form-wrap">
                    <form onSubmit={handleSubmit} spellCheck="false">
                        <label htmlFor="name">{contact.input_name}</label>
                        <input type="text" name="name" ref={nameRef} required/>
                        <label htmlFor="phone">{contact.input_tel}</label>
                        <input type="tel" name="tel" ref={telRef} defaultValue='+998' required/>
                        <label htmlFor="message">{contact.input_text}</label>
                        <textarea name="message" rows="10" cols="20" ref={telRef} required/>
                        <button className="btn btn-primary" type="submit">{contact.submit}</button>
                    </form>
                </div>
                <div className="map-wrap">
                    <div className="map"></div>
                </div>
            </div>
        </Section>
    )
}

export default Contact
