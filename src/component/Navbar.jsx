import React from 'react';
import logo from "../assets/logo.webp"
const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="w-full h-16
     bg-gray-600 flex items-center justify-between px-4 ">
      <button onClick={toggleSidebar} className="text-white">
        Toggle Sidebar
      </button>
      {/* <div className="text-white">My Navbar</div> */}

      <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            alt="profile"
            className="rounded-full w-10 h-10"
          />
          <h1
            className={`text-white origin-left font-medium 
                 duration-200 `}
          >
           
          </h1>
        </div>
    </div>
  );
};

export default Navbar;
