import React, { useState, useEffect } from 'react';

const ScrollImage = ({image, width, height, Y}:{image: string, width: number, height: number, Y: number}) => {
    const [scrollY, setScrollY] = useState(Y);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the listener when the component is unmounted.
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <img
            src={image}
            alt="Description"
            width={width}
            height={height}
            className="absolute -bottom-16 lg:-right-10 xl:-right-6 -rotate-12 hidden lg:block"
            style={{
                transform: `translateY(-${scrollY}px)`, // Move the image up by the amount scrolled
                transition: 'transform 0.3s ease'      // Smooth out the movement
            }}
        />
    );
};

export default ScrollImage;