import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IconArrowLongRight, IconCheck } from '../components/icons';
import Button from '../components/common/Button';
import InputField from '../components/common/InputField';

export default function ReviewBookingPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [flight, setFlight] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching flight details
        setTimeout(() => {
            // Mock Data matching the ID or generic
            setFlight({
                id: id,
                airline: 'SkyWinks Airlines',
                flightNumber: 'SW-101',
                departureTime: '2025-11-25T08:00:00',
                arrivalTime: '2025-11-25T11:00:00',
                from: 'Jakarta (CGK)',
                to: 'Singapore (SIN)',
                duration: '3h 00m',
                price: 150,
                currency: '$'
            });
            setLoading(false);
        }, 800);
    }, [id]);

    const handleConfirmBooking = () => {
        // Simulate booking creation
        const mockBookingId = 'BK-' + Math.floor(Math.random() * 10000);

        navigate('/book/payment', {
            state: {
                bookingId: mockBookingId,
                totalCost: flight.price
            }
        });
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#09090B]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#DA6102]"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#09090B] py-32 px-4 md:px-8 lg:px-12 transition-colors duration-300 font-['Neue-Haas-Grotesk-Roman']">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-1.5 bg-[#DA6102] rounded-full animate-pulse"></span>
                    <p className="text-[#DA6102] text-xs font-mono uppercase tracking-widest">SYS: REVIEW_TRIP</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 font-['Neue-Haas-Grotesk-Bold'] uppercase tracking-tight">Review Your Trip</h2>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Flight Details Card */}
                    <div className="flex-1 relative bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#242424] p-1 transition-colors duration-300">
                        {/* L-Corners */}
                        <span className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#DA6102] z-20"></span>
                        <span className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[#DA6102] z-20"></span>
                        <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[#DA6102] z-20"></span>
                        <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#DA6102] z-20"></span>

                        <div className="bg-gray-50 dark:bg-[#111] p-6 border-b border-gray-200 dark:border-[#242424]">
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-lg text-gray-900 dark:text-white uppercase tracking-wide">{flight.airline}</span>
                                <span className="bg-[#DA6102]/10 text-[#DA6102] px-3 py-1 text-xs font-mono uppercase tracking-wider border border-[#DA6102]/20">{flight.flightNumber}</span>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                                <div className="text-center md:text-left">
                                    <p className="text-4xl font-bold text-gray-900 dark:text-white font-['Neue-Haas-Grotesk-Bold']">{new Date(flight.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                    <p className="text-[#DA6102] font-bold uppercase tracking-wide text-sm mt-1">{flight.from}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-mono uppercase">{new Date(flight.departureTime).toLocaleDateString()}</p>
                                </div>

                                <div className="flex flex-col items-center w-full md:w-auto">
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-mono uppercase tracking-wider">{flight.duration}</p>
                                    <div className="flex items-center gap-2 text-[#DA6102] w-full md:w-48 justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#DA6102]"></div>
                                        <div className="flex-1 h-[1px] bg-[#DA6102]/30"></div>
                                        <IconArrowLongRight className="w-5 h-5" />
                                    </div>
                                    <p className="text-xs text-[#DA6102] font-bold mt-2 uppercase tracking-widest">Direct</p>
                                </div>

                                <div className="text-center md:text-right">
                                    <p className="text-4xl font-bold text-gray-900 dark:text-white font-['Neue-Haas-Grotesk-Bold']">{new Date(flight.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                    <p className="text-[#DA6102] font-bold uppercase tracking-wide text-sm mt-1">{flight.to}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-mono uppercase">{new Date(flight.arrivalTime).toLocaleDateString()}</p>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 dark:border-[#242424] pt-8">
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="text-[#DA6102] text-xs font-mono tracking-widest uppercase">SYS: PASSENGER_DATA</span>
                                </div>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <InputField
                                            label="First Name"
                                            type="text"
                                            placeholder="e.g. John"
                                        />
                                        <InputField
                                            label="Last Name"
                                            type="text"
                                            placeholder="e.g. Doe"
                                        />
                                    </div>
                                    <InputField
                                        label="Email Address"
                                        type="email"
                                        placeholder="john.doe@example.com"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Price Summary Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="relative bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#242424] p-6 sticky top-32 transition-colors duration-300">
                            {/* L-Corners */}
                            <span className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#DA6102] z-20"></span>
                            <span className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[#DA6102] z-20"></span>
                            <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[#DA6102] z-20"></span>
                            <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#DA6102] z-20"></span>

                            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-6 uppercase tracking-wide font-['Neue-Haas-Grotesk-Bold']">Price Breakdown</h3>

                            <div className="space-y-4 mb-6 border-b border-gray-200 dark:border-[#242424] pb-6">
                                <div className="flex justify-between text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wide">
                                    <span>Base Fare (1 Traveler)</span>
                                    <span className="font-mono text-gray-900 dark:text-white">{flight.currency}{flight.price}</span>
                                </div>
                                <div className="flex justify-between text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wide">
                                    <span>Taxes & Fees</span>
                                    <span className="font-mono text-gray-900 dark:text-white">{flight.currency}25</span>
                                </div>
                                <div className="flex justify-between text-[#DA6102] text-sm uppercase tracking-wide">
                                    <span>Discount</span>
                                    <span className="font-mono">-{flight.currency}0</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-8">
                                <span className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wide">Total</span>
                                <span className="text-3xl font-bold text-[#DA6102] font-['Neue-Haas-Grotesk-Bold']">{flight.currency}{flight.price + 25}</span>
                            </div>

                            <Button
                                variant="primary"
                                onClick={handleConfirmBooking}
                                className="w-full justify-center"
                                withCorners={true}
                            >
                                Continue to Payment
                            </Button>

                            <p className="text-[10px] text-gray-400 dark:text-gray-600 text-center mt-4 uppercase tracking-wider">
                                By continuing, you agree to our Terms & Conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}