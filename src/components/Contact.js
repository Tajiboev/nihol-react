import React, { useRef } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
import '../sass/contact.sass'


import Section from './Section';

const Contact = () => {
    const nameRef = useRef()
    const telRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nameRef.current.value, telRef.current.value)
        toast.success('Murojatingiz yuborildi!', {
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
        <Section id="contact" name="contact" title="Biz bilan bog'laning!" subtitle="Murojat, taklif va fikrlar uchun" >
            <div className="contact-grid">
                <div className="form-wrap">
                    <form onSubmit={handleSubmit} spellCheck="false">
                        <label htmlFor="name">Ism va familiyangiz</label>
                        <input type="text" name="name" ref={nameRef} required/>
                        <label htmlFor="phone">Telefon raqamingiz</label>
                        <input type="tel" name="tel" ref={telRef} defaultValue='+998' required/>
                        <label htmlFor="message">Murojat matni</label>
                        <textarea name="message" rows="10" cols="20" ref={telRef} required/>
                        <button className="btn btn-primary" type="submit">Yuborish</button>
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
