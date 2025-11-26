import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrambleText = ({
    children,
    className = "",
    scrambleSpeed = 50,
    revealSpeed = 0.5,
    triggerStart = "top 80%",
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*"
}) => {
    const textRef = useRef(null);
    const originalText = children;

    useGSAP(() => {
        const element = textRef.current;
        if (!element) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: triggerStart,
                toggleActions: "play none none reverse"
            }
        });

        const length = originalText.length;
        const scrambleObj = { value: 0 };

        tl.to(scrambleObj, {
            duration: revealSpeed,
            value: length,
            ease: "none",
            onUpdate: () => {
                const progress = Math.floor(scrambleObj.value);
                let result = "";

                for (let i = 0; i < length; i++) {
                    if (i < progress) {
                        result += originalText[i];
                    } else {
                        result += chars[Math.floor(Math.random() * chars.length)];
                    }
                }

                element.innerText = result;
            }
        });

    }, [originalText]);

    return (
        <span ref={textRef} className={`inline-block ${className}`}>
            {originalText}
        </span>
    );
};

export default ScrambleText;
