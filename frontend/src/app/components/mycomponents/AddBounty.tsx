import { useState } from 'react';

type AddBountyProps = {
    onAddBounty: (newBounty: Bounty) => void;
};

type Bounty = {
    name: string;
    datePosted: string;
    description: string;
    reward: string;
    type: 'fulltime' | 'parttime';
};

const AddBounty = () => {
    const [newBounty, setNewBounty] = useState<Bounty>({
        name: '',
        datePosted: '',
        description: '',
        reward: '',
        type: 'fulltime' // Default to fulltime, can be changed by user
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
      //  onAddBounty(newBounty);
        // Optionally, reset form fields after submission
        setNewBounty({
            name: '',
            datePosted: '',
            description: '',
            reward: '',
            type: 'fulltime'
        });
    };

    return (
        <div className="max-w-md mx-auto mt-8 px-4">
            <h3 className="text-lg font-semibold mb-4">Add Bounty</h3>
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
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Add Bounty
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBounty;