import React from 'react';

const Button = ({ children, type = "button", onClick, variant = "primary", className = "", disabled, icon, isLoading, withCorners }) => {
    const baseStyle = "w-full py-3.5 px-6 rounded-none font-molde-bold uppercase tracking-widest text-sm transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed relative group";

    const variants = {
        // UPDATED PRIMARY VARIANT:
        // 1. border-transparent: Invisible border by default prevents layout shift
        // 2. hover:border-orange-300/50: Adds the sharp "Rim Light" edge on hover
        // 3. hover:shadow-[...]: Adds the Outer Orange Glow (30px) + Inner White Glow (20px)
        primary: "bg-[#FF7222] border-[0.3px] border-[#FF8904] text-black hover:border-[#FF8904]/20 hover:shadow-[0_0_15px_#FF8904/20,inset_0_0_5px_#FF8904] z-10",

        outline: "border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-brand hover:text-brand bg-transparent",
        google: "bg-white dark:bg-[#262626] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-helvetica normal-case tracking-normal"
    };

    // Default withCorners to true for primary variant if not explicitly set
    const showCorners = withCorners !== undefined ? withCorners : variant === 'primary';

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || isLoading}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {/* --- NEW: THE GRADIENT GLOW LAYER --- */}
            {variant === 'primary' && (
                <div className="absolute -inset-1 bg-gradient-to-r from-[#DA6102] via-[#FF8904] to-[#DA6102] rounded-none opacity-0 group-hover:opacity-70 blur-md transition duration-500 group-hover:duration-200 -z-10"></div>
            )}

            {showCorners && (
                <>
                    <span className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t-[1px] border-l-[1px] border-black dark:border-white transition-all duration-300 group-hover:top-0 group-hover:left-0 group-hover:border-black dark:group-hover:border-white z-20 pointer-events-none"></span>
                    <span className="absolute -top-1 -right-1 w-1.5 h-1.5 border-t-[1px] border-r-[1px] border-black dark:border-white transition-all duration-300 group-hover:top-0 group-hover:right-0 group-hover:border-black dark:group-hover:border-white z-20 pointer-events-none"></span>
                    <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border-b-[1px] border-l-[1px] border-black dark:border-white transition-all duration-300 group-hover:bottom-0 group-hover:left-0 group-hover:border-black dark:group-hover:border-white z-20 pointer-events-none"></span>
                    <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b-[1px] border-r-[1px] border-black dark:border-white transition-all duration-300 group-hover:bottom-0 group-hover:right-0 group-hover:border-black dark:group-hover:border-white z-20 pointer-events-none"></span>
                </>
            )}

            {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : (
                <>
                    {icon && <span className="w-5 h-5">{icon}</span>}
                    {children}
                </>
            )}
        </button>
    );
};

export default Button;