"use client";

import { useState } from 'react';


type Application = {
    name: string;
    skills: string;
    message: string;
};

const ApplyBounty = () => {
    const [application, setApplication] = useState<Application>({
        name: '',
        skills: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setApplication(prevApplication => ({
            ...prevApplication,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      //  onSubmit(application);
        // Optionally, reset form fields after submission
        setApplication({
            name: '',
            skills: '',
            message: ''
        });
    };

    return (
        <div className="max-w-md mx-auto mt-8 px-4">
            <h3 className="text-lg font-semibold mb-4">Apply for Bounty</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
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
                    <label htmlFor="skills" className="block text-sm font-medium text-white mb-1">Skills</label>
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
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message to Recruiter</label>
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
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ApplyBounty;