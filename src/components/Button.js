import React from 'react'
import '../sass/button.sass'

const Button = (props) => {
    const scroller = (id) => {
        const elmntToView = document.getElementById(id);
        elmntToView.scrollIntoView(); 
    }
    const {variant, scrollto} = props
    return (
        <button className={['btn btn-', variant].join('')} onClick={()=> scroller(scrollto)}>
            {props.children}
        </button>
    )
}

export default Button
