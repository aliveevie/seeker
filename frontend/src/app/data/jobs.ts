type Job = {
    name: string;
    datePosted: string; // Assuming date format as string for simplicity
    description: string;
    duration: string;
    type: 'fulltime' | 'parttime';
    username: string | null;
};

const jobs: Job[] = [
    {
        name: "Full Stack Developer - StarkNet",
        datePosted: "2024-06-15",
        description: "Develop and maintain full stack applications on StarkNet using Solidity and JavaScript. Collaborate with backend and frontend teams to integrate blockchain functionality.",
        duration: "Permanent",
        type: 'fulltime',
        username: "aliveevie"
    },
    {
        name: "Backend Developer - StarkNet",
        datePosted: "2024-06-14",
        description: "Design and implement backend services and APIs for StarkNet applications. Work closely with frontend developers and blockchain engineers to ensure seamless integration.",
        duration: "Contract",
        type: 'fulltime',
        username: "johndoe"
    },
    {
        name: "Cairo Developer - StarkNet",
        datePosted: "2024-06-13",
        description: "Create and optimize smart contracts using Cairo language on StarkNet. Implement secure and efficient blockchain solutions for decentralized applications.",
        duration: "Permanent",
        type: 'fulltime',
        username: "janedoe"
    },
    {
        name: "StarkNet Engineer",
        datePosted: "2024-06-12",
        description: "Research and develop innovative solutions on the StarkNet platform. Implement core protocols and contribute to the advancement of decentralized technologies.",
        duration: "Permanent",
        type: 'fulltime',
        username: "robertsmith"
    },
    {
        name: "Blockchain Developer - Part-Time",
        datePosted: "2024-06-11",
        description: "Participate in the development of blockchain solutions on StarkNet. Contribute to smart contract development, testing, and deployment.",
        duration: "Part-Time",
        type: 'parttime',
        username: "emilybrown"
    }
];

export default jobs;
