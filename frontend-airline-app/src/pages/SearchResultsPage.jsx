import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { IconArrowLongRight, IconCheck } from '../components/icons';
import Button from '../components/common/Button';

const SearchResultsPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);

    const from = searchParams.get('from') || 'Jakarta (CGK)';
    const to = searchParams.get('to') || 'Singapore (SIN)';
    const date = searchParams.get('date') || '2025-11-25';
    const travelers = searchParams.get('travelers') || 1;
    const budget = searchParams.get('budget') || 'Economy';

    // Mock Data Generator
    useEffect(() => {
        setLoading(true);
        // Simulate API delay
        setTimeout(() => {
            const mockFlights = [
                {
                    id: 1,
                    airline: 'SkyWinks Airlines',
                    flightNumber: 'SW-101',
                    departureTime: '08:00',
                    arrivalTime: '11:00',
                    duration: '3h 00m',
                    price: 150,
                    currency: '$',
                    stops: 'Direct',
                    logo: 'https://placehold.co/100x100/4F46E5/FFFFFF?text=SW&font=inter'
                },
                {
                    id: 2,
                    airline: 'SkyWinks Airlines',
                    flightNumber: 'SW-205',
                    departureTime: '14:00',
                    arrivalTime: '17:30',
                    duration: '3h 30m',
                    price: 135,
                    currency: '$',
                    stops: 'Direct',
                    logo: 'https://placehold.co/100x100/4F46E5/FFFFFF?text=SW&font=inter'
                },
                {
                    id: 3,
                    airline: 'Global Air',
                    flightNumber: 'GA-442',
                    departureTime: '06:00',
                    arrivalTime: '10:00',
                    duration: '4h 00m',
                    price: 120,
                    currency: '$',
                    stops: '1 Stop',
                    logo: 'https://placehold.co/100x100/10B981/FFFFFF?text=GA&font=inter'
                },
                {
                    id: 4,
                    airline: 'JetStream',
                    flightNumber: 'JS-889',
                    departureTime: '20:00',
                    arrivalTime: '23:15',
                    duration: '3h 15m',
                    price: 180,
                    currency: '$',
                    stops: 'Direct',
                    logo: 'https://placehold.co/100x100/F59E0B/FFFFFF?text=JS&font=inter'
                }
            ];
            setFlights(mockFlights);
            setLoading(false);
        }, 1000);
    }, [searchParams]);

    const handleBook = (flightId) => {
        navigate(`/book/review/${flightId}`);
    };

    return (
        <div className="bg-gray-50 dark:bg-[#09090B] min-h-screen py-32 transition-colors duration-300 font-sans">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">

                {/* Trip Summary Header (HUD Style) */}
                <div className="relative bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#DA6102] p-8 mb-10 transition-colors duration-300 group">
                    {/* L-Corners */}
                    <span className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#DA6102] z-20"></span>
                    <span className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[#DA6102] z-20"></span>
                    <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[#DA6102] z-20"></span>
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#DA6102] z-20"></span>

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-1.5 h-1.5 bg-[#DA6102] rounded-full animate-pulse"></span>
                                <p className="text-[#DA6102] text-xs font-mono uppercase tracking-widest">SYS: TRIP_SUMMARY</p>
                            </div>
                            <div className="flex items-center gap-4 text-2xl md:text-4xl font-bold text-gray-900 dark:text-white font-['Neue-Haas-Grotesk-Bold'] uppercase tracking-tight">
                                <span>{from.split('(')[0]}</span>
                                <IconArrowLongRight className="text-[#DA6102]" />
                                <span>{to.split('(')[0]}</span>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-3 text-gray-500 dark:text-gray-400 text-sm font-['Neue-Haas-Grotesk-Roman'] uppercase tracking-wide">
                                <span>{new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                <span className="text-[#DA6102]">•</span>
                                <span>{travelers} Traveler(s)</span>
                                <span className="text-[#DA6102]">•</span>
                                <span className="capitalize">{budget} Class</span>
                            </div>
                        </div>
                        <Button
                            onClick={() => navigate('/')}
                            variant="outline"
                            className="border-gray-300 dark:border-gray-700 hover:border-[#DA6102] dark:hover:border-[#DA6102] text-gray-900 dark:text-white"
                        >
                            Modify Search
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Filters Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#242424] p-6 sticky top-24 transition-colors duration-300">
                            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100 dark:border-[#242424]">
                                <span className="text-[#DA6102] font-mono text-xs">[FLTR]</span>
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white font-['Neue-Haas-Grotesk-Bold'] uppercase tracking-wide">Filters</h3>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-bold text-xs text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-widest font-['Neue-Haas-Grotesk-Roman']">Stops</h4>
                                <div className="space-y-3">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input type="checkbox" defaultChecked className="peer appearance-none w-4 h-4 border border-gray-300 dark:border-gray-600 checked:bg-[#DA6102] checked:border-[#DA6102] transition-colors" />
                                            <IconCheck className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5" />
                                        </div>
                                        <span className="text-sm text-gray-700 dark:text-gray-300 font-['Neue-Haas-Grotesk-Roman'] group-hover:text-[#DA6102] transition-colors">Direct</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input type="checkbox" className="peer appearance-none w-4 h-4 border border-gray-300 dark:border-gray-600 checked:bg-[#DA6102] checked:border-[#DA6102] transition-colors" />
                                            <IconCheck className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5" />
                                        </div>
                                        <span className="text-sm text-gray-700 dark:text-gray-300 font-['Neue-Haas-Grotesk-Roman'] group-hover:text-[#DA6102] transition-colors">1 Stop</span>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-bold text-xs text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-widest font-['Neue-Haas-Grotesk-Roman']">Airlines</h4>
                                <div className="space-y-3">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input type="checkbox" defaultChecked className="peer appearance-none w-4 h-4 border border-gray-300 dark:border-gray-600 checked:bg-[#DA6102] checked:border-[#DA6102] transition-colors" />
                                            <IconCheck className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5" />
                                        </div>
                                        <span className="text-sm text-gray-700 dark:text-gray-300 font-['Neue-Haas-Grotesk-Roman'] group-hover:text-[#DA6102] transition-colors">SkyWinks Airlines</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input type="checkbox" defaultChecked className="peer appearance-none w-4 h-4 border border-gray-300 dark:border-gray-600 checked:bg-[#DA6102] checked:border-[#DA6102] transition-colors" />
                                            <IconCheck className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5" />
                                        </div>
                                        <span className="text-sm text-gray-700 dark:text-gray-300 font-['Neue-Haas-Grotesk-Roman'] group-hover:text-[#DA6102] transition-colors">Global Air</span>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-bold text-xs text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-widest font-['Neue-Haas-Grotesk-Roman']">Price Range</h4>
                                <input type="range" className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#DA6102]" />
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2 font-mono">
                                    <span>$100</span>
                                    <span>$1000</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Flight Results List */}
                    <div className="lg:w-3/4 space-y-6">
                        {loading ? (
                            // Skeleton Loader (Stealth Mode)
                            [1, 2, 3].map((i) => (
                                <div key={i} className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#242424] p-6 animate-pulse">
                                    <div className="h-4 bg-gray-200 dark:bg-[#1a1a1a] w-1/4 mb-6"></div>
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="h-16 bg-gray-200 dark:bg-[#1a1a1a] w-16"></div>
                                        <div className="h-8 bg-gray-200 dark:bg-[#1a1a1a] w-1/3"></div>
                                        <div className="h-10 bg-gray-200 dark:bg-[#1a1a1a] w-1/4"></div>
                                    </div>
                                    <div className="h-px bg-gray-200 dark:bg-[#1a1a1a] w-full"></div>
                                </div>
                            ))
                        ) : (
                            flights.map((flight) => (
                                <div key={flight.id} className="group relative bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#242424] hover:border-[#DA6102] dark:hover:border-[#DA6102] transition-all duration-300 p-6 md:p-8">

                                    {/* Hover L-Corners */}
                                    <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-[#DA6102] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    <span className="absolute -top-px -right-px w-3 h-3 border-t border-r border-[#DA6102] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    <span className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-[#DA6102] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-[#DA6102] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                                        {/* Airline Info */}
                                        <div className="flex items-center gap-6 w-full md:w-1/4">
                                            <div className="w-14 h-14 bg-gray-100 dark:bg-[#111] flex items-center justify-center border border-gray-200 dark:border-[#333] group-hover:border-[#DA6102] transition-colors">
                                                <span className="font-bold text-xl text-gray-400 dark:text-gray-600 group-hover:text-[#DA6102]">{flight.airline.substring(0, 2).toUpperCase()}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-900 dark:text-white font-['Neue-Haas-Grotesk-Bold'] uppercase leading-none mb-1">{flight.airline}</h4>
                                                <p className="text-xs text-[#DA6102] font-mono tracking-wider">{flight.flightNumber}</p>
                                            </div>
                                        </div>

                                        {/* Flight Times */}
                                        <div className="flex items-center justify-center gap-8 w-full md:w-2/4">
                                            <div className="text-center">
                                                <p className="text-2xl font-bold text-gray-900 dark:text-white font-['Neue-Haas-Grotesk-Bold']">{flight.departureTime}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono mt-1">{from.split('(')[1]?.replace(')', '') || 'DEP'}</p>
                                            </div>

                                            <div className="flex flex-col items-center w-full max-w-[140px]">
                                                <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-widest">{flight.duration}</p>
                                                <div className="w-full h-px bg-gray-300 dark:bg-[#333] relative group-hover:bg-[#DA6102]/50 transition-colors">
                                                    <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full -translate-y-1/2 group-hover:bg-[#DA6102] transition-colors"></div>
                                                    <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full -translate-y-1/2 group-hover:bg-[#DA6102] transition-colors"></div>
                                                    <IconArrowLongRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-600 group-hover:text-[#DA6102] transition-colors" />
                                                </div>
                                                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium mt-2 uppercase tracking-wide">{flight.stops}</p>
                                            </div>

                                            <div className="text-center">
                                                <p className="text-2xl font-bold text-gray-900 dark:text-white font-['Neue-Haas-Grotesk-Bold']">{flight.arrivalTime}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono mt-1">{to.split('(')[1]?.replace(')', '') || 'ARR'}</p>
                                            </div>
                                        </div>

                                        {/* Price & Action */}
                                        <div className="flex flex-col items-end justify-center gap-2 w-full md:w-1/4 border-t md:border-t-0 md:border-l border-gray-100 dark:border-[#242424] pt-6 md:pt-0 md:pl-8">
                                            <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest">Price per person</p>
                                            <p className="text-3xl font-bold text-gray-900 dark:text-white font-['Neue-Haas-Grotesk-Bold'] mb-2 group-hover:text-[#DA6102] transition-colors">{flight.currency}{flight.price}</p>
                                            <Button
                                                onClick={() => handleBook(flight.id)}
                                                variant="primary"
                                                withCorners={true}
                                                className="w-full"
                                            >
                                                Select Flight
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Footer / Amenities */}
                                    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-[#242424] flex gap-6 text-xs text-gray-500 dark:text-gray-400 font-['Neue-Haas-Grotesk-Roman'] uppercase tracking-wide">
                                        <div className="flex items-center gap-1.5">
                                            <IconCheck className="w-3 h-3 text-[#DA6102]" /> <span>Baggage Included</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <IconCheck className="w-3 h-3 text-[#DA6102]" /> <span>Meal Included</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultsPage;
