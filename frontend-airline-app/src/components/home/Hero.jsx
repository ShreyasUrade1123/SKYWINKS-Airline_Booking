import React from 'react';
import { IconInstagram, IconFacebook, IconTwitter, IconYoutube, IconScrollDown } from '../icons';

const Hero = () => (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 text-center overflow-hidden bg-white min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center">

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
                    <p className="text-gray-500 font-medium tracking-wide text-xs leading-relaxed font-['Neue-Haas-Grotesk-Roman']">
                        A TEAM DEDICATED TO IMPROVING <br /> AVIATION STANDARDS
                    </p>
                </div>

                {/* Right Slogan - Aligned to End of 'S' */}
                <div className="hidden md:block absolute top-full right-0 mt-4 w-64 text-right">
                    <p className="text-gray-500 font-medium tracking-wide text-xs leading-relaxed font-['Neue-Haas-Grotesk-Roman']">
                        WITH OUR MODERN FLEET AND <br /> WELL-TRAINED CREW
                    </p>
                </div>
            </div>

            {/* Airplane Container */}
            <div className="relative w-full max-w-[1400px] mx-auto">
                <div className="relative z-20 -mt-4 md:-mt-24"> {/* Adjusted negative margin to pull plane up closer to text */}
                    <img
                        src="/Images/18780.jpg"
                        alt="SKYWinks Modern Passenger Airplane - Front"
                        className="mx-auto w-full h-[350px] md:h-[500px] object-cover object-top max-w-6xl z-20"
                        onError={(e) => { e.target.src = 'https://placehold.co/1200x500/EEEEEE/999999?text=Image+Not+Found'; }}
                    />
                    {/* Reflection/Shadow */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-12 bg-black/10 blur-2xl rounded-[100%]"></div>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="container mx-auto px-6 md:px-24 lg:px-40 relative z-30 mt-auto">
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center pb-8">
                {/* Bottom Left: Visual Rep Info */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-sm">
                        %
                    </div>
                    <p className="text-left text-gray-400 text-xs font-medium max-w-[150px] leading-tight font-['Neue-Haas-Grotesk-Roman']">
                        Provides a visual representation of <br /> destinations, attractions, and activities.
                    </p>
                </div>

                {/* Center: Scroll Button */}
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-40">
                    <a href="#about" className="w-20 h-20 bg-[#DA6102] rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-indigo-600 transition-all duration-300 hover:scale-105">
                        <IconScrollDown className="w-8 h-8 animate-bounce" />
                    </a>
                </div>

                {/* Bottom Right: Social Icons */}
                <div className="flex gap-4 md:gap-6 mx-auto md:mx-0 mb-12 md:mb-0">
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#DA6102] hover:text-white transition-all duration-300">
                        <IconInstagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#DA6102] hover:text-white transition-all duration-300">
                        <IconFacebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#DA6102] hover:text-white transition-all duration-300">
                        <IconTwitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#DA6102] hover:text-white transition-all duration-300">
                        <IconYoutube className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;