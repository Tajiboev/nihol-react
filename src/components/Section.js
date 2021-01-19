import React from 'react'
import Container from './Container';

import '../sass/section.sass'

const Section = (props) => {
    const {name, title, subtitle, id} = props
    return (
        <section id={id} className={name} style={{padding: '2rem 0'}}>
            <Container>
                {title && <h2 className="section-title">{title}</h2> }
                {subtitle && <p className="section-subtitle">{subtitle}</p> }
                <div className={[name, '-wrap'].join('')}>
                    {props.children}
                </div>
            </Container>
        </section>
    )
}

export default Section
