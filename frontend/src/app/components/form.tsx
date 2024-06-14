"use client";

import { FaGithub } from 'react-icons/fa';

const SignIn = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
            </div>
        </div>
    );
};

export default SignIn;
