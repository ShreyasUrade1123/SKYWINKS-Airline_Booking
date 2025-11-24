import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconLocation, IconCalendar, IconGuest, IconSwap, IconBudget } from '../icons';

const Destinations = () => {
    const navigate = useNavigate();

    // State to store form inputs
    const [searchParams, setSearchParams] = useState({
        from: '',
        to: '',
        date: '',
        budget: '',
        travelers: 1
    });

    const handleSearch = () => {
        // Redirect to SearchResultsPage with query string
        const query = new URLSearchParams({
            from: searchParams.from,
            to: searchParams.to,
            date: searchParams.date,
            budget: searchParams.budget,
            travelers: searchParams.travelers
        }).toString();
        navigate(`/search?${query}`);
    };

    return (
        <section id="destinations" className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-24 lg:px-40">

                <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 font-['Neue-Haas-Grotesk-Roman'] uppercase tracking-normal text-gray-900 leading-tight">
                    Find Special Prices to Favorite <br /> Destinations
                </h2>

                {/* Booking Form - Pills Layout */}
                <div className="flex flex-wrap gap-4 items-center justify-center max-w-7xl mx-auto mb-20">

                    {/* Location Pill */}
                    <div className="bg-gray-50 rounded-full px-6 py-4 flex items-center gap-4 min-w-[320px]">
                        <div className="flex items-center gap-2">
                            <IconLocation className="text-[#DA6102]" />
                            <input
                                type="text"
                                placeholder="Jakarta"
                                className="bg-transparent focus:outline-none text-sm font-medium text-gray-700 placeholder-gray-500 w-24"
                                onChange={(e) => setSearchParams({ ...searchParams, from: e.target.value })}
                            />
                        </div>
                        <div className="h-6 w-px bg-gray-300"></div>
                        <div className="flex items-center gap-2">
                            <IconLocation className="text-[#DA6102]" />
                            <input
                                type="text"
                                placeholder="Singapore"
                                className="bg-transparent focus:outline-none text-sm font-medium text-gray-700 placeholder-gray-500 w-24"
                                onChange={(e) => setSearchParams({ ...searchParams, to: e.target.value })}
                            />
                        </div>
                        <button className="bg-[#DA6102] text-white p-2 rounded-full hover:bg-indigo-[#DA6102] transition-colors ml-auto shadow-md">
                            <IconSwap className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Date Pill */}
                    <div className="bg-gray-50 rounded-full px-6 py-4 flex items-center gap-3 min-w-[160px]">
                        <IconCalendar className="text-[#DA6102]" />
                        <input
                            type="text"
                            placeholder="Date"
                            onFocus={(e) => (e.target.type = 'date')}
                            onBlur={(e) => (e.target.type = 'text')}
                            className="bg-transparent focus:outline-none text-sm font-medium text-gray-700 placeholder-gray-500 w-full"
                            onChange={(e) => setSearchParams({ ...searchParams, date: e.target.value })}
                        />
                    </div>

                    {/* Budget Pill */}
                    <div className="bg-gray-50 rounded-full px-6 py-4 flex items-center gap-3 min-w-[160px]">
                        <IconBudget className="text-DA6102]" />
                        <select
                            className="bg-transparent focus:outline-none text-sm font-medium text-gray-700 cursor-pointer w-full appearance-none"
                            onChange={(e) => setSearchParams({ ...searchParams, budget: e.target.value })}
                        >
                            <option value="">Budget</option>
                            <option value="economy">Economy</option>
                            <option value="business">Business</option>
                            <option value="first">First Class</option>
                        </select>
                    </div>

                    {/* Guest Pill */}
                    <div className="bg-gray-50 rounded-full px-6 py-4 flex items-center gap-3 min-w-[140px]">
                        <IconGuest className="text-[DA6102]" />
                        <input
                            type="number"
                            placeholder="Guest"
                            min="1"
                            defaultValue="1"
                            className="bg-transparent focus:outline-none text-sm font-medium text-gray-700 placeholder-gray-500 w-full"
                            onChange={(e) => setSearchParams({ ...searchParams, travelers: e.target.value })}
                        />
                    </div>

                    {/* Search Button */}
                    <button
                        onClick={handleSearch}
                        className="bg-[#DA6102] text-white px-12 py-4 rounded-full font-bold text-sm shadow-xl hover:bg-orange-[#DA6102] transition-all duration-300 hover:scale-105"
                    >
                        Search
                    </button>
                </div>

                {/* Destination Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <DestinationCard
                        city="KUALA LUMPUR"
                        route="JAKARTA (CGK) - KUALA LUMPUR (KUL)"
                        price="$132"
                        img="/Images/Kuala.jpg"
                        tag="Economy Class - One-way"
                    />
                    <DestinationCard
                        city="MORZINE"
                        route="JAKARTA (CGK) - MORZINE (MOR)"
                        price="$485"
                        img="/Images/Jakarta.jpg"
                        tag="Business Class - One-way"
                    />
                    <DestinationCard
                        city="YOKOHAMA"
                        route="JAKARTA (CGK) - YOKOHAMA (YOK)"
                        price="$273"
                        img="/Images/Yokohama.jpg"
                        tag="Economy Class - One-way"
                    />
                </div>
            </div>
        </section>
    );
};

// Helper Component for the cards
const DestinationCard = ({ city, route, price, img, tag }) => (
    <div className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-[32px] mb-6">
            <img
                src={img}
                alt={city}
                className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = 'https://placehold.co/600x800/EEEEEE/999999?text=Image+Not+Found'; }}
            />
            <div className="absolute top-6 left-6">
                <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-[10px] font-medium tracking-wide uppercase border border-white/30 shadow-sm">
                    {tag}
                </span>
            </div>
        </div>
        <div className="px-2">
            <h3 className="text-2xl font-bold font-['Neue-Haas-Grotesk-Roman'] text-gray-900 uppercase mb-2">{city}</h3>
            <p className="text-gray-400 text-xs font-['Neue-Haas-Grotesk-Light'] tracking-wide uppercase mb-4">{route}</p>
            <p className="text-3xl font-bold text-[#DA6102] font-['Neue-Haas-Grotesk-Roman']">{price}</p>
        </div>
    </div>
);

export default Destinations;