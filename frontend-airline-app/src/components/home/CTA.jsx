import React from 'react';
import { IconArrowRight } from '../icons';

const CTA = () => (
    <section id="cta" className="relative h-[500px] md:h-[650px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
            <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&h=800&fit=crop"
                alt="Airplane wing over snowy mountains"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://placehold.co/1920x800/E0E7FF/333333?text=Image+Not+Found'; }}
            />
            {/* Light Overlay to ensure text readability if needed, but image looks light */}
            <div className="absolute inset-0 bg-black/25"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-24 lg:px-40 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
                <h2 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.05] font-['Neue-Haas-Grotesk-Roman'] uppercase mb-12">
                    FIND SPECIAL PRICES <br />
                    TO FAVORITE <br />
                    DESTINATIONS
                </h2>

                <div>
                    <p className="text-white font-medium text-2xl font-['Neue-Haas-Grotesk-Roman'] mb-2">Special Offers</p>
                    <p className="text-4xl md:text-4xl text-white font-['Neue-Haas-Grotesk-Light']">40% Off Prices</p>
                </div>
            </div>

            {/* Slider Dots (Bottom Left) */}
            <div className="absolute bottom-16 left-6 md:left-24 lg:left-40 flex space-x-4">
                <button className="w-3 h-3 bg-gray-900 rounded-full"></button>
                <button className="w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-600 transition-colors"></button>
                <button className="w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-600 transition-colors"></button>
            </div>

            {/* Large Arrow Button (Bottom Right) */}
            <a
                href="#destinations"
                className="absolute bottom-16 right-6 md:right-24 lg:right-40 w-32 h-32 bg-[#DA6102] rounded-full flex items-center justify-center shadow-2xl hover:bg-indigo-600 transition-all duration-300 hover:scale-105 group"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5M19 5H9M19 5V15" />
                </svg>
            </a>
        </div>
    </section>
);

export default CTA;