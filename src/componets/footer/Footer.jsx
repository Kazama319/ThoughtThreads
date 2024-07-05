import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
    return (
        <footer className="bg-gray-800 border-t-2 border-t-black">
            <div className="max-w-5xl mx-auto px-4 py-6 flex flex-wrap justify-between items-center">
                <div className="flex items-center">
                    <Logo width="100px" />
                    <p className="text-sm text-gray-100 ml-4">
                        &copy; Copyright 2023. All Rights Reserved by DevUI.<br/><br/> Made by Bhanu Pratap.
                    </p>
                </div>
                <div className="flex flex-wrap gap-8">
                    <div>
                        <h3 className="mb-2 text-xs font-semibold uppercase text-gray-500">Company</h3>
                        <ul className="text-sm text-gray-400">
                            <li>
                                <Link className="text-base font-medium text-gray-300 hover:text-gray-100" to="/features">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-gray-300 hover:text-gray-100" to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Add more sections as needed */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
