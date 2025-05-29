import React from 'react';
import { Link } from 'react-router-dom';
import { Book, ChevronDown } from 'lucide-react';

const subjects = [
  {
    id: 'indian-constitution',
    title: 'भारतीय संविधान',
    description: 'We bring you a special MCQ series on the Indian Constitution, designed specifically for aspirants preparing for government job exams like SSC, UPSC, Banking, and more.',
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 'indian-polity',
    title: 'Indian Polity',
    description: 'Study of Indian political system and governance',
    thumbnail: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=500',
  },
  // Add other subjects similarly
];

export function SubjectList() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">MCQ Subjects</h1>
      <div className="grid gap-4">
        {subjects.map((subject) => (
          <div key={subject.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={subject.thumbnail}
              alt={subject.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{subject.title}</h2>
              <p className="text-gray-600 mt-2">{subject.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <button className="flex items-center text-blue-600">
                  <ChevronDown className="w-4 h-4 mr-1" />
                  Learn More
                </button>
                <Link
                  to={`/mcq/${subject.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Test Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}















// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Book, ChevronDown } from 'lucide-react';

// const subjects = [
//   {
//     id: 'indian-constitution',
//     title: 'Indian Constitution',
//     description: 'Comprehensive study of Indian Constitution',
//     thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=500',
//   },
//   {
//     id: 'indian-polity',
//     title: 'Indian Polity',
//     description: 'Study of Indian political system and governance',
//     thumbnail: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=500',
//   },
//   // Add other subjects similarly
// ];

// export function SubjectList() {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">MCQ Subjects</h1>
//       <div className="grid gap-4">
//         {subjects.map((subject) => (
//           <div key={subject.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <img
//               src={subject.thumbnail}
//               alt={subject.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold">{subject.title}</h2>
//               <p className="text-gray-600 mt-2">{subject.description}</p>
//               <div className="mt-4 flex justify-between items-center">
//                 <button className="flex items-center text-blue-600">
//                   <ChevronDown className="w-4 h-4 mr-1" />
//                   Show Details
//                 </button>
//                 <Link
//                   to={`/mcq/${subject.id}`}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//                 >
//                   Test Details
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }