import users from './users'; // Ensure correct import path

export type Bounty = {
    name: string;
    datePosted: string;
    description: string;
    reward: string;
    type: 'fulltime' | 'parttime';
    username: string;
    candidates: any;
};

const bountiesData: Bounty[] = [
    {
        name: "Cairo Fullstack Bounty",
        datePosted: "2024-06-01",
        description: "Develop a fullstack application using Cairo for Starknet.",
        reward: "5000 STK",
        type: 'fulltime',
        username: users[0].username, // aliveevie;
        candidates: []
    },
    {
        name: "Backend Developer for Starknet",
        datePosted: "2024-06-05",
        description: "Create robust backend services for Starknet applications.",
        reward: "4000 STK",
        type: 'parttime',
        username: users[1].username // johndoe
        ,
        candidates: []
    },
    {
        name: "Starknet Cairo Library",
        datePosted: "2024-06-10",
        description: "Develop a reusable library in Cairo for the Starknet ecosystem.",
        reward: "3000 STK",
        type: 'fulltime',
        username: users[2].username // janedoe
        ,
        candidates: []
    },
    {
        name: "Starknet DApp Security Audit",
        datePosted: "2024-06-12",
        description: "Conduct a security audit for a decentralized application on Starknet.",
        reward: "4500 STK",
        type: 'fulltime',
        username: users[3].username // robertsmith
        ,
        candidates: []
    },
    {
        name: "Frontend Developer for Starknet",
        datePosted: "2024-06-15",
        description: "Build responsive frontend interfaces for Starknet applications.",
        reward: "3500 STK",
        type: 'parttime',
        username: users[4].username // emilybrown
        ,
        candidates: []
    }
];

export default bountiesData;
