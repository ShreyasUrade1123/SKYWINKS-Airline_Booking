import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthContext } from '../../context/AuthContext.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';

const Header = () => {
    const { user, logout } = useContext(AuthContext) || {};
    const { theme, toggleTheme } = useTheme();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuVars = {
        initial: { y: '-100%', opacity: 0 },
        animate: {
            y: '0%',
            opacity: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
        exit: {
            y: '-100%',
            opacity: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
        },
    };

    const containerVars = {
        initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
        open: { transition: { delayChildren: 0.2, staggerChildren: 0.09, staggerDirection: 1 } },
    };

    const linkVars = {
        initial: { y: '30vh', transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
        open: { y: 0, transition: { ease: [0, 0.55, 0.45, 1], duration: 0.7 } },
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 py-6 font-sans border-b border-black dark:border-white/30 transition-all duration-500 pointer-events-none ${isScrolled && !isMenuOpen
                    ? 'bg-white/10 dark:bg-black/30 backdrop-blur-lg shadow-sm'
                    : 'bg-transparent'
                    }`}
            >
                <nav className="container mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center relative">

                    <Link
                        to="/"
                        className={`font-extrabold text-2xl tracking-tight uppercase font-['Fluro'] relative z-[70] transition-colors duration-300 pointer-events-auto ${isMenuOpen ? 'text-white' : 'text-[#DA6102]'
                            }`}
                    >
                        SKYWINKS
                    </Link>

                    <AnimatePresence>
                        {!isMenuOpen && (
                            <motion.button
                                key="menu-btn"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 group z-50 pointer-events-auto"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                {/* Menu Pill: Black (Light) -> White (Dark) */}
                                <div className="w-35 h-[5.3px] bg-black dark:bg-white group-hover:bg-[#DA6102] group-hover:w-45 transition-all duration-600 ease-in-out rounded-full"></div>

                                <span className="text-[12px] font-bold tracking-widest uppercase font-['Neue-Haas-Grotesk-Roman'] text-black dark:text-white group-hover:text-[#DA6102] transition-colors mt-1">
                                    MENU
                                </span>
                            </motion.button>
                        )}
                    </AnimatePresence>

                    <div className="flex items-center relative z-[70] pointer-events-auto">
                        {user ? (
                            <div className="flex items-center gap-4">
                                <Link
                                    to="/my-bookings"
                                    className={`hidden md:block font-semibold text-xs tracking-wider hover:text-[#DA6102] transition-colors uppercase ${isMenuOpen ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'
                                        }`}
                                >
                                    My Trips
                                </Link>
                                <button
                                    onClick={logout}
                                    className="bg-[#DA6102] text-white px-8 py-2.5 rounded-full font-bold text-xs tracking-wider shadow-lg hover:bg-indigo-600 transition-all duration-300 uppercase"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-4">
                                <div className="relative group inline-block m-1">
                                    <Link
                                        to="/login"
                                        className={`
                                            relative z-10 block
                                            bg-[#FF853C] text-black 
                                            px-6 py-2.5 
                                            text-[11px] font-bold tracking-widest uppercase 
                                            hover:bg-[#ff7222] transition-colors duration-300 
                                            shadow-sm rounded-none
                                        `}
                                    >
                                        LOGIN
                                    </Link>

                                    {/* L-Corners: Black (Light) -> White (Dark) */}
                                    <span className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t-[1px] border-l-[1px] border-black dark:border-white transition-all duration-300 group-hover:top-0 group-hover:left-0 group-hover:border-black dark:group-hover:border-white z-20 pointer-events-none"></span>
                                    <span className="absolute -top-1 -right-1 w-1.5 h-1.5 border-t-[1px] border-r-[1px] border-black dark:border-white transition-all duration-300 group-hover:top-0 group-hover:right-0 group-hover:border-black dark:group-hover:border-white z-20 pointer-events-none"></span>
                                    <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border-b-[1px] border-l-[1px] border-black dark:border-white transition-all duration-300 group-hover:bottom-0 group-hover:left-0 group-hover:border-black dark:group-hover:border-white z-20 pointer-events-none"></span>
                                    <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b-[1px] border-r-[1px] border-black dark:border-white transition-all duration-300 group-hover:bottom-0 group-hover:right-0 group-hover:border-black dark:group-hover:border-white z-20 pointer-events-none"></span>
                                </div>

                                <div className="relative group inline-block m-1">
                                    <button
                                        className={`
                                            relative z-10
                                            w-[36px] h-[36px] flex items-center justify-center 
                                            rounded-none
                                            transition-all duration-300
                                            ${isMenuOpen
                                                ? 'bg-white text-black hover:bg-gray-200'
                                                : 'bg-white/0 backdrop-blur-md text-black dark:text-white hover:bg-white/0'
                                            }
                                        `}
                                        onClick={toggleTheme}
                                    >
                                        {theme === 'dark' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                            </svg>
                                        )}
                                    </button>

                                    <span className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t-[1px] border-l-[1px] border-black dark:border-white transition-all duration-300 group-hover:top-0 group-hover:left-0 group-hover:border-[#DA6102] z-20 pointer-events-none"></span>
                                    <span className="absolute -top-1 -right-1 w-1.5 h-1.5 border-t-[1px] border-r-[1px] border-black dark:border-white transition-all duration-300 group-hover:top-0 group-hover:right-0 group-hover:border-[#DA6102] z-20 pointer-events-none"></span>
                                    <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border-b-[1px] border-l-[1px] border-black dark:border-white transition-all duration-300 group-hover:bottom-0 group-hover:left-0 group-hover:border-[#DA6102] z-20 pointer-events-none"></span>
                                    <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b-[1px] border-r-[1px] border-black dark:border-white transition-all duration-300 group-hover:bottom-0 group-hover:right-0 group-hover:border-[#DA6102] z-20 pointer-events-none"></span>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </header>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[55] cursor-default"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        <motion.div
                            key="menu-overlay"
                            variants={menuVars}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="fixed top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-black/90 via-black/80 to-black/40 backdrop-blur-2xl backdrop-saturate-150 z-[60] flex flex-col items-center justify-center origin-top rounded-b-[3rem] shadow-2xl overflow-hidden border-b border-white/10"
                        >
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                                className="absolute top-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 group cursor-pointer z-[70]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <div className="w-40 h-[5.3px] bg-white group-hover:bg-[#DA6102] group-hover:w-45 transition-all duration-600 ease-in-out rounded-full"></div>
                                <span className="text-[12px] font-bold tracking-widest uppercase text-white font-['Neue-Haas-Grotesk-Roman'] group-hover:text-[#DA6102] transition-colors mt-1">
                                    CLOSE
                                </span>
                            </motion.button>

                            <motion.div
                                variants={containerVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className="flex flex-col items-center gap-4 text-center mt-4"
                            >
                                {['HOME', 'ABOUT ME', 'PROJECTS', 'PLAYGROUND', 'CONTACT'].map((item, index) => (
                                    <div key={index} className="overflow-hidden">
                                        <motion.div variants={linkVars}>
                                            <Link
                                                to={
                                                    item === 'HOME'
                                                        ? '/'
                                                        : item === 'ABOUT ME'
                                                            ? '/#about'
                                                            : item === 'PROJECTS'
                                                                ? '/#destinations'
                                                                : item === 'PLAYGROUND'
                                                                    ? '/#blog'
                                                                    : '/#contact'
                                                }
                                                className="text-4xl md:text-5xl font-bold text-white hover:text-[#DA6102] transition-colors font-['Neue-Haas-Grotesk-Roman'] uppercase tracking-tight block"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {item}
                                            </Link>
                                        </motion.div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;