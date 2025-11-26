import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconCheck } from '../components/icons';
import Button from '../components/common/Button';
import InputField from '../components/common/InputField';

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
        <div className="min-h-screen bg-gray-50 dark:bg-[#09090B] py-32 px-4 md:px-8 lg:px-12 transition-colors duration-300 font-['Neue-Haas-Grotesk-Roman']">
            <div className="max-w-lg mx-auto">
                <div className="flex items-center gap-2 mb-6 justify-center">
                    <span className="w-1.5 h-1.5 bg-[#DA6102] rounded-full animate-pulse"></span>
                    <p className="text-[#DA6102] text-xs font-mono uppercase tracking-widest">SYS: PAYMENT_GATEWAY</p>
                </div>

                <div className="relative bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#242424] p-1 transition-colors duration-300">
                    {/* L-Corners */}
                    <span className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#DA6102] z-20"></span>
                    <span className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[#DA6102] z-20"></span>
                    <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[#DA6102] z-20"></span>
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#DA6102] z-20"></span>

                    <div className="bg-gray-50 dark:bg-[#111] p-8 text-center border-b border-gray-200 dark:border-[#242424]">
                        <p className="text-gray-400 text-xs uppercase tracking-widest mb-2 font-mono">Total Amount Due</p>
                        <p className="text-5xl font-bold text-gray-900 dark:text-white font-['Neue-Haas-Grotesk-Bold']">${totalCost}</p>
                        <div className="inline-block mt-4 px-3 py-1 bg-[#DA6102]/10 border border-[#DA6102]/20 rounded-none">
                            <p className="text-[10px] text-[#DA6102] font-mono uppercase tracking-wider">Booking Ref: {bookingId}</p>
                        </div>
                    </div>

                    <div className="p-8">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-8 uppercase tracking-wide font-['Neue-Haas-Grotesk-Bold'] text-center">Payment Details</h3>

                        <form onSubmit={handlePayment} className="space-y-6">
                            <InputField
                                label="Card Number"
                                name="cardNumber"
                                type="text"
                                placeholder="0000 0000 0000 0000"
                                onChange={handleInputChange}
                                required
                            />

                            <InputField
                                label="Card Holder Name"
                                name="cardHolder"
                                type="text"
                                placeholder="JOHN DOE"
                                onChange={handleInputChange}
                                required
                            />

                            <div className="grid grid-cols-2 gap-6">
                                <InputField
                                    label="Expiry Date"
                                    name="expiry"
                                    type="text"
                                    placeholder="MM/YY"
                                    onChange={handleInputChange}
                                    required
                                />
                                <InputField
                                    label="CVC"
                                    name="cvc"
                                    type="text"
                                    placeholder="123"
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                disabled={loading}
                                className="w-full justify-center mt-4"
                                withCorners={true}
                            >
                                {loading ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Processing...</span>
                                    </div>
                                ) : (
                                    <>Pay Now</>
                                )}
                            </Button>
                        </form>

                        <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-gray-400 uppercase tracking-wider">
                            <IconCheck className="w-3 h-3 text-[#DA6102]" /> <span>Secure SSL Encrypted Payment</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;