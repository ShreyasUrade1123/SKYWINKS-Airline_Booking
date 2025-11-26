import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import SmoothScroll from './components/common/SmoothScroll.jsx';

// Pages
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import SearchResultsPage from './pages/SearchResultsPage.jsx';
import ReviewBookingPage from './pages/ReviewBookingPage.jsx';
import PaymentPage from './pages/PaymentPage.jsx';
import BookingConfirmationPage from './pages/BookingConfirmationPage.jsx';
import MyBookingsPage from './pages/MyBookingsPage.jsx';

export default function App() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <BrowserRouter>
                    <SmoothScroll>
                        {/* Fixed Logic:
                            - Light Mode (Default): bg-white text-black
                            - Dark Mode (Override): dark:bg-black dark:text-white 
                        */}
                        <div className="min-h-screen font-sans transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white">

                            <Header />

                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/signup" element={<SignupPage />} />
                                <Route path="/search" element={<SearchResultsPage />} />

                                <Route path="/book/review/:id" element={<ReviewBookingPage />} />
                                <Route path="/book/payment" element={<PaymentPage />} />
                                <Route path="/book/confirmation" element={<BookingConfirmationPage />} />

                                <Route path="/my-bookings" element={<MyBookingsPage />} />
                            </Routes>

                            <Footer />
                        </div>
                    </SmoothScroll>
                </BrowserRouter>
            </ThemeProvider>
        </AuthProvider>
    );
}