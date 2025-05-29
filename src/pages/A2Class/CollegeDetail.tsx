// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// interface College {
//   thumbnail: string;
//   name: string;
//   address: string;
//   officialSite: string;
//   ranking: string;
//   pyq: string;
//   seniorsContact: string;
// }

// const GOOGLE_SHEET_CSV_URL =
//   "https://docs.google.com/spreadsheets/d/e/2PACX-1vTahfkALnmkv7BcOI7mg9lnet0-nM78CxWNz7IrnwPi3HkJ7BhpdEw_rmDNK60pRSrADdTikmMcy6DV/pub?gid=0&single=true&output=csv";

// function CollegeDetail() {
//   const { name } = useParams();
//   const navigate = useNavigate();
//   const [college, setCollege] = useState<College | null>(null);
//   const [activeTab, setActiveTab] = useState("photos");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(GOOGLE_SHEET_CSV_URL);
//         const rows = response.data.split("\n").slice(1);

//         const formattedData = rows.map((row: string) => {
//           const cols = row.split(",");
//           return {
//             thumbnail: cols[0],
//             name: cols[1],
//             address: cols[2],
//             officialSite: cols[3],
//             ranking: cols[4],
//             pyq: cols[5],
//             seniorsContact: cols[6],
//           };
//         });

//         const selectedCollege = formattedData.find(
//           (c) => c.name === decodeURIComponent(name || "")
//         );
//         setCollege(selectedCollege || null);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [name]);

//   if (!college) return <p className="text-center">Loading...</p>;

//   return (
//     <div className="min-h-screen bg-white p-6">
//       <button onClick={() => navigate("/colleges")} className="mb-4 px-4 py-2 bg-gray-300 rounded-lg">
//         ⬅️ Back
//       </button>

//       <h1 className="text-3xl font-bold mb-2">{college.name} 🏫</h1>
//       <p className="text-gray-600">📍 {college.address}</p>
//       <p className="text-gray-600">🏆 Ranking: {college.ranking}</p>

//       <div className="flex border-b mb-4">
//         <button onClick={() => setActiveTab("photos")} className="flex-1 py-2">
//           📸 Photos
//         </button>
//         <button onClick={() => setActiveTab("pyq")} className="flex-1 py-2">
//           📖 PYQs
//         </button>
//         <button onClick={() => setActiveTab("alumni")} className="flex-1 py-2">
//           🎓 Alumni
//         </button>
//       </div>

//       {activeTab === "photos" && <img src={college.thumbnail} alt="College" className="w-full" />}
//       {activeTab === "pyq" && <a href={college.pyq}>📖 View PYQs</a>}
//       {activeTab === "alumni" && <p>📞 Contact Seniors: {college.seniorsContact}</p>}
//     </div>
//   );
// }

// export default CollegeDetail;





















import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface College {
  thumbnail: string;
  name: string;
  address: string;
  officialSite: string;
  ranking: string;
  pyq: string;
  seniorsContact: string;
  coursesOffered: string;
  fees: string;
  placementRate: string;
  averagePackage: string;
  youtubeVideos: string;
}

const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTahfkALnmkv7BcOI7mg9lnet0-nM78CxWNz7IrnwPi3HkJ7BhpdEw_rmDNK60pRSrADdTikmMcy6DV/pub?gid=0&single=true&output=csv";

function CollegeDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [college, setCollege] = useState<College | null>(null);
  const [activeTab, setActiveTab] = useState("photos");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(GOOGLE_SHEET_CSV_URL);
        const rows = response.data.split("\n").slice(1);

        const formattedData = rows.map((row: string) => {
          const cols = row.split(",");
          return {
            thumbnail: cols[0],
            name: cols[1],
            address: cols[2],
            officialSite: cols[3],
            ranking: cols[4],
            pyq: cols[5],
            seniorsContact: cols[6],
            coursesOffered: cols[7],
            fees: cols[8],
            placementRate: cols[9],
            averagePackage: cols[10],
            youtubeVideos: cols[11],
          };
        });

        const selectedCollege = formattedData.find(
          (c) => c.name === decodeURIComponent(name || "")
        );
        setCollege(selectedCollege || null);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [name]);

  if (!college) return <p className="text-center">Loading...</p>;

  return (
    <div className="min-h-screen bg-white p-6">
      <button onClick={() => navigate("/colleges")} className="mb-4 px-4 py-2 bg-gray-300 rounded-lg">
        ⬅️ Back
      </button>

      <h1 className="text-3xl font-bold mb-2">{college.name} 🏫</h1>
      <p className="text-gray-600">📍 {college.address}</p>
      <p className="text-gray-600">🏆 Ranking: {college.ranking}</p>
      <p className="text-gray-600">🎓 Courses: {college.coursesOffered}</p>
      <p className="text-gray-600">💰 Fees: ₹{college.fees} per year</p>
      <p className="text-gray-600">📊 Placement Rate: {college.placementRate}%</p>
      <p className="text-gray-600">💼 Avg Package: {college.averagePackage} LPA</p>

      <div className="flex border-b mb-4">
        <button onClick={() => setActiveTab("photos")} className="flex-1 py-2">
          📸 Photos
        </button>
        <button onClick={() => setActiveTab("pyq")} className="flex-1 py-2">
          📖 PYQs
        </button>
        <button onClick={() => setActiveTab("videos")} className="flex-1 py-2">
          🎥 Videos
        </button>
      </div>

      {activeTab === "photos" && <img src={college.thumbnail} alt="College" className="w-full" />}
      {activeTab === "pyq" && <a href={college.pyq}>📖 View PYQs</a>}
      {activeTab === "videos" && (
        <iframe
          width="100%"
          height="315"
          src={college.youtubeVideos.replace("watch?v=", "embed/")}
          title="College Video"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default CollegeDetail;





































// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// interface College {
//   thumbnail: string;
//   name: string;
//   address: string;
//   officialSite: string;
//   ranking: string;
//   pyq: string;
//   seniorsContact: string;
//   coursesOffered: string;
//   fees: string;
//   placementRate: string;
//   averagePackage: string;
//   youtubeVideos: string;
//   dp: string;
//   backgroundImage: string;
// }

// const GOOGLE_SHEET_CSV_URL =
//   "https://docs.google.com/spreadsheets/d/e/2PACX-1vTahfkALnmkv7BcOI7mg9lnet0-nM78CxWNz7IrnwPi3HkJ7BhpdEw_rmDNK60pRSrADdTikmMcy6DV/pub?gid=0&single=true&output=csv";

// function CollegeDetail() {
//   const { name } = useParams();
//   const navigate = useNavigate();
//   const [college, setCollege] = useState<College | null>(null);
//   const [activeTab, setActiveTab] = useState("photos");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(GOOGLE_SHEET_CSV_URL);
//         const rows = response.data.split("\n").slice(1);

//         const formattedData = rows.map((row: string) => {
//           const cols = row.split(",");
//           return {
//             thumbnail: cols[0],
//             name: cols[1],
//             address: cols[2],
//             officialSite: cols[3],
//             ranking: cols[4],
//             pyq: cols[5],
//             seniorsContact: cols[6],
//             coursesOffered: cols[7],
//             fees: cols[8],
//             placementRate: cols[9],
//             averagePackage: cols[10],
//             youtubeVideos: cols[11],
//             dp: cols[12], // New DP field
//             backgroundImage: cols[13], // New Background Image field
//           };
//         });

//         const selectedCollege = formattedData.find(
//           (c) => c.name === decodeURIComponent(name || "")
//         );
//         setCollege(selectedCollege || null);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [name]);

//   if (!college) return <p className="text-center">Loading...</p>;

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Background Image Section */}
//       <div
//         className="relative w-full h-56 bg-cover bg-center"
//         style={{ backgroundImage: `url(${college.backgroundImage})` }}
//       >
//         <button
//           onClick={() => navigate("/")}
//           className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-md"
//         >
//           ⬅️ Back
//         </button>
//       </div>

//       <div className="p-6">
//         {/* College Profile Section */}
//         <div className="flex items-center space-x-4">
//           {/* DP/Profile Image */}
//           <img
//             src={college.dp}
//             alt="Profile"
//             className="w-24 h-24 rounded-full border-4 border-gray-300"
//           />
//           <div>
//             <h1 className="text-3xl font-bold">{college.name} 🏫</h1>
//             <p className="text-gray-600">📍 {college.address}</p>
//             <p className="text-gray-600">🏆 Ranking: {college.ranking}</p>
//           </div>
//         </div>

//         {/* College Details */}
//         <div className="mt-4">
//           <p className="text-gray-600">🎓 Courses: {college.coursesOffered}</p>
//           <p className="text-gray-600">💰 Fees: ₹{college.fees} per year</p>
//           <p className="text-gray-600">📊 Placement Rate: {college.placementRate}%</p>
//           <p className="text-gray-600">💼 Avg Package: {college.averagePackage} LPA</p>
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex border-b my-4">
//           <button onClick={() => setActiveTab("photos")} className="flex-1 py-2">
//             📸 Photos
//           </button>
//           <button onClick={() => setActiveTab("pyq")} className="flex-1 py-2">
//             📖 PYQs
//           </button>
//           <button onClick={() => setActiveTab("videos")} className="flex-1 py-2">
//             🎥 Videos
//           </button>
//         </div>

//         {/* Tab Content */}
//         {activeTab === "photos" && (
//           <img src={college.thumbnail} alt="College" className="w-full rounded-lg shadow-md" />
//         )}
//         {activeTab === "pyq" && (
//           <a
//             href={college.pyq}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 underline"
//           >
//             📖 View PYQs
//           </a>
//         )}
//         {activeTab === "videos" && (
//           <iframe
//             width="100%"
//             height="315"
//             src={college.youtubeVideos.replace("watch?v=", "embed/")}
//             title="College Video"
//             allowFullScreen
//             className="rounded-lg shadow-md"
//           ></iframe>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CollegeDetail;


















// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// interface College {
//   thumbnail: string;
//   name: string;
//   address: string;
//   officialSite: string;
//   ranking: string;
//   pyq: string;
//   seniorsContact: string;
//   youtubeVideos: string[]; // Array of YouTube video links
// }

// const GOOGLE_SHEET_CSV_URL =
//   "https://docs.google.com/spreadsheets/d/e/2PACX-1vTahfkALnmkv7BcOI7mg9lnet0-nM78CxWNz7IrnwPi3HkJ7BhpdEw_rmDNK60pRSrADdTikmMcy6DV/pub?gid=0&single=true&output=csv";

// function CollegeDetail() {
//   const { name } = useParams();
//   const navigate = useNavigate();
//   const [college, setCollege] = useState<College | null>(null);
//   const [activeTab, setActiveTab] = useState("photos");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(GOOGLE_SHEET_CSV_URL);
//         const rows = response.data.split("\n").slice(1);

//         const formattedData = rows.map((row: string) => {
//           const cols = row.split(",");
//           return {
//             thumbnail: cols[0],
//             name: cols[1],
//             address: cols[2],
//             officialSite: cols[3],
//             ranking: cols[4],
//             pyq: cols[5],
//             seniorsContact: cols[6],
//             youtubeVideos: cols[7] ? cols[7].split("|") : [], // Convert CSV string to array
//           };
//         });

//         const selectedCollege = formattedData.find(
//           (c) => c.name === decodeURIComponent(name || "")
//         );
//         setCollege(selectedCollege || null);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [name]);

//   if (!college) return <p className="text-center">Loading...</p>;

//   return (
//     <div className="min-h-screen bg-white p-6">
//       <button onClick={() => navigate("/")} className="mb-4 px-4 py-2 bg-gray-300 rounded-lg">
//         ⬅️ Back
//       </button>

//       <h1 className="text-3xl font-bold mb-2">{college.name} 🏫</h1>
//       <p className="text-gray-600">📍 {college.address}</p>
//       <p className="text-gray-600">🏆 Ranking: {college.ranking}</p>

//       <div className="flex border-b mb-4">
//         <button onClick={() => setActiveTab("photos")} className="flex-1 py-2">
//           📸 Photos
//         </button>
//         <button onClick={() => setActiveTab("pyq")} className="flex-1 py-2">
//           📖 PYQs
//         </button>
//         <button onClick={() => setActiveTab("alumni")} className="flex-1 py-2">
//           🎓 Alumni
//         </button>
//       </div>

//       {/* 📸 Photos & YouTube Videos Tab */}
//       {activeTab === "photos" && (
//         <div>
//           <img src={college.thumbnail} alt="College" className="w-full rounded-lg mb-4" />
          
//           <h2 className="text-xl font-semibold mt-6 mb-2">🎥 YouTube Videos</h2>
//           {college.youtubeVideos.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {college.youtubeVideos.map((videoUrl, index) => {
//                 const videoId = videoUrl.split("v=")[1]; // Extract YouTube Video ID
//                 return (
//                   <iframe
//                     key={index}
//                     width="100%"
//                     height="250"
//                     src={`https://www.youtube.com/embed/${videoId}`}
//                     title={`YouTube Video ${index + 1}`}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     className="rounded-lg shadow-lg"
//                   />
//                 );
//               })}
//             </div>
//           ) : (
//             <p>No videos available.</p>
//           )}
//         </div>
//       )}

//       {/* 📖 PYQs Tab */}
//       {activeTab === "pyq" && <a href={college.pyq}>📖 View PYQs</a>}

//       {/* 🎓 Alumni Tab */}
//       {activeTab === "alumni" && <p>📞 Contact Seniors: {college.seniorsContact}</p>}
//     </div>
//   );
// }

// export default CollegeDetail;
