import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechReveal = ({ children, className = "", delay = 0 }) => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    // Border refs
    const topBorderRef = useRef(null);
    const rightBorderRef = useRef(null);
    const bottomBorderRef = useRef(null);
    const leftBorderRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        // Initial state
        gsap.set([topBorderRef.current, bottomBorderRef.current], { scaleX: 0 });
        gsap.set([leftBorderRef.current, rightBorderRef.current], { scaleY: 0 });
        gsap.set(contentRef.current, { opacity: 0, y: 20 });

        // Animation sequence
        tl.to(topBorderRef.current, { scaleX: 1, duration: 0.4, ease: "power2.out" })
            .to(rightBorderRef.current, { scaleY: 1, duration: 0.4, ease: "power2.out" }, "-=0.2")
            .to(bottomBorderRef.current, { scaleX: 1, duration: 0.4, ease: "power2.out" }, "-=0.2")
            .to(leftBorderRef.current, { scaleY: 1, duration: 0.4, ease: "power2.out" }, "-=0.2")
            .to(contentRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2");

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={`relative p-1 ${className}`}>
            {/* Borders */}
            <div ref={topBorderRef} className="absolute top-0 left-0 w-full h-[1px] bg-[#DA6102] origin-left z-10"></div>
            <div ref={rightBorderRef} className="absolute top-0 right-0 w-[1px] h-full bg-[#DA6102] origin-top z-10"></div>
            <div ref={bottomBorderRef} className="absolute bottom-0 right-0 w-full h-[1px] bg-[#DA6102] origin-right z-10"></div>
            <div ref={leftBorderRef} className="absolute bottom-0 left-0 w-[1px] h-full bg-[#DA6102] origin-bottom z-10"></div>

            {/* Content */}
            <div ref={contentRef} className="relative z-0 h-full">
                {children}
            </div>
        </div>
    );
};

export default TechReveal;
