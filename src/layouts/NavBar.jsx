import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_tasti_light.png';

const NavBar = () => {
  return (
    <nav className="bg-[#1F2937] border-b z-50 sticky top-0 p-4 px-12 shadow-lg min-h-24 flex flex-col sm:flex-row items-center justify-between overflow-hidden">
      <div className="flex-grow mb-4 sm:mb-0">
        <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
      </div>
      <ul className="flex space-x-20">
        <li>
          <Link
            to="/"
            className="text-gray-300 hover:text-white font-medium"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/what-is-tasti"
            className="text-gray-300 hover:text-white font-medium"
          >
            What is TASTI?
          </Link>
        </li>
        <li>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSexz8Z27DizJ7uc4pCriI340ld8_kov_59mnxzNyeo_vX7Qlg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white font-medium"
          >
            Contact Us
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeKjDugfymyIg_L887jeJ1PK7RtziSoBPhMGpBuOo_A-GDpXw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white font-medium"
          >
            Join Our Beta Program
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
