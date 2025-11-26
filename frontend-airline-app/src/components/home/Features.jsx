import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Check, ChevronRight, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import TechReveal from '../common/TechReveal';

const Features = () => {
    const { theme } = useTheme();

    return (
        <section className="py-24 bg-black dark:bg-[#09090B] overflow-hidden transition-colors duration-300 relative font-sans">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 grid md:grid-cols-2 gap-16 items-center relative z-10">

                {/* Image Column */}
                <div className="relative group">
                    <TechReveal>
                        <div className="relative border border-gray-800 bg-[#050505] p-8 md:p-12">
                            {/* Technical Labels */}
                            <div className="absolute top-4 left-4 text-[10px] font-mono text-gray-600 tracking-widest uppercase">
                                NET: CLOUD_SCALE
                            </div>
                            <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-600 tracking-widest uppercase">
                                LANG: POLYGLOT
                            </div>

                            {/* Main Image */}
                            <div className="relative z-10">
                                <img
                                    src="/Images/Flight-up.png"
                                    alt="Top-down view of SKYWinks airplane"
                                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 grayscale brightness-125 contrast-125 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                                    onError={(e) => {
                                        // Fallback to jpg if png fails
                                        e.target.src = '/Images/Flight-up.jpg';
                                        e.target.onerror = () => {
                                            e.target.src = 'https://placehold.co/600x600/000000/333333?text=Image+Not+Found';
                                        }
                                    }}
                                />
                            </div>

                            {/* Bottom Labels */}
                            <div className="mt-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wider font-['Neue-Haas-Grotesk-Bold'] uppercase">
                                    SKYWINKS_AERO
                                </h3>
                                <div className="text-[10px] font-mono text-gray-600 tracking-widest uppercase mt-1">
                                    SYS: GLOBAL_TRAVEL
                                </div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gray-700"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gray-700"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gray-700"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gray-700"></div>
                        </div>
                    </TechReveal>
                </div>

                {/* Text Column */}
                <div className="pl-0 md:pl-8">
                    <span className="text-gray-500 font-mono tracking-widest text-xs mb-4 inline-block uppercase">
                        WHY_CHOOSE_US
                    </span>

                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] font-['Neue-Haas-Grotesk-Bold'] text-white mb-8 uppercase">
                        MORE FUN AND <br /> EFFICIENT WITH <br /> SKYWINKS
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed font-['Neue-Haas-Grotesk-Roman'] mb-10 max-w-lg">
                        By using our flights, you will experience unmatched travel speed and comfort, while having easy access to destinations around the world.
                    </p>

                    {/* Styled List */}
                    <div className="mb-12 border-t border-gray-800">
                        <FeatureItem
                            icon={<ChevronRight size={16} className="text-gray-500" />}
                            text="Skywinks provides great travel flexibility"
                            code="MOD: FLEX_V1"
                        />
                        <FeatureItem
                            icon={<ChevronRight size={16} className="text-gray-500" />}
                            text="Comfortable facilities and services"
                            code="MOD: COMFORT_V2"
                        />
                        <FeatureItem
                            icon={<ChevronRight size={16} className="text-gray-500" />}
                            text="Friendly and kind flight attendants"
                            code="MOD: CREW_CORE"
                        />
                    </div>

                    {/* Wide Orange Button */}
                    <button
                        onClick={() => window.location.href = '#read-more'}
                        className="w-full bg-[#DA6102] hover:bg-[#b54e00] text-black font-bold py-4 px-6 flex items-center justify-between group transition-all duration-300 shadow-[0_0_20px_rgba(218,97,2,0.3)] hover:shadow-[0_0_30px_rgba(218,97,2,0.5)]"
                    >
                        <span className="flex items-center gap-2 font-mono text-sm tracking-wider">
                            <span className="text-black/70">&gt;_</span> READ MORE
                        </span>
                        <Sparkles size={16} className="text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                </div>
            </div>
        </section>
    );
};

const FeatureItem = ({ icon, text, code }) => (
    <div className="flex items-center justify-between py-4 border-b border-gray-800 group hover:bg-white/5 transition-colors duration-300 px-2 cursor-default">
        <div className="flex items-center gap-4">
            {icon}
            <span className="text-gray-300 font-['Neue-Haas-Grotesk-Roman'] text-sm md:text-base group-hover:text-white transition-colors duration-300">
                {text}
            </span>
        </div>
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest group-hover:text-[#DA6102] transition-colors duration-300">
            {code}
        </span>
    </div>
);

export default Features;