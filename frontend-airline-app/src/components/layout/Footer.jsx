import React from 'react';
import { IconInstagram, IconFacebook, IconTwitter, IconYoutube } from '../icons';

const Footer = () => (
    <footer className="bg-[#09090B] text-white border-t border-[#56504D] pt-16 pb-0 relative overflow-hidden font-sans">
        <div className="container mx-auto px-6  relative z-20">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                {/* Left: Logo & Slogan */}
                <div className="max-w-lg mt-4">
                    <p className="text-4xl md:text-3xl tracking-tight font-medium leading-[1.1] text-white uppercase font-['Molde-Expanded-Regular']">
                        A TEAM <br />
                        DEDICATED TO <br />
                        IMPROVING <br />
                        AVIATION <br />
                        STANDARDS
                    </p>
                </div>

                {/* Right: Links & Social */}
                <div className="flex flex-col items-end gap-6 mt-8 md:mt-4">
                    <div className="flex flex-wrap gap-8 text-[13px] font-medium tracking-widest text-gray-300 uppercase font-['Neue-Haas-Grotesk-Roman']">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Term & Condition</a>
                        <a href="#" className="hover:text-white transition-colors">About Us</a>
                        <a href="#" className="hover:text-white transition-colors">FAQ</a>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-gray-800 transition-colors text-white border border-gray-800">
                            <IconInstagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-gray-800 transition-colors text-white border border-gray-800">
                            <IconFacebook className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-gray-800 transition-colors text-white border border-gray-800">
                            <IconTwitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-gray-800 transition-colors text-white border border-gray-800">
                            <IconYoutube className="w-4 h-4" />
                        </a>
                    </div>

                    <p className="text-gray-500 text-[11px] mt-2 font-['Helvetica-Neue-Medium']">© 2025 SKYWINKS INC. All Rights Reserved.</p>
                </div>
            </div>
        </div>

        {/* Central Airplane Image */}
        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl z-10 pointer-events-none ">
            <img
                src="/Images/airplane-bunker.jpg"
                alt="Skywinks Airplane"
                className="w-full h-[500px] object-cover object-center opacity-80 mix-blend-screen"
            />
            {/* Gradient to fade bottom of image */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>

        {/* Bottom Huge Text */}
        <div className="w-full flex justify-center relative z-20 mt-12 md:mt-0">
            <h1 className="text-[15vw] font-bold text-white tracking-tighter leading-none translate-y-[15%] select-none font-['fluro']">
                SKYWINKS
            </h1>
        </div>
    </footer>
);

export default Footer;