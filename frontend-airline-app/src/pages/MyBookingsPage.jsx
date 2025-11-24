import React from 'react';

export default function MyBookingsPage() {
    // In the future, use useEffect to fetch bookings from /api/v1/bookings/me
    return (
        <div className="container mx-auto px-6 py-12 min-h-screen">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Trips</h2>
            <div className="bg-white rounded-xl shadow p-8 text-center">
                <p className="text-gray-500 text-lg">You have no upcoming trips.</p>
                <p className="text-sm text-gray-400 mt-2">(Backend integration for 'Get My Bookings' coming soon)</p>
            </div>
        </div>
    );
}