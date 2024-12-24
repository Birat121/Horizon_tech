import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import { menus } from "../../reusable inputs/menus";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); //Use Mobile Menu
  const [activeDropdown, setActiveDropdown] = useState(null); // Active dropdown state

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <nav className="bg-blue-900 text-white px-4 py-3 shadow-md">
      <div className="container mx-6 my-4 flex items-center justify-between ">
        {/* Logo Section */}
        <Link to="/">
          <h1 className="text-3xl  font-bold hover:text-gray-400">
            Horizon Tech
          </h1>
        </Link>

        {/* Hamburger Menu */}

        <button
          onClick={toggle}
          className="text-2xl lg:hidden focus:outline-none"
          aria-label="Toggle navigation"
        >
          <i
            className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}
            aria-hidden="true"
          ></i>
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex flex-col lg:flex-row  lg:space-x-6 ${
            isOpen ? "block" : "hidden"
          } lg:block`}
        >
          <li className="group relative">
            {/* <Link to="/master"> */}
              <button
                onClick={() => toggleDropdown("master")}
                className="text-xl hover:text-gray-300 transition duration-300 focus:outline-none"
              >
                Master
              </button>
            {/* </Link> */}
            {/* Dropdown Example */}
            {activeDropdown === "master" && (
              <ul className="absolute left-0 hidden mt-2 w-48 bg-white text-black shadow-lg ">
                {menus
                  .find((menu) => menu.name === "Master") // Locate the 'Transaction' menu
                  ?.items.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 relative group"
                    >
                      <Link to={item.path} className="block">
                        {item.label}
                      </Link>

                      {/* Render subOptions if available */}
                      {item.subOptions && (
                        <ul className="absolute left-full top-0 mt-0 ml-2 w-72 bg-white text-black shadow-lg hidden group-hover:block">
                          {item.subOptions.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="px-4 py-2 hover:bg-gray-100"
                            >
                              <Link to={subItem.path}>{subItem.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
              </ul>
            )}
          </li>
          <li className="group relative">
            <button
              onClick={() => toggleDropdown("transaction")}
              className="text-xl hover:text-gray-300 transition duration-300 focus:outline-none"
            >
              Transaction
            </button>

            {activeDropdown === "transaction" && (
              <ul className="absolute left-0 mt-2 w-56 bg-white text-black shadow-lg">
                {menus
                  .find((menu) => menu.name === "Transaction") // Locate the 'Transaction' menu
                  ?.items.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 relative group"
                    >
                      <Link to={item.path} className="block">
                        {item.label}
                      </Link>

                      {/* Render subOptions if available */}
                      {item.subOptions && (
                        <ul className="absolute left-full top-0 mt-0 ml-2 w-72 bg-white text-black shadow-lg hidden group-hover:block">
                          {item.subOptions.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="px-4 py-2 hover:bg-gray-100"
                            >
                              <Link to={subItem.path}>{subItem.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
              </ul>
            )}
          </li>

          <li className="group relative">
            <button
              onClick={() => toggleDropdown("activereports")}
              className="text-xl hover:text-gray-300 transition duration-300 focus:outline-none"
            >
              Account Reports
            </button>
            {activeDropdown === "activereports" && (
              <ul className="absolute left-0 hidden mt-2 w-64 bg-white text-black shadow-lg group-hover:block">
                {menus
                  .find((menu) => menu.name === "Account Reports") // Locate the specific menu
                  ?.items.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 relative group"
                    >
                      <Link to={item.path} className="block">
                        {item.label}
                      </Link>

                      {/* Check if subOptions exist and render them */}
                      {item.subOptions && (
                        <ul className="absolute left-full top-0 mt-0 ml-2 w-72 bg-white text-black shadow-lg hidden group-hover:block">
                          {item.subOptions.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="px-4 py-2 hover:bg-gray-100"
                            >
                              <Link to={subItem.path}>{subItem.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
              </ul>
            )}
          </li>
          <li className="group relative">
            <button
              onClick={() => toggleDropdown("inventoryreport")}
              className="text-xl hover:text-gray-300 transition duration-300 focus:outline-none"
            >
              Inventory Reports
            </button>
            {activeDropdown === "inventoryreport" && (
              <ul className="absolute left-0 hidden mt-2 w-96 bg-white text-black shadow-lg group-hover:block">
                {menus
                  .find((menu) => menu.name === "Inventory Reports") // Locate the specific menu
                  ?.items.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 relative group"
                    >
                      <Link to={item.path} className="block">
                        {item.label}
                      </Link>

                      {/* Check if subOptions exist and render them */}
                      {item.subOptions && (
                        <ul className="absolute left-full top-0 mt-0 ml-2 w-72 bg-white text-black shadow-lg hidden group-hover:block">
                          {item.subOptions.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="px-4 py-2 hover:bg-gray-100"
                            >
                              <Link to={subItem.path}>{subItem.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
              </ul>
            )}
          </li>
          <li className="group relative">
            <button
              onClick={() => toggleDropdown("systemsecurity")}
              className="text-xl hover:text-gray-300 transition duration-300 focus:outline-none"
            >
              System Security
            </button>
            {activeDropdown === "systemsecurity" && (
              <ul className="absolute left-0 mt-2 w-80 bg-white text-black shadow-lg">
                {/* Find the "System Security" menu */}
                {menus
                  .find((menu) => menu.name === "System Security") // Locate the specific menu
                  ?.items.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 relative group"
                    >
                      <Link to={item.path} className="block">
                        {item.label}
                      </Link>

                      {/* Check if subOptions exist for 'IRD Setup' */}
                      {item.label === "IRD Setup" && item.subOptions && (
                        <ul className="absolute left-full top-0 mt-0 ml-2 w-72 bg-white text-black shadow-lg hidden group-hover:block">
                          {item.subOptions.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="px-4 py-2 hover:bg-gray-100"
                            >
                              <Link to={subItem.path}>{subItem.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
              </ul>
            )}
          </li>

          <li>
            <Link to="/about">
              <button
                onClick={() => toggleDropdown("aboutsoftware")}
                className="text-xl hover:text-gray-300 transition duration-300 focus:outline-none"
              >
                About Software
              </button>
            </Link>
          </li>
          <li>
            <button
              onClick={() => toggleDropdown("exit")}
              className="text-xl hover:text-gray-300 transition duration-300 focus:outline-none"
            >
              Exit
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
