import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaExternalLinkAlt, FaCalendarAlt, FaFileAlt, FaInfoCircle } from "react-icons/fa";

export function JobDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { job } = location.state;

  return (
    <div className="container mx-auto p-6 bg-gray-50 shadow-lg rounded-lg">
      {/* Job Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
        <FaInfoCircle className="text-blue-500 mr-2" />
        {job["Job Title"]}
      </h1>

      {/* Job Details */}
      <div className="space-y-6 text-gray-700">
        <p className="flex items-center">
          <strong className="mr-2">📄 Description:</strong> {job["Description"]}
        </p>
        <p className="flex items-center">
          <FaCalendarAlt className="text-blue-500 mr-2" />
          <strong className="mr-2">Start Date:</strong> {job["Start Date"]}
        </p>
        <p className="flex items-center">
          <FaCalendarAlt className="text-blue-500 mr-2" />
          <strong className="mr-2">End Date:</strong> {job["End Date"]}
        </p>
        <p className="flex items-center">
          <FaExternalLinkAlt className="text-blue-500 mr-2" />
          <strong className="mr-2">Official Link:</strong>{" "}
          <a
            href={job["Official Link"]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Visit <FaExternalLinkAlt className="inline ml-1" />
          </a>
        </p>
        <p className="flex items-center">
          <FaFileAlt className="text-blue-500 mr-2" />
          <strong className="mr-2">Notification Link:</strong>{" "}
          <a
            href={job["Notification Link"]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            View <FaExternalLinkAlt className="inline ml-1" />
          </a>
        </p>
      </div>

      {/* Information about eForm Fillup */}
    
    
      {/* <div className="mt-8 bg-blue-50 p-4 rounded-lg shadow-md text-gray-700">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">
          📝 About eForm Fillup
        </h2>
        <p>
          आप यह फॉर्म हमारे माध्यम से भी भर सकते हैं, और इसके लिए आपको कहीं जाने की आवश्यकता नहीं है। बस अपना समय चुनें, और CSC सेंटर के प्रतिनिधि आपको उसी समय पर कॉल करेंगे, जिससे आप आसानी से अपना फॉर्म भर सकें। इससे आपका कीमती समय भी बच सकेगा। अपना समय बुक करने के लिए नीचे eForm Fillup पर क्लिक करें
        </p>
      </div>

      <div className="mt-8 bg-blue-50 p-4 rounded-lg shadow-md text-gray-700">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">
          📝 About eForm Fillup
        </h2>
        <p>
          आप यह फॉर्म हमारे माध्यम से भी भर सकते हैं, और इसके लिए आपको कहीं जाने की आवश्यकता नहीं है। बस अपना समय चुनें, और CSC सेंटर के प्रतिनिधि आपको उसी समय पर कॉल करेंगे, जिससे आप आसानी से अपना फॉर्म भर सकें। इससे आपका कीमती समय भी बच सकेगा। अपना समय बुक करने के लिए नीचे eForm Fillup पर क्लिक करें
        </p>
      </div> */}





<div className="mt-8 flex flex-col gap-4">
  {/* Column 1 */}
  <div className="bg-blue-50 p-4 rounded-lg shadow-md text-gray-700 flex-1">
    <h2 className="text-xl font-semibold text-blue-800 mb-2">
      📝 About eForm Fillup
    </h2>
    <p>
      आप यह फॉर्म हमारे माध्यम से भी भर सकते हैं, और इसके लिए आपको कहीं जाने की आवश्यकता नहीं है। बस अपना समय चुनें, और CSC सेंटर के प्रतिनिधि आपको उसी समय पर कॉल करेंगे, जिससे आप आसानी से अपना फॉर्म भर सकें। इससे आपका कीमती समय भी बच सकेगा। अपना समय बुक करने के लिए नीचे eForm Fillup पर क्लिक करें
    </p>
  </div>

  {/* Column 2 */}
  <div className="bg-blue-50 p-4 rounded-lg shadow-md text-gray-700 flex-1">
    <h2 className="text-xl font-semibold text-blue-800 mb-2">
      📝 About Job Consultancy
    </h2>
    <p>
    जॉब लेने में आपको परेशानी हो रही है?

अब चिंता करने की ज़रूरत नहीं है!
हम आपकी सहायता के लिए यहाँ हैं।

हमारी जॉब कंसल्टेंसी सेवा आपके लिए:

सही नौकरी ढूंढने में मदद।
आवेदन प्रक्रिया में पूरी सहायता।
साक्षात्कार (इंटरव्यू) की तैयारी।
जॉब अलर्ट और अपडेट।
Job Consultancy me अपना विवरण भरें ताकि हम आपके लिए सही नौकरी ढूंढ सकें।
    </p>
  </div>
</div>






      {/* Buttons: eForm Fillup and Job Consultancy */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => navigate("/eformfillup")}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center w-1/2 mr-2"
        >
          🚀 eForm Fillup
        </button>
        <button
          onClick={() => navigate("/jobconsultancy")}
          className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition duration-300 flex items-center justify-center w-1/2 ml-2"
        >
          🏢 Job Consultancy
        </button>
      </div>
    </div>
  );
}

