
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

export function Colleges() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const colors = [
    "bg-red-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-indigo-200",
    "bg-teal-200",
    "bg-orange-200",
  ];

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

        setColleges(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎓 College Explorer</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search College..."
        className="w-full p-3 border border-gray-400 rounded-lg mb-6 text-black"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* College List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((college, index) => (
          <div
            key={index}
            className={`shadow-lg border rounded-xl p-6 text-center cursor-pointer transition hover:scale-105 ${colors[index % colors.length]}`}
            onClick={() => navigate(`/college/${encodeURIComponent(college.name)}`)}
          >
            <img
              src={college.thumbnail}
              alt={college.name}
              className="w-32 h-32 mx-auto rounded-full border-4 border-gray-300"
            />
            <h2 className="text-lg font-semibold mt-4">{college.name} 🏫</h2>
            <p className="text-sm text-gray-600">📍 {college.address}</p>
            <p className="text-sm text-gray-600">🏆 Ranking: {college.ranking}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Colleges;
