// import React, { useEffect, useState } from 'react';
// import { db } from './firebase';
// import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

// const VisitorCounter = () => {
//   const [visitCount, setVisitCount] = useState(0);

//   useEffect(() => {
//     const incrementVisitCount = async () => {
//       const counterRef = doc(db, 'analytics', 'visitorCounter');
//       const docSnap = await getDoc(counterRef);

//       if (docSnap.exists()) {
//         const currentCount = docSnap.data().count || 0;
//         setVisitCount(currentCount + 1);
//         await updateDoc(counterRef, { count: currentCount + 1 });
//       } else {
//         await setDoc(counterRef, { count: 1 });
//         setVisitCount(1);
//       }
//     };

//     incrementVisitCount();
//   }, []);

//   return (
//     <div className="text-center mt-4">
//       <p className="text-gray-600 text-lg font-medium">
//         Visitor Count: <span className="text-blue-600">{visitCount}</span>
//       </p>
//     </div>
//   );
// };

// export default VisitorCounter;










import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { Eye } from 'lucide-react'; // Importing the Eye icon (or use any icon you prefer)

const VisitorCounter = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const incrementVisitCount = async () => {
      const counterRef = doc(db, 'analytics', 'visitorCounter');
      const docSnap = await getDoc(counterRef);

      if (docSnap.exists()) {
        const currentCount = docSnap.data().count || 0;
        setVisitCount(currentCount + 1);
        await updateDoc(counterRef, { count: currentCount + 1 });
      } else {
        await setDoc(counterRef, { count: 1 });
        setVisitCount(1);
      }
    };

    incrementVisitCount();
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2">
      <Eye className="w-6 h-6 text-red-600" /> {/* Eye icon */}
      <span className="text-green-600 text-lg font-medium">{visitCount}</span> {/* Visitor count */}
    </div>
  );
};

export default VisitorCounter;
