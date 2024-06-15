// Ensure to import necessary modules and types
import { useState, useEffect } from "react";
import { FaUser, FaSignOutAlt, FaPlusCircle, FaBriefcase, FaGift } from "react-icons/fa";
import users, { User } from "@/app/data/users";
import { useRouter } from "next/router";
import { useAccount } from "@starknet-react/core";

const Dashboard = () => {
    const [user, setUser] = useState<User | null>(null); // Declare user state with null initially

    const address = useAccount();
    

    const [name, setName] = useState("");
    const params = new URLSearchParams(window.location.search);
    const username = params.get("user");    

    useEffect(() => {
     
        if (username) {
            const foundUser = users.find(u => u.username === username);
            if (foundUser) {
                console.log(foundUser)
                setUser(foundUser);
                
            }else{
                setUser({
                    username: username,
                    password: '1234',
                    address: '',
                    email: 'not available',
                    appliedJobs: ['not applied'],
                    postedJobs: ['not applied'],
                    appliedBounties: ['not applied'],
                    postedBounties: ['not applied']
                });
            } 
        } 
        
    }, []); // Depend on router to access query params on navigation changes

    const handleLogout = () => {
        // Implement logout functionality
        window.location.href = "/"; // Redirect to home or logout page
    };

    const handleCreateJob = () => {
        console.log("Create Job clicked!")
    };

    const handleCreateBounty = () => {
        console.log("Create Bounty clicked!")
    };

    const handleApplyJob = () => {
        console.log("Apply for Job clicked!")
    };

    const handleApplyBounty = () => {
        console.log("Apply for Bounty clicked!")
    };

    if (!user) return <div>Loading...</div>;

    return (
        <div className="flex min-h-screen bg-gray-100 mt-20">
            <aside className="w-64 bg-white p-4 shadow-lg flex flex-col justify-between">
                <div>
                    <div className="flex flex-col items-center mb-8">
                        <div className="mb-4">
                            <FaUser className="text-4xl text-gray-600" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-700">{name}</h2>
                        <p className="text-gray-600">{username}</p>
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
                            className="w-full flex items-center justify-center bg-green-500 text-white p-2 rounded-md hover:bg-green-600 mb-2"
                        >
                            <FaPlusCircle className="mr-2" />
                            Create Bounty
                        </button>
                        <button 
                            onClick={handleApplyJob} 
                            className="w-full flex items-center justify-center bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 mb-2"
                        >
                            <FaBriefcase className="mr-2" />
                            Search for Job
                        </button>
                        <button 
                            onClick={handleApplyBounty} 
                            className="w-full flex items-center justify-center bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600"
                        >
                            <FaGift className="mr-2" />
                            Search for Bounty
                        </button>
                    </div>
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
                    <h1 className="text-3xl font-bold text-gray-700">Dashboard</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Applied Jobs</h2>
                        <ul className="bg-white p-4 rounded-lg shadow-md">
                            {(user.appliedJobs ?? []).map((job, index) => (
                                <li key={index} className="border-b py-2 text-gray-700">{job}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Posted Jobs</h2>
                        <ul className="bg-white p-4 rounded-lg shadow-md">
                            {(user.postedJobs ?? []).map((job:any, index:any) => (
                                <li key={index} className="border-b py-2 text-gray-700">{job}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Applied Bounties</h2>
                        <ul className="bg-white p-4 rounded-lg shadow-md">
                            {(user.appliedBounties ?? []).map((bounty:any, index:any) => (
                                <li key={index} className="border-b py-2 text-gray-700">{bounty}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Posted Bounties</h2>
                        <ul className="bg-white p-4 rounded-lg shadow-md">
                            {(user.postedBounties ?? []).map((bounty:any, index:any) => (
                                <li key={index} className="border-b py-2 text-gray-700">{bounty}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
