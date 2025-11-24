import React, { useState } from 'react';
import { IconArrowLongLeft, IconArrowLongRight } from '../icons';

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
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6 md:px-24 lg:px-40">
                <p className="text-gray-500 text-lg font-['Neue-Haas-Grotesk-Roman'] mb-8">This is why passengers love Skywinks</p>

                <div className="max-w-5xl">
                    <blockquote className="text-3xl md:text-5xl font-medium leading-tight font-['Neue-Haas-Grotesk-Roman'] text-gray-900 mb-16">
                        "{current.quote}"
                    </blockquote>

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        {/* Profile */}
                        <div className="flex items-center gap-6">
                            <img
                                src={current.image}
                                alt={current.name}
                                className="w-16 h-16 rounded-full object-cover bg-gray-200"
                                onError={(e) => { e.target.src = 'https://placehold.co/100x100/EEEEEE/999999?text=User'; }}
                            />
                            <div>
                                <p className="text-xl font-bold font-['Neue-Haas-Grotesk-Roman'] text-gray-900">{current.name}</p>
                                <p className="text-gray-500 font-['Neue-Haas-Grotesk-Light']">{current.role}</p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center gap-8">
                            <button
                                onClick={prevTestimonial}
                                className="text-gray-400 hover:text-[#5B60F0] transition-colors p-2"
                            >
                                <IconArrowLongLeft className="w-8 h-8" />
                            </button>

                            <span className="text-xl font-medium font-['Neue-Haas-Grotesk-Roman'] text-gray-900">
                                {currentIndex + 1} / {testimonials.length}
                            </span>

                            <button
                                onClick={nextTestimonial}
                                className="text-gray-400 hover:text-[#5B60F0] transition-colors p-2"
                            >
                                <IconArrowLongRight className="w-8 h-8" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;