"use client";

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Header2 = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSignIn = () => {
        setLoggedIn(true);
    };

    const handleSignOut = () => {
        setLoggedIn(false);
    };

    return (
        <div className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
            <div className="flex items-center space-x-4">
                <p className="font-bold text-lg">Seeker</p>
                <a href="#jobs" className="text-blue-500 hover:underline">Jobs</a>
                <a href="#bounties" className="text-blue-500 hover:underline">Bounties</a>
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="pl-8 pr-2 py-1 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <FaSearch className="absolute left-2 top-2 text-gray-400" />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                {loggedIn ? (
                    <button onClick={handleSignOut} className="text-red-500 hover:underline">Sign out</button>
                ) : (
                    <button onClick={handleSignIn} className="text-green-500 hover:underline">Sign in</button>
                )}
            </div>
        </div>
    );
};

export default Header2;