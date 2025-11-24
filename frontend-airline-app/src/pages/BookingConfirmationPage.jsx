import React from 'react';
import { Link } from 'react-router-dom';

export default function BookingConfirmationPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-6 text-center">
            <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-lg">
                <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
                    <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
                <p className="text-gray-500 mb-8">Your trip is all set. We've sent a confirmation email to your inbox.</p>
                
                <div className="space-y-3">
                    <Link to="/my-bookings" className="block w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700">View My Trips</Link>
                    <Link to="/" className="block w-full py-3 bg-white border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}