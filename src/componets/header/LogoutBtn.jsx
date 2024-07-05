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
            className={`px-4 py-2 rounded-lg text-gray-300 transition duration-200 hover:bg-gray-700 hover:text-white ${className}`}
            style={{ width: width }}
            onClick={logoutHandler}
            disabled={loading} // Disable button when loading
        >
            {loading ? 'Logging out...' : 'Logout'}
        </button>
    );
}

export default LogoutBtn;
