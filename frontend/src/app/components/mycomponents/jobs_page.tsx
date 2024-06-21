// pages/job.tsx
"use client";
import { useState, useEffect } from 'react';
import { Job } from '@/app/data/jobs';

import React from 'react';

type JobsProps = {
    title: string,
    job: any
}

const JobPage = ({ title, job }: JobsProps) => {

  const [jobsData, setJobsData] = useState({});
 

   useEffect(() => {
    for(const data of job){
      console.log(data)
   }
   }, [])
 
  // console.log(jobsData)

  return (
    
   <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
         
         
          
        </div>
       
        <div className="text-gray-700 mb-4">
          <span className="font-semibold">Date Posted:</span> 
        </div>
        <div className="text-gray-700 mb-4">
          <span className="font-semibold">Description:</span>
        </div>
        <div className="text-gray-700">
          <span className="font-semibold">Applicants:</span>
          <ul className="list-disc list-inside">
          
          </ul>
        </div>
      </div>
    </div>
   
  );
};

export default JobPage;