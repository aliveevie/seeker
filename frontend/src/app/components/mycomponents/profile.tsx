"use client";

import {
    useAccount,
    useDisconnect,
    useStarkName,
    useStarkProfile,
  } from "@starknet-react/core";
import Header from "../Header";

const Profile = () => {
    
    const {account, address, status } = useAccount()

    

    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen p-4">
                <h2 className="text-white mb-4">
                    {account ? `Welcome ${address}` : "Connect your StarkNet wallet"}
                </h2>
                {!account && (
                    <button
                     //   onClick={connect}
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
                    >
                        Connect Wallet
                    </button>
                )}
                {account && (
                    <button
                    //    onClick={disconnect}
                        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-700"
                    >
                        Disconnect Wallet
                    </button>
                )}
            </div>
        </>
    );
}

export default Profile;