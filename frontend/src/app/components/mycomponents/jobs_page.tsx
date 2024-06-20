// pages/job.tsx

import React from 'react';

const JobPage: React.FC = () => {
  const job = {
    title: 'Fullstack Developer',
    posterName: 'JohnDoe',
    description: 'We are looking for a Fullstack Developer to join our team.',
    datePosted: '2024-06-17',
    status: 'active',
    applicants: [
      { name: 'Alice' },
      { name: 'Bob' },
      { name: 'Charlie' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h1 className="text-2xl font-bold mb-2 md:mb-0">{job.title}</h1>
          <span className={`px-4 py-2 rounded-full text-white ${job.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}>
            {job.status === 'active' ? 'Active' : 'Inactive'}
          </span>
        </div>
        <div className="text-gray-700 mb-4">
          <span className="font-semibold">Posted by:</span> {job.posterName}
        </div>
        <div className="text-gray-700 mb-4">
          <span className="font-semibold">Date Posted:</span> {job.datePosted}
        </div>
        <div className="text-gray-700 mb-4">
          <span className="font-semibold">Description:</span>
          <p>{job.description}</p>
        </div>
        <div className="text-gray-700">
          <span className="font-semibold">Applicants ({job.applicants.length}):</span>
          <ul className="list-disc list-inside">
            {job.applicants.map((applicant, index) => (
              <li key={index}>{applicant.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobPage;