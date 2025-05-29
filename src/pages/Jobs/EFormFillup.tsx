import React, { useState } from "react";
import { FaPhoneAlt, FaUser, FaPen, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

export const EFormFillup = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(""); // State to store selected date
  const [time, setTime] = useState(""); // State to store selected time
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mobileError, setMobileError] = useState("");

  const validateMobile = (number) => {
    const regex = /^\+\d{1,3}\d{9,}$/;
    if (!regex.test(number)) {
      setMobileError("Please enter a valid mobile number with country code (e.g., +1234567890).");
    } else {
      setMobileError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mobileError || !mobile) {
      alert("Please fix the errors in the form before submitting.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyUVqEkLxs4eAoBp2aIy_fvVKsz003ZI4GjmRwLjrRKgosmyKv5DH6E9EjTPcJ-9dkInQ/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name,
          mobile,
          description,
          dateTime: `${date}T${time}`, // Combine the date and time to create the full dateTime
        }),
      });

      if (response.ok) {
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  // Updated WhatsApp link with custom text
  const whatsappLink = `https://wa.me/+919301084259?text=I%20want%20to%20eFormFillup%20Service%20and%20would%20like%20to%20schedule%20a%20meeting%20on%20${date}T${time}`;

  return (
    <div className="container mx-auto p-6 bg-gray-50 shadow-lg rounded-lg max-w-md">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        📝 eForm Fillup  
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
            placeholder="Enter your mobile number (e.g., +919301084259)"
            className={`w-full px-2 py-1 border-none focus:outline-none ${mobileError ? "border-red-500" : ""}`}
            required
          />
        </div>
        {mobileError && <p className="text-red-600 text-sm">{mobileError}</p>}

        {/* Date Picker */}
        <div className="flex items-center border-b-2 border-gray-300 pb-2">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-2 py-1 border-none focus:outline-none"
            required
          />
        </div>

        {/* Time Picker */}
        <div className="flex items-center border-b-2 border-gray-300 pb-2">
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-2 py-1 border-none focus:outline-none"
            required
          />
        </div>

        {/* Form Description */}
        <div className="flex items-center border-b-2 border-gray-300 pb-2">
          <FaPen className="text-blue-500 mr-3" />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Which form would you like to fill? (e.g., ssc, cgpsc, railway, cg vyapam etc.)"
            className="w-full px-2 py-1 border-none focus:outline-none resize-none"
            rows={4}
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
                Submit eForm
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
          Your form has been submitted successfully! You'll receive a confirmation call soon. 📞
        </div>
      )}

      {/* Error Message */}
      {!success && !loading && (
        <div className="mt-6 text-center text-red-600 font-semibold">
          {/* Something went wrong. Please try again later. 😞 */}
        </div>
      )}
    </div>
  );
};
