import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { IconArrowLongRight, IconCheck } from '../components/icons';

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
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-6">

                {/* Search Summary Header */}
                <div className="bg-indigo-600 rounded-2xl p-8 text-white shadow-xl mb-10 relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <p className="text-indigo-200 text-sm font-semibold uppercase tracking-wider mb-1">Trip Summary</p>
                            <div className="flex items-center gap-4 text-2xl md:text-3xl font-bold">
                                <span>{from}</span>
                                <IconArrowLongRight />
                                <span>{to}</span>
                            </div>
                            <div className="flex gap-4 mt-2 text-indigo-100 text-sm">
                                <span>{new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                <span>•</span>
                                <span>{travelers} Traveler(s)</span>
                                <span>•</span>
                                <span className="capitalize">{budget} Class</span>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate('/')}
                            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors"
                        >
                            Modify Search
                        </button>
                    </div>

                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-indigo-500/30 rounded-full blur-2xl"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Filters Sidebar (Visual Only) */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                            <h3 className="font-bold text-lg mb-6">Filters</h3>

                            <div className="mb-6">
                                <h4 className="font-semibold text-sm text-gray-500 mb-3 uppercase">Stops</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" defaultChecked className="rounded text-indigo-600 focus:ring-indigo-500" />
                                        <span className="text-gray-700">Direct</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
                                        <span className="text-gray-700">1 Stop</span>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-semibold text-sm text-gray-500 mb-3 uppercase">Airlines</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" defaultChecked className="rounded text-indigo-600 focus:ring-indigo-500" />
                                        <span className="text-gray-700">SkyWinks Airlines</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" defaultChecked className="rounded text-indigo-600 focus:ring-indigo-500" />
                                        <span className="text-gray-700">Global Air</span>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-semibold text-sm text-gray-500 mb-3 uppercase">Price Range</h4>
                                <input type="range" className="w-full accent-indigo-600" />
                                <div className="flex justify-between text-xs text-gray-500 mt-2">
                                    <span>$100</span>
                                    <span>$1000</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Flight Results List */}
                    <div className="lg:w-3/4 space-y-6">
                        {loading ? (
                            // Skeleton Loader
                            [1, 2, 3].map((i) => (
                                <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
                                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                                    <div className="h-20 bg-gray-100 rounded mb-4"></div>
                                    <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                                </div>
                            ))
                        ) : (
                            flights.map((flight) => (
                                <div key={flight.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                                        {/* Airline Info */}
                                        <div className="flex items-center gap-4 w-full md:w-1/4">
                                            <img src={flight.logo} alt={flight.airline} className="w-12 h-12 rounded-lg object-cover" />
                                            <div>
                                                <h4 className="font-bold text-gray-900">{flight.airline}</h4>
                                                <p className="text-xs text-gray-500">{flight.flightNumber}</p>
                                            </div>
                                        </div>

                                        {/* Flight Times */}
                                        <div className="flex items-center justify-center gap-8 w-full md:w-2/4">
                                            <div className="text-center">
                                                <p className="text-xl font-bold text-gray-900">{flight.departureTime}</p>
                                                <p className="text-xs text-gray-500">{from.split('(')[1]?.replace(')', '') || 'DEP'}</p>
                                            </div>

                                            <div className="flex flex-col items-center w-full max-w-[120px]">
                                                <p className="text-xs text-gray-400 mb-1">{flight.duration}</p>
                                                <div className="w-full h-[2px] bg-gray-200 relative">
                                                    <div className="absolute top-1/2 left-0 w-2 h-2 bg-gray-300 rounded-full -translate-y-1/2"></div>
                                                    <div className="absolute top-1/2 right-0 w-2 h-2 bg-gray-300 rounded-full -translate-y-1/2"></div>
                                                </div>
                                                <p className="text-xs text-indigo-600 font-medium mt-1">{flight.stops}</p>
                                            </div>

                                            <div className="text-center">
                                                <p className="text-xl font-bold text-gray-900">{flight.arrivalTime}</p>
                                                <p className="text-xs text-gray-500">{to.split('(')[1]?.replace(')', '') || 'ARR'}</p>
                                            </div>
                                        </div>

                                        {/* Price & Action */}
                                        <div className="flex flex-col items-end justify-center gap-2 w-full md:w-1/4 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                                            <p className="text-xs text-gray-500">Price per person</p>
                                            <p className="text-3xl font-bold text-indigo-600">{flight.currency}{flight.price}</p>
                                            <button
                                                onClick={() => handleBook(flight.id)}
                                                className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-bold text-sm shadow-md hover:bg-indigo-700 transition-colors"
                                            >
                                                Select Flight
                                            </button>
                                        </div>
                                    </div>

                                    {/* Footer / Amenities */}
                                    <div className="mt-6 pt-4 border-t border-gray-50 flex gap-6 text-xs text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <IconCheck /> <span className="text-gray-600">Baggage Included</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <IconCheck /> <span className="text-gray-600">Meal Included</span>
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
