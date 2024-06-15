"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaSignOutAlt, FaPlusCircle } from "react-icons/fa";

const Dashboard = () => {
    const [user] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        appliedJobs: ["Fullstack Developer", "Backend Developer"],
        postedJobs: ["Frontend Developer", "Starknet Engineer"],
        appliedBounties: ["Cairo Developer Bounty"],
        postedBounties: ["Starknet Integration Bounty"]
    });

    const handleLogout = () => {
        // Implement logout functionality
        window.location.href = "/";
    };

    const handleCreateJob = () => {
        console.log("You clicked!");
    };

    const handleCreateBounty = () => {
        console.log("You clicked!");
    };

    return (
        <div className="flex min-h-screen bg-gray-200">
            <aside className="w-64 bg-white p-4 shadow-lg">
                <div className="flex flex-col items-center mb-8">
                    <div className="mb-4">
                        <FaUser className="text-4xl text-gray-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-700">{user.name}</h2>
                    <p className="text-gray-500">{user.email}</p>
                </div>
                <div className="mb-6">
                    <button 
                        onClick={handleCreateJob} 
                        className="w-full flex items-center justify-center bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mb-2"
                    >
                        <FaPlusCircle className="mr-2" />
                        Create Job
                    </button>
                    <button 
                        onClick={handleCreateBounty} 
                        className="w-full flex items-center justify-center bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                    >
                        <FaPlusCircle className="mr-2" />
                        Create Bounty
                    </button>
                </div>
                <button 
                    onClick={handleLogout} 
                    className="w-full flex items-center justify-center bg-red-500 text-white p-2 rounded-md hover:bg-red-600 mt-auto"
                >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                </button>
            </aside>
            <main className="flex-1 p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Applied Jobs</h2>
                        <ul className="bg-white p-4 rounded-lg shadow-md text-gray-700">
                            {user.appliedJobs.map((job, index) => (
                                <li key={index} className="border-b py-2">{job}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Posted Jobs</h2>
                        <ul className="bg-white p-4 rounded-lg shadow-md text-gray-700">
                            {user.postedJobs.map((job, index) => (
                                <li key={index} className="border-b py-2">{job}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Applied Bounties</h2>
                        <ul className="bg-white p-4 rounded-lg shadow-md text-gray-700">
                            {user.appliedBounties.map((bounty, index) => (
                                <li key={index} className="border-b py-2">{bounty}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Posted Bounties</h2>
                        <ul className="bg-white p-4 rounded-lg shadow-md text-gray-700">
                            {user.postedBounties.map((bounty, index) => (
                                <li key={index} className="border-b py-2">{bounty}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
