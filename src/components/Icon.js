import React from 'react'

const Icon = (props) => {
    const { source, name } = props
    return (
        <img src={source} alt={name} style={{width: '40px'}} className='icon' />
    )
}

export default Icon
