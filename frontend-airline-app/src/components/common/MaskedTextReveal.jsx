import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MaskedTextReveal = ({
    children,
    className = "",
    delay = 0,
    duration = 1,
    stagger = 0.1
}) => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const element = textRef.current;
        if (!element) return;

        gsap.fromTo(element,
            { y: "100%" },
            {
                y: "0%",
                duration: duration,
                delay: delay,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={`overflow-hidden ${className}`}>
            <div ref={textRef} className="inline-block">
                {children}
            </div>
        </div>
    );
};

export default MaskedTextReveal;
