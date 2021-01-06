import React, { useEffect, useRef, useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor';
export default function Video({ src }) {
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [addControlls, setAddControlls] = useState(false);
    useEffect(() => {
        if (isVisible) {
            videoRef.current.play();
        } else {
            if (videoRef.current.play) {
                videoRef.current.pause();
            }
        }
    }, [isVisible]);

    return (
        <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
            <video ref={videoRef} controls={addControlls} loop onMouseOver={e => setAddControlls(c => true)}>
                <source src={src} type='video/mp4' />
            </video>
        </VisibilitySensor>
    );
}
