import React from "react";
import { useNavigate } from "react-router-dom";

const LanguageScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Choose Language</h1>
        <div className="space-x-4">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => navigate("/english")}
          >
            English
          </button>
          <button
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={() => navigate("/hindi")}
          >
            Hindi
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageScreen;
