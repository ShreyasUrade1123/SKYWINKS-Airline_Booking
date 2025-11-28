import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { IconInstagram, IconFacebook, IconTwitter, IconYoutube, IconScrollDown, IconPlay } from '../icons';

const Hero = () => {
    const { theme } = useTheme();

    return (
        <section className="relative pt-32 pb- md:pt-40 md:pb-0 text-center overflow-hidden bg-white dark:bg-[#09090B] flex flex-col justify-center transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 flex-grow flex flex-col justify-center">

                {/* 1. WRAPPER DIV: 
                    - 'w-fit mx-auto': Makes box hug the text width exactly.
                    - 'relative': Allows absolute positioning inside it.
                    - 'z-30': Forces all text to be ABOVE the airplane image.
                */}
                <div className="relative w-fit mx-auto z-30 mb-8 md:mb-12">

                    {/* Main Title */}
                    <h1 className="text-[12vw] md:text-[14vw] font-extrabold leading-[0.8] select-none font-['Fluro'] tracking-tighter text-[#DA6102]">
                        SKYWINKS
                    </h1>

                    {/* Left Slogan - Aligned to Start of 'S' */}
                    <div className="hidden md:block absolute top-full left-0 mt-4 w-64 text-left">
                        <p className="text-gray-500 dark:text-gray-400 font-medium tracking-wide text-xs leading-relaxed font-['Neue-Haas-Grotesk-Roman'] transition-colors duration-300">
                            A TEAM DEDICATED TO IMPROVING <br /> AVIATION STANDARDS
                        </p>
                    </div>

                    {/* Right Slogan - Aligned to End of 'S' */}
                    <div className="hidden md:block absolute top-full right-0 mt-4 w-64 text-right">
                        <p className="text-gray-500 dark:text-gray-400 font-medium tracking-wide text-xs leading-relaxed font-['Neue-Haas-Grotesk-Roman'] transition-colors duration-300">
                            WITH OUR MODERN FLEET AND <br /> WELL-TRAINED CREW
                        </p>
                    </div>
                </div>

                {/* Airplane Container */}
                <div className="relative w-full max-w-[1400px] mx-auto">
                    <div className="relative z-20 -mt-4 md:-mt-24"> {/* Adjusted negative margin to pull plane up closer to text */}
                        <img
                            src={theme === 'dark' ? "/Images/18780.png" : "/Images/18780.jpg"}
                            alt="SKYWinks Modern Passenger Airplane - Front"
                            className="mx-auto w-full h-[350px] md:h-[500px] object-cover object-top max-w-6xl z-20 transition-all duration-500 dark:brightness-75"
                            onError={(e) => { e.target.src = 'https://placehold.co/1200x500/EEEEEE/999999?text=Image+Not+Found'; }}
                        />
                        {/* Reflection/Shadow */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-12 bg-black/10 dark:bg-white/10 blur-2xl rounded-[100%] transition-colors duration-300"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;