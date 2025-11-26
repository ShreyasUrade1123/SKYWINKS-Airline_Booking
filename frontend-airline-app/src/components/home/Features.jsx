import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { IconCheck } from '../icons';
import Button from '../common/Button';

const Features = () => {
    const { theme } = useTheme();

    return (
        <section className="py-24 bg-white dark:bg-[#09090B] overflow-hidden transition-colors duration-300 relative">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 grid md:grid-cols-2 gap-16 items-center relative z-10">

                {/* Image Column */}
                <div className="relative group">
                    {/* L-Corners for Image Container */}
                    <span className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#DA6102] transition-all duration-300 z-20"></span>
                    <span className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#DA6102] transition-all duration-300 z-20"></span>
                    <span className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#DA6102] transition-all duration-300 z-20"></span>
                    <span className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#DA6102] transition-all duration-300 z-20"></span>

                    <div className="relative overflow-hidden border border-gray-200 dark:border-[#242424]">
                        <img
                            src={theme === 'dark' ? "/Images/Flight-up.png" : "/Images/Flight-up.jpg"}
                            alt="Top-down view of SKYWinks airplane"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                            onError={(e) => { e.target.src = 'https://placehold.co/600x600/EEEEEE/999999?text=Image+Not+Found'; }}
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>
                </div>

                {/* Text Column */}
                <div className="pl-0 md:pl-8">
                    <span className="text-[#DA6102] font-bold tracking-widest text-sm mb-4 inline-block uppercase font-['Neue-Haas-Grotesk-Roman']">
                        WHY CHOOSE US
                    </span>

                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] font-['Neue-Haas-Grotesk-Bold'] text-gray-900 dark:text-white mb-8 transition-colors duration-300 uppercase">
                        MORE FUN AND <br /> EFFICIENT WITH SKYWINKS
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed font-['Neue-Haas-Grotesk-Roman'] mb-10 max-w-lg transition-colors duration-300">
                        By using our flights, you will experience unmatched travel speed and comfort, while having easy access to destinations around the world.
                    </p>

                    <ul className="space-y-6 mb-12">
                        {[
                            "Skywinks provides great travel flexibility",
                            "Comfortable facilities and services",
                            "Friendly and kind flight attendants"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-4 text-gray-700 dark:text-gray-300 text-lg font-['Neue-Haas-Grotesk-Roman'] transition-colors duration-300 group">
                                <span className="mt-1 w-5 h-5 bg-[#DA6102] flex items-center justify-center flex-shrink-0 text-white shadow-sm transform group-hover:rotate-45 transition-transform duration-300">
                                    <IconCheck className="w-3 h-3 transform group-hover:-rotate-45 transition-transform duration-300" />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Button
                        variant="primary"
                        withCorners={true}
                        onClick={() => window.location.href = '#read-more'}
                        className="w-auto px-10"
                    >
                        Read More
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Features;