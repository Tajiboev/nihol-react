import React, { useEffect } from 'react'
import Plyr from 'plyr';
import '../sass/video.sass';

const Video = (props) => {
    const {poster, sources} = props
    useEffect(() => {
        const player = new Plyr('#player')
    }, []);

    
    return (
        <video id="player" playsinline controls data-poster={poster}>
            {(sources.map(source => {
                return (
                    <source key={source.path} src={source.path} type={source.type} />
                )
                }))
            }
        </video>
    )
}

export default Video
