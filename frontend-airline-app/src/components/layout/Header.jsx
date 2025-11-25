import React, { useState, useContext, useEffect, createContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- MOCKS (DELETE THIS SECTION IN YOUR LOCAL PROJECT) ---
// We need these so the preview works without your full project structure.

// 1. Mock AuthContext
const AuthContext = createContext({
    user: null, // Change to { name: 'User' } to see logged-in state
    logout: () => alert('Logout clicked'),
});

// 2. Mock Link (Replaces react-router-dom for preview)
const Link = ({ to, children, className, onClick, style }) => (
    <a href={to} className={className} onClick={(e) => { e.preventDefault(); onClick && onClick(); }} style={style}>
        {children}
    </a>
);
// --- END MOCKS ---


// --- REAL COMPONENT STARTS HERE ---
// In your local project, uncomment these imports:
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // NEW: Dark Mode State
    const [isDarkMode, setIsDarkMode] = useState(false);

    // 1. Scroll Detection Logic
    useEffect(() => {
        const handleScroll = () => {
            // Activate blur background if scrolled more than 50px
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 2. Animation Variants (The "Video" Physics)
    const menuVars = {
        initial: { y: '-100%', opacity: 0 },
        animate: {
            y: '0%',
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1], // Custom Bézier for smooth "heavy" feel
            },
        },
        exit: {
            y: '-100%',
            opacity: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
            },
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

    // Helper to handle theme toggle
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        // In the future, you will add your global theme switch logic here
        // e.g., document.documentElement.classList.toggle('dark');
    };

    return (
        <>
            {/* HEADER BAR
                - isScrolled ? Adds blur and semi-transparent background.
                - !isScrolled ? Completely transparent.
            */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 py-6 font-sans transition-all duration-500 pointer-events-none ${isScrolled && !isMenuOpen
                    ? 'bg-white/10 backdrop-blur-lg shadow-sm supports-[backdrop-filter]:bg-white/5 border-b border-white/10'
                    : 'bg-transparent'
                    }`}
            >
                <nav className="container mx-auto px-6 md:px-24 lg:px-40 flex justify-between items-center relative">

                    {/* Left: Logo */}
                    <Link
                        to="/"
                        className={`font-extrabold text-2xl tracking-tight uppercase font-['Fluro'] relative z-[70] transition-colors duration-300 pointer-events-auto ${isMenuOpen ? 'text-white' : 'text-[#DA6102]'
                            }`}
                    >
                        SKYWINKS
                    </Link>

                    {/* Center: Menu Button (The Pill) */}
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
                                {/* THE LINE */}
                                <div className="w-35 h-[5.3px] bg-black group-hover:bg-[#DA6102] group-hover:w-45 transition-all duration-600 ease-in-out rounded-full"></div>
                                <span className="text-[12px] font-bold tracking-widest uppercase font-['Neue-Haas-Grotesk-Roman'] group-hover:text-[#DA6102] transition-colors mt-1">
                                    MENU
                                </span>
                            </motion.button>
                        )}
                    </AnimatePresence>

                    {/* Right: Login/Auth */}
                    <div className="flex items-center relative z-[70] pointer-events-auto">
                        {user ? (
                            <div className="flex items-center gap-4">
                                <Link
                                    to="/my-bookings"
                                    className={`hidden md:block font-semibold text-xs tracking-wider hover:text-[#DA6102] transition-colors uppercase ${isMenuOpen ? 'text-gray-300' : 'text-gray-600'
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
                                {/* 1. Techy Framed CONTACT Button */}
                                <div className="relative group inline-block m-1">
                                    {/* The Main Button */}
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
                                        CONTACT
                                    </Link>

                                    {/* --- L-Shaped Corners --- */}
                                    <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-[2px] border-l-[2px] border-black transition-all duration-300 group-hover:top-0 group-hover:left-0 group-hover:border-black z-20 pointer-events-none"></span>
                                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-[2px] border-r-[2px] border-black transition-all duration-300 group-hover:top-0 group-hover:right-0 group-hover:border-black z-20 pointer-events-none"></span>
                                    <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-[2px] border-l-[2px] border-black transition-all duration-300 group-hover:bottom-0 group-hover:left-0 group-hover:border-black z-20 pointer-events-none"></span>
                                    <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-[2px] border-r-[2px] border-black transition-all duration-300 group-hover:bottom-0 group-hover:right-0 group-hover:border-black z-20 pointer-events-none"></span>
                                </div>

                                {/* 2. Dark Mode Toggle (Sun/Moon Icon) */}
                                <div className="relative group inline-block m-1">
                                    <button
                                        onClick={toggleTheme}
                                        className={`
                                            relative z-10
                                            w-[36px] h-[36px] flex items-center justify-center
                                            rounded-none
                                            transition-all duration-300
                                            ${isDarkMode
                                                ? 'bg-black text-white hover:bg-gray-900' // Dark Mode Active: Black BG, White Icon
                                                : isMenuOpen
                                                    ? 'bg-white text-gray-800 hover:bg-gray-100' // Menu Open: White BG
                                                    : 'bg-white/0 backdrop-blur-md text-gray-800 hover:bg-white/10' // Default: Transparent
                                            }
                                        `}
                                    >
                                        {isDarkMode ? (
                                            /* MOON ICON */
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                            </svg>
                                        ) : (
                                            /* SUN ICON */
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                            </svg>
                                        )}
                                    </button>

                                    {/* --- L-Shaped Corners (Same animation as Contact) --- */}
                                    <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-[2px] border-l-[2px] border-black transition-all duration-300 group-hover:top-0 group-hover:left-0 group-hover:border-[#DA6102] z-20 pointer-events-none"></span>
                                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-[2px] border-r-[2px] border-black transition-all duration-300 group-hover:top-0 group-hover:right-0 group-hover:border-[#DA6102] z-20 pointer-events-none"></span>
                                    <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-[2px] border-l-[2px] border-black transition-all duration-300 group-hover:bottom-0 group-hover:left-0 group-hover:border-[#DA6102] z-20 pointer-events-none"></span>
                                    <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-[2px] border-r-[2px] border-black transition-all duration-300 group-hover:bottom-0 group-hover:right-0 group-hover:border-[#DA6102] z-20 pointer-events-none"></span>
                                </div>

                            </div>
                        )}
                    </div>
                </nav>
            </header>

            {/* MENU OVERLAY - "Half Page Curtain" */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* 1. BACKDROP (Click outside to close) */}
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
                            {/* Close Button */}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                                className="absolute top-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 group cursor-pointer z-[70]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {/* Same thin line style for consistency */}
                                <div className="w-40 h-[5.3px] bg-white group-hover:bg-[#DA6102] group-hover:w-45 transition-all duration-600 ease-in-out rounded-full"></div>
                                <span className="text-[12px] font-bold tracking-widest uppercase text-white font-['Neue-Haas-Grotesk-Roman'] group-hover:text-[#DA6102] transition-colors mt-1">
                                    CLOSE
                                </span>
                            </motion.button>

                            {/* Menu Links */}
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