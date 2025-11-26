import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const RollingText3D = ({ children, className = "", delay = 0, stagger = 0.05 }) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const words = containerRef.current.querySelectorAll('.word');

        gsap.fromTo(words,
            {
                opacity: 0,
                scale: 0,
                y: 80,
                rotationX: 180,
                transformOrigin: "0% 50% -50"
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                rotationX: 0,
                duration: 0.8,
                ease: "back",
                stagger: stagger,
                delay: delay,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%", // Trigger when top of element hits 80% of viewport height
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, { scope: containerRef });

    // Split text into words
    const words = children.split(' ');

    return (
        <span ref={containerRef} className={`inline-block ${className} perspective-[400px]`}>
            {words.map((word, index) => (
                <span key={index} className="word inline-block mr-[0.25em] transform-style-3d">
                    {word}
                </span>
            ))}
        </span>
    );
};

export default RollingText3D;
