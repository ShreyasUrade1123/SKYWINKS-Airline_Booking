import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconCheck } from '../components/icons';

const PaymentPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { bookingId, totalCost } = location.state || { bookingId: 'TEST-123', totalCost: 175 };

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        cardNumber: '',
        cardHolder: '',
        expiry: '',
        cvc: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePayment = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate payment processing
        setTimeout(() => {
            setLoading(false);
            navigate('/book/confirmation');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gray-900 p-8 text-white text-center">
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Total Amount</p>
                    <p className="text-4xl font-bold">${totalCost}</p>
                    <p className="text-xs text-gray-500 mt-2">Booking ID: {bookingId}</p>
                </div>

                <div className="p-8">
                    <h3 className="font-bold text-gray-900 mb-6">Payment Details</h3>

                    <form onSubmit={handlePayment} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Card Number</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder="0000 0000 0000 0000"
                                    className="w-full border border-gray-200 rounded-lg p-3 pl-12 focus:outline-none focus:border-indigo-600 font-mono"
                                    onChange={handleInputChange}
                                    required
                                />
                                <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Card Holder Name</label>
                            <input
                                type="text"
                                name="cardHolder"
                                placeholder="JOHN DOE"
                                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-indigo-600 uppercase"
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Expiry Date</label>
                                <input
                                    type="text"
                                    name="expiry"
                                    placeholder="MM/YY"
                                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-indigo-600"
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">CVC</label>
                                <input
                                    type="text"
                                    name="cvc"
                                    placeholder="123"
                                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-indigo-600"
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-700 hover:shadow-indigo-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>Processing...</>
                            ) : (
                                <>Pay ${totalCost}</>
                            )}
                        </button>
                    </form>

                    <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
                        <IconCheck /> <span>Secure SSL Encrypted Payment</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;