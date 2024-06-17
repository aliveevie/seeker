import { useState } from 'react';
import jobsData from "@/app/data/jobs";
import AddJob from './Addjob';
import Apply from './ApplyJob';
import ApplyJob from './ApplyJob';

type Job = {
    name: string;
    datePosted: string;
    description: string;
    duration: string;
    type: 'fulltime' | 'parttime';
};

type Addpros = {
        handleCancelJob: () => void;
        handleSaveJob: () => void;
        handleApplyJob: () => void;
        username: string | null;
        showApply: boolean;
}

const Jobs = ( { username, handleCancelJob, handleSaveJob, handleApplyJob, showApply } : Addpros ) => {
    const [jobs, setJobs] = useState<Job[]>(jobsData);
    const [jobsApplied, setJobsApplied] = useState<number>(0);
    const [jobsPosted, setJobsPosted] = useState<number>(jobs.length);
   // const [showApply, setShowApply] = useState<boolean>(false);

    const handleAddJob = () => {
        const newJob: Job = {
            name: "New Job Title",
            datePosted: "2024-06-16",
            description: "Description of the new job.",
            duration: "Permanent",
            type: "fulltime"
        };
        setJobs([...jobs, newJob]);
        setJobsPosted(jobsPosted + 1);
    };

    

    return (
        <div className="max-w-4xl mx-auto mt-8 px-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-black">Jobs</h3>
                <div className="flex space-x-4">
                </div>
            </div>
            <div className="grid gap-6">
                {jobs.map((job, index) => (
                    <div key={index} className="bg-white shadow-md p-4 rounded-md">
                        <h3 className="text-lg font-semibold text-black">{job.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{job.datePosted}</p>
                        <p className="text-gray-700">{job.description}</p>
                        <p className="text-gray-600 mt-2">Duration: {job.duration}</p>
                        <p className="text-gray-600">Type: {job.type}</p>
                        <button 
                        onClick={handleApplyJob}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                            Apply
                        </button>
                    </div>
                ))}
            </div>
            { showApply && <ApplyJob handleCancelJob={handleCancelJob} handleSaveJob={handleSaveJob} username={username} /> }
        </div>
    );
};

export default Jobs;
