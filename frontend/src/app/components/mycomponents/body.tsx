"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../Main.module.css"; // Create a CSS module for custom styles

const Welcome = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setImageLoaded(true);
    }, []);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <main className={`relative overflow-hidden ${styles.main}`}>
            <div className={`absolute inset-0 ${imageLoaded ? styles.fadeIn : "opacity-0"}`}>
                <Image
                    src="/myimages/world1.jpg" // Ensure the path is correct and the file extension is jpg
                    alt="World Background"
                    layout="fill"
                    className="z-0"
                    onLoad={handleImageLoad} // Use onLoad instead of onLoadingComplete
                />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center p-4 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    <span className="text-red-500">The </span>
                    <span className="text-yellow-500">Seeker </span>
                    <span className="text-green-500">Starknet </span>
                    <span className="text-blue-500">Job </span>
                    <span className="text-purple-500">Boards</span>
                </h1>
                <p className="text-lg md:text-2xl mb-6">
                    Welcome to the Seeker Starknet job boards. Explore jobs, find bounties, or create your own opportunities in the Starknet ecosystem.
                </p>
                <div className="flex space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300 ease-in-out">
                        Search Jobs
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 transition duration-300 ease-in-out">
                        Search Bounties
                    </button>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700 transition duration-300 ease-in-out">
                        Post a Job
                    </button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700 transition duration-300 ease-in-out">
                        Post a Bounty
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Welcome;
