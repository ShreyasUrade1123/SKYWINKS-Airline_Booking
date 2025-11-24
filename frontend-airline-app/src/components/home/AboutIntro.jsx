import React from 'react';

const AboutIntro = () => (
    <section id="about" className="py-24 md:py-32 relative">
        {/* Scroll Down Button */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">

        </div>

        <div className="container mx-auto px-6 text-center">
            <span className="text-[#DA6102] font-bold tracking-widest text-lg mb-4 inline-block uppercase font-['Neue-Haas-Grotesk-Roman']">ABOUT US</span>

            <h2 className="text-3xl sm:text-4xl md:text-7xl font-normal text-gray-900 leading-tight font-['Neue-Haas-Grotesk-Roman'] max-w-9xl mx-auto">
                <span className="text-black">SKYWINKS IS NOT JUST AN AIRLINE,</span>
                <br className="hidden md:block" />
                <span className="text-black">WE ARE YOUR PARTNER</span> <span className="text-gray-400">ON EVERY</span>
                <br className="hidden md:block" />
                <span className="text-gray-400">JOURNEY</span>

                {/* Inline Image Pill */}
                <span className="inline-block mx-4 align-middle transform -translate-y-2">
                    <div className="w-48 h-20 rounded-full overflow-hidden relative">
                        <img
                            src="/Images/Window.jpg"
                            alt="Window View"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </span>

                <span className="text-gray-400">TAKING YOU</span>
                <br className="hidden md:block" />
                <span className="text-gray-400">HIGHER FURTHER AND CLOSER</span>
                <br className="hidden md:block" />
                <span className="text-gray-400">TO YOUR DREAMS</span>
            </h2>

            {/* Airplane Image */}
            <div className="mt-16 relative">
                <img
                    src="/Images/18780.jpg"
                    alt="SKYWinks Modern Passenger Airplane - Side"
                    // CHANGED: 'object-center' -> 'object-bottom'
                    className="mx-auto w-full h-[350px] md:h-[500px] object-cover object-bottom max-w-6xl z-20"
                    onError={(e) => { e.target.src = 'https://placehold.co/1200x500/EEEEEE/999999?text=Image+Not+Found'; }}
                />
                {/* Reflection/Shadow effect could be added here if needed */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-xl rounded-[100%]"></div>
            </div>

        </div>
    </section>
);

export default AboutIntro;