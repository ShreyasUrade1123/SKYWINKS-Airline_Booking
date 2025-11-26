import React from 'react';

const InputField = ({ label, id, type = 'text', placeholder, value, onChange, required, error }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            {label && (
                <label
                    htmlFor={id}
                    className="text-xs font-[Neue-Haas-Grotesk-Bold] uppercase tracking-wider text-gray-500 dark:text-gray-400"
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={`
                    w-full px-4 py-3.5 rounded-none bg-gray-50 dark:bg-[#18181B] border  
                    ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 dark:border-[#808080] focus:border-brand focus:ring-brand/20'}
                    focus:ring-4 outline-none transition-all duration-200
                    font-[Neue-Haas-Grotesk-Roman] text-primary dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                `}
            />
            {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
        </div>
    );
};

export default InputField;