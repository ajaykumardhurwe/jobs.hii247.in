// import React, { useState, useEffect } from "react";
// import Papa from "papaparse";

// export function A2Class(){
//   const [pdfData, setPdfData] = useState({});
//   const [selectedClass, setSelectedClass] = useState(null);
//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch(
//       "https://docs.google.com/spreadsheets/d/e/2PACX-1vRPwKrRySWmV9XOk30busuDiJ8sFMRa11Y3lWfPoSW5Gj-qTzKtdltr-l_dfiBgGanGdeBaTHHce-lu/pub?gid=1740394204&single=true&output=csv"
//     )
//       .then((response) => response.text())
//       .then((csvData) => {
//         const parsedData = Papa.parse(csvData, { header: true, dynamicTyping: true });
//         const formattedData = {};

//         parsedData.data.forEach((row) => {
//           const { Class, Subject, Year, DriveLink } = row;
//           if (!formattedData[Class]) formattedData[Class] = {};
//           if (!formattedData[Class][Subject]) formattedData[Class][Subject] = {};
//           formattedData[Class][Subject][Year] = DriveLink;
//         });

//         setPdfData(formattedData);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("❌ Error fetching CSV data: ", error);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <div className="flex flex-col items-center p-4 min-h-screen bg-gray-100">
//       {selectedClass || selectedSubject || selectedYear ? (
//         <button
//           className="mb-4 px-4 py-2 bg-red-500 text-white rounded"
//           onClick={() => {
//             if (selectedYear) {
//               setSelectedYear(null);
//             } else if (selectedSubject) {
//               setSelectedSubject(null);
//             } else {
//               setSelectedClass(null);
//             }
//           }}
//         >
//           🔙 Back
//         </button>
//       ) : null}

//       {isLoading ? (
//         <div className="flex flex-col items-center mt-10">
//           <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
//           <p className="mt-2 text-lg">⏳ Loading...</p>
//         </div>
//       ) : !selectedClass ? (
//         <div className="w-full max-w-md">
//           {Object.keys(pdfData).map((item) => (
//             <button
//               key={item}
//               className="w-full px-4 py-2 mb-2 bg-blue-500 text-white rounded"
//               onClick={() => setSelectedClass(item)}
//             >
//               📚 {item}
//             </button>
//           ))}
//         </div>
//       ) : !selectedSubject ? (
//         <div className="w-full max-w-md">
//           {Object.keys(pdfData[selectedClass]).map((item) => (
//             <button
//               key={item}
//               className="w-full px-4 py-2 mb-2 bg-yellow-500 text-white rounded"
//               onClick={() => setSelectedSubject(item)}
//             >
//               📖 {item}
//             </button>
//           ))}
//         </div>
//       ) : !selectedYear ? (
//         <div className="w-full max-w-md">
//           {Object.keys(pdfData[selectedClass][selectedSubject]).map((item) => (
//             <button
//               key={item}
//               className="w-full px-4 py-2 mb-2 bg-green-500 text-white rounded"
//               onClick={() => setSelectedYear(item)}
//             >
//               📆 {item}
//             </button>
//           ))}
//         </div>
//       ) : (
//         <iframe
//           src={pdfData[selectedClass][selectedSubject][selectedYear]}
//           title="PDF Viewer"
//           className="w-full h-screen"
//         />
//       )}
//     </div>
//   );
      
// }

// export default A2Class;











import { Link } from "react-router-dom";
import { FaUniversity, FaSchool } from "react-icons/fa";

export function A2Class() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">🎓 Explore Educational Institutes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Colleges Section */}
        <Link to="/colleges" className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-6 w-64 h-64 transform hover:scale-105 transition-all">
          <FaUniversity className="text-blue-500 text-5xl mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">🏫 View Colleges</h2>
          <p className="text-sm text-gray-500 mt-2">Explore top universities and institutions.</p>
        </Link>

        {/* Schools Section */}
        <Link to="/schools" className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-6 w-64 h-64 transform hover:scale-105 transition-all">
          <FaSchool className="text-green-500 text-5xl mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">🏫 View Schools</h2>
          <p className="text-sm text-gray-500 mt-2">Discover the study material of school</p>
        </Link>
      </div>
    </div>
  );
}

export default A2Class;

