import React, { useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import RollingText3D from '../common/RollingText3D';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutIntro = () => {
    const { theme } = useTheme();

    const sectionRef = useRef(null);

    // Track scroll progress of this specific section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"] // Animation runs while section is on screen
    });

    // --- ANIMATION LOGIC ---

    // 1. X-AXIS (Horizontal Movement)
    // -120% = Far off-screen Left
    // 0%    = Dead Center (Natural Position)
    // 120%  = Far off-screen Right
    // Ideally, at scroll progress 0.5 (middle), x is 0%.
    const x = useTransform(scrollYProgress, [0, 1], ["-120%", "120%"]);

    // 2. Y-AXIS (The Arc)
    // Start (0): Low (20%)
    // Middle (0.5): High/Normal (0%) -> This is the peak of the arc
    // End (1): Low (20%)
    const y = useTransform(scrollYProgress, [0, 0.5, 1], ["20%", "0%", "20%"]);

    // 3. ROTATION (Bank)
    // Banks up slightly for takeoff, levels out, banks down for landing
    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 5]);

    return (
        <section ref={sectionRef} id="about" className="py-24 md:py-32 relative bg-white dark:bg-[#09090B] transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <span className="text-[#DA6102] font-bold tracking-widest text-lg mb-4 inline-block uppercase font-['Neue-Haas-Grotesk-Roman']">
                    ABOUT US
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-7xl font-normal text-gray-900 dark:text-gray-100 leading-tight font-['Neue-Haas-Grotesk-Roman'] max-w-9xl mx-auto transition-colors duration-300 relative z-10">
                    <RollingText3D className="text-black dark:text-white transition-colors duration-300">
                        SKYWINKS IS NOT JUST AN AIRLINE,
                    </RollingText3D>
                    <br className="hidden md:block" />
                    <RollingText3D className="text-black dark:text-white transition-colors duration-300" delay={0.2}>
                        WE ARE YOUR PARTNER
                    </RollingText3D>
                    {' '}
                    <RollingText3D className="text-gray-400" delay={0.4}>
                        ON EVERY
                    </RollingText3D>
                    <br className="hidden md:block" />
                    <RollingText3D className="text-gray-400" delay={0.6}>
                        JOURNEY
                    </RollingText3D>

                    {/* Window Badge */}
                    <span className="inline-block mx-4 align-middle transform -translate-y-2">
                        <div className="group w-48 h-20 rounded-full overflow-hidden relative border-2 border-white/20 transition-all duration-500 ease-out hover:border-[#DA6102] hover:shadow-[0_0_15px_rgba(218,97,2,0.5)] cursor-pointer">
                            <img
                                src="/Images/Window.jpg"
                                alt="Window View"
                                className="w-full h-full object-cover transform transition-transform duration-700 ease-out grayscale brightness-75 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                            />
                        </div>
                    </span>

                    <RollingText3D className="text-gray-400" delay={0.8}>
                        TAKING YOU
                    </RollingText3D>
                    <br className="hidden md:block" />
                    <RollingText3D className="text-gray-400" delay={1.0}>
                        HIGHER FURTHER AND CLOSER
                    </RollingText3D>
                    <br className="hidden md:block" />
                    <RollingText3D className="text-gray-400" delay={1.2}>
                        TO YOUR DREAMS
                    </RollingText3D>
                </h2>

                {/* --- PLANE CONTAINER --- */}
                <div className="mt-16 relative w-full h-[400px] flex items-center justify-center">

                    {/* The Motion Div handles the movement */}
                    <motion.div
                        style={{ x, y, rotate }}
                        className="absolute w-full flex items-center justify-center will-change-transform z-30"
                    >
                        <img
                            src={theme === 'dark' ? "/Images/18780.png" : "/Images/18780.jpg"}
                            alt="SKYWinks Modern Passenger Airplane - Side"
                            // increased max-width slightly to make it look impressive in the center
                            className="mx-auto w-full h-[350px] md:h-[500px] object-cover object-bottom max-w-6xl z-20 transition-all duration-500 dark:brightness-75 dark:sepia-[.10]"
                            onError={(e) => { e.target.src = 'https://placehold.co/1200x500/EEEEEE/999999?text=Image+Not+Found'; }}
                        />
                    </motion.div>

                    {/* Shadow - Static in center, or you can animate it too. 
                        Kept static here so the plane flies "over" it. 
                        Added opacity fade so it disappears when plane is far away.
                    */}
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]) }}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-black/10 dark:bg-white/5 blur-xl rounded-[100%] transition-colors duration-300"
                    ></motion.div>
                </div>

            </div>
        </section>
    );
};

export default AboutIntro;