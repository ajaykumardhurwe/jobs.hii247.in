
import React, { useState } from "react";
import { FaUser, FaPhoneAlt, FaBuilding, FaMapMarkerAlt, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

export const JobConsultancy = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [company, setCompany] = useState("");
  const [district, setDistrict] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mobileError, setMobileError] = useState("");

  const validateMobile = (number: string) => {
    const regex = /^\+\d{1,3}\d{9,}$/;
    if (!regex.test(number)) {
      setMobileError("Please enter a valid mobile number with country code (e.g., +1234567890).");
    } else {
      setMobileError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (mobileError || !mobile) {
      alert("Please fix the errors in the form before submitting.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxQWecY-0w4n5hHukuAPjfMvbB6n6OmJyyN84q9TykStw8Eb3g7dRyoT5g9DsPfE7Af/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            name,
            mobile,
            company,
            district,
          }),
        }
      );

      if (response.ok) {
        setSuccess(true);
        setName("");
        setMobile("");
        setCompany("");
        setDistrict("");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const whatsappLink = `https://wa.me/+919301084259?text=Hello!%20I%20am%20interested%20in%20Job%20Consultancy%20services.%20My%20details:%0AName:%20${name}%0AMobile:%20${mobile}%0ACompany:%20${company}%0ADistrict:%20${district}`;

  return (
    <div className="container mx-auto p-6 bg-gray-50 shadow-lg rounded-lg max-w-md">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        🏢 Job Consultancy
        <span className="block text-sm text-gray-600">Fill out your details below</span>
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div className="flex items-center border-b-2 border-gray-300 pb-2">
          <FaUser className="text-blue-500 mr-3" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-2 py-1 border-none focus:outline-none"
            required
          />
        </div>

        {/* Mobile Number Input */}
        <div className="flex items-center border-b-2 border-gray-300 pb-2">
          <FaPhoneAlt className="text-blue-500 mr-3" />
          <input
            type="text"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
              validateMobile(e.target.value);
            }}
            placeholder="Enter your mobile number (e.g., +919876543210)"
            className={`w-full px-2 py-1 border-none focus:outline-none ${
              mobileError ? "border-red-500" : ""
            }`}
            required
          />
        </div>
        {mobileError && <p className="text-red-600 text-sm">{mobileError}</p>}

        {/* Company Input */}
        <div className="flex items-center border-b-2 border-gray-300 pb-2">
          <FaBuilding className="text-blue-500 mr-3" />
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Which company do you want to work for?"
            className="w-full px-2 py-1 border-none focus:outline-none"
            required
          />
        </div>

        {/* District Input */}
        <div className="flex items-center border-b-2 border-gray-300 pb-2">
          <FaMapMarkerAlt className="text-blue-500 mr-3" />
          <input
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            placeholder="Which district do you want to work in?"
            className="w-full px-2 py-1 border-none focus:outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <span>Submitting...</span>
            ) : (
              <>
                <FaCheckCircle className="mr-2" />
                Submit
              </>
            )}
          </button>
        </div>
      </form>

      {/* WhatsApp Contact Button */}
      <div className="mt-4">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
        >
          <FaWhatsapp className="mr-2" />
          Contact on WhatsApp
        </a>
      </div>

      {/* Success Message */}
      {success && (
        <div className="mt-6 text-center text-green-600 font-semibold">
          <FaCheckCircle className="inline mr-2" />
          Your details have been submitted successfully! 🎉
        </div>
      )}
    </div>
  );
};





















// import React, { useState } from "react";
// import { FaUser, FaPhoneAlt, FaBuilding, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

// export const JobConsultancy = () => {
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [company, setCompany] = useState("");
//   const [district, setDistrict] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [mobileError, setMobileError] = useState("");

//   // Validate mobile number
//   const validateMobile = (number: string) => {
//     const regex = /^\+\d{1,3}\d{9,}$/;
//     if (!regex.test(number)) {
//       setMobileError("Please enter a valid mobile number with country code (e.g., +1234567890).");
//     } else {
//       setMobileError("");
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (mobileError || !mobile) {
//       alert("Please fix the errors in the form before submitting.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch(
//         "https://script.google.com/macros/s/AKfycbzYOUR_GOOGLE_SCRIPT_URL/exec",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//           body: new URLSearchParams({
//             name,
//             mobile,
//             company,
//             district,
//           }),
//         }
//       );

//       if (response.ok) {
//         setSuccess(true);
//         // Clear form fields
//         setName("");
//         setMobile("");
//         setCompany("");
//         setDistrict("");
//       } else {
//         throw new Error("Form submission failed");
//       }
//     } catch (error) {
//       console.error("Error submitting form", error);
//       setSuccess(false);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 bg-gray-50 shadow-lg rounded-lg max-w-md">
//       <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
//         🏢 Job Consultancy
//         <span className="block text-sm text-gray-600">Fill out your details below</span>
//       </h1>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Name Input */}
//         <div className="flex items-center border-b-2 border-gray-300 pb-2">
//           <FaUser className="text-blue-500 mr-3" />
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your name"
//             className="w-full px-2 py-1 border-none focus:outline-none"
//             required
//           />
//         </div>

//         {/* Mobile Number Input */}
//         <div className="flex items-center border-b-2 border-gray-300 pb-2">
//           <FaPhoneAlt className="text-blue-500 mr-3" />
//           <input
//             type="text"
//             value={mobile}
//             onChange={(e) => {
//               setMobile(e.target.value);
//               validateMobile(e.target.value);
//             }}
//             placeholder="Enter your mobile number (e.g., +919876543210)"
//             className={`w-full px-2 py-1 border-none focus:outline-none ${
//               mobileError ? "border-red-500" : ""
//             }`}
//             required
//           />
//         </div>
//         {mobileError && <p className="text-red-600 text-sm">{mobileError}</p>}

//         {/* Company Input */}
//         <div className="flex items-center border-b-2 border-gray-300 pb-2">
//           <FaBuilding className="text-blue-500 mr-3" />
//           <input
//             type="text"
//             value={company}
//             onChange={(e) => setCompany(e.target.value)}
//             placeholder="Which company do you want to work for?"
//             className="w-full px-2 py-1 border-none focus:outline-none"
//             required
//           />
//         </div>

//         {/* District Input */}
//         <div className="flex items-center border-b-2 border-gray-300 pb-2">
//           <FaMapMarkerAlt className="text-blue-500 mr-3" />
//           <input
//             type="text"
//             value={district}
//             onChange={(e) => setDistrict(e.target.value)}
//             placeholder="Which district do you want to work in?"
//             className="w-full px-2 py-1 border-none focus:outline-none"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="mt-4">
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
//             disabled={loading}
//           >
//             {loading ? (
//               <span>Submitting...</span>
//             ) : (
//               <>
//                 <FaCheckCircle className="mr-2" />
//                 Submit
//               </>
//             )}
//           </button>
//         </div>
//       </form>

//       {/* Success Message */}
//       {success && (
//         <div className="mt-6 text-center text-green-600 font-semibold">
//           <FaCheckCircle className="inline mr-2" />
//           Your details have been submitted successfully! 🎉
//         </div>
//       )}
//     </div>
//   );
// };
