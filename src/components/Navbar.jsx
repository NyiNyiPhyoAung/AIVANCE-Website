import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-gray-900 border-b border-[#3B82F6]/30"
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="AIVANCE Logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain animate-pulse-slow"
            data-testid="navbar-logo"
          />

        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-medium" data-testid="navbar-links">
          <Link
            to="/"
            className="relative text-white hover:text-[#3B82F6] transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#3B82F6] hover:after:w-full after:transition-all"
          >
            Home
          </Link>
          <Link
            to="/articles"
            className="relative text-white hover:text-[#3B82F6] transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#3B82F6] hover:after:w-full after:transition-all"
          >
            Articles
          </Link>
          <Link
            to="/solutions"
            className="block py-2 text-white hover:text-[#3B82F6] font-medium text-lg transition-all duration-300"
          >
            Solutions
          </Link>

          <Link
            to="/events"
            className="relative text-white hover:text-[#3B82F6] transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#3B82F6] hover:after:w-full after:transition-all"
          >

            Events
          </Link>
          <Link
            to="/feedback"
            className="relative text-white hover:text-[#3B82F6] transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#3B82F6] hover:after:w-full after:transition-all"
          >
            Customer Feedback
          </Link>
          <Link
            to="/contact"
            className="relative text-white hover:text-[#3B82F6] transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#3B82F6] hover:after:w-full after:transition-all"
          >
            Contact Us
          </Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="ml-4 px-5 py-2 bg-linear-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] text-white font-semibold rounded-2xl shadow-[0_0_20px_#3B82F6] hover:shadow-[0_0_40px_#2563EB] transition transform hover:scale-110"
            data-testid="navbar-login"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          data-testid="navbar-toggle"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-[#1e1e2f]/80 backdrop-blur-lg border-t border-[#3B82F6]/30 px-6 pt-4 pb-6 space-y-3 shadow-lg transition-all duration-500 ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        data-testid="navbar-mobile-menu"
      >
        <Link
          to="/"
          className="block py-2 text-white hover:text-[#3B82F6] font-medium text-lg transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to="/articles"
          className="block py-2 text-white hover:text-[#3B82F6] font-medium text-lg transition-all duration-300"
        >
          Articles
        </Link>
        <Link
          to="/solutions"
          className="block py-2 text-white hover:text-[#3B82F6] font-medium text-lg transition-all duration-300"
        >
          Solutions
        </Link>

        <Link
          to="/events"
          className="block py-2 text-white hover:text-[#3B82F6] font-medium text-lg transition-all duration-300"
        >
          Events
        </Link>

        <Link
          to="/feedback"
          className="block py-2 text-white hover:text-[#3B82F6] font-medium text-lg transition-all duration-300"
        >
          Customer Feedback
        </Link>
        <Link
          to="/contact"
          className="block py-2 text-white hover:text-[#3B82F6] font-medium text-lg transition-all duration-300"
        >
          Contact Us
        </Link>

        <Link
          to="/login"
          className="block mt-2 px-4 py-2 bg-linear-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] text-white rounded-2xl font-semibold shadow-[0_0_20px_#3B82F6] hover:shadow-[0_0_40px_#2563EB] transition transform hover:scale-105"
          data-testid="navbar-mobile-login"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
