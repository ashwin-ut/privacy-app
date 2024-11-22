import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-2 px-4 flex items-center justify-between shadow">
      {/* Burger Icon for Mobile */}
      <div className="sm:hidden">
        <button className="p-2 hover:bg-gray-800 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
            height="24"
            className="text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex-1 sm:flex sm:justify-center sm:w-auto mx-4">
  <div className="relative w-full sm:w-48 md:w-80 lg:w-80">
    <input
      type="text"
      placeholder="Search"
      className="w-full bg-gray-800 text-gray-300 placeholder-gray-500 rounded-full px-3 py-2 focus:outline-none focus:ring focus:ring-gray-700 text-sm"
    />
    <svg
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="16"
      height="16"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 17a6 6 0 100-12 6 6 0 000 12zM21 21l-4.35-4.35"
      />
    </svg>
  </div>
</div>


      {/* Icons Section */}
      <div className="flex space-x-2 items-center">
        {/* Notification Icon */}
        <button className="p-1 hover:bg-gray-800 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20"
            height="20"
            className="text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C6.67 7.165 6 9.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        {/* Profile Icon */}
        <button className="p-1 hover:bg-gray-800 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20"
            height="20"
            className="text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A3 3 0 016 17h12a3 3 0 01.879.804M15 10a3 3 0 11-6 0 3 3 0 016 0zM4 6a8 8 0 1116 0 8 8 0 01-16 0z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
