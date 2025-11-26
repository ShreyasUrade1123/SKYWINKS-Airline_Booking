import React from 'react';
import { Link } from 'react-router-dom';
import { IconCheck } from '../components/icons';
import Button from '../components/common/Button';

export default function BookingConfirmationPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#09090B] flex items-center justify-center px-4 md:px-8 lg:px-12 transition-colors duration-300 font-['Neue-Haas-Grotesk-Roman']">
            <div className="max-w-lg w-full">
                <div className="flex items-center gap-2 mb-6 justify-center">
                    <span className="w-1.5 h-1.5 bg-[#DA6102] rounded-full animate-pulse"></span>
                    <p className="text-[#DA6102] text-xs font-mono uppercase tracking-widest">SYS: BOOKING_CONFIRMED</p>
                </div>

                <div className="relative bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#242424] p-1 transition-colors duration-300">
                    {/* L-Corners */}
                    <span className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#DA6102] z-20"></span>
                    <span className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[#DA6102] z-20"></span>
                    <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[#DA6102] z-20"></span>
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#DA6102] z-20"></span>

                    <div className="p-12 text-center">
                        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-[#DA6102]/10 border border-[#DA6102]/20 mb-8 relative">
                            <div className="absolute inset-0 rounded-full border border-[#DA6102] opacity-20 animate-ping"></div>
                            <IconCheck className="h-10 w-10 text-[#DA6102]" />
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-['Neue-Haas-Grotesk-Bold'] uppercase tracking-tight">Booking Confirmed!</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-10 text-sm uppercase tracking-wide">Your trip is all set. We've sent a confirmation email to your inbox.</p>

                        <div className="space-y-4">
                            <Link to="/my-bookings" className="block w-full">
                                <Button variant="primary" className="w-full justify-center" withCorners={true}>View My Trips</Button>
                            </Link>
                            <Link to="/" className="block w-full">
                                <Button variant="outline" className="w-full justify-center" withCorners={true}>Back to Home</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}