import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { menus } from "../../reusable inputs/menus";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle sidebar visibility
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown menu
  const location = useLocation(); // Get current path

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <div className="flex h-screen fixed">
      {/* Sidebar Container */}
      <div
        className={`fixed inset-y-0 left-0 bg-white text-black w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-700 lg:translate-x-0 overflow-y-auto  h-screen z-50`}
      >
        {/* Sidebar Header */}
        <div className="p-6 flex justify-between items-center border-b border-zinc-500">
          <Link to="/">
            <h1 className="text-3xl font-bold">Horizon Tech</h1>
          </Link>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-black text-2xl focus:outline-none"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="mt-4 space-y-2">
          {menus.map((menu) => (
            <li key={menu.name} className="relative group">
              <button
                onClick={() => toggleDropdown(menu.name)}
                className={`w-full text-left px-4 py-2 ${
                  activeDropdown === menu.name ? "bg-yellow-300" : ""
                } hover:bg-yellow-300 transition-colors`}
              >
                {menu.name}
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === menu.name && (
                <ul className="ml-4 mt-2 space-y-1">
                  {menu.items.map((item, index) => (
                    <li key={index} className="relative group">
                      <Link
                        to={item.path}
                        className={`block px-4 py-2 ${
                          location.pathname === item.path
                            ? "bg-yellow-500 text-white"
                            : "hover:bg-yellow-300"
                        }`}
                      >
                        {item.label}
                      </Link>

                      {/* Nested Sub-options */}
                      {item.subOptions && (
                        <ul className="ml-4 mt-1 space-y-1">
                          {item.subOptions.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.path}
                                className={`block px-4 py-2 ${
                                  location.pathname === subItem.path
                                    ? "bg-blue-500 text-white"
                                    : "hover:bg-blue-500"
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Static Links */}
          <li>
            <Link
              to="/about"
              className={`block px-4 py-2 ${
                location.pathname === "/about"
                  ? "bg-yellow-500 text-white"
                  : "hover:bg-yellow-300"
              } transition-colors`}
            >
              About Software
            </Link>
          </li>
          <li>
            <button className="block w-full text-left px-4 py-2 hover:bg-yellow-300">
              Exit
            </button>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu */}
      <div className="lg:hidden p-4">
        <button
          onClick={toggleSidebar}
          className="text-blue-900 text-2xl focus:outline-none"
        >
          <i className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
