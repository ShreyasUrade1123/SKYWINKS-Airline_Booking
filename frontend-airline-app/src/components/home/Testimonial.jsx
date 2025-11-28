import React, { useState } from 'react';
import { IconArrowLongLeft, IconArrowLongRight } from '../icons';
import GlitchReveal from '../common/GlitchReveal';

const testimonials = [
    {
        id: 1,
        quote: "Thank you to Skywinks for a great flight experience! Friendly service and on time flights made my trip very enjoyable. I would love to use Skywinks again in the future.",
        name: "Kianna Curtis",
        role: "Passengers",
        image: "https://placehold.co/100x100/E0E7FF/333333?text=KC"
    },
    {
        id: 2,
        quote: "The best airline I have ever flown with. The staff was incredibly helpful and the food was delicious. Highly recommended for long haul flights.",
        name: "Marcus Chen",
        role: "Business Traveler",
        image: "https://placehold.co/100x100/E0E7FF/333333?text=MC"
    },
    {
        id: 3,
        quote: "Skywinks made our family vacation start on a high note. The kids loved the entertainment system and the seats were very comfortable.",
        name: "Sarah Jenkins",
        role: "Family Traveler",
        image: "https://placehold.co/100x100/E0E7FF/333333?text=SJ"
    }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const current = testimonials[currentIndex];

    return (
        <section className="py-24 bg-white dark:bg-[#09090B] transition-colors duration-300 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">

                {/* Header */}
                <div className="mb-12 text-center md:text-left">
                    <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                        <span className="text-[#DA6102] text-xs font-mono tracking-widest uppercase">SYS: PASSENGER_FEEDBACK</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white font-['Neue-Haas-Grotesk-Bold'] uppercase leading-none tracking-tight">
                        <GlitchReveal>PASSENGER VOICES</GlitchReveal>
                    </h2>
                </div>

                {/* Main Content Box */}
                <div className="relative bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#DA6102] p-8 md:p-16 transition-colors duration-300">

                    {/* L-Corners */}
                    <span className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#DA6102] z-20"></span>
                    <span className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#DA6102] z-20"></span>
                    <span className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#DA6102] z-20"></span>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#DA6102] z-20"></span>

                    <div className="max-w-4xl mx-auto">
                        <blockquote className="text-2xl md:text-4xl font-medium leading-tight font-['Neue-Haas-Grotesk-Roman'] text-gray-900 dark:text-white mb-12 transition-colors duration-300 text-center">
                            "{current.quote}"
                        </blockquote>

                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-gray-200 dark:border-[#333] pt-8">
                            {/* Profile */}
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <img
                                        src={current.image}
                                        alt={current.name}
                                        className="w-14 h-14 grayscale hover:grayscale-0 transition-all duration-300 object-cover bg-gray-200"
                                        onError={(e) => { e.target.src = 'https://placehold.co/100x100/EEEEEE/999999?text=User'; }}
                                    />
                                    <div className="absolute inset-0 border border-black/10 dark:border-white/10 pointer-events-none"></div>
                                </div>
                                <div>
                                    <p className="text-lg font-bold font-['Neue-Haas-Grotesk-Roman'] text-gray-900 dark:text-white uppercase tracking-wide transition-colors duration-300">{current.name}</p>
                                    <p className="text-xs text-[#DA6102] font-mono uppercase tracking-wider">{current.role}</p>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center gap-6">
                                <button
                                    onClick={prevTestimonial}
                                    className="group flex items-center justify-center w-12 h-12 border border-gray-300 dark:border-[#333] hover:border-[#DA6102] dark:hover:border-[#DA6102] hover:bg-[#DA6102] transition-all duration-300"
                                >
                                    <IconArrowLongLeft className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors" />
                                </button>

                                <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
                                    {String(currentIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                                </span>

                                <button
                                    onClick={nextTestimonial}
                                    className="group flex items-center justify-center w-12 h-12 border border-gray-300 dark:border-[#333] hover:border-[#DA6102] dark:hover:border-[#DA6102] hover:bg-[#DA6102] transition-all duration-300"
                                >
                                    <IconArrowLongRight className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;