import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxReveal = ({
    children,
    className = "",
    direction = "inward", // "inward" (sides to center), "outward" (scale up), "up", "left", "right"
    distance = 100,
    delay = 0,
    duration = 1
}) => {
    const ref = useRef(null);

    useGSAP(() => {
        const element = ref.current;

        let fromVars = { opacity: 0 };

        switch (direction) {
            case "inward":
                // Logic handled in parent if staggering, or default to scale-in
                fromVars = { opacity: 0, scale: 0.9, y: 30 };
                break;
            case "outward":
                fromVars = { opacity: 0, scale: 1.1 };
                break;
            case "up":
                fromVars = { opacity: 0, y: distance };
                break;
            case "left":
                fromVars = { opacity: 0, x: -distance };
                break;
            case "right":
                fromVars = { opacity: 0, x: distance };
                break;
            default:
                fromVars = { opacity: 0, y: 30 };
        }

        gsap.fromTo(element,
            fromVars,
            {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration: duration,
                delay: delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );

    }, { scope: ref });

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};

export default ParallaxReveal;
