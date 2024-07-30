// components/ConfirmationModal.js
import React from 'react';

const Modal2 = ({ show, onClose, onConfirm, message }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg text-white font-semibold mb-4">{message}</h3>
                <div className="flex justify-end space-x-2">
                    <button
                        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-400"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                        onClick={onConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal2;
