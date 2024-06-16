"use client";

import { FaSearch } from 'react-icons/fa';

const Header2 = () => {
    return (
        <header className="w-full bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-1 cursor-pointer" onClick={() => window.location.href = '/'}>
                    <span className="text-2xl font-bold text-red-500">S</span>
                    <span className="text-2xl font-bold text-yellow-500">E</span>
                    <span className="text-2xl font-bold text-green-500">E</span>
                    <span className="text-2xl font-bold text-blue-500">K</span>
                    <span className="text-2xl font-bold text-purple-500">E</span>
                    <span className="text-2xl font-bold text-pink-500">R</span>
                </div>
                <nav className="flex space-x-4 text-white ml-8">
                    <a href="#jobs" className="hover:underline">Jobs</a>
                    <a href="#bounties" className="hover:underline">Bounties</a>
                </nav>
                <div className="flex items-center space-x-4 ml-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
                    </div>
                    <a href="/signin" className="text-white hover:underline">Sign In</a>
                    <a href="/signup" className="text-white hover:underline">Sign Up</a>
                </div>
            </div>
        </header>
    );
};

export default Header2;
