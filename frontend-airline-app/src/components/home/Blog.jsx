import React from 'react';
import { IconArrowRight } from '../icons';

const Blog = () => (
    <section id="blog" className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-24 lg:px-40 text-center ">
            <span className="text-[#DA6102] font-bold tracking-widest text-sm mb-4 inline-block uppercase font-['Neue-Haas-Grotesk-Roman']">OUR BLOG</span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-16 font-['Neue-Haas-Grotesk-Roman'] uppercase leading-tight">
                WHAT YOU DEFINITELY WANT <br /> TO KNOW
            </h2>

            <div className="grid md:grid-cols-2 gap-8 relative max-w-7xl mx-auto ">
                {/* Blog Card 1 */}
                <div className="group cursor-pointer">
                    <div className="bg-gray-100 rounded-[32px] overflow-hidden mb-6 relative h-[750px]">
                        <img
                            src="/Images/Mountain.jpg"
                            alt="Winter mountains"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => { e.target.src = 'https://placehold.co/600x600/E0E7FF/333333?text=Image+Not+Found'; }}
                        />
                    </div>
                    <div className="text-left px-2">
                        <h3 className="text-2xl font-bold font-['Neue-Haas-Grotesk-Roman'] text-gray-900 uppercase mb-2">BEST WINTER HOLIDAY DESTINATIONS</h3>
                        <p className="text-gray-500 text-lg font-['Neue-Haas-Grotesk-Light']">Explore the best winter holiday destinations for a magical...</p>
                    </div>
                </div>

                {/* Center Button - Absolute */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                    <a href="#blog" className="w-24 h-24 bg-[#DA6102] rounded-full flex items-center justify-center shadow-2xl hover:bg-indigo-600 transition-all duration-300 hover:scale-110 group">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            // Added 'h-6 w-6 md:h-10 md:w-10' for responsive icon sizing
                            className="h-6 w-6 md:h-10 md:w-10 text-white transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5M19 5H9M19 5V15" />
                        </svg>
                    </a>
                </div>

                {/* Blog Card 2 */}
                <div className="group cursor-pointer">
                    <div className="bg-gray-100 rounded-[32px] overflow-hidden mb-6 relative h-[750px]">
                        <img
                            src="/Images/Skateboard.jpg"
                            alt="Snowboarder on ski lift"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => { e.target.src = 'https://placehold.co/600x600/E0E7FF/333333?text=Image+Not+Found'; }}
                        />
                    </div>
                    <div className="text-left px-2">
                        <h3 className="text-2xl font-bold font-['Neue-Haas-Grotesk-Roman'] text-gray-900 uppercase mb-2">7 INTERESTING LOCATIONS FOR YOU TO VISIT</h3>
                        <p className="text-gray-500 text-lg font-['Neue-Haas-Grotesk-Light']">Discover a world of adventure with these 7 intriguing and...</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Blog;