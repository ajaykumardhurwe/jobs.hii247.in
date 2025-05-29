import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        {/* Icon */}
        <div className="text-red-600 text-5xl mb-4">
          <FaExclamationTriangle />
        </div>
        {/* Heading */}
        <h1 className="text-2xl font-bold text-red-600 mb-2">
          🚫 Payment Facility Disabled
        </h1>
        {/* Message */}
        <p className="text-gray-700 text-lg">
          Payment facility is currently disabled due to <strong>web testing mode</strong> being on. 🛠️
        </p>
      </div>
    </div>
  );
};

export default App;
