"use client";

import Image from "next/image";

import { useState } from "react";

const Seeker = () => {
    
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

  

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="mb-8">
                <button
                    className="focus:outline-none"
                    aria-label="Go to Jobs"
                >
                    <Image
                        src="/myimages/main.jpg" // Replace with your actual image path
                        alt="Seeker Main Image"
                        width={800}
                        height={400}
                        className="rounded-lg shadow-lg cursor-pointer"
                        onLoad={handleImageLoad} // Handle image load event
                    />
                </button>
            </div>
            <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-600">
                    Discover Opportunities in the Starknet Ecosystem
                </h1>
                <p className="text-lg md:text-xl text-gray-700">
                    Explore diverse job listings and bounties. Post your own opportunities
                    and contribute to the growth of the Starknet community.
                </p>
            </div>
        </div>
    );
};

export default Seeker;
