import React from 'react';
import { IconArrowRight } from '../icons';
import GlitchReveal from '../common/GlitchReveal';

const Blog = () => (
    <section id="blog" className="py-24 bg-white dark:bg-[#09090B] transition-colors duration-300 relative overflow-hidden font-sans">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">

            {/* Header Section */}
            <div className="mb-8 text-left">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#DA6102] text-xs font-mono tracking-widest uppercase">SYS: BLOG_MONITOR</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white font-['Neue-Haas-Grotesk-Bold'] uppercase leading-none transition-colors duration-300 ">
                    <GlitchReveal>WHAT YOU DEFINITELY WANT TO KNOW</GlitchReveal>
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative">
                {/* Blog Card 1 */}
                <BlogCard
                    image="/Images/Mountain.jpg"
                    title="BEST WINTER HOLIDAY DESTINATIONS"
                    description="Explore the best winter holiday destinations for a magical..."
                    readTime="5MIN"
                    status="PUBLISHED"
                />

                {/* Blog Card 2 */}
                <BlogCard
                    image="/Images/Skateboard.jpg"
                    title="7 INTERESTING LOCATIONS FOR YOU TO VISIT"
                    description="Discover a world of adventure with these 7 intriguing and..."
                    readTime="5MIN"
                    status="PUBLISHED"
                />
            </div>
        </div>
    </section>
);

const BlogCard = ({ image, title, description, readTime, status }) => (
    <div className="group relative flex flex-col h-full cursor-pointer">

        {/* Main Card Container */}
        {/* Removed overflow-hidden to allow button to overlap */}
        <div className="border border-[#DA6102] dark:border-[#DA6102] p-1 relative flex-grow flex flex-col transition-colors duration-300">

            {/* Corner Accents (Animated) */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#DA6102] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#DA6102] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#DA6102] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#DA6102] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>

            {/* Image Container */}
            <div className="relative overflow-hidden h-[600px] mb-6 bg-gray-100 dark:bg-[#111]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 dark:brightness-75 grayscale group-hover:grayscale-0 ease-out"
                    onError={(e) => { e.target.src = 'https://placehold.co/600x600/E0E7FF/333333?text=Image+Not+Found'; }}
                />
                {/* Glitch/Scanline Overlay (Optional subtle effect) */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="px-4 pb-12">
                <h3 className="text-2xl font-bold font-['Neue-Haas-Grotesk-Roman'] text-gray-900 dark:text-[#DA6102] uppercase mb-3 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-['Neue-Haas-Grotesk-Roman'] transition-colors duration-300">
                    {description}
                </p>
            </div>

            {/* Bottom Button - Centered on bottom border */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
                <a href="#read" className="w-12 h-12 bg-[#DA6102] rounded-full flex items-center justify-center shadow-lg hover:bg-[#b54e00] hover:scale-110 transition-all duration-300 group/btn">
                    <IconArrowRight className="w-5 h-5 text-white transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
            </div>
        </div>

        {/* Bottom Metadata */}
        <div className="flex justify-between items-center mt-2 text-[10px] font-mono text-[#DA6102] uppercase tracking-wider">
            <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#DA6102] rounded-full animate-pulse"></span>
                <span>STATUS: {status}</span>
            </div>
            <span className="text-[10px] font-mono text-[#696969] uppercase tracking-wider">READ_TIME: {readTime}</span>
        </div>
    </div>
);

export default Blog;