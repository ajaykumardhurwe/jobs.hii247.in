import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { FiService } from 'react-icons/fi'; // For services icon

export function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Ajaydhurwe.tech</h1>

        {/* Who We Are Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">👨‍💻 Who We Are</h2>
          <p className="text-lg text-gray-700">
            Ajaydhurwe.tech is a dynamic and innovative digital solutions provider committed to helping businesses achieve their goals in the digital era. 
            With a team of talented professionals, we deliver exceptional services in <strong>web development</strong>, <strong>app development</strong>, 
            <strong>graphic design</strong>, and <strong>digital marketing</strong>, ensuring comprehensive solutions for our clients.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">🚀 Our Mission</h2>
          <p className="text-lg text-gray-700">
            To empower businesses by providing cutting-edge digital solutions that foster growth, enhance brand identity, and drive measurable results.
          </p>
        </section>

        {/* Our Vision Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">🌍 Our Vision</h2>
          <p className="text-lg text-gray-700">
            To be a global leader in delivering end-to-end digital solutions that transform ideas into impactful realities.
          </p>
        </section>

        {/* Core Services Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">⚙️ Our Core Services</h2>
          <ul className="list-disc pl-8 text-lg text-gray-700">
            <li><strong>Web Development</strong>: Custom websites, e-commerce solutions, CMS development, and responsive design.</li>
            <li><strong>App Development</strong>: Native and cross-platform apps, custom solutions, and maintenance.</li>
            <li><strong>Graphics Designing</strong>: Logo & branding, marketing collaterals, UI/UX design, and custom illustrations.</li>
            <li><strong>Digital Marketing</strong>: SEO, social media marketing, content marketing, PPC ads, email marketing, and analytics.</li>
          </ul>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">🌟 Why Choose Ajaydhurwe.tech?</h2>
          <ul className="list-disc pl-8 text-lg text-gray-700">
            <li>Experienced Team 👨‍💻</li>
            <li>Customer-Centric Approach 🤝</li>
            <li>Latest Technology ⚡</li>
            <li>End-to-End Solutions 🔄</li>
            <li>Transparent Communication 💬</li>
            <li>Affordable Pricing 💰</li>
          </ul>
        </section>

        {/* Contact Us Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">📞 Contact Us</h2>
          <p className="text-lg text-gray-700">
            <FaEnvelope className="inline mr-2" />
            Email: <a href="mailto:contact@ajaydhurwe.tech" className="text-blue-600">contact@ajaydhurwe.tech</a>
          </p>
          <p className="text-lg text-gray-700">
            <FaPhoneAlt className="inline mr-2" />
            Phone: +91 9301084259
          </p>
          <p className="text-lg text-gray-700">
            <FaGlobe className="inline mr-2" />
            Website: <a href="https://www.ajaydhurwe.tech" className="text-blue-600">www.ajaydhurwe.tech</a>
          </p>
        </section>
      </div>
    </div>
  );
}
