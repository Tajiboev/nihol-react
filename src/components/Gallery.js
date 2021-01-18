import React from 'react'
import Section from './Section';
import '../sass/gallery.sass'



import photo_1 from '../images/nihol-1.webp';
import photo_2 from '../images/nihol-2.webp';
import photo_3 from '../images/nihol-3.webp';
import photo_4 from '../images/nihol-4.webp';
import photo_5 from '../images/nihol-5.webp';
import photo_6 from '../images/nihol-6.webp';
import photo_7 from '../images/nihol-7.webp';
import photo_8 from '../images/nihol-8.webp';
import photo_9 from '../images/nihol-9.webp';
import photo_10 from '../images/nihol-10.webp';
import photo_11 from '../images/nihol-11.webp';
import photo_12 from '../images/nihol-12.webp';

const Gallery = () => {
    const [ visible, setVisible ] = React.useState(false)
    return (
        <Section name="gallery" title="Foto gallereya" subtitle="subtitle">
            <div className="image-wrap">
                <img src={photo_1} alt="Nihol salomatlik sihatgohi"/>
            </div>
            <div className="image-wrap">
                <img src={photo_1} alt="Nihol salomatlik sihatgohi"/>
            </div>
            <div className="image-wrap">
                <img src={photo_1} alt="Nihol salomatlik sihatgohi"/>
            </div>
            <div className="image-wrap">
                <img src={photo_1} alt="Nihol salomatlik sihatgohi"/>
            </div>
        </Section>
    )
}

export default Gallery
