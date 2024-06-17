"use client";

import bounties from "@/app/data/bounties";
import { Bounty } from "@/app/data/bounties";
import AddBounty from "./AddBounty";
import ApplyBounty from "./ApplyBounty";

type Addpros = {
    handleCancelJob: () => void;
    handleSaveJob: () => void;
    handleApplyJob: () => void;
    username: string | null;
    showApply: boolean;
}



const Bounties = ({ username, handleCancelJob, handleSaveJob, handleApplyJob, showApply } : Addpros ) => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2 text-black">Bounties</h2>
                <p className="text-gray-600">Explore the latest bounties in the Starknet ecosystem</p>
            </div>
            <div className="grid gap-6">
                {bounties.map((bounty: Bounty, index: number) => (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-lg font-semibold text-black">{bounty.name}</h3>
                        <p className="text-sm text-gray-500">Posted on: {bounty.datePosted}</p>
                        <p className="mt-2 text-gray-700">{bounty.description}</p>
                        <p className="mt-2 text-blue-600 font-medium">Reward: {bounty.reward}</p>
                        <p className="mt-2 text-gray-600">Type: {bounty.type}</p>
                        <div className="mt-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                            onClick={handleApplyJob}
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            { showApply && <ApplyBounty handleApplyJob={handleApplyJob} handleSaveJob={handleSaveJob} handleCancelJob={handleCancelJob} showApply={showApply} username={username} /> }
        </div>
    );
};


export default Bounties;
