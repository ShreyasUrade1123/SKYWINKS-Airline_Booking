import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GlitchReveal = ({ children, className = "" }) => {
    const textRef = useRef(null);

    useEffect(() => {
        if (!textRef.current) return;

        const glitches = '`¡™£¢∞§¶•ªº–≠åß∂ƒ©˙∆˚¬…æ≈ç√∫˜µ≤≥÷/?░▒▓<>/'.split('');
        const chars = textRef.current.querySelectorAll('.char');

        chars.forEach((char, index) => {
            char.style.setProperty('--char-index', index);
            char.style.setProperty('--count', Math.random() * 5 + 1);
            for (let g = 0; g < 10; g++) {
                char.style.setProperty(
                    `--char-${g}`,
                    `"${glitches[Math.floor(Math.random() * glitches.length)]}"`
                );
            }
        });

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: textRef.current,
                start: "top 85%", // Trigger slightly earlier
                onEnter: () => textRef.current.classList.add('revealed'),
                onLeaveBack: () => textRef.current.classList.remove('revealed'),
                // toggleActions: "play none none reset"
            });
        }, textRef);

        return () => ctx.revert();
    }, [children]);

    // Split text into characters
    const splitText = (text) => {
        if (typeof text !== 'string') return text;
        return text.split('').map((char, index) => (
            <span key={index} className="char" data-char={char}>
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    return (
        <span ref={textRef} className={`glitch-reveal ${className}`}>
            {splitText(children)}
        </span>
    );
};

export default GlitchReveal;
