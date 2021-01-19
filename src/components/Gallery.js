import React from 'react'

import Section from './Section';
import Image from './Image';
import '../sass/gallery.sass'

// thumbnail
import photo_1_s from '../images/small/nihol-1-s.webp'
import photo_2_s from '../images/small/nihol-2-s.webp'
import photo_3_s from '../images/small/nihol-3-s.webp'
import photo_4_s from '../images/small/nihol-4-s.webp'
import photo_5_s from '../images/small/nihol-5-s.webp'
import photo_6_s from '../images/small/nihol-6-s.webp'
import photo_7_s from '../images/small/nihol-7-s.webp'
import photo_8_s from '../images/small/nihol-8-s.webp'
import photo_9_s from '../images/small/nihol-9-s.webp'
import photo_10_s from '../images/small/nihol-10-s.webp'
import photo_11_s from '../images/small/nihol-11-s.webp'
import photo_12_s from '../images/small/nihol-12-s.webp'

// medium
import photo_1_m from '../images/medium/nihol-1-m.webp'
import photo_2_m from '../images/medium/nihol-2-m.webp'
import photo_3_m from '../images/medium/nihol-3-m.webp'
import photo_4_m from '../images/medium/nihol-4-m.webp'
import photo_5_m from '../images/medium/nihol-5-m.webp'
import photo_6_m from '../images/medium/nihol-6-m.webp'
import photo_7_m from '../images/medium/nihol-7-m.webp'
import photo_8_m from '../images/medium/nihol-8-m.webp'
import photo_9_m from '../images/medium/nihol-9-m.webp'
import photo_10_m from '../images/medium/nihol-10-m.webp'
import photo_11_m from '../images/medium/nihol-11-m.webp'
import photo_12_m from '../images/medium/nihol-12-m.webp'

// large image
import photo_1 from '../images/large/nihol-1.webp'
import photo_2 from '../images/large/nihol-2.webp'
import photo_3 from '../images/large/nihol-3.webp'
import photo_4 from '../images/large/nihol-4.webp'
import photo_5 from '../images/large/nihol-5.webp'
import photo_6 from '../images/large/nihol-6.webp'
import photo_7 from '../images/large/nihol-7.webp'
import photo_8 from '../images/large/nihol-8.webp'
import photo_9 from '../images/large/nihol-9.webp'
import photo_10 from '../images/large/nihol-10.webp'
import photo_11 from '../images/large/nihol-11.webp'
import photo_12 from '../images/large/nihol-12.webp'

const Gallery = () => {
    const largeArray = [photo_1, photo_2, photo_3, photo_4, photo_5, photo_6, photo_7, photo_8, photo_9, photo_10, photo_11, photo_12]
    const mediumArray = [photo_1_m, photo_2_m, photo_3_m, photo_4_m, photo_5_m, photo_6_m, photo_7_m, photo_8_m, photo_9_m, photo_10_m, photo_11_m, photo_12_m]
    const smallArray = [photo_1_s, photo_2_s, photo_3_s, photo_4_s, photo_5_s, photo_6_s, photo_7_s, photo_8_s, photo_9_s, photo_10_s, photo_11_s, photo_12_s]


    return (
        <Section id="gallery" name="gallery" title="Foto gallereya" subtitle="Sihatgohimizdan fotolavxalar">
            {
                largeArray.map((image, index) => {
                    return (
                        <div className="image-wrap" key={image.substring(image.length - 10)}>
                            <Image small={smallArray[index]} medium={mediumArray[index]} large={image}/>
                        </div>
                    )
                })
            }
        </Section>
    )
}

export default Gallery
