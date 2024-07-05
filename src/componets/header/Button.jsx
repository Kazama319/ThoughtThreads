import React from "react";

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    hoverColor = 'hover:bg-blue-700',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    return (
        <button
            type={type}
            className={`px-6 py-3 rounded-lg ${bgColor} ${hoverColor} ${textColor} ${className} transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
