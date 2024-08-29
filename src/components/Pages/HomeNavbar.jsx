import React from 'react';
import { Link } from 'react-router-dom';

const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 py-2">
      <div className="flex flex-wrap">
        <div className="ml-2 flex items-center">
          <h4 className="text-yellow-500 text-[24px] font-semibold">
            The Event Manager
          </h4>
        </div>
        <div className="ml-28 flex text-lg items-center justify-between space-x-12">
        <Link to={'/'} className="text-blue-200 hover:text-blue-100">
            Home
          </Link>
          <Link to={'/about'} className="text-blue-200 hover:text-blue-100">
            About
          </Link>
          <Link to={'/services'} className="text-blue-200 hover:text-blue-100">
            Services
          </Link>
          <Link to={'/gallery'} className="text-blue-200 hover:text-blue-100">
            Gallery
          </Link>
          <Link to={'/contact'} className="text-blue-200 hover:text-blue-100">
            Contact
          </Link>
          <Link to={'/testimonial'} className="text-blue-200 hover:text-blue-100">
            Testimonial
          </Link>
        </div>
        <div className="ml-[180px] text-lg">
          <button className="bg-green-500 text-white w-[80px] px-4 py-1.5 rounded">
            Login
          </button>
          <button className="bg-green-500 ml-10 text-white w-[80px] px-4 py-1.5 rounded">
            SignUp
          </button>
        </div>
      </div>
    </nav>
    
  );
};

export default HomeNavbar;
