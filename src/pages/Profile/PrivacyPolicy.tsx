import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">🔒 Privacy Policy</h1>

        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">📜 Introduction</h2>
          <p className="text-lg text-gray-700">
            Welcome to Ajaydhurwe.tech! We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines the types of personal data we collect and how we use, disclose, and safeguard it.
          </p>
        </section>

        {/* Information Collection Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">📝 Information We Collect</h2>
          <ul className="list-disc pl-8 text-lg text-gray-700">
            <li>Personal Identification Information (Name, email address, etc.)</li>
            <li>Technical Data (IP address, browser type, etc.)</li>
            <li>Usage Data (Pages visited, time spent, etc.)</li>
          </ul>
        </section>

        {/* How We Use Your Information Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">🔍 How We Use Your Information</h2>
          <p className="text-lg text-gray-700">
            We use the information collected to provide and improve our services, communicate with users, and ensure a secure experience on our platform.
          </p>
        </section>

        {/* Data Security Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">🔐 Data Security</h2>
          <p className="text-lg text-gray-700">
            We employ security measures to protect your personal data from unauthorized access, alteration, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>
        </section>

        {/* Changes to the Policy Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">⚠️ Changes to This Privacy Policy</h2>
          <p className="text-lg text-gray-700">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date at the bottom of the page will be updated accordingly.
          </p>
        </section>

        {/* Contact Us Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">📞 Contact Us</h2>
          <p className="text-lg text-gray-700">
            If you have any questions or concerns regarding our privacy practices, feel free to contact us at:
            <br />
            Email: <a href="mailto:contact@ajaydhurwe.tech" className="text-blue-600">contact@ajaydhurwe.tech</a>
          </p>
        </section>
      </div>
    </div>
  );
}
