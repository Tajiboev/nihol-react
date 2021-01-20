import React from 'react'
import Container from './Container';

import '../sass/section.sass'

const Section = (props) => {
    const {className, title, subtitle, id} = props
    return (
        <section id={id} className={className} style={{padding: '2rem 0'}}>
            <Container>
                {title && <h2 className="section-title">{title}</h2> }
                {subtitle && <p className="section-subtitle">{subtitle}</p> }
                <div className={[className, '-wrap'].join('')}>
                    {props.children}
                </div>
            </Container>
        </section>
    )
}

export default Section
