import React from 'react';
import { IconArrowRight } from '../icons';

const CTA = () => (
    <section id="cta" className="relative h-[500px] md:h-[650px] overflow-hidden group">
        {/* Background Image */}
        <div className="absolute inset-0">
            <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&h=800&fit=crop"
                alt="Airplane wing over snowy mountains"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                onError={(e) => { e.target.src = 'https://placehold.co/1920x800/E0E7FF/333333?text=Image+Not+Found'; }}
            />
            {/* Technical Overlay */}
            <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-colors duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12 h-full flex flex-col justify-center">
            <div className="max-w-3xl relative">
                {/* Decorative Border Line */}
                <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#DA6102] to-transparent opacity-50 hidden md:block"></div>

                <div className="flex items-center gap-2 mb-6">
                    <span className="w-2 h-2 bg-[#DA6102]"></span>
                    <span className="text-[#DA6102] font-mono text-xs tracking-[0.2em] uppercase">Limited Time Offer</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-bold text-white leading-[0.9] font-['Neue-Haas-Grotesk-Roman'] uppercase mb-20 tracking-tight">
                    FIND SPECIAL PRICES <br />
                    TO FAVORITE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">DESTINATIONS</span>
                </h2>

                <div className="bg-black/30 backdrop-blur-sm border border-white/10 px-6 py-4 md:py-4 inline-block relative">
                    {/* L-Corners */}
                    <span className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#DA6102]"></span>
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#DA6102]"></span>

                    <p className="text-white font-medium text-0.5xl font-['Neue-Haas-Grotesk-Roman'] mb-1 uppercase tracking-wide">Special Offers</p>
                    <p className="text-4xl md:text-2xl text-[#DA6102] font-['Neue-Haas-Grotesk-Bold']">40% OFF PRICES</p>
                </div>
            </div>

            {/* Slider Dots (Bottom Left) */}
            <div className="absolute bottom-12 left-4 md:left-8 lg:left-12 flex space-x-3">
                <button className="w-12 h-1 bg-[#DA6102] transition-all duration-300"></button>
                <button className="w-6 h-1 bg-white/30 hover:bg-white transition-all duration-300"></button>
                <button className="w-6 h-1 bg-white/30 hover:bg-white transition-all duration-300"></button>
            </div>

            {/* Large Arrow Button (Bottom Right) */}
            <a
                href="#destinations"
                className="absolute bottom-12 right-4 md:right-8 lg:right-12 w-24 h-24 md:w-32 md:h-32 bg-[#DA6102] flex items-center justify-center shadow-2xl hover:bg-[#b54e00] transition-all duration-300 group/btn overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>

                {/* L-Corners for Button */}
                <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/50"></span>
                <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/50"></span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 md:h-12 md:w-12 text-white transform group-hover/btn:-rotate-45 transition-transform duration-300 relative z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
        </div>
    </section>
);

export default CTA;