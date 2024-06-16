"use client";

import {
    useAccount,
    useDisconnect,
    useStarkName,
    useStarkProfile,
  } from "@starknet-react/core";
import Header from "../Header";
import Dashboard from "./dashboard";


import Image from "next/image";

const Profile = () => {
    const { account, address, status } = useAccount();

    return (

       <>
        <Header />
       
        <div>
                {!account ? (
                    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-20">
           
           
                    <div className="text-center text-white mb-8">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-bounce">Welcome to Seeker</h1>
                        <p className="text-lg md:text-2xl font-light">
                            Connect your wallet to explore an array of opportunities in the Starknet ecosystem!
                        </p>
                    </div>
                    <div className="mb-8">
                        <Image
                            src="/myimages/world2.jpg"
                            alt="Starknet Ecosystem"
                            width={800}
                            height={400}
                            className="rounded-lg shadow-lg cursor-pointer"
                            onLoad={() => console.log('Image loaded')}
                        />
                    </div>
                </div>
                ) : (
                    <div className="text-white" >
                        <Dashboard />
                    </div>
                )}
            </div>
       </>
    );
}

export default Profile;
