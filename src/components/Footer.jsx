// Footer.js
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-0">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div data-testid="footer-company">
          <h2 className="text-2xl font-bold text-[#2563EB] mb-3">AIVance Solutions</h2>
          <p className="text-gray-300">
            Providing cutting-edge AI, IoT, and custom software solutions to help businesses thrive.
          </p>
        </div>

        {/* Quick Links */}
        <div data-testid="footer-links">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul>
            <li>
              <Link to="/" className="hover:underline text-gray-300 transition">Home</Link>
            </li>
            <li>
              <Link to="/articles" className="hover:underline text-gray-300 transition">Articles</Link>
            </li>
            <li>
              <Link to="/events" className="hover:underline text-gray-300 transition">Events</Link>
            </li>
            <li>
              <Link to="/feedback" className="hover:underline text-gray-300 transition">Feedback</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline text-gray-300 transition">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div data-testid="footer-contact">
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-gray-300">Email: info@aivance.com</p>
          <p className="text-gray-300">Phone: +91 123-456-7890</p>
          <p className="text-gray-300">Address: 123 Tech Park, City, Country</p>
        </div>
      </div>

      <div className="bg-gray-800 text-gray-400 text-center py-4 mt-0">
        &copy; {new Date().getFullYear()} AIVance Solutions. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
