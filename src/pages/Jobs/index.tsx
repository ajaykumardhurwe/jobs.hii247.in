
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaMapMarkerAlt, FaWhatsapp, FaShare, FaCalendar } from 'react-icons/fa';

// export function Jobs() {
//   const [activeTab, setActiveTab] = useState('government');
//   const [jobsData, setJobsData] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [locationFilter, setLocationFilter] = useState('');

//   const navigate = useNavigate();

//   const googleSheetUrls = {
//     government:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
//     private:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const url = googleSheetUrls[activeTab];
//       const response = await fetch(url);
//       const csvText = await response.text();

//       const rows = csvText.split('\n');
//       const headers = rows[0].split(',').map((header) => header.trim());
//       const data = rows.slice(1).map((row) => {
//         const values = row.split(',');
//         const job = {};
//         headers.forEach((header, index) => {
//           job[header] = values[index]?.trim() || '';
//         });
//         return job;
//       });

//       const validJobs = data
//         .filter((job) => job['Job Title'])
//         .sort((a, b) => new Date(b['Start Date']) - new Date(a['Start Date']));

//       setJobsData(validJobs);
//       setFilteredJobs(validJobs);
//     };

//     fetchData();
//   }, [activeTab]);

//   const handleFilter = () => {
//     const filtered = jobsData
//       .filter((job) => {
//         const jobStartDate = new Date(job['Start Date']);
//         const jobEndDate = new Date(job['End Date']);
//         const filterStart = startDate ? new Date(startDate) : null;
//         const filterEnd = endDate ? new Date(endDate) : null;

//         const matchesDate =
//           (!filterStart || jobStartDate >= filterStart) &&
//           (!filterEnd || jobEndDate <= filterEnd);

//         const matchesLocation =
//           !locationFilter ||
//           job['Location']?.toLowerCase().includes(locationFilter.toLowerCase());


//         return matchesDate && matchesLocation;
//       })
//       .sort((a, b) => new Date(b['Start Date']) - new Date(a['Start Date']));

//     setFilteredJobs(filtered);
//   };

//   const shareOnWhatsApp = (job) => {
//     const message = `📢 *Job Alert!* 📢
    
// 🔹 *Job Title:* ${job['Job Title']}
// 🏢 *Company:* ${job['Organization/Company Name']}
// 📍 *Location:* ${job['Location'] || 'Not specified'}
// 📅 *Start Date:* ${job['Start Date']}
// ⏳ *End Date:* ${job['End Date']}

// 🔗 More Details: https://ajaydhurwe.tech/
// 📲 Download App: https://play.google.com/store/apps/details?id=com.ajaykumardhurwe.ajaydhurwe

// Apply now! ✅`;

//     const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Jobs 📌</h1>
  
//       {/* Tab Navigation */}
//       <div className="flex space-x-4 mb-4">
//         {/* <button
//           className={`px-4 py-2 rounded ${
//             activeTab === 'government' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
//           }`}
//           onClick={() => setActiveTab('government')}
//         >
//           🏛 Government Jobs
//         </button> */}
        

//         <button
//           className={`px-4 py-2 rounded ${
//             activeTab === 'private' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
//           }`}
//           onClick={() => setActiveTab('private')}
//         >
//           🏢 Companies Job List in 2025
//         </button>
//       </div>
  
//       {/* Filter Section */}
//       <div className="flex flex-wrap items-center space-x-4 mb-4">
//         <label className="flex flex-col">
//           📅 Start Date:
//           <input type="date" className="border rounded px-2 py-1" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
//         </label>
//         <label className="flex flex-col">
//           📅 End Date:
//           <input type="date" className="border rounded px-2 py-1" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
//         </label>
//         <label className="flex flex-col">
//           <span className="flex items-center space-x-2">
//              <FaMapMarkerAlt className="text-red-500" />
//             <span>Location:</span>
//           </span>
//           <select className="border rounded px-2 py-1" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
//             <option value="">All Locations</option>
//             {['Bilaspur', 'Bhilai', 'Durg', 'Kawardha', 'Raipur', 'Rajnandgoan'].map((location, index) => (
//               <option key={index} value={location}>{location}</option>
//             ))}
//           </select>
//         </label>
//         <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleFilter}>🔍 Apply Filter</button>
//       </div>
  
//       {/* Jobs List */}
//       <div className="border p-4 rounded shadow">
//         {filteredJobs.length > 0 ? (
//           <ul className="space-y-2">
//             {filteredJobs.map((job, index) => (
//               <li key={index} className="flex justify-between items-center p-3 bg-green-100 rounded shadow hover:bg-green-200 transition">
//                 <button className="w-full text-left" onClick={() => navigate(`/job-details`, { state: { job } })}>
//                   <div className="flex items-center space-x-4">
//                     <img src={job['Image Link']} alt={job['Job Title']} className="w-12 h-12 rounded-full border-2 border-white" />
//                     <div>
//                       <div className="text-lg font-medium">{job['Job Title']}</div>
//                       <div className="text-sm text-gray-600">{job['Organization/Company Name']}</div>
//                       <div className="text-sm text-gray-500 flex flex-col">
//                         <span className="flex items-center space-x-1">
//                           <FaMapMarkerAlt className="text-orange-500" />
//                           <span>{job['Location'] || 'Not specified'}</span>
//                         </span>
//                         <span className="flex items-center space-x-1">
//                            <FaCalendar className="text-green-500" /> Start Date: <span>{job['Start Date'] || 'Not specified'}</span>
//                         </span>
//                         <span className="flex items-center space-x-1">
//                            <FaCalendar className="text-red-500" /> End Date: <span>{job['End Date'] || 'Not specified'}</span>
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </button>
//                 <button onClick={() => shareOnWhatsApp(job)} className="text-green-600 text-2xl ml-2">
//                   <FaShare /> <FaWhatsapp />
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <div className="flex flex-col items-center justify-center text-gray-500 mt-4">
//             <span className="text-4xl animate-spin">🔄</span> 
//             <p className="mt-2 text-lg font-semibold">Searching Jobs</p>
//             <span className="text-3xl">🤔</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaWhatsapp, FaShare, FaCalendar, FaUserTie } from 'react-icons/fa';

export function Jobs() {
  const [activeTab, setActiveTab] = useState('private');
  const [jobsData, setJobsData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [jobProfileFilter, setJobProfileFilter] = useState('');

  const navigate = useNavigate();

  const googleSheetUrls = {
    government: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
    private: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = googleSheetUrls[activeTab];
      const response = await fetch(url);
      const csvText = await response.text();
      const rows = csvText.split('\n');
      const headers = rows[0].split(',').map(header => header.trim());

      const data = rows.slice(1).map(row => {
        const values = row.split(',');
        const job = {};
        headers.forEach((header, index) => {
          job[header] = values[index]?.trim() || '';
        });
        return job;
      });

      const validJobs = data.filter(job => job['Job Title'])
        .sort((a, b) => new Date(b['Start Date']) - new Date(a['Start Date']));

      setJobsData(validJobs);
      setFilteredJobs(validJobs);
    };

    fetchData();
  }, [activeTab]);

  const handleFilter = () => {
    const filtered = jobsData.filter(job => {
      const jobStartDate = new Date(job['Start Date']);
      const jobEndDate = new Date(job['End Date']);
      const filterStart = startDate ? new Date(startDate) : null;
      const filterEnd = endDate ? new Date(endDate) : null;

      const matchesDate =
        (!filterStart || jobStartDate >= filterStart) &&
        (!filterEnd || jobEndDate <= filterEnd);

      const matchesLocation =
        !locationFilter || job['Location']?.toLowerCase().includes(locationFilter.toLowerCase());

      const matchesJobProfile =
        !jobProfileFilter || job['Job Profile']?.toLowerCase().includes(jobProfileFilter.toLowerCase());

      return matchesDate && matchesLocation && matchesJobProfile;
    });

    setFilteredJobs(filtered);
  };

  const shareOnWhatsApp = (job) => {
    const message = `📢 *Job Alert!* 📢

🔹 *Job Title:* ${job['Job Title']}
🏢 *Company:* ${job['Organization/Company Name']}
📍 *Location:* ${job['Location'] || 'Not specified'}
📅 *Start Date:* ${job['Start Date']}
⏳ *End Date:* ${job['End Date']}

🔗 More Details: https://ajaydhurwe.tech/
📲 Download App: https://play.google.com/store/apps/details?id=com.ajaykumardhurwe.ajaydhurwe

Apply now! ✅`;

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Jobs 📌</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${activeTab === 'private' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setActiveTab('private')}
        >
          🏢 Companies Job List in 2025
        </button>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 mb-4">
        <label className="flex flex-col">
          📅 Start Date:
          <input type="date" className="border rounded px-2 py-1" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </label>
        <label className="flex flex-col">
          📅 End Date:
          <input type="date" className="border rounded px-2 py-1" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </label>
        <label className="flex flex-col">
          <span className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-red-500" />
            <span>Location:</span>
          </span>
          <select className="border rounded px-2 py-1" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
            <option value="">All Locations</option>
            {['Bilaspur', 'Bhilai', 'Durg', 'Kawardha', 'Raipur', 'Rajnandgoan'].map((loc, i) => (
              <option key={i} value={loc}>{loc}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col">
          <span>💼 Job Profile:</span>
          <select className="border rounded px-2 py-1" value={jobProfileFilter} onChange={(e) => setJobProfileFilter(e.target.value)}>
            <option value="">All Profiles</option>
            {['SDE', 'BDA', 'SWE', 'Intern', 'HR'].map((profile, i) => (
              <option key={i} value={profile}>{profile}</option>
            ))}
          </select>
        </label>
        <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleFilter}>🔍 Apply Filter</button>
      </div>

      {/* Job List */}
      <div className="border p-4 rounded shadow">
        {filteredJobs.length > 0 ? (
          <ul className="space-y-2">
            {filteredJobs.map((job, index) => (
              <li key={index} className="flex justify-between items-center p-3 bg-green-100 rounded shadow hover:bg-green-200">
                <button className="w-full text-left" onClick={() => navigate(`/job-details`, { state: { job } })}>
                  <div className="flex items-center space-x-4">
                    <img src={job['Image Link']} alt={job['Job Title']} className="w-12 h-12 rounded-full border" />
                    <div>
                      <div className="text-lg font-medium">{job['Job Title']}</div>
                      <div className="text-sm text-gray-600">{job['Organization/Company Name']}</div>
                      <div className="text-sm text-gray-500">
                        <div className="flex items-center space-x-1"><FaMapMarkerAlt className="text-orange-500" /> <span>{job['Location'] || 'Not specified'}</span></div>
                        <div className="flex items-center space-x-1"><FaCalendar className="text-green-500" /> <span>Start: {job['Start Date']}</span></div>
                        <div className="flex items-center space-x-1"><FaCalendar className="text-red-500" /> <span>End: {job['End Date']}</span></div>
                        <div className="flex items-center space-x-1"><FaUserTie className="text-purple-500" /> <span>Profile: {job['Job Profile']}</span></div>

                      </div>
                    </div>
                  </div>
                </button>
                <button onClick={() => shareOnWhatsApp(job)} className="text-green-600 text-2xl ml-2">
                  <FaShare /> <FaWhatsapp />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center text-gray-500 mt-4">
            <span className="text-4xl animate-spin">🔄</span>
            <p className="mt-2 text-lg font-semibold">Searching Jobs</p>
            <span className="text-3xl">🤔</span>
          </div>
        )}
      </div>
    </div>
  );
}
