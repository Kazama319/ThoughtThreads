import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
    return (
        <footer className="bg-gray-800 border-t-2 border-t-black">
            <div className="max-w-5xl mx-auto px-4 py-6 flex flex-wrap justify-between items-center">
<div className="flex items-center">
    <Logo width="100px" />
    <p className="text-base text-gray-100 ml-4">
        Designed and Developed by Bhanu Pratap<br/><br/>&copy; Copyright 2023-24 | All Rights Reserved
    </p>
</div>
<div className="flex flex-wrap gap-8">
    <div>
        {/* <h3 className="mb-2 text-xs font-semibold uppercase text-gray-500">Company</h3> */}
        <Link className="text-base font-medium text-gray-300 hover:text-gray-100 mb-4 mr-10" to="/features">
            Features     
        </Link>
        <Link className="text-base font-medium text-gray-300 hover:text-gray-100 mr-10" to="/about">
            About
        </Link>
    </div>
</div>
            </div>
        </footer>
    );
}

export default Footer;
