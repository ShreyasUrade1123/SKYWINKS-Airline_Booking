import React, { useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { CheckSquare, ChevronRight, Terminal } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const { theme } = useTheme();
    const containerRef = useRef(null);
    const leftColRef = useRef(null);
    const rightColRef = useRef(null);
    const borderRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // --- Initial States ---
            // Left column starts shifted RIGHT (towards center) and hidden
            gsap.set(leftColRef.current, {
                autoAlpha: 0,
                xPercent: 50,
                scale: 0.9
            });

            // Right column starts shifted LEFT (towards center) and hidden
            gsap.set(rightColRef.current, {
                autoAlpha: 0,
                xPercent: -50,
                scale: 0.9
            });

            // Timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center", // Trigger when top of section hits center of viewport
                    end: "bottom bottom",
                    scrub: 1, // Smooth scrubbing
                }
            });

            // Step 1: Reveal and Expand (Center Explosion)
            tl.to([leftColRef.current, rightColRef.current], {
                autoAlpha: 1,
                duration: 0.5,
                ease: "power1.in"
            })
                .to(leftColRef.current, {
                    xPercent: 0,
                    scale: 1,
                    duration: 2,
                    ease: "power2.out"
                }, "<")
                .to(rightColRef.current, {
                    xPercent: 0,
                    scale: 1,
                    duration: 2,
                    ease: "power2.out"
                }, "<");

            // Step 2: Draw the Technical Border on the Image
            if (borderRef.current) {
                tl.fromTo(borderRef.current,
                    { clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" },
                    { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1.5, ease: "none" },
                    "-=1.5"
                );
            }

            // Step 3: Stagger the text content on the right
            const textElements = rightColRef.current.querySelectorAll(".animate-text");
            if (textElements.length > 0) {
                tl.fromTo(textElements,
                    { x: 20, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power2.out" },
                    "-=1.0"
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-white dark:bg-[#09090B] text-white overflow-hidden font-sans selection:bg-orange-500 selection:text-black">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Column: Image & Technical Box */}
                <div ref={leftColRef} className="relative opacity-0">
                    {/* Outer boundary for alignment */}
                    <div className="relative p-2">

                        {/* Floating Tech Labels (Outside the main box) */}
                        <div className="absolute -top-6 left-0 text-[10px] font-mono text-gray-600 tracking-widest uppercase">
                            NET: CLOUD_SCALE
                        </div>
                        <div className="absolute -top-6 right-0 text-[10px] font-mono text-gray-600 tracking-widest uppercase text-right">
                            LANG: POLYGLOT
                        </div>

                        {/* Main Box Container */}
                        <div className="border border-gray-800 bg-white dark:bg-[#09090B] p-8 md:p-12 relative">

                            {/* Animated Drawing Border */}
                            <div
                                ref={borderRef}
                                className="absolute inset-0 border-2 border-orange-600 z-20 pointer-events-none"
                            ></div>

                            {/* Inner Image Frame */}
                            <div className="relative aspect-square border border-gray-800/50 bg-white dark:bg-[#09090B] flex items-center justify-center overflow-hidden">
                                {/* Glow Effect behind plane */}
                                <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full transform scale-75"></div>

                                <img
                                    src={theme === 'light' ? '/Images/Flight-up.jpg' : '/Images/Flight-up.png'}
                                    alt="Top-down view of airplane"
                                    className="relative z-10 w-[85%] h-auto object-contain "
                                    onError={(e) => {
                                        e.target.src = 'https://placehold.co/600x600/000000/333333?text=Plane+Image';
                                    }}
                                />
                            </div>

                            {/* Bottom Text Area */}
                            <div className="mt-8">
                                <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white tracking-widest font-sans uppercase">
                                    SKYWINKS_AERO
                                </h3>
                                <div className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase mt-2">
                                    SYS: GLOBAL_TRAVEL
                                </div>
                            </div>

                            {/* Decorative Corner Lines (UI Accents) */}
                            <div className="absolute top-0 left-0 w-16 h-[1px] bg-gray-700"></div>
                            <div className="absolute top-0 left-0 w-[1px] h-16 bg-gray-700"></div>
                            <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-gray-700"></div>
                            <div className="absolute bottom-0 right-0 w-[1px] h-16 bg-gray-700"></div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Text Content */}
                <div ref={rightColRef} className="pl-0 lg:pl-12 flex flex-col justify-center h-full opacity-0">
                    {/* Small Label */}
                    <div className="mb-6 animate-text">
                        <span className="text-[#DA6102] font-mono text-[10px] tracking-[0.2em] uppercase border-l-2 border-orange-600 pl-3">
                            WHY_CHOOSE_US
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h2 className="animate-text text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-black dark:text-white mb-8 uppercase">
                        MORE FUN AND <br />
                        <span className="text-black dark:text-white">EFFICIENT WITH</span> <br />
                        <span className="text-black dark:text-white">SKYWINKS</span>
                    </h2>

                    {/* Description */}
                    <p className="animate-text text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-lg mb-12 font-light">
                        By using our flights, you will experience unmatched travel
                        speed and comfort, while having easy access to destinations
                        around the world.
                    </p>

                    {/* Feature List */}
                    <div className="w-full mb-12 border-t border-gray-800 animate-text">
                        {/* Item 1: Checkbox Style */}
                        <FeatureItem
                            icon={<span className="font-mono text-gray-500 text-sm dark:text-white">&gt;_</span>}
                            text="Skywinks provides great travel flexibility"
                            code="MOD: FLEX_V1"

                        />
                        {/* Item 2: Terminal Style */}
                        <FeatureItem
                            icon={<span className="font-mono text-gray-500 text-sm dark:text-white">&gt;_</span>}
                            text="Comfortable facilities and services"
                            code="MOD: COMFORT_V2"
                        />
                        {/* Item 3: Terminal Style */}
                        <FeatureItem
                            icon={<span className="font-mono text-gray-500 text-sm dark:text-white">&gt;_</span>}
                            text="Friendly and kind flight attendants"
                            code="MOD: CREW_CORE"
                        />
                    </div>

                    {/* Action Button */}
                    <button className="animate-text group relative w-full bg-[#DA6102] hover:bg-[#ff7b1a] transition-all duration-300 h-14 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-between px-6">
                            <span className="font-mono text-black font-bold tracking-widest text-sm flex items-center gap-2">
                                <span className="opacity-60">&gt;_</span> READ MORE
                            </span>
                        </div>
                        {/* Hover Overlay Effect */}
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                    </button>
                </div>

            </div>
        </section>
    );
};

// Sub-component for List Items
const FeatureItem = ({ icon, text, code, active = false }) => (
    <div className="flex items-center justify-between py-5 border-b border-gray-800 group hover:bg-white/5 transition-colors duration-200 px-2">
        <div className="flex items-center gap-6">
            <div className={`flex items-center justify-center w-6 ${active ? 'text-black dark:text-white' : 'text-gray-500'}`}>
                {icon}
            </div>
            <span className={`text-base tracking-wide ${active ? 'text-black dark:text-white font-medium' : 'text-black dark:text-gray-300'}`}>
                {text}
            </span>
        </div>
        <span className="hidden md:block text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            {code}
        </span>
    </div>
);

export default Features;
