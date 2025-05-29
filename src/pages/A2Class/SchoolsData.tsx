import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { useParams, useNavigate } from "react-router-dom";

export function SchoolsData(){
  const [pdfData, setPdfData] = useState({});
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRPwKrRySWmV9XOk30busuDiJ8sFMRa11Y3lWfPoSW5Gj-qTzKtdltr-l_dfiBgGanGdeBaTHHce-lu/pub?gid=1740394204&single=true&output=csv"
    )
      .then((response) => response.text())
      .then((csvData) => {
        const parsedData = Papa.parse(csvData, { header: true, dynamicTyping: true });
        const formattedData = {};

        parsedData.data.forEach((row) => {
          const { Class, Subject, Year, DriveLink } = row;
          if (!formattedData[Class]) formattedData[Class] = {};
          if (!formattedData[Class][Subject]) formattedData[Class][Subject] = {};
          formattedData[Class][Subject][Year] = DriveLink;
        });

        setPdfData(formattedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error fetching CSV data: ", error);
        setIsLoading(false);
      });
  }, []);

  return (
 
  
    <div className="flex flex-col items-center p-4 min-h-screen bg-gray-100">



      {selectedClass || selectedSubject || selectedYear ? (
        <button
          className="mb-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => {
            if (selectedYear) {
              setSelectedYear(null);
            } else if (selectedSubject) {
              setSelectedSubject(null);
            } else {
              setSelectedClass(null);
            }
          }}
        >
          🔙 Back
        </button>
      ) : null}

      {isLoading ? (
        <div className="flex flex-col items-center mt-10">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
          <p className="mt-2 text-lg">⏳ Loading...</p>
        </div>
      ) : !selectedClass ? (
        <div className="w-full max-w-md">
          {Object.keys(pdfData).map((item) => (
            <button
              key={item}
              className="w-full px-4 py-2 mb-2 bg-blue-500 text-white rounded"
              onClick={() => setSelectedClass(item)}
            >
              📚 {item}
            </button>
          ))}
        </div>
      ) : !selectedSubject ? (
        <div className="w-full max-w-md">
          {Object.keys(pdfData[selectedClass]).map((item) => (
            <button
              key={item}
              className="w-full px-4 py-2 mb-2 bg-yellow-500 text-white rounded"
              onClick={() => setSelectedSubject(item)}
            >
              📖 {item}
            </button>
          ))}
        </div>
      ) : !selectedYear ? (
        <div className="w-full max-w-md">
          {Object.keys(pdfData[selectedClass][selectedSubject]).map((item) => (
            <button
              key={item}
              className="w-full px-4 py-2 mb-2 bg-green-500 text-white rounded"
              onClick={() => setSelectedYear(item)}
            >
              📆 {item}
            </button>
          ))}
        </div>
      ) : (
        <iframe
          src={pdfData[selectedClass][selectedSubject][selectedYear]}
          title="PDF Viewer"
          className="w-full h-screen"
        />
      )}


    </div>


  );
      
}

export default SchoolsData;








