import React from 'react';

export function About() {
  // return (
  //   <div className="container mx-auto p-4">
  //     <h1 className="text-2xl font-bold mb-6">a²class</h1>
  //     {/* About content will be added later */}
  //   </div>
  // );







  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      {/* Logo Section */}
      <div className="flex items-center space-x-4 mb-6 animate-fadeIn">
        <img
          src="https://raw.githubusercontent.com/ajaykumardhurwe/pyqbook/refs/heads/main/pyqbook/a2%20class%20(2).png"

          // src="https://raw.githubusercontent.com/ajaykumardhurwe/pyqbook/refs/heads/main/pyqbook/a2%20class.png"
          alt="A²Class Logo"
          className="w-20 h-20 rounded-full"
        />
        <h1 className="text-4xl font-bold text-indigo-700">A²Classes</h1>
      </div>

      {/* Tagline */}
      <p className="text-lg text-gray-700 text-center mb-6 animate-fadeIn">
        Your ultimate destination for 9th to 12th Science stream education in{" "}
        <strong>Sejbahar, Raipur</strong>. 🚀
      </p>

      {/* Highlights Section */}
      <div className="space-y-4 text-left">
        <div className="p-4 bg-white shadow-md rounded-lg animate-slideInLeft">
          <h2 className="text-lg font-bold text-indigo-600 flex items-center">
            📚 Comprehensive Coaching
          </h2>
          <p className="text-gray-700">
            Specialized coaching for Physics, Chemistry, Mathematics, and
            Biology.
          </p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg animate-slideInRight">
          <h2 className="text-lg font-bold text-indigo-600 flex items-center">
            👩‍🏫 Expert Faculty
          </h2>
          <p className="text-gray-700">
            Learn from experienced teachers who simplify complex concepts.
          </p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg animate-slideInLeft">
          <h2 className="text-lg font-bold text-indigo-600 flex items-center">
            📝 Regular Tests
          </h2>
          <p className="text-gray-700">
            Weekly tests and doubt-clearing sessions to ensure progress.
          </p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg animate-slideInRight">
          <h2 className="text-lg font-bold text-indigo-600 flex items-center">
            📖 Modern Resources
          </h2>
          <p className="text-gray-700">
            Free study material and mock test series for JEE and NEET.
          </p>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="mt-6 text-center animate-fadeIn">
        <p className="text-gray-800 font-bold text-lg">
          Let’s build a brighter future together!
        </p>
        <a
          href="tel:+919301084259"
          className="bg-indigo-600 text-white py-2 px-6 rounded-full mt-4 inline-block hover:bg-indigo-700 transition"
        >
          📞 Call Us Now
        </a>
      </div>
    </div>
  );








}

