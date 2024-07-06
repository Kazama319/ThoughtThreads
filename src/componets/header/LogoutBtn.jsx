import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import authService from "../../appwrite/auth";

function LogoutBtn({ width = '100px', className }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const logoutHandler = () => {
        setLoading(true); // Set loading state on click
        authService.logout().then(() => {
            dispatch(logout());
            setLoading(false); // Reset loading state after logout
        }).catch((error) => {
            console.error('Logout failed:', error);
            setLoading(false); // Reset loading state on error
        });
    };

    return (
        <button
            className={`flex items-center justify-center px-4 py-2 rounded-lg text-gray-300 transition duration-200 hover:bg-gray-700 hover:text-white ${className}`}
            style={{ width: width }}
            onClick={logoutHandler}
            disabled={loading} // Disable button when loading
        >
            {loading ? 'Logging out...' : 'Logout'}
            {!loading && (
                <svg 
                    className="ml-2 w-8 h-8 text-red-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h5a3 3 0 013 3v1" />
                </svg>
            )}
        </button>
    );
}

export default LogoutBtn;
