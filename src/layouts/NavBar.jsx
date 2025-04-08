import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_tasti_light.png';

const NavBar = () => {
  return (
    <nav className="bg-white-900 p-4 px-12 shadow-lg min-h-40 flex flex-col sm:flex-row items-center justify-between overflow-hidden">
      <div className="flex-grow mb-4 sm:mb-0">
      <img src={logo} alt="Logo" className="h-24 w-auto object-contain" />
      </div>
      <ul className="flex space-x-20">
        <li><Link to="/" className="text-gray-900 hover:text-gray-400">Home</Link></li>
        <li><Link to="/contactus" className="text-gray-900 hover:text-gray-400">Contact Us</Link></li>
        <li><Link to="/trydemo" className="text-gray-900 hover:text-gray-400">Try Demo</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar; 