import { useState } from 'react';
import Image from 'next/image';

const Pop = () => {
    const [showModal, setShowModal] = useState(true);

    const handleLogin = () => {
        window.location.href = '/signin';
    };

    const handleSignup = () => {
        window.location.href = '/signup';
    };

    const handleBack = () => {
        window.location.href = '/';
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign In to Interact</h2>
                <p className="mb-4 text-gray-600">Please sign in to interact with the Seeker job boards.</p>
                <div className="mb-4">
                    <Image 
                        src="/myimages/world3.jpg" 
                        alt="Interaction Prompt" 
                        width={128} 
                        height={128} 
                        className="mx-auto rounded-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <button 
                        onClick={handleLogin} 
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                        Login
                    </button>
                    <button 
                        onClick={handleSignup} 
                        className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                    >
                        Signup
                    </button>
                    <button 
                        onClick={handleBack} 
                        className="w-full bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pop;
