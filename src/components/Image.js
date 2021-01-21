import React from 'react'
import ModalImage from "react-modal-image";

const Image = (props) => {
    const { small, large, medium, alt } = props
    return (     
        <ModalImage
            small={small}
            medium={medium}
            large={large}
            alt={alt}
            showRotate={false}
            hideDownload={true}
        />
    )
}

export default Image
