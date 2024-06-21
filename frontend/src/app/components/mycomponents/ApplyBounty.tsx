"use client";

import { Bounty } from '@/app/data/bounties';
import { useState } from 'react';

type Application = {
    name: string;
    skills: string;
    message: string;
};

type AddPros = {
    handleCancelJob: () => void;
    handleSaveJob: () => void;
    handleApplyJob: () => void;
    username: string | null;
    showApply: boolean;
    dataBounties: Bounty[]
};

const ApplyBounty = ({ username, handleCancelJob, handleSaveJob, handleApplyJob, showApply, dataBounties }: AddPros) => {
    const [application, setApplication] = useState<Application>({
        name: '',
        skills: '',
        message: ''
    });

    console.log(dataBounties)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setApplication(prevApplication => ({
            ...prevApplication,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleApplyJob();
        setApplication({
            name: '',
            skills: '',
            message: ''
        });
        handleCancelJob();
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 ${showApply ? '' : 'hidden'}`}>
            <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full">
                <h3 className="text-lg font-semibold mb-4 text-black">Apply for Bounty</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={application.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="skills" className="block text-sm font-medium text-black mb-1">Skills</label>
                        <input
                            type="text"
                            id="skills"
                            name="skills"
                            value={application.skills}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-black mb-1">Message to Recruiter</label>
                        <textarea
                            id="message"
                            name="message"
                            value={application.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={handleCancelJob}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Apply
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplyBounty;