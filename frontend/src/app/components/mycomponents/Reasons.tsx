"use client";

import { FiCheckCircle } from "react-icons/fi";
import { FaSearch, FaRegLightbulb } from "react-icons/fa";

const Reasons = () => {
    return (
        <div className="flex items-center justify-center p-4 bg-blue-200">
            <div className="flex items-center space-x-4">
                <div className="flex items-center">
                    <FiCheckCircle className="text-green-500 text-2xl" />
                    <p className="ml-2 text-lg">Find diverse job opportunities</p>
                </div>
                <div className="flex items-center">
                    <FaSearch className="text-blue-500 text-2xl" />
                    <p className="ml-2 text-lg">Search efficiently for bounties</p>
                </div>
                <div className="flex items-center">
                    <FaRegLightbulb className="text-yellow-500 text-2xl" />
                    <p className="ml-2 text-lg">Post and discover innovative projects</p>
                </div>
            </div>
        </div>
    );
};

export default Reasons;
