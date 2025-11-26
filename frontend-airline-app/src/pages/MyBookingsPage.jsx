import React, { useState } from 'react';
import { IconArrowLongRight, IconCheck } from '../components/icons';
import Button from '../components/common/Button';

export default function MyBookingsPage() {
    const [activeTab, setActiveTab] = useState('upcoming');

    const bookings = {
        upcoming: [
            {
                id: 'BK-7829',
                airline: 'SkyWinks Airlines',
                flightNumber: 'SW-101',
                from: 'Jakarta (CGK)',
                to: 'Singapore (SIN)',
                date: '25 Nov 2025',
                time: '08:00 AM',
                status: 'Confirmed',
                class: 'Business'
            },
            {
                id: 'BK-9921',
                airline: 'SkyWinks Airlines',
                flightNumber: 'SW-204',
                from: 'Singapore (SIN)',
                to: 'Tokyo (HND)',
                date: '28 Nov 2025',
                time: '10:30 AM',
                status: 'Confirmed',
                class: 'First Class'
            }
        ],
        past: [
            {
                id: 'BK-1102',
                airline: 'SkyWinks Airlines',
                flightNumber: 'SW-099',
                from: 'Bali (DPS)',
                to: 'Sydney (SYD)',
                date: '10 Oct 2025',
                time: '09:15 AM',
                status: 'Completed',
                class: 'Economy'
            }
        ]
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#09090B] py-32 px-4 md:px-8 lg:px-12 transition-colors duration-300 font-['Neue-Haas-Grotesk-Roman']">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-1.5 bg-[#DA6102] rounded-full animate-pulse"></span>
                    <p className="text-[#DA6102] text-xs font-mono uppercase tracking-widest">SYS: MY_TRIPS</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 font-['Neue-Haas-Grotesk-Bold'] uppercase tracking-tight">My Bookings</h2>

                {/* Tabs */}
                <div className="flex gap-8 border-b border-gray-200 dark:border-[#242424] mb-12">
                    {['upcoming', 'past'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 relative ${activeTab === tab
                                ? 'text-[#DA6102]'
                                : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                                }`}
                        >
                            {tab} Trips
                            {activeTab === tab && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#DA6102]"></span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Bookings List */}
                <div className="space-y-8">
                    {bookings[activeTab].length > 0 ? (
                        bookings[activeTab].map((booking) => (
                            <BookingCard key={booking.id} booking={booking} />
                        ))
                    ) : (
                        <div className="text-center py-24 border border-dashed border-gray-200 dark:border-[#242424]">
                            <p className="text-gray-500 dark:text-gray-400 uppercase tracking-wide">No {activeTab} trips found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

const BookingCard = ({ booking }) => (
    <div className="relative bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#242424] p-1 transition-colors duration-300 group">
        {/* L-Corners */}
        <span className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#DA6102] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></span>
        <span className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[#DA6102] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></span>
        <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[#DA6102] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></span>
        <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#DA6102] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></span>

        <div className="bg-gray-50 dark:bg-[#111] p-6 md:p-8 border-b border-gray-200 dark:border-[#242424]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#DA6102] font-bold text-lg uppercase tracking-wide">{booking.airline}</span>
                        <span className="bg-[#DA6102]/10 text-[#DA6102] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border border-[#DA6102]/20">{booking.class}</span>
                    </div>
                    <p className="text-xs text-gray-400 font-mono uppercase tracking-wider">Booking ID: {booking.id}</p>
                </div>
                <div className="flex items-center gap-2">
                    {booking.status === 'Confirmed' && (
                        <span className="flex items-center gap-2 text-green-500 text-xs font-bold uppercase tracking-widest border border-green-500/20 px-3 py-1 bg-green-500/5 rounded-full">
                            <IconCheck className="w-3 h-3" /> Confirmed
                        </span>
                    )}
                    {booking.status === 'Completed' && (
                        <span className="text-gray-500 text-xs font-bold uppercase tracking-widest border border-gray-500/20 px-3 py-1 bg-gray-500/5 rounded-full">
                            Completed
                        </span>
                    )}
                </div>
            </div>
        </div>

        <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <p className="text-3xl font-bold text-gray-900 dark:text-white font-['Neue-Haas-Grotesk-Bold']">{booking.from.split('(')[0]}</p>
                    <p className="text-[#DA6102] font-bold uppercase tracking-wide text-xs mt-1">{booking.time}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-mono uppercase">{booking.date}</p>
                </div>

                <div className="flex flex-col items-center w-full md:w-auto">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-mono uppercase tracking-wider">{booking.flightNumber}</p>
                    <div className="flex items-center gap-2 text-[#DA6102] w-full md:w-48 justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#DA6102]"></div>
                        <div className="flex-1 h-[1px] bg-[#DA6102]/30"></div>
                        <IconArrowLongRight className="w-5 h-5" />
                    </div>
                </div>

                <div className="text-center md:text-right">
                    <p className="text-3xl font-bold text-gray-900 dark:text-white font-['Neue-Haas-Grotesk-Bold']">{booking.to.split('(')[0]}</p>
                    <p className="text-[#DA6102] font-bold uppercase tracking-wide text-xs mt-1">Arrival</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-mono uppercase">{booking.date}</p>
                </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-[#242424] flex justify-end">
                <Button variant="outline" className="text-xs" withCorners={true}>View Details</Button>
            </div>
        </div>
    </div>
);