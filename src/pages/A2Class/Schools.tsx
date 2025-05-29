// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// interface School {
//   thumbnail: string;
//   name: string;
//   address: string;
//   officialSite: string;
//   ranking: string;
//   seniorsContact: string;
// }

// const SCHOOL_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTahfkALnmkv7BcOI7mg9lnet0-nM78CxWNz7IrnwPi3HkJ7BhpdEw_rmDNK60pRSrADdTikmMcy6DV/pub?gid=0&single=true&output=csv";

// export function Schools() {
//   const [schools, setSchools] = useState<School[]>([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(SCHOOL_CSV_URL);
//         const rows = response.data.split("\n").slice(1);

//         const formattedData = rows.map((row: string) => {
//           const cols = row.split(",");
//           return {
//             thumbnail: cols[0],
//             name: cols[1],
//             address: cols[2],
//             officialSite: cols[3],
//             ranking: cols[4],
//             seniorsContact: cols[5],
//           };
//         });

//         setSchools(formattedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="p-6 max-w-5xl mx-auto">
//       <Link to="/" className="text-blue-500">🔙 Back</Link>
//       <h1 className="text-2xl font-bold my-4">🏫 School List</h1>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="🔍 Search School..."
//         className="w-full p-3 border border-gray-300 rounded-lg mb-6"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* Schools Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {schools.map((school, index) => (
//           <div key={index} className="bg-white shadow-md p-4 rounded-xl flex flex-col items-center">
//             <img src={school.thumbnail} alt={school.name} className="w-32 h-32 rounded-full border-4 border-gray-200" />
//             <h2 className="text-lg font-semibold mt-4">{school.name}</h2>
//             <p className="text-sm text-gray-500">📍 {school.address}</p>
//             <p className="text-sm text-gray-500">🏆 Ranking: {school.ranking}</p>
//             <a href={school.officialSite} target="_blank" className="text-blue-500">🌐 Official Site</a>
//             <p className="text-sm text-gray-700 mt-2">📞 Seniors: {school.seniorsContact}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Schools;















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
}

const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTahfkALnmkv7BcOI7mg9lnet0-nM78CxWNz7IrnwPi3HkJ7BhpdEw_rmDNK60pRSrADdTikmMcy6DV/pub?gid=0&single=true&output=csv";

export function Schools() {
  const [Schools, setSchools] = useState<College[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(GOOGLE_SHEET_CSV_URL);
        const rows = response.data.split("\n").slice(1); // Skip headers

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
          };
        });

        setSchools(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredSchools = Schools.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Instagram Profile Header */}
      <div className="flex items-center space-x-6 mb-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-pink-500"
        />
        <div>
          <h1 className="text-3xl font-bold">🎓 School Explorer</h1>
          <p className="text-gray-500">Discover top Schools across India</p>
        </div>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search Schhols..."
        className="w-full p-3 border border-gray-300 rounded-lg mb-6 shadow-sm focus:ring-2 focus:ring-pink-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* College Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSchools.map((college, index) => (
          <div
            key={index}
            className="bg-white shadow-md border rounded-xl p-4 flex flex-col items-center transition-all hover:scale-105"
          >
            {/* College Thumbnail */}
            <img
              src={college.thumbnail}
              alt={college.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
            />

            {/* College Info */}
            <h2 className="text-lg font-semibold mt-4">{college.name} 🏫</h2>
            <p className="text-sm text-gray-500">📍 {college.address}</p>
            <p className="text-sm text-gray-500">🏆 Ranking: {college.ranking}</p>

            {/* Links Section */}
            <div className="mt-3 space-x-2 flex">
              <a
                href={college.officialSite}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg shadow-md hover:bg-blue-600"
              >
                🌐 Official Site
              </a>
              <a
                href={college.pyq}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 text-white text-sm rounded-lg shadow-md hover:bg-green-600"
              >
                📖 PYQ
              </a>
            </div>

            {/* Seniors Contact */}
            <p className="text-sm text-gray-700 mt-2">
              📞 <strong>Seniors:</strong> {college.seniorsContact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schools;
