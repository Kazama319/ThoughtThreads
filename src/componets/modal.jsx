// components/ConfirmationModal.js
import React from 'react';

const ConfirmationModal = ({ show, onClose, onConfirm }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-white    ">Are you sure you want to delete this post?</h3>
                <div className="flex justify-end space-x-2">
                    <button
                        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-400"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
                        onClick={onConfirm}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
