import { useState } from 'react';
import bounties from '@/app/data/bounties';
import { Bounty } from '@/app/data/bounties';
import { User } from '@/app/data/users';

type AddBountyProps = {
    handleCancel: () => void;
    handleSave: () => void;
    username: string | null;
    bounties: Bounty[];
    user: User
};



const AddBounty = ({ handleCancel, handleSave, username, bounties, user }: AddBountyProps) => {
    const [newBounty, setNewBounty] = useState<Bounty>({
        username: '',
        datePosted: '',
        description: '',
        reward: '',
        type: 'fulltime', // Default to fulltime, can be changed by user
        candidates: [],
        name: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewBounty(prevBounty => ({
            ...prevBounty,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (username) {
            bounties.push(newBounty);
            user.postedBounties?.push(newBounty.name)
        }
        

        handleSave();

    };

    return (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-black">Create Bounty</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={newBounty.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="datePosted" className="block text-sm font-medium text-gray-700 mb-1">Date Posted</label>
                        <input
                            type="date"
                            id="datePosted"
                            name="datePosted"
                            value={newBounty.datePosted}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={newBounty.description}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="reward" className="block text-sm font-medium text-gray-700 mb-1">Reward</label>
                        <input
                            type="text"
                            id="reward"
                            name="reward"
                            value={newBounty.reward}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                        <select
                            id="type"
                            name="type"
                            value={newBounty.type}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="fulltime">Full-time</option>
                            <option value="parttime">Part-time</option>
                        </select>
                    </div>
                    <div className="flex justify-end space-x-2">
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
                            Add Bounty
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBounty;