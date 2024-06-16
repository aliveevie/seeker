"use client";

import { FaSearch } from 'react-icons/fa';
import Pop from './Pop';
import { useState } from 'react';

const Header2 = () => {
    const [modal, setModal] = useState(false);

    function handleBack(){
        setModal(false)
    }

    const handleModal = () => {
        setModal(true);
    };

    return (
        <>
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
                        <button className="hover:underline focus:outline-none" onClick={handleModal}>
                            Jobs
                        </button>
                        <button className="hover:underline focus:outline-none" onClick={handleModal}>
                            Bounties
                        </button>
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
            {modal && <Pop handleBack={handleBack} />}
        </>
    );
};

export default Header2;