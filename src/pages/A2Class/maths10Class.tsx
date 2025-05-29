import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LanguagePage: React.FC = () => {
  const [language, setLanguage] = useState<"english" | "hindi">("english");
  const navigate = useNavigate();

  // Handle language change
  const handleLanguageChange = () => {
    setLanguage((prev) => (prev === "english" ? "hindi" : "english"));
    navigate(`/${language === "english" ? "hindi" : "english"}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <h1 className="text-xl font-bold">Language Page</h1>
        <button
          onClick={handleLanguageChange}
          className="px-4 py-2 bg-white text-blue-500 font-medium rounded hover:bg-gray-200"
        >
          {language === "english" ? "Change to Hindi" : "Change to English"}
        </button>
      </div>

      {/* Top Tabs */}
      <div className="bg-white shadow-md">
        <div className="flex justify-evenly p-2">
          {["Theory", "Video", "Imp Point", "Audio", "Test"].map((tab) => (
            <button
              key={tab}
              className="text-gray-700 font-medium py-2 px-4 hover:bg-gray-100"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-700">
          {language === "english"
            ? "Welcome to the English version of the page!"
            : "स्वागत है हिंदी संस्करण में!"}
        </p>
      </div>
    </div>
  );
};

export default LanguagePage;
