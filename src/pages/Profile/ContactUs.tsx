import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';

export function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">📞 Contact Us</h1>

        {/* Contact Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">📧 Email</h2>
          <p className="text-lg text-gray-700">
            <FaEnvelope className="inline mr-2" />
            You can reach us at: <a href="mailto:contact@ajaydhurwe.tech" className="text-blue-600">contact@ajaydhurwe.tech</a>
          </p>

          <p className="text-lg text-gray-700">
            <FaEnvelope className="inline mr-2" />
            You can reach us at: <a href="mailto:ajaykumardhurwe049@gmail.com" className="text-blue-600">ajaykumardhurwe049@gmail.com</a>
          </p>
        </section>

        {/* Phone Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">📱 Phone</h2>
          <p className="text-lg text-gray-700">
            <FaPhoneAlt className="inline mr-2" />
            Call us at: <a href="tel:+919301084259" className="text-blue-600">+91 9301084259</a>
          </p>
        </section>

        {/* Website Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">🌐 Website</h2>
          <p className="text-lg text-gray-700">
            <FaGlobe className="inline mr-2" />
            Visit our website: <a href="https://www.ajaydhurwe.tech" className="text-blue-600">www.ajaydhurwe.tech</a>
          </p>
        </section>
      </div>
    </div>
  );
}
