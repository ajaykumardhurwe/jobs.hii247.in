import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Briefcase, Info, User, School } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: BookOpen, label: 'MCQ', path: '/mcq' },
  { icon: Briefcase, label: 'Jobs', path: '/jobs' },
  { icon: School, label: 'A²Class', path: '/a²class' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-full h-full ${
                isActive ? 'text-blue-600' : 'text-gray-600'
              }`
            }
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs mt-1">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}











// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Home, BookOpen, Briefcase, Info, User } from 'lucide-react';

// const navItems = [
//   { icon: Home, label: 'Home', path: '/' },
//   { icon: BookOpen, label: 'MCQ', path: '/mcq' },
//   { icon: Briefcase, label: 'Jobs', path: '/jobs' },
//   { icon: Info, label: 'About', path: '/about' },
//   { icon: User, label: 'Profile', path: '/profile' },
// ];

// export function BottomNav() {
//   return (
//     <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
//       <div className="flex justify-around items-center h-16">
//         {navItems.map(({ icon: Icon, label, path }) => (
//           <NavLink
//             key={path}
//             to={path}
//             className={({ isActive }) =>
//               `flex flex-col items-center justify-center w-full h-full ${
//                 isActive ? 'text-blue-600' : 'text-gray-600'
//               }`
//             }
//           >
//             <Icon className="w-6 h-6" />
//             <span className="text-xs mt-1">{label}</span>
//           </NavLink>
//         ))}
//       </div>
//     </nav>
//   );
// }