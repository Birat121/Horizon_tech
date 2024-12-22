import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <h1 className="text-3xl font-bold">Horizon Tech</h1>
        
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li className="group relative">
            <Link
              to="/master"
              className="hover:text-gray-300 transition duration-300"
            >
              Master
            </Link>
            {/* Dropdown Example */}
            <ul className="absolute left-0 hidden mt-2 w-48 bg-white text-black shadow-lg group-hover:block">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption1">Sub Option 1</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Sub Option 2</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/transaction"
              className="hover:text-gray-300 transition duration-300"
            >
              Transaction
            </Link>
          </li>
          <li>
            <Link
              to="/accountreports"
              className="hover:text-gray-300 transition duration-300"
            >
              Account Reports
            </Link>
          </li>
          <li>
            <Link
              to="/inventoryreports"
              className="hover:text-gray-300 transition duration-300"
            >
              Inventory Reports
            </Link>
          </li>
          <li>
            <Link
              to="/systemsecurity"
              className="hover:text-gray-300 transition duration-300"
            >
              System Security
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-300 transition duration-300"
            >
              About Software
            </Link>
          </li>
          <li>
            <Link
              to="/exit"
              className="hover:text-gray-300 transition duration-300"
            >
              Exit
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
