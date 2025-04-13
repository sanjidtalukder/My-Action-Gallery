import React from 'react';

const Navbar = () => {
  return (
    <nav className="shadow-sm bg-white">
      <div className="navbar flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="btn btn-ghost text-xl">
            <span className="text-blue-700">Auction</span>
            <span className="text-yellow-300">Gallery</span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8 text-blue-600">
          <a href="#" className="hover:text-blue-800">Home</a>
          <a href="#" className="hover:text-blue-800">Auctions</a>
          <a href="#" className="hover:text-blue-800">Categories</a>
          <a href="#" className="hover:text-blue-800">How it works</a> {/* fixed grammar */}
        </div>

        {/* Bell & Avatar */}
        <div className="flex gap-4 items-center">
          {/* Bell */}
          <div className="dropdown dropdown-end">
            <div className="indicator text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item">9</span>
            </div>
          </div>

          {/* Avatar */}
          <div className="dropdown dropdown-end">
            <div role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  
                  src="src\assets\image\Group.png"
                />
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
