import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconLocation, IconCalendar, IconGuest, IconSwap, IconBudget } from '../icons';
import ParallaxReveal from '../common/ParallaxReveal';
import GlitchReveal from '../common/GlitchReveal';

const Destinations = () => {
    const navigate = useNavigate();

    // State to store form inputs
    const [searchParams, setSearchParams] = useState({
        from: '',
        to: '',
        departDate: '',
        returnDate: '',
        travelers: 1,
        classType: 'Economy',
        tripType: 'Round Trip'
    });

    const [activeTab, setActiveTab] = useState('SEARCH FLIGHTS');

    const handleSearch = () => {
        // Redirect to SearchResultsPage with query string
        const query = new URLSearchParams({
            from: searchParams.from,
            to: searchParams.to,
            date: searchParams.departDate,
            returnDate: searchParams.returnDate,
            budget: searchParams.classType,
            travelers: searchParams.travelers,
            tripType: searchParams.tripType
        }).toString();
        navigate(`/search?${query}`);
    };

    return (
        <section id="destinations" className="py-12 bg-gray-50 dark:bg-[#09090B] transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">

                {/* STEALTH MODE INSPIRED FLIGHT SEARCH UI */}
                <div className="bg-white dark:bg-[#09090B] border border-gray-200 dark:border-[#242424] rounded-none overflow-hidden shadow-2xl mb-24 relative transition-colors duration-300">

                    {/* Top Navigation Tabs */}
                    <div className="flex border-b border-gray-200 dark:border-[#242424]">
                        {['SEARCH FLIGHTS', 'MANAGE BOOKING', 'CHECK IN', 'FLIGHT STATUS'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-4 text-sm font-['Neue-Haas-Grotesk-Bold'] tracking-wider uppercase transition-all duration-300 ${activeTab === tab
                                    ? 'bg-gray-100 dark:bg-white text-black'
                                    : 'bg-transparent text-gray-500 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1a1a1a]'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                        <div className="ml-auto flex items-center px-6 text-[#DA6102] font-['Neue-Haas-Grotesk-Bold'] text-sm tracking-wider">
                            <span className="mr-2">APAAR-ID OFFER</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                        </div>
                    </div>

                    {/* Main Search Area */}
                    <div className="p-8">

                        {/* Trip Type Selection */}
                        <div className="flex gap-6 mb-8">
                            {['One Way', 'Round Trip', 'Multi City'].map((type) => (
                                <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${searchParams.tripType === type ? 'border-[#DA6102]' : 'border-gray-300 dark:border-gray-600 group-hover:border-gray-400'}`}>
                                        {searchParams.tripType === type && <div className="w-2.5 h-2.5 rounded-full bg-[#DA6102]" />}
                                    </div>
                                    <input
                                        type="radio"
                                        name="tripType"
                                        value={type}
                                        checked={searchParams.tripType === type}
                                        onChange={(e) => setSearchParams({ ...searchParams, tripType: e.target.value })}
                                        className="hidden"
                                    />
                                    <span className={`text-sm font-['Neue-Haas-Grotesk-Roman'] ${searchParams.tripType === type ? 'text-black dark:text-white' : 'text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300'}`}>
                                        {type}
                                    </span>
                                </label>
                            ))}
                        </div>

                        {/* Grid Layout for Inputs */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 border border-gray-200 dark:border-[#242424]">

                            {/* FROM - Large Block */}
                            <div className="lg:col-span-3 p-6 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-[#242424] relative group hover:bg-gray-50 dark:hover:bg-[#111] transition-colors">
                                <label className="block text-xs font-['Neue-Haas-Grotesk-Bold'] text-gray-500 uppercase tracking-widest mb-2">From</label>
                                <input
                                    type="text"
                                    placeholder="Origin"
                                    value={searchParams.from}
                                    onChange={(e) => setSearchParams({ ...searchParams, from: e.target.value })}
                                    className="w-full bg-transparent text-3xl font-['Neue-Haas-Grotesk-Bold'] text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-gray-700 focus:outline-none uppercase"
                                />
                                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 hidden lg:block">
                                    <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#242424] p-1.5 rounded-full text-[#DA6102] shadow-sm">
                                        <IconSwap className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* TO - Large Block */}
                            <div className="lg:col-span-3 p-6 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-[#242424] hover:bg-gray-50 dark:hover:bg-[#111] transition-colors">
                                <label className="block text-xs font-['Neue-Haas-Grotesk-Bold'] text-gray-500 uppercase tracking-widest mb-2">To</label>
                                <input
                                    type="text"
                                    placeholder="Destination"
                                    value={searchParams.to}
                                    onChange={(e) => setSearchParams({ ...searchParams, to: e.target.value })}
                                    className="w-full bg-transparent text-3xl font-['Neue-Haas-Grotesk-Bold'] text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-gray-700 focus:outline-none uppercase"
                                />
                            </div>

                            {/* Details Grid */}
                            <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4">

                                {/* Depart Date */}
                                <div className="p-4 border-b md:border-b-0 border-r border-gray-200 dark:border-[#242424] hover:bg-gray-50 dark:hover:bg-[#111] transition-colors">
                                    <label className="block text-[10px] font-['Neue-Haas-Grotesk-Bold'] text-gray-500 uppercase tracking-widest mb-1">Depart</label>
                                    <input
                                        type="date"
                                        className="w-full bg-transparent text-sm font-['Neue-Haas-Grotesk-Roman'] text-gray-900 dark:text-white focus:outline-none dark:[color-scheme:dark]"
                                        onChange={(e) => setSearchParams({ ...searchParams, departDate: e.target.value })}
                                    />
                                </div>

                                {/* Return Date */}
                                <div className="p-4 border-b md:border-b-0 border-r border-gray-200 dark:border-[#242424] hover:bg-gray-50 dark:hover:bg-[#111] transition-colors">
                                    <label className="block text-[10px] font-['Neue-Haas-Grotesk-Bold'] text-gray-500 uppercase tracking-widest mb-1">Return</label>
                                    <input
                                        type="date"
                                        className="w-full bg-transparent text-sm font-['Neue-Haas-Grotesk-Roman'] text-gray-900 dark:text-white focus:outline-none dark:[color-scheme:dark]"
                                        onChange={(e) => setSearchParams({ ...searchParams, returnDate: e.target.value })}
                                    />
                                </div>

                                {/* Passengers */}
                                <div className="p-4 border-b md:border-b-0 border-r border-gray-200 dark:border-[#242424] hover:bg-gray-50 dark:hover:bg-[#111] transition-colors">
                                    <label className="block text-[10px] font-['Neue-Haas-Grotesk-Bold'] text-gray-500 uppercase tracking-widest mb-1">Passenger(s)</label>
                                    <select
                                        className="w-full bg-transparent text-sm font-['Neue-Haas-Grotesk-Roman'] text-gray-900 dark:text-white focus:outline-none appearance-none cursor-pointer"
                                        onChange={(e) => setSearchParams({ ...searchParams, travelers: e.target.value })}
                                    >
                                        <option value="1" className="bg-white text-black dark:bg-black dark:text-white">1 Adult</option>
                                        <option value="2" className="bg-white text-black dark:bg-black dark:text-white">2 Adults</option>
                                        <option value="3" className="bg-white text-black dark:bg-black dark:text-white">3 Adults</option>
                                    </select>
                                </div>

                                {/* Class */}
                                <div className="p-4 border-b md:border-b-0 border-gray-200 dark:border-[#242424] hover:bg-gray-50 dark:hover:bg-[#111] transition-colors">
                                    <label className="block text-[10px] font-['Neue-Haas-Grotesk-Bold'] text-gray-500 uppercase tracking-widest mb-1">Class</label>
                                    <select
                                        className="w-full bg-transparent text-sm font-['Neue-Haas-Grotesk-Roman'] text-gray-900 dark:text-white focus:outline-none appearance-none cursor-pointer"
                                        onChange={(e) => setSearchParams({ ...searchParams, classType: e.target.value })}
                                    >
                                        <option value="Economy" className="bg-white text-black dark:bg-black dark:text-white">Economy</option>
                                        <option value="Business" className="bg-white text-black dark:bg-black dark:text-white">Business</option>
                                        <option value="First" className="bg-white text-black dark:bg-black dark:text-white">First Class</option>
                                    </select>
                                </div>

                                {/* Pay By (Row 2 in Details) */}
                                <div className="p-4 border-r border-gray-200 dark:border-[#242424] hover:bg-gray-50 dark:hover:bg-[#111] transition-colors border-t border-gray-200 dark:border-[#242424]">
                                    <label className="block text-[10px] font-['Neue-Haas-Grotesk-Bold'] text-gray-500 uppercase tracking-widest mb-1">Pay By</label>
                                    <select className="w-full bg-transparent text-sm font-['Neue-Haas-Grotesk-Roman'] text-gray-900 dark:text-white focus:outline-none appearance-none cursor-pointer">
                                        <option value="Cash" className="bg-white text-black dark:bg-black dark:text-white">Cash</option>
                                        <option value="Points" className="bg-white text-black dark:bg-black dark:text-white">Points</option>
                                    </select>
                                </div>

                                {/* Concession (Row 2 in Details) */}
                                <div className="p-4 border-gray-200 dark:border-[#242424] hover:bg-gray-50 dark:hover:bg-[#111] transition-colors border-t border-gray-200 dark:border-[#242424] col-span-3 flex items-center justify-between">
                                    <div>
                                        <label className="block text-[10px] font-['Neue-Haas-Grotesk-Bold'] text-gray-500 uppercase tracking-widest mb-1">Concession Type</label>
                                        <select className="w-full bg-transparent text-sm font-['Neue-Haas-Grotesk-Roman'] text-gray-900 dark:text-white focus:outline-none appearance-none cursor-pointer">
                                            <option value="None" className="bg-white text-black dark:bg-black dark:text-white">None</option>
                                            <option value="Student" className="bg-white text-black dark:bg-black dark:text-white">Student</option>
                                            <option value="Senior" className="bg-white text-black dark:bg-black dark:text-white">Senior Citizen</option>
                                        </select>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <button className="text-[#DA6102] text-sm font-['Neue-Haas-Grotesk-Bold'] flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors">
                                            <span className="text-lg">+</span> Add Promo Code
                                        </button>

                                        <button
                                            onClick={handleSearch}
                                            className="bg-[#DA6102] text-white px-8 py-3 font-['Neue-Haas-Grotesk-Bold'] uppercase tracking-wider text-sm hover:bg-opacity-90 transition-all shadow-[0_0_15px_#DA6102] hover:shadow-[0_0_25px_#DA6102]"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Decorative Corner Accents (Stealth Mode) */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#DA6102]"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#DA6102]"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#DA6102]"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#DA6102]"></div>
                </div>

                {/* Destination Cards (Kept as per "Destinations" page context) */}
                <div className="flex justify-left mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-left font-['Neue-Haas-Grotesk-Bold'] uppercase tracking-normal text-gray-900 dark:text-white leading-tight transition-colors duration-300">
                        <GlitchReveal>Popular Destinations</GlitchReveal>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ParallaxReveal delay={0} direction="inward">
                        <DestinationCard
                            city="KUALA LUMPUR"
                            route="JAKARTA (CGK) - KUALA LUMPUR (KUL)"
                            price="$132"
                            img="/Images/Kuala.jpg"
                            tag="Economy Class - One-way"
                        />
                    </ParallaxReveal>
                    <ParallaxReveal delay={0.2} direction="inward">
                        <DestinationCard
                            city="MORZINE"
                            route="JAKARTA (CGK) - MORZINE (MOR)"
                            price="$485"
                            img="/Images/Jakarta.jpg"
                            tag="Business Class - One-way"
                        />
                    </ParallaxReveal>
                    <ParallaxReveal delay={0.4} direction="inward">
                        <DestinationCard
                            city="YOKOHAMA"
                            route="JAKARTA (CGK) - YOKOHAMA (YOK)"
                            price="$273"
                            img="/Images/Yokohama.jpg"
                            tag="Economy Class - One-way"
                        />
                    </ParallaxReveal>
                </div>
            </div>
        </section>
    );
};

// Helper Component for the cards
const DestinationCard = ({ city, route, price, img, tag }) => (
    <div className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-none border border-gray-200 dark:border-[#242424] mb-6">
            <img
                src={img}
                alt={city}
                className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700 dark:brightness-75 grayscale group-hover:grayscale-0"
                onError={(e) => { e.target.src = 'https://placehold.co/600x800/EEEEEE/999999?text=Image+Not+Found'; }}
            />
            <div className="absolute top-6 left-6">
                <span className="bg-white/80 dark:bg-black/50 backdrop-blur-md text-black dark:text-white px-4 py-2 border border-black/10 dark:border-white/10 text-[10px] font-medium tracking-wide uppercase">
                    {tag}
                </span>
            </div>

            {/* Corner Accents for Cards too */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#DA6102] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#DA6102] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#DA6102] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#DA6102] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="px-2">
            <h3 className="text-2xl font-bold font-['Neue-Haas-Grotesk-Roman'] text-gray-900 dark:text-white uppercase mb-2 transition-colors duration-300">{city}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs font-['Neue-Haas-Grotesk-Light'] tracking-wide uppercase mb-4">{route}</p>
            <p className="text-3xl font-bold text-[#DA6102] font-['Neue-Haas-Grotesk-Roman']">{price}</p>
        </div>
    </div>
);

export default Destinations;