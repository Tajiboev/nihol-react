import React from 'react'
import ModalImage from "react-modal-image";

const Image = (props) => {
    const { small, large, medium } = props
    return (     
        <ModalImage
            small={small}
            medium={medium}
            large={large}
            alt="Nihol salomatlik sihatgohi"
            showRotate={false}
            hideDownload={true}
        />
    )
}

export default Image
