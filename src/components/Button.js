import React from 'react'
import '../sass/button.sass'

const Button = (props) => {
    const {variant} = props
    return (
        <button className={['btn btn-', variant].join('')}>
            {props.children}
        </button>
    )
}

export default Button
