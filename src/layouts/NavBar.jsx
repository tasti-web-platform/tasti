import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/AcdLogo2.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1F2937] border-b z-50 sticky top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28">
          {/* Logo section */}
          <div className="flex items-center py-2">
            <img src={logo} alt="Logo" className="h-24 w-auto object-contain" />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-8">
              <Link to="/home" className="text-gray-300 hover:text-white font-medium text-sm">
                Home
              </Link>
              <Link to="/what-is-tasti" className="text-gray-300 hover:text-white font-medium text-sm">
                What is TASTI?
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSexz8Z27DizJ7uc4pCriI340ld8_kov_59mnxzNyeo_vX7Qlg/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white font-medium text-sm"
              >
                Contact Us
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeKjDugfymyIg_L887jeJ1PK7RtziSoBPhMGpBuOo_A-GDpXw/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white font-medium text-sm whitespace-nowrap"
              >
                Join Our Beta Program
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {!isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block text-gray-300 hover:text-white font-medium text-base py-2 px-3"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/what-is-tasti"
            className="block text-gray-300 hover:text-white font-medium text-base py-2 px-3"
            onClick={() => setIsMenuOpen(false)}
          >
            What is TASTI?
          </Link>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSexz8Z27DizJ7uc4pCriI340ld8_kov_59mnxzNyeo_vX7Qlg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-300 hover:text-white font-medium text-base py-2 px-3"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeKjDugfymyIg_L887jeJ1PK7RtziSoBPhMGpBuOo_A-GDpXw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-300 hover:text-white font-medium text-base py-2 px-3"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Our Beta Program
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
