import React from 'react'
import '../sass/backdrop.sass'

const Backdrop = (props) => {
    const { setModalOpen, setShowBackdrop } = props
    function closeModal(){
        setModalOpen(false)
        setShowBackdrop(false)
    }
    return (
        <div className='backdrop' onClick={closeModal}></div>
    )
}

export default Backdrop
