// /app/data/bounties.ts
export type Bounty = {
    name: string;
    datePosted: string;
    description: string;
    reward: string;
    type: 'fulltime' | 'parttime';
};

const bounties: Bounty[] = [
    {
        name: "Cairo Fullstack Bounty",
        datePosted: "2024-06-01",
        description: "Develop a fullstack application using Cairo for Starknet.",
        reward: "5000 DAI",
        type: 'fulltime'
    },
    {
        name: "Backend Developer for Starknet",
        datePosted: "2024-06-05",
        description: "Create robust backend services for Starknet applications.",
        reward: "4000 DAI",
        type: 'parttime'
    },
    {
        name: "Starknet Cairo Library",
        datePosted: "2024-06-10",
        description: "Develop a reusable library in Cairo for the Starknet ecosystem.",
        reward: "3000 DAI",
        type: 'fulltime'
    },
    {
        name: "Starknet DApp Security Audit",
        datePosted: "2024-06-12",
        description: "Conduct a security audit for a decentralized application on Starknet.",
        reward: "4500 DAI",
        type: 'fulltime'
    },
    {
        name: "Frontend Developer for Starknet",
        datePosted: "2024-06-15",
        description: "Build responsive frontend interfaces for Starknet applications.",
        reward: "3500 DAI",
        type: 'parttime'
    }
];

export default bounties;
