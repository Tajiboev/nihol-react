import React from 'react'
import '../sass/container.sass'

const Container = (props) => {
    return (
        <div className='container'>
            {props.children}
        </div>
    )
}

export default Container
