import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SearchResultsPage from './pages/SearchResultsPage';
import ReviewBookingPage from './pages/ReviewBookingPage';
import PaymentPage from './pages/PaymentPage';
import BookingConfirmationPage from './pages/BookingConfirmationPage';
import MyBookingsPage from './pages/MyBookingsPage';

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="min-h-screen font-sans transition-colors duration-300">
                    {/* Header stays consistent across pages */}
                    <Header />

                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/search" element={<SearchResultsPage />} />

                        {/* Booking Flow */}
                        <Route path="/book/review/:id" element={<ReviewBookingPage />} />
                        <Route path="/book/payment" element={<PaymentPage />} />
                        <Route path="/book/confirmation" element={<BookingConfirmationPage />} />

                        {/* Protected Pages */}
                        <Route path="/my-bookings" element={<MyBookingsPage />} />
                    </Routes>

                    <Footer />
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}