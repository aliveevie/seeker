import { useState } from 'react';
import { Job } from '@/app/data/jobs';
import { User } from '@/app/data/users';



type AddJobProps = {
    handleCancel: () => void;
    handleSave: () => void;
    username: string | null;
    user: User
    job: Job[]
   
  //  save: string
};

const AddJob = ({ handleCancel, handleSave, username, user, job }: AddJobProps) => {

    console.log(job)

    const [newJob, setNewJob] = useState<Job>({
        name: '',
        datePosted: '',
        description: '',
        duration: '',
        type: 'fulltime', // Default to fulltime, can be changed by user
        username: username
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewJob(prevJob => ({
            ...prevJob,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    //    handleSave(newJob);
        
        if(user){
            user.postedJobs?.push(newJob.name) 
            job.push(newJob)
        }
        handleSave()
        
    };


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h3 className="text-lg font-semibold mb-4 text-black">Create Job</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Job Title</label>
                        <input
                            placeholder='Input Job Title'
                            type="text"
                            id="name"
                            name="name"
                            value={newJob.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="datePosted" className="block text-sm font-medium text-black mb-1">Date Posted</label>
                        <input
                            type="date"
                            id="datePosted"
                            name="datePosted"
                            value={newJob.datePosted}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-black mb-1">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={newJob.description}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="duration" className="block text-sm font-medium text-black mb-1">Duration</label>
                        <input
                            type="text"
                            id="duration"
                            name="duration"
                            value={newJob.duration}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="type" className="block text-sm font-medium text-black mb-1">Type</label>
                        <select
                            id="type"
                            name="type"
                            value={newJob.type}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="fulltime">Full-time</option>
                            <option value="parttime">Part-time</option>
                        </select>
                    </div>
                    <div>
                       
                    </div>
                    <div className="flex justify-between mt-4">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;
