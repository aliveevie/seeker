// pages/job.tsx
"use client";
import { useState, useEffect } from 'react';

type JobsProps = {
  title: string;
  job: any;
  visible: boolean;
  handleVisibleJob: () => void;
};

const JobPage = ({ title, job, visible, handleVisibleJob }: JobsProps) => {
  const [jobsData, setJobsData] = useState({
    name: title,
    datePosted: "2024-06-15",
    description: "Develop and maintain full stack applications on StarkNet using Solidity and JavaScript. Collaborate with backend and frontend teams to integrate blockchain functionality.",
    duration: "Permanent",
    type: "fulltime",
    username: "aliveevie",
    candidates: [{
      name: "aliveevie",
      skills: "Web3, Stacknet, Communications",
      message: "Hello! Hire me in this position!"
    }]
  });


  useEffect(() => {
    for (const data of job) {
      if (data.name === title) {
        setJobsData(data);
      }
    }
  }, [job, title]);

  return (
    
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mx-4 sm:mx-6 lg:mx-8 relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">{jobsData.name}</h2>
          </div>
          <div className="text-gray-700 mb-4">
            <span className="font-semibold">Date Posted:</span> {jobsData.datePosted}
          </div>
          <div className="text-gray-700 mb-4">
            <span className="font-semibold">Description:</span> {jobsData.description}
          </div>
          <div className="text-gray-700 mb-4">
            <span className="font-semibold">Duration:</span> {jobsData.duration}
          </div>
          <div className="text-gray-700 mb-4">
            <span className="font-semibold">Type:</span> {jobsData.type}
          </div>
          <div className="text-gray-700">
            <span className="font-semibold">Applicants:</span>
            <ul className="list-disc list-inside">
              {jobsData.candidates.map((candidate, index) => (
                <li key={index} className="mb-2">
                  <div className="font-semibold">{candidate.name}</div>
                  <div>Skills: {candidate.skills}</div>
                  <div>Message: {candidate.message}</div>
                </li>
              ))}
            </ul>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            
          >
            Back
          </button>
        </div>
      </div>
    
  );
};

export default JobPage;
