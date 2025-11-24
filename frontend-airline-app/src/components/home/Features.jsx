import React from 'react';
import { IconCheck } from '../icons';

const Features = () => (
    <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative">
                <img
                    src="/Images/Flight-up.jpg"
                    alt="Top-down view of SKYWinks airplane"
                    className="mx-auto w-full 4xl object-contain transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = 'https://placehold.co/600x600/EEEEEE/999999?text=Image+Not+Found'; }}
                />
            </div>

            {/* Text Column */}
            <div className="pl-0 md:pl-12">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.2] font-['Neue-Haas-Grotesk-Roman'] text-gray-900 mb-6">
                    MORE FUN AND <br /> EFFICIENT WITH <br /> SKYWINKS
                </h2>

                <p className="text-gray-500 text-lg md:text-[25px] leading-[1.4] font-['Neue-Haas-Grotesk-Light'] mb-7 max-w-lg">
                    By using our flights, you will experience unmatched travel speed and comfort, while having easy access to destinations around the world.
                </p>

                <ul className="space-y-6 md:text-[25px] font-['Neue-Haas-Grotesk-Light'] mb-9">
                    <li className="flex items-center gap-4 text-gray-600 text-xl">
                        <span className="bg-[#DA6102] text-white rounded-full p-1 w-6 h-6 flex items-center justify-center flex-shrink-0 shadow-md">
                            <IconCheck className="w-3.5 h-3.5" />
                        </span>
                        Skywinks provides great travel flexibility
                    </li>
                    <li className="flex items-center gap-4 text-gray-600 text-xl">
                        <span className="bg-[#DA6102] text-white rounded-full p-1 w-6 h-6 flex items-center justify-center flex-shrink-0 shadow-md">
                            <IconCheck className="w-3.5 h-3.5" />
                        </span>
                        Comfortable facilities and services
                    </li>
                    <li className="flex items-center gap-4 text-gray-600 text-xl">
                        <span className="bg-[#DA6102] text-white rounded-full p-1 w-6 h-6 flex items-center justify-center flex-shrink-0 shadow-md">
                            <IconCheck className="w-3.5 h-3.5" />
                        </span>
                        Friendly and kind flight attendants
                    </li>
                </ul>

                <a href="#read-more" className="inline-block bg-[#DA6102] text-white px-10 py-4 rounded-full font-semibold text-sm tracking-wide shadow-lg hover:bg-[#D16200] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    Read More
                </a>
            </div>
        </div>
    </section>
);

export default Features;