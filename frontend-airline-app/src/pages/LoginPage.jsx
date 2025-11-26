import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import InputField from '../components/common/InputField';
import Button from '../components/common/Button';
import { motion } from 'framer-motion';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError(err?.response?.data?.message || 'Invalid email or password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-secondary dark:bg-[#09090B] flex items-center justify-center pt-32 pb-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-[1100px] bg-white dark:bg-[#171717] rounded-none border-1 border-[#242424] shadow-2xl overflow-visible flex flex-col md:flex-row min-h-[600px] transition-colors duration-300 relative"
            >
                {/* L-Corners: Black (Light) -> White (Dark) */}
                <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-[2px] border-l-[2px] border-black dark:border-[#52525B] transition-all duration-300 z-20 pointer-events-none"></span>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-[2px] border-r-[2px] border-black dark:border-[#52525B] transition-all duration-300 z-20 pointer-events-none"></span>
                <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-[2px] border-l-[2px] border-black dark:border-[#52525B] transition-all duration-300 z-20 pointer-events-none"></span>
                <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-[2px] border-r-[2px] border-black dark:border-[#52525B] transition-all duration-300 z-20 pointer-events-none"></span>

                {/* Left Side - Image Section */}
                <div className="hidden md:block w-1/2 relative overflow-hidden group">
                    <div className="absolute inset-0 border-r-1 border-[#242424] bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                    <img
                        src="/Images/Flight_1.png"
                        alt="SkyWinks Destination"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="relative z-20 h-full flex flex-col justify-between p-12 text-white">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-8">
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </div>

                        <div>
                            <h2 className="font-fluro text-5xl mb-4 leading-tight font-[Fluro]">Explore the <br />World</h2>
                            <p className="font-helvetica-light text-xl opacity-90 max-w-xs font-[Helvetica-Neue-UltraLight]">
                                Log in to access your bookings and discover exclusive flight deals.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form Section */}
                <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white dark:bg-[#171717] transition-colors duration-300">
                    <div className="max-w-md mx-auto w-full">
                        <div className="mb-10">
                            <h1 className="font-molde-bold text-3xl text-primary dark:text-white mb-2 font-[Neue-Haas-Grotesk-Bold]">Welcome Back</h1>
                            <p className="text-gray-500 dark:text-gray-400 font-helvetica font-[Neue-Haas-Grotesk-Roman]">
                                Please enter your details to sign in.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <InputField
                                id="email"
                                label="Email Address"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <div className="space-y-2">
                                <InputField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <div className="flex justify-end">
                                    <Link
                                        to="/forgot-password"
                                        className="text-xs font-medium text-gray-500 hover:text-brand transition-colors"
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>
                            </div>

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="p-3 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {error}
                                </motion.div>
                            )}

                            <Button
                                type="submit"
                                disabled={loading}
                                variant="primary"
                                isLoading={loading}
                            >
                                {loading ? 'Signing In...' : 'Sign In'}
                            </Button>
                        </form>

                        <div className="mt-8">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-white dark:bg-[#171717] px-4 text-gray-400 dark:text-gray-500 tracking-widest transition-colors duration-300 font-[Neue-Haas-Grotesk-Roman]">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <Button variant="outline" className="font-normal normal-case dark:border-gray-700 dark:text-gray-300 dark:hover:border-brand dark:hover:text-brand">
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                    Google
                                </Button>
                                <Button variant="outline" className="font-normal normal-case dark:border-gray-700 dark:text-gray-300 dark:hover:border-brand dark:hover:text-brand">
                                    <svg className="w-5 h-5 mr-2 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                    Facebook
                                </Button>
                            </div>
                        </div>

                        <p className="mt-8 text-center text-sm text-gray-500 font-[Neue-Haas-Grotesk-Roman]">
                            Don't have an account?{' '}
                            <Link to="/signup" className="font-semibold text-brand text-[#DA6102] hover:underline transition-all font-[Neue-Haas-Grotesk-Bold]">
                                Create account
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;