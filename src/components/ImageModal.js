import React from 'react'
import '../sass/imageModal.sass'

const ImageModal = (props) => {
    const { src } = props
    return (
        <div className='image-modal'>
            <img src={ src } alt="Nihol Salomatlik Sihatgohi"/>
        </div>
    )
}

export default ImageModal
