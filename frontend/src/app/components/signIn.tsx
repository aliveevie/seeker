"use client";

import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleUsernameChange = (e:any) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e:any) => {
        setEmail(e.target.value);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input 
                            type="text" 
                            id="username" 
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder="Enter your username"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button 
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
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">Don't have an account?</p>
                    <a href="/signup" className="text-blue-500 hover:underline">Create an account</a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;