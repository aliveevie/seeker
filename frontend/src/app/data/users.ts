type User = {
    username: string;
    password: string;
    address: string;
    appliedJobs: string[];
    postedJobs: string[];
    appliedBounties: string[];
    postedBounties: string[];
};

const users: User[] = [
    {
        username: "aliveevie",
        password: "alive1234+",
        address: "0x033f622A3c5D8480fD5EEff88040D306dB3B588Ff988Abc744F3637F065f9f61",
        appliedJobs: ["Frontend Developer", "Fullstack Developer"],
        postedJobs: ["Blockchain Engineer", "Smart Contract Developer"],
        appliedBounties: ["Security Audit Bounty", "Testing Bounty"],
        postedBounties: ["Optimization Bounty", "Bug Fix Bounty"]
    },
    {
        username: "johndoe",
        password: "password123",
        address: "0x7a98bAD3E1f43A2f64DcCF987AE56AaB7c94d9F8",
        appliedJobs: ["Backend Developer"],
        postedJobs: ["Fullstack Developer"],
        appliedBounties: ["Integration Bounty"],
        postedBounties: ["Documentation Bounty"]
    },
    {
        username: "janedoe",
        password: "janepass456",
        address: "0x1B4c19f12fA53a2AeF691C83e5cB1aFf92E4dF38",
        appliedJobs: ["Data Scientist", "Machine Learning Engineer"],
        postedJobs: ["AI Researcher"],
        appliedBounties: ["Data Annotation Bounty"],
        postedBounties: ["Algorithm Improvement Bounty"]
    },
    {
        username: "robertsmith",
        password: "securePass789",
        address: "0x894A5D88AeC4eC06E80b7b82fD48f47aE1fC60D3",
        appliedJobs: ["DevOps Engineer"],
        postedJobs: ["System Administrator"],
        appliedBounties: ["Infrastructure Setup Bounty"],
        postedBounties: ["Network Optimization Bounty"]
    },
    {
        username: "emilybrown",
        password: "brownPassword321",
        address: "0x6A2c69a0E7d7F9c59fCaC9A90149f48e5Df17B8D",
        appliedJobs: ["Product Manager", "Project Coordinator"],
        postedJobs: ["Business Analyst"],
        appliedBounties: ["Market Research Bounty"],
        postedBounties: ["User Experience Improvement Bounty"]
    }
];

export default users;