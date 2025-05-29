// import React, { useState, useEffect } from "react";
// import Papa from "papaparse";

// interface TabData {
//   tab: string;
//   content: string;
// }

// const MainPage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<string>("Theory");
//   const [data, setData] = useState<TabData[]>([]);

//   // Google Sheet CSV URL
//   const googleSheetCSV = "https://docs.google.com/spreadsheets/d/e/your-id/pub?output=csv";

//   useEffect(() => {
//     // Fetch and parse Google Sheet CSV
//     Papa.parse(googleSheetCSV, {
//       download: true,
//       header: true,
//       complete: (result) => {
//         setData(result.data as TabData[]);
//       },
//       error: (error) => console.error("Error fetching Google Sheet CSV:", error),
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Top Navigation */}
//       <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
//         <h1 className="text-xl font-bold">Educational Tabs</h1>
//       </div>

//       {/* Tabs */}
//       <div className="bg-white shadow-md sticky top-0">
//         <div className="flex justify-evenly border-b">
//           {["Theory", "Video", "Imp Point", "Audio", "Test"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`py-2 px-4 font-medium ${
//                 activeTab === tab
//                   ? "text-blue-500 border-b-2 border-blue-500"
//                   : "text-gray-700"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Tab Content */}
//       <div className="p-6">
//         {data.length > 0 ? (
//           <div>
//             {data
//               .filter((item) => item.tab === activeTab)
//               .map((item, index) => (
//                 <p key={index} className="text-gray-800 mb-4">
//                   {item.content}
//                 </p>
//               ))}
//           </div>
//         ) : (
//           <p className="text-gray-500">Loading content...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MainPage;



















import React, { useState, useEffect } from "react";
import Papa from "papaparse";

interface TabData {
  tab: string;
  content: string;
  language: string;
}

const MainPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Theory");
  const [activeLanguage, setActiveLanguage] = useState<string>("English");
  const [data, setData] = useState<TabData[]>([]);

  // Google Sheet CSV URL
  const googleSheetCSV =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTQFtizxQam0xtPdzd6d-aihgbqzCIQxXCROAb_UkWsTAhsks4mdXRWSkpi99j3Uq4lgywK3895M1fm/pub?gid=1974910465&single=true&output=csv";

  useEffect(() => {
    // Fetch and parse Google Sheet CSV
    Papa.parse(googleSheetCSV, {
      download: true,
      header: true,
      complete: (result) => {
        const parsedData = result.data as TabData[];
        // Enrich data by adding a 'language' field based on a convention
        const enrichedData = parsedData.map((item) => ({
          ...item,
          language: item.language || "English", // Default to English if no language provided
        }));
        setData(enrichedData);
      },
      error: (error) => console.error("Error fetching Google Sheet CSV:", error),
    });
  }, []);

  const tabs = ["Theory", "YouTube Video", "Important Points", "Audio", "MCQ Test"];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <h1 className="text-xl font-bold">Class Room</h1>
        {/* Language Toggle */}
        <div>
          <button
            onClick={() => setActiveLanguage("English")}
            className={`py-1 px-3 rounded-l ${
              activeLanguage === "English" ? "bg-white text-blue-500" : "bg-blue-400 text-white"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setActiveLanguage("Hindi")}
            className={`py-1 px-3 rounded-r ${
              activeLanguage === "Hindi" ? "bg-white text-blue-500" : "bg-blue-400 text-white"
            }`}
          >
            हिंदी
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow-md sticky top-0">
        <div className="flex justify-evenly border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 font-medium ${
                activeTab === tab
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {data.length > 0 ? (
          <div>
            {data
              .filter(
                (item) => item.tab === activeTab && item.language === activeLanguage
              )
              .map((item, index) => (
                <p key={index} className="text-gray-800 mb-4">
                  {item.content}
                </p>
              ))}
          </div>
        ) : (
          <p className="text-gray-500">Loading content...</p>
        )}
      </div>
    </div>
  );
};

export default MainPage;





















// import React, { useState, useEffect } from "react";
// import Papa from "papaparse";

// interface TabData {
//   tab: string;
//   content: string;
//   language: string;
// }

// const MainPage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<string>("Theory");
//   const [activeLanguage, setActiveLanguage] = useState<string>("English");
//   const [data, setData] = useState<TabData[]>([]);

//   // Google Sheet CSV URL
//   const googleSheetCSV =
//     "https://docs.google.com/spreadsheets/d/e/2PACX-1vTQFtizxQam0xtPdzd6d-aihgbqzCIQxXCROAb_UkWsTAhsks4mdXRWSkpi99j3Uq4lgywK3895M1fm/pub?gid=1974910465&single=true&output=csv";
   
//   // "https://docs.google.com/spreadsheets/d/e/your-id/pub?output=csv";

//   useEffect(() => {
//     // Fetch and parse Google Sheet CSV
//     Papa.parse(googleSheetCSV, {
//       download: true,
//       header: true,
//       complete: (result) => {
//         const parsedData = result.data as TabData[];
//         const enrichedData = parsedData.map((item) => ({
//           ...item,
//           language: item.language || "English",
//         }));
//         setData(enrichedData);
//       },
//       error: (error) => console.error("Error fetching Google Sheet CSV:", error),
//     });
//   }, []);

//   const tabs = [
//     "Theory",
//     "YouTube Video",
//     "Important Points",
//     "Audio",
//     "MCQ Test",
//   ];

//   // Tab Screens
//   const TabScreen: React.FC<{ tab: string }> = ({ tab }) => {
//     const filteredData = data.filter(
//       (item) => item.tab === tab && item.language === activeLanguage
//     );

//     if (filteredData.length === 0) {
//       return <p className="text-gray-500">No content available for this tab.</p>;
//     }

//     return (
//       <div>
//         {filteredData.map((item, index) => (
//           <div key={index} className="mb-4">
//             {tab === "YouTube Video" ? (
//               <a
//                 href={item.content}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 underline"
//               >
//                 Watch Video
//               </a>
//             ) : tab === "Audio" ? (
//               <audio controls>
//                 <source src={item.content} type="audio/mpeg" />
//                 Your browser does not support the audio element.
//               </audio>
//             ) : tab === "MCQ Test" ? (
//               <a
//                 href={item.content}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 underline"
//               >
//                 Take Test
//               </a>
//             ) : (
//               <p className="text-gray-800">{item.content}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Top Navigation */}
//       <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
//         <h1 className="text-xl font-bold">10th Maths Class</h1>
//         {/* Language Toggle */}
//         <div>
//           <button
//             onClick={() => setActiveLanguage("English")}
//             className={`py-1 px-3 rounded-l ${
//               activeLanguage === "English"
//                 ? "bg-white text-blue-500"
//                 : "bg-blue-400 text-white"
//             }`}
//           >
//             English
//           </button>
//           <button
//             onClick={() => setActiveLanguage("Hindi")}
//             className={`py-1 px-3 rounded-r ${
//               activeLanguage === "Hindi"
//                 ? "bg-white text-blue-500"
//                 : "bg-blue-400 text-white"
//             }`}
//           >
//             हिंदी
//           </button>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="bg-white shadow-md sticky top-0">
//         <div className="flex justify-evenly border-b">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`py-2 px-4 font-medium ${
//                 activeTab === tab
//                   ? "text-blue-500 border-b-2 border-blue-500"
//                   : "text-gray-700"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Tab Content */}
//       <div className="p-6">
//         <TabScreen tab={activeTab} />
//       </div>
//     </div>
//   );
// };

// export default MainPage;
