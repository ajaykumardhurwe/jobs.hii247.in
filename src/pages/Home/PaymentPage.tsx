
// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Warning } from "../../components/layout/Warning";
// // Card data
// const cards = [
//   {
//     id: 1,
//     title: "Basic Plan",
//     price: "$199",
//     paymentRoute: "/payment/basic",
//   },
//   {
//     id: 2,
//     title: "Pro Plan",
//     price: "$399",
//     paymentRoute: "/payment/pro",
//   },
//   {
//     id: 3,
//     title: "Premium Plan",
//     price: "$599",
//     paymentRoute: "/payment/premium",
//   },
//   {
//     id: 4,
//     title: "Basic App Plan",
//     price: "$199",
//     paymentRoute: "/app/payment/basic",
//   },
//   {
//     id: 5,
//     title: "Medium Plan",
//     price: "$399",
//     paymentRoute: "/app/payment/medium",
//   },
//   {
//     id: 6,
//     title: "Pro App Plan",
//     price: "$599",
//     paymentRoute: "/app/payment/pro",
//   },
// ];

// const PaymentPage: React.FC = () => {
//   const { planId } = useParams<{ planId: string }>();
//   const navigate = useNavigate();

//   const selectedPlan = cards.find((card) => card.paymentRoute.includes(planId || ""));

//   if (!selectedPlan) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <h2 className="text-2xl font-bold text-red-600">Plan Not Found</h2>
//         <button
//           className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
//           onClick={() => navigate("/")}
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedPlan.title}</h2>
//         <p className="text-xl text-gray-700 mb-4">Price: {selectedPlan.price}</p>
        
//         {/* <button
//           className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
//           onClick={() => alert("Payment processing...")}
//         >
//           Proceed to Payment
//         </button> */}

// <button
//   className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
//   onClick={() => window.location.href = "https://www.instamojo.com/@ajaydhurwe_tech/l52421df2a8424c48be5e03a0916898dc/"}
// >
//   Proceed to Payment
// </button>

// <Warning title={selectedPlan.title} price={selectedPlan.price} />


//       </div>
//     </div>
//   );
// };

// export default PaymentPage;























// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Warning } from "../../components/layout/Warning";

// // Card data
// const cards = [
//   {
//     id: 1,
//     title: "Basic Plan",
//     price: "$199",
//     paymentRoute: "/payment/basic",
//   },
//   {
//     id: 2,
//     title: "Pro Plan",
//     price: "$399",
//     paymentRoute: "/payment/pro",
//   },
//   {
//     id: 3,
//     title: "Premium Plan",
//     price: "$599",
//     paymentRoute: "/payment/premium",
//   },
//   {
//     id: 4,
//     title: "Basic App Plan",
//     price: "$199",
//     paymentRoute: "/app/payment/basic",
//   },
//   {
//     id: 5,
//     title: "Medium Plan",
//     price: "$399",
//     paymentRoute: "/app/payment/medium",
//   },
//   {
//     id: 6,
//     title: "Pro App Plan",
//     price: "$599",
//     paymentRoute: "/app/payment/pro",
//   },
// ];

// const PaymentPage: React.FC = () => {
//   const { planId } = useParams<{ planId: string }>();
//   const navigate = useNavigate();
//   const [showWarning, setShowWarning] = useState(false);

//   const selectedPlan = cards.find((card) => card.paymentRoute.includes(planId || ""));

//   if (!selectedPlan) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <h2 className="text-2xl font-bold text-red-600">Plan Not Found</h2>
//         <button
//           className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
//           onClick={() => navigate("/")}
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   const handlePayment = () => {
//     setShowWarning(true);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedPlan.title}</h2>
//         <p className="text-xl text-gray-700 mb-4">Price: {selectedPlan.price}</p>
        
//         <button
//           className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
//           onClick={handlePayment}
//         >
//           Proceed to Payment
//         </button>

//         {showWarning && (
//           <>
//             <Warning title={selectedPlan.title} price={selectedPlan.price} />
//             <a
//               href="https://www.instamojo.com/@ajaydhurwe_tech/l52421df2a8424c48be5e03a0916898dc/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
//             >
//               Click Here to Pay
//             </a>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;














// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Warning } from "../../components/layout/Warning";

// // Card data
// const cards = [
//   {
//     id: 1,
//     title: "Basic Plan",
//     price: "$199",
//     paymentRoute: "/payment/basic",
//   },
//   {
//     id: 2,
//     title: "Pro Plan",
//     price: "$399",
//     paymentRoute: "/payment/pro",
//   },
//   {
//     id: 3,
//     title: "Premium Plan",
//     price: "$599",
//     paymentRoute: "/payment/premium",
//   },
//   {
//     id: 4,
//     title: "Basic App Plan",
//     price: "$199",
//     paymentRoute: "/app/payment/basic",
//   },
//   {
//     id: 5,
//     title: "Medium Plan",
//     price: "$399",
//     paymentRoute: "/app/payment/medium",
//   },
//   {
//     id: 6,
//     title: "Pro App Plan",
//     price: "$599",
//     paymentRoute: "/app/payment/pro",
//   },
// ];

// const PaymentPage: React.FC = () => {
//   const { planId } = useParams<{ planId: string }>();
//   const navigate = useNavigate();
//   const [showWarning, setShowWarning] = useState(false);

//   const selectedPlan = cards.find((card) => card.paymentRoute.includes(planId || ""));

//   if (!selectedPlan) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <h2 className="text-2xl font-bold text-red-600">Plan Not Found</h2>
//         <button
//           className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
//           onClick={() => navigate("/")}
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedPlan.title}</h2>
//         <p className="text-xl text-gray-700 mb-4">Price: {selectedPlan.price}</p>
        
//         <button
//           className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
//           onClick={() => setShowWarning(true)}
//         >
//           Proceed to Payment
//         </button>
//       </div>

//       {/* Warning Popup Modal */}
//       {showWarning && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
//             <h2 className="text-2xl font-bold text-red-600 mb-4">Warning</h2>
//             <Warning title={selectedPlan.title} price={selectedPlan.price} />
//             <p className="mt-2 text-gray-700">Please confirm before proceeding.</p>
            
//             <div className="mt-4 flex justify-center gap-4">
//               <button
//                 className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
//                 onClick={() => setShowWarning(false)}
//               >
//                 Cancel
//               </button>
//               <a
//                 href="https://www.instamojo.com/@ajaydhurwe_tech/l52421df2a8424c48be5e03a0916898dc/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
//               >
//                 Proceed to Payment
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentPage;



























// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Warning } from "../../components/layout/Warning";

// // Card data
// const cards = [
//   {
//     id: 1,
//     title: "Basic Plan",
//     price: "$199",
//     paymentRoute: "/payment/basic",
//   },
//   {
//     id: 2,
//     title: "Pro Plan",
//     price: "$399",
//     paymentRoute: "/payment/pro",
//   },
//   {
//     id: 3,
//     title: "Premium Plan",
//     price: "$599",
//     paymentRoute: "/payment/premium",
//   },
//   {
//     id: 4,
//     title: "Basic App Plan",
//     price: "$199",
//     paymentRoute: "/app/payment/basic",
//   },
//   {
//     id: 5,
//     title: "Medium Plan",
//     price: "$399",
//     paymentRoute: "/app/payment/medium",
//   },
//   {
//     id: 6,
//     title: "Pro App Plan",
//     price: "$599",
//     paymentRoute: "/app/payment/pro",
//   },
// ];

// const PaymentPage: React.FC = () => {
//   const { planId } = useParams<{ planId: string }>();
//   const navigate = useNavigate();
//   const [showWarning, setShowWarning] = useState(false);

//   const selectedPlan = cards.find((card) => card.paymentRoute.includes(planId || ""));

//   if (!selectedPlan) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <h2 className="text-2xl font-bold text-red-600">Plan Not Found</h2>
//         <button
//           className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
//           onClick={() => navigate("/")}
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedPlan.title}</h2>
//         <p className="text-xl text-gray-700 mb-4">Price: {selectedPlan.price}</p>
        
//         <button
//           className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
//           onClick={() => setShowWarning(true)}
//         >
//           Proceed to Payment
//         </button>
//       </div>

//       {/* Small Warning Popup Modal */}
//       {showWarning && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-4 rounded-lg shadow-lg w-800 text-center">
//             <h2 className="text-lg font-bold text-red-600 mb-2">Warning</h2>
//             <Warning title={selectedPlan.title} price={selectedPlan.price} />
//             <p className="mt-2 text-gray-700 text-sm">Please confirm before proceeding.</p>
            
//             <div className="mt-4 flex justify-center gap-2">
//               <button
//                 className="px-4 py-2 bg-gray-400 text-white rounded-md text-sm hover:bg-gray-500"
//                 onClick={() => setShowWarning(false)}
//               >
//                 Cancel
//               </button>
//               <a
//                 href="https://www.instamojo.com/@ajaydhurwe_tech/l52421df2a8424c48be5e03a0916898dc/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600"
//               >
//                 Pay Now
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentPage;

















import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Warning } from "../../components/layout/Warning";

// Card data
const cards = [
  {
    id: 1,
    title: "Basic Plan",
    price: "$199",
    paymentRoute: "/payment/basic",
  },
  {
    id: 2,
    title: "Pro Plan",
    price: "$399",
    paymentRoute: "/payment/pro",
  },
  {
    id: 3,
    title: "Premium Plan",
    price: "$599",
    paymentRoute: "/payment/premium",
  },
  {
    id: 4,
    title: "Basic App Plan",
    price: "$199",
    paymentRoute: "/app/payment/basic",
  },
  {
    id: 5,
    title: "Medium Plan",
    price: "$399",
    paymentRoute: "/app/payment/medium",
  },
  {
    id: 6,
    title: "Pro App Plan",
    price: "$599",
    paymentRoute: "/app/payment/pro",
  },
];

const PaymentPage: React.FC = () => {
  const { planId } = useParams<{ planId: string }>();
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);

  const selectedPlan = cards.find((card) => card.paymentRoute.includes(planId || ""));

  if (!selectedPlan) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold text-red-600">Plan Not Found</h2>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedPlan.title}</h2>
        <p className="text-xl text-gray-700 mb-4">Price: {selectedPlan.price}</p>
        
        <button
          className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
          onClick={() => setShowWarning(true)}
        >
          Proceed to Payment
        </button>
      </div>

      {/* Small Warning Popup Modal with Close Button */}
      {showWarning && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg w-80 text-center">
            {/* Close Button in Top Right Corner */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
              onClick={() => setShowWarning(false)}
            >
              ✖
            </button>

            <h2 className="text-lg font-bold text-red-600 mb-2">Warning</h2>
            <Warning title={selectedPlan.title} price={selectedPlan.price} />
            <p className="mt-2 text-gray-700 text-sm">Please contact us before proceeding.</p>
            
            <div className="mt-4 flex justify-center gap-2">
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded-md text-sm hover:bg-gray-500"
                onClick={() => setShowWarning(false)}
              >
                Cancel
              </button>
              <a
                href="https://www.instamojo.com/@ajaydhurwe_tech/l52421df2a8424c48be5e03a0916898dc/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600"
              >
                Try Again
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
