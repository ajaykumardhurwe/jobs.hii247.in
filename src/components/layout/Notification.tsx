// import { useState, useEffect } from "react";
// import { Bell, ExternalLink } from "lucide-react"; // Icons
// import Papa from "papaparse";

// const Notification = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [open, setOpen] = useState(false);

//   // Replace with your published Google Sheets CSV link
//   const googleSheetCSV =
//     "https://docs.google.com/spreadsheets/d/e/2PACX-1vT26hcF-szx0cOpQdZ2wR6ZtNWXGmOmLQb-gkzgoSn2dlJ67tSeb8gk-aMK-Wn6YdtBAKf_eCPSO6NP/pub?gid=0&single=true&output=csv";

//   useEffect(() => {
//     fetchCSVData();
//   }, []);

//   const fetchCSVData = async () => {
//     const response = await fetch(googleSheetCSV);
//     const text = await response.text();
//     Papa.parse(text, {
//       header: true,
//       skipEmptyLines: true,
//       complete: (result) => setNotifications(result.data),
//     });
//   };

//   return (
//     <div className="relative">
//       {/* Notification Bell Icon */}
//       <button
//         className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
//         onClick={() => setOpen(!open)}
//       >
//         <Bell className="w-6 h-6" />
//       </button>

//       {/* Notification Panel */}
//       {open && (
//         <div className="absolute right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg p-4 z-50">
//           <h3 className="text-lg font-semibold mb-2">🔔 Notifications</h3>
//           <div className="max-h-60 overflow-auto">
//             {notifications.length > 0 ? (
//               notifications.map((item, index) => (
//                 <div
//                   key={index}
//                   className="border-b pb-2 mb-2 last:border-none last:mb-0"
//                 >
//                   <h4 className="font-medium text-gray-900">
//                     {item.title} 📝
//                   </h4>
//                   <p className="text-gray-600 text-sm">{item.description}</p>
//                   <a
//                     href={item.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500 flex items-center mt-1"
//                   >
//                     Read More <ExternalLink className="w-4 h-4 ml-1" />
//                   </a>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-500 text-sm">No new notifications 🚀</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Notification;














// import { useState, useEffect } from "react";
// import { Bell, ExternalLink } from "lucide-react"; // Icons
// import Papa from "papaparse";
// import dayjs from "dayjs"; // For date formatting
// import relativeTime from "dayjs/plugin/relativeTime";

// dayjs.extend(relativeTime);

// const Notification = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [groupedNotifications, setGroupedNotifications] = useState({});

//   // Replace with your Google Sheets CSV link
//   const googleSheetCSV =
//     "https://docs.google.com/spreadsheets/d/e/2PACX-1vT26hcF-szx0cOpQdZ2wR6ZtNWXGmOmLQb-gkzgoSn2dlJ67tSeb8gk-aMK-Wn6YdtBAKf_eCPSO6NP/pub?gid=0&single=true&output=csv";

//   useEffect(() => {
//     fetchCSVData();
//   }, []);

//   const fetchCSVData = async () => {
//     const response = await fetch(googleSheetCSV);
//     const text = await response.text();
//     Papa.parse(text, {
//       header: true,
//       skipEmptyLines: true,
//       complete: (result) => {
//         const parsedData = result.data.map((item) => ({
//           ...item,
//           date: dayjs(item.date).format("YYYY-MM-DD"),
//         }));

//         setNotifications(parsedData);
//         groupByDate(parsedData);
//       },
//     });
//   };

//   const groupByDate = (data) => {
//     const today = dayjs().format("YYYY-MM-DD");
//     const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD");

//     const grouped = data.reduce((acc, item) => {
//       let label;
//       if (item.date === today) {
//         label = "Today";
//       } else if (item.date === yesterday) {
//         label = "Yesterday";
//       } else {
//         label = dayjs(item.date).format("DD MMM YYYY");
//       }

//       if (!acc[label]) {
//         acc[label] = [];
//       }
//       acc[label].push(item);
//       return acc;
//     }, {});

//     setGroupedNotifications(grouped);
//   };

//   // Count today's notifications
//   const todayCount =
//     groupedNotifications["Today"]?.length > 0
//       ? groupedNotifications["Today"].length
//       : 0;

//   return (
//     <div className="relative">
//       {/* Notification Bell with Count */}
//       <button
//         className="relative p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
//         onClick={() => setOpen(!open)}
//       >
//         <Bell className="w-6 h-6" />
//         {todayCount > 0 && (
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//             {todayCount}
//           </span>
//         )}
//       </button>

//       {/* Notification Panel */}
//       {open && (
//         <div className="absolute right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg p-4 z-50">
//           <h3 className="text-lg font-semibold mb-2">🔔 Notifications</h3>
//           <div className="max-h-60 overflow-auto">
//             {Object.keys(groupedNotifications).length > 0 ? (
//               Object.entries(groupedNotifications).map(([date, items]) => (
//                 <div key={date} className="mb-3">
//                   <h4 className="text-gray-700 font-bold">{date}</h4>
//                   {items.map((item, index) => (
//                     <div
//                       key={index}
//                       className="border-b pb-2 mb-2 last:border-none last:mb-0"
//                     >
//                       <h4 className="font-medium text-gray-900">
//                         {item.title} 📝
//                       </h4>
//                       <p className="text-gray-600 text-sm">{item.description}</p>
//                       <a
//                         href={item.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-500 flex items-center mt-1"
//                       >
//                         Read More <ExternalLink className="w-4 h-4 ml-1" />
//                       </a>
//                     </div>
//                   ))}
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-500 text-sm">No new notifications 🚀</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Notification;






















// import { useState, useEffect } from "react";
// import { Bell, ExternalLink } from "lucide-react"; // Icons
// import Papa from "papaparse";
// import dayjs from "dayjs"; // For date formatting
// import relativeTime from "dayjs/plugin/relativeTime";
// import utc from "dayjs/plugin/utc";
// import timezone from "dayjs/plugin/timezone";

// dayjs.extend(relativeTime);
// dayjs.extend(utc);
// dayjs.extend(timezone);

// const Notification = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [groupedNotifications, setGroupedNotifications] = useState({});

//   // Replace with your Google Sheets CSV link
//   const googleSheetCSV =
//     "https://docs.google.com/spreadsheets/d/e/2PACX-1vT26hcF-szx0cOpQdZ2wR6ZtNWXGmOmLQb-gkzgoSn2dlJ67tSeb8gk-aMK-Wn6YdtBAKf_eCPSO6NP/pub?gid=0&single=true&output=csv";

//   useEffect(() => {
//     fetchCSVData();
//   }, []);

//   const fetchCSVData = async () => {
//     const response = await fetch(googleSheetCSV);
//     const text = await response.text();
//     Papa.parse(text, {
//       header: true,
//       skipEmptyLines: true,
//       complete: (result) => {
//         const parsedData = result.data
//           .map((item) => ({
//             ...item,
//             date: item.date ? dayjs(item.date).format("YYYY-MM-DD") : null,
//           }))
//           .filter((item) => item.date !== null); // Remove invalid dates

//         // Sort by date (newest first)
//         parsedData.sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));

//         setNotifications(parsedData);
//         groupByDate(parsedData);
//       },
//     });
//   };

//   const groupByDate = (data) => {
//     const today = dayjs().format("YYYY-MM-DD");
//     const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD");

//     const grouped = data.reduce((acc, item) => {
//       let label;
//       if (item.date === today) {
//         label = "Today";
//       } else if (item.date === yesterday) {
//         label = "Yesterday";
//       } else {
//         label = dayjs(item.date).format("DD MMM YYYY");
//       }

//       if (!acc[label]) {
//         acc[label] = [];
//       }
//       acc[label].push(item);
//       return acc;
//     }, {});

//     setGroupedNotifications(grouped);
//   };

//   // Count today's notifications
//   const todayCount = groupedNotifications["Today"]?.length || 0;

//   return (
//     <div className="relative">
//       {/* Notification Bell with Count */}
//       <button
//         className="relative p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
//         onClick={() => setOpen(!open)}
//       >
//         <Bell className="w-6 h-6" />
//         {todayCount > 0 && (
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//             {todayCount}
//           </span>
//         )}
//       </button>

//       {/* Notification Panel */}
//       {open && (
//         <div className="absolute right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg p-4 z-50">
//           <h3 className="text-lg font-semibold mb-2">🔔 Notifications</h3>
//           <div className="max-h-60 overflow-auto">
//             {Object.keys(groupedNotifications).length > 0 ? (
//               Object.entries(groupedNotifications)
//                 .sort((a, b) => dayjs(b[0]).diff(dayjs(a[0]))) // Sort grouped dates
//                 .map(([date, items]) => (
//                   <div key={date} className="mb-3">
//                     <h4 className="text-gray-700 font-bold">{date}</h4>
//                     {items.map((item, index) => (
//                       <div
//                         key={index}
//                         className="border-b pb-2 mb-2 last:border-none last:mb-0"
//                       >
//                         <h4 className="font-medium text-gray-900">
//                           {item.title} 📝
//                         </h4>
//                         <p className="text-gray-600 text-sm">{item.description}</p>
//                         <a
//                           href={item.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-500 flex items-center mt-1"
//                         >
//                           Read More <ExternalLink className="w-4 h-4 ml-1" />
//                         </a>
//                       </div>
//                     ))}
//                   </div>
//                 ))
//             ) : (
//               <p className="text-gray-500 text-sm">No new notifications 🚀</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Notification;

















import { useState, useEffect } from "react";
import { Bell, ExternalLink } from "lucide-react"; // Icons
import Papa from "papaparse";
import dayjs from "dayjs"; // For date formatting
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  const [groupedNotifications, setGroupedNotifications] = useState({});

  // Replace with your Google Sheets CSV link
  const googleSheetCSV =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vT26hcF-szx0cOpQdZ2wR6ZtNWXGmOmLQb-gkzgoSn2dlJ67tSeb8gk-aMK-Wn6YdtBAKf_eCPSO6NP/pub?gid=0&single=true&output=csv";

  useEffect(() => {
    fetchCSVData();
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setOpen(false); // Close notification popup when tab is inactive
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const fetchCSVData = async () => {
    const response = await fetch(googleSheetCSV);
    const text = await response.text();
    Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const parsedData = result.data
          .map((item) => ({
            ...item,
            date: item.date ? dayjs(item.date).format("YYYY-MM-DD") : null,
          }))
          .filter((item) => item.date !== null); // Remove invalid dates

        // Sort by date (latest first)
        parsedData.sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));

        setNotifications(parsedData);
        groupByDate(parsedData);
      },
    });
  };

  const groupByDate = (data) => {
    const today = dayjs().format("YYYY-MM-DD");
    const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD");

    const grouped = data.reduce((acc, item) => {
      let label;
      if (item.date === today) {
        label = "Today";
      } else if (item.date === yesterday) {
        label = "Yesterday";
      } else {
        label = dayjs(item.date).format("DD MMM YYYY");
      }

      if (!acc[label]) {
        acc[label] = [];
      }
      acc[label].push(item);
      return acc;
    }, {});

    // Sort groups: today first, then yesterday, then older dates in descending order
    const sortedGrouped = Object.keys(grouped)
      .sort((a, b) => {
        if (a === "Today") return -1;
        if (b === "Today") return 1;
        if (a === "Yesterday") return -1;
        if (b === "Yesterday") return 1;
        return dayjs(b, "DD MMM YYYY").diff(dayjs(a, "DD MMM YYYY"));
      })
      .reduce((acc, key) => {
        acc[key] = grouped[key];
        return acc;
      }, {});

    setGroupedNotifications(sortedGrouped);
  };

  // Count today's notifications
  const todayCount = groupedNotifications["Today"]?.length || 0;

  return (
    <div className="relative">
      {/* Notification Bell with Count */}
      <button
        className="relative p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
        onClick={() => setOpen(!open)}
      >
        <Bell className="w-6 h-6" />
        {todayCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {todayCount}
          </span>
        )}
      </button>

      {/* Notification Panel */}
      {open && (
        <div className="absolute left-0 mt-2 w-80 bg-white border rounded-lg shadow-lg p-4 z-50">
          <h3 className="text-lg font-semibold mb-2">🔔 Notifications</h3>
          <div className="max-h-60 overflow-auto">
            {Object.keys(groupedNotifications).length > 0 ? (
              Object.entries(groupedNotifications).map(([date, items]) => (
                <div key={date} className="mb-3">
                  <h4 className="text-gray-700 font-bold">{date}</h4>
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="border-b pb-2 mb-2 last:border-none last:mb-0"
                    >
                      <h4 className="font-medium text-gray-900">
                        {item.title} 📝
                      </h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 flex items-center mt-1"
                      >
                        Read More <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No new notifications 🚀</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;





