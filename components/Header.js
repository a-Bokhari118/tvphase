import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-600 w-full relative z-[1000]">
      <div className="container mx-auto px-4 0">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="w-32  cursor-pointer">
              <img
                src="/images/logo3.png"
                alt="website logo"
                className="h-20 w-full object-cover"
              />
            </div>
            <ul className="hidden md:flex items-center space-x-5 text-gray-50 font-semibold text-lg cursor-pointer">
              <li className="hover:bg-gray-100 hover:text-purple-800 hover:px-2 hover:py-1 py-1 px-2 rounded-lg transition duration-300">
                Movies
              </li>
              <li className="hover:bg-gray-100 hover:text-purple-800 hover:px-2 hover:py-1 py-1 px-2 rounded-lg transition duration-300">
                TV Series
              </li>
              <li className="hover:bg-gray-100 hover:text-purple-800 hover:px-2 hover:py-1 py-1 px-2 rounded-lg transition duration-300">
                New Relased
              </li>
              <li className="hover:bg-gray-100 hover:text-purple-800 hover:px-2 hover:py-1 py-1 px-2 rounded-lg transition duration-300">
                My List
              </li>
            </ul>
          </div>

          <div className="hidden md:flex justify-between items-center space-x-3 uppercase cursor-pointer">
            <a className="text-gray-50 font-semibold ">login</a>
            <a className="px-2 py-1 border-none rounded bg-gray-50 text-purple-800 font-semibold">
              SignUp
            </a>
          </div>

          <div
            className="md:hidden flex items-center text-white cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      {open && (
        <div
          className={`${
            open ? 'opacity-100' : 'opacity-0'
          } md:hidden absolute top-20 right-0  min-h-[calc(100vh-80px)] w-72 bg-gray-800 transform  transition duration-500`}
        >
          <ul className="flex flex-col items-start space-y-5 text-gray-50 font-semibold text-lg cursor-pointer p-3">
            <li className="hover:bg-gray-100 hover:text-purple-800 hover:px-2 hover:py-1 py-1 px-2 rounded-lg transition duration-300">
              Movies
            </li>
            <li className="hover:bg-gray-100 hover:text-purple-800 hover:px-2 hover:py-1 py-1 px-2 rounded-lg transition duration-300">
              TV Series
            </li>
            <li className="hover:bg-gray-100 hover:text-purple-800 hover:px-2 hover:py-1 py-1 px-2 rounded-lg transition duration-300">
              New Relased
            </li>
            <li className="hover:bg-gray-100 hover:text-purple-800 hover:px-2 hover:py-1 py-1 px-2 rounded-lg transition duration-300">
              My List
            </li>
            <li className="text-gray-50 font-semibold py-1 px-2">login</li>
            <li className="py-1 px-2 border-none rounded bg-gray-50 text-purple-800 font-semibold">
              SignUp
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
