import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import RollingText3D from '../common/RollingText3D';

const AboutIntro = () => {
    const { theme } = useTheme();

    return (
        <section id="about" className="py-24 md:py-32 relative bg-white dark:bg-[#09090B] transition-colors duration-300">
            <div className="container mx-auto px-6 text-center">
                <span className="text-[#DA6102] font-bold tracking-widest text-lg mb-4 inline-block uppercase font-['Neue-Haas-Grotesk-Roman']">
                    ABOUT US
                </span>

                {/* Text Color: Black default -> White override in Dark Mode */}
                <h2 className="text-3xl sm:text-4xl md:text-7xl font-normal text-gray-900 dark:text-gray-100 leading-tight font-['Neue-Haas-Grotesk-Roman'] max-w-9xl mx-auto transition-colors duration-300">
                    <RollingText3D className="text-black dark:text-white transition-colors duration-300">
                        SKYWINKS IS NOT JUST AN AIRLINE,
                    </RollingText3D>
                    <br className="hidden md:block" />
                    <RollingText3D className="text-black dark:text-white transition-colors duration-300" delay={0.2}>
                        WE ARE YOUR PARTNER
                    </RollingText3D>
                    {' '}
                    <RollingText3D className="text-gray-400" delay={0.4}>
                        ON EVERY
                    </RollingText3D>
                    <br className="hidden md:block" />
                    <RollingText3D className="text-gray-400" delay={0.6}>
                        JOURNEY
                    </RollingText3D>

                    <span className="inline-block mx-4 align-middle transform -translate-y-2">
                        {/* Added 'group' to container to coordinate the animation */}
                        <div className="group w-48 h-20 rounded-full overflow-hidden relative border-2 border-white/20 transition-all duration-500 ease-out
        hover:border-[#DA6102] hover:shadow-[0_0_15px_rgba(218,97,2,0.5)] cursor-pointer">

                            <img
                                src="/Images/Window.jpg"
                                alt="Window View"
                                className="w-full h-full object-cover transform transition-transform duration-700 ease-out
            grayscale brightness-75 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                            />
                        </div>
                    </span>

                    <RollingText3D className="text-gray-400" delay={0.8}>
                        TAKING YOU
                    </RollingText3D>
                    <br className="hidden md:block" />
                    <RollingText3D className="text-gray-400" delay={1.0}>
                        HIGHER FURTHER AND CLOSER
                    </RollingText3D>
                    <br className="hidden md:block" />
                    <RollingText3D className="text-gray-400" delay={1.2}>
                        TO YOUR DREAMS
                    </RollingText3D>
                </h2>

                <div className="mt-16 relative">
                    <img
                        src={theme === 'dark' ? "/Images/18780.png" : "/Images/18780.jpg"}
                        alt="SKYWinks Modern Passenger Airplane - Side"
                        // Only dim image in dark mode
                        className="mx-auto w-full h-[350px] md:h-[500px] object-cover object-bottom max-w-6xl z-20 transition-all duration-500 dark:brightness-75 dark:sepia-[.10]"
                        onError={(e) => { e.target.src = 'https://placehold.co/1200x500/EEEEEE/999999?text=Image+Not+Found'; }}
                    />

                    {/* Shadow matches theme */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-black/20 dark:bg-white/10 blur-xl rounded-[100%] transition-colors duration-300"></div>
                </div>

            </div>
        </section>
    );
};

export default AboutIntro;