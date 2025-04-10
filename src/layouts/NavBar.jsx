import React from 'react';
import logo from '../assets/logo_tasti_light.png';

const NavBar = () => {
  return (
    <nav className="bg-white-900 p-4 px-12 shadow-2xl min-h-40 flex flex-col sm:flex-row items-center justify-between overflow-hidden">
      <div className="flex-grow mb-4 sm:mb-0">
        <img src={logo} alt="Logo" className="h-36 w-auto object-contain" />
      </div>
      <ul className="flex space-x-20">
        <li>
          <a
            href="/"
            className="text-gray-900 hover:text-gray-400"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSexz8Z27DizJ7uc4pCriI340ld8_kov_59mnxzNyeo_vX7Qlg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-400"
          >
            Contact Us
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeKjDugfymyIg_L887jeJ1PK7RtziSoBPhMGpBuOo_A-GDpXw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-400"
          >
            Join Our Beta Program
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
