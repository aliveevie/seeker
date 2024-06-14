type Bounty = {
    name: string;
    datePosted: string; // Assuming date format as string for simplicity
    description: string;
    reward: number; // Assuming reward is in a numerical format
};

const bounties: Bounty[] = [
    {
        name: "Smart Contract Security Audit",
        datePosted: "2024-06-15",
        description: "Conduct a security audit for smart contracts deployed on StarkNet. Identify vulnerabilities and propose solutions to enhance security measures.",
        reward: 500 // Example reward in Stark tokens
    },
    {
        name: "Decentralized Exchange Integration",
        datePosted: "2024-06-14",
        description: "Integrate a decentralized exchange (DEX) protocol with StarkNet. Develop smart contracts and frontend components for seamless trading experiences.",
        reward: 800 // Example reward in Stark tokens
    },
    {
        name: "Layer 2 Scaling Solution",
        datePosted: "2024-06-13",
        description: "Propose and implement a Layer 2 scaling solution for StarkNet. Improve transaction throughput and reduce transaction costs.",
        reward: 1000 // Example reward in Stark tokens
    },
    {
        name: "StarkNet Developer Tools",
        datePosted: "2024-06-12",
        description: "Build developer tools and libraries to facilitate easier deployment and testing of smart contracts on StarkNet. Enhance developer experience.",
        reward: 600 // Example reward in Stark tokens
    },
    {
        name: "Decentralized Identity Solution",
        datePosted: "2024-06-11",
        description: "Develop a decentralized identity (DID) solution on StarkNet. Implement secure identity management and authentication protocols.",
        reward: 700 // Example reward in Stark tokens
    }
];

export default bounties;
