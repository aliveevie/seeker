"use client";

import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import users from '@/app/data/users';
// import router from 'next/router';
import { useRouter } from 'next/navigation';


const SignIn = () => {

    const router = useRouter()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [app, setApp] = useState(false);
    const [invalid, setInvalid] = useState("");

    const handleUsernameChange = (e:any) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e:any) => {
        setPassword(e.target.value);
    };

    const handleClose = () => {
        // Handle close action here, e.g., navigate back, close modal, etc.
      
    };

    const handleSubmit = (e:any) => {
        e.preventDefault(); // Prevent the default form submission
        for (const user of users) {
            if (user.username === username) {
                router.replace(`profile?user=${username}`); // Use Next.js router for navigation
                return;
            }
        }
       setInvalid("User not Found")
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-80 relative">
                <a href='/' >
                <button 
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={handleClose}
                >
                    <IoClose size={24} />
                </button>
                </a>
               
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input 
                            type="text" 
                            id="username"
                            name="username" 
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder="Enter your username"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input 
                            type="password" 
                            id="email" 
                            name="password"
                            value={password}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button 
                        onClick={handleSubmit}
                        type="submit" 
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
                    >
                        Sign In
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <button 
                        className="w-full bg-gray-900 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-700 flex items-center justify-center"
                    >
                        <FaGithub className="mr-2" />
                        Sign in with GitHub
                    </button>
                </div>
                <p className='text-black' >{invalid}</p>
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">Don't have an account?</p>
                    <a href="/signup" className="text-blue-500 hover:underline">Create an account</a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
