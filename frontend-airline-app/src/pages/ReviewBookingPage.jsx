import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IconArrowLongRight, IconCheck } from '../components/icons';

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
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Review Your Trip</h2>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Flight Details Card */}
                    <div className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="bg-indigo-600 p-6 text-white">
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-lg">{flight.airline}</span>
                                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">{flight.flightNumber}</span>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                                <div className="text-center md:text-left">
                                    <p className="text-3xl font-bold text-gray-900">{new Date(flight.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                    <p className="text-gray-500 font-medium">{flight.from}</p>
                                    <p className="text-xs text-gray-400 mt-1">{new Date(flight.departureTime).toLocaleDateString()}</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <p className="text-sm text-gray-400 mb-2">{flight.duration}</p>
                                    <div className="flex items-center gap-2 text-indigo-200">
                                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                                        <div className="w-24 h-[2px] bg-indigo-100"></div>
                                        <IconArrowLongRight />
                                    </div>
                                    <p className="text-xs text-indigo-600 font-bold mt-2">Direct</p>
                                </div>

                                <div className="text-center md:text-right">
                                    <p className="text-3xl font-bold text-gray-900">{new Date(flight.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                    <p className="text-gray-500 font-medium">{flight.to}</p>
                                    <p className="text-xs text-gray-400 mt-1">{new Date(flight.arrivalTime).toLocaleDateString()}</p>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-6">
                                <h4 className="font-bold text-gray-900 mb-4">Passenger Details</h4>
                                <form className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">First Name</label>
                                            <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-indigo-600" placeholder="e.g. John" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Last Name</label>
                                            <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-indigo-600" placeholder="e.g. Doe" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Address</label>
                                        <input type="email" className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-indigo-600" placeholder="john.doe@example.com" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Price Summary Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                            <h3 className="font-bold text-lg text-gray-900 mb-6">Price Breakdown</h3>

                            <div className="space-y-3 mb-6 border-b border-gray-100 pb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Base Fare (1 Traveler)</span>
                                    <span>{flight.currency}{flight.price}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Taxes & Fees</span>
                                    <span>{flight.currency}25</span>
                                </div>
                                <div className="flex justify-between text-indigo-600 text-sm">
                                    <span>Discount</span>
                                    <span>-{flight.currency}0</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-8">
                                <span className="text-lg font-bold text-gray-900">Total</span>
                                <span className="text-3xl font-bold text-indigo-600">{flight.currency}{flight.price + 25}</span>
                            </div>

                            <button
                                onClick={handleConfirmBooking}
                                className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-700 hover:shadow-indigo-200 transition-all"
                            >
                                Continue to Payment
                            </button>

                            <p className="text-xs text-gray-400 text-center mt-4">
                                By continuing, you agree to our Terms & Conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}