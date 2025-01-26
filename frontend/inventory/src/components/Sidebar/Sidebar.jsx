import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { menus } from "../../reusable inputs/menus";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
    setActiveSubDropdown(null); // Reset sub-dropdowns when toggling a main dropdown
  };

  const toggleSubDropdown = (itemPath) => {
    setActiveSubDropdown(activeSubDropdown === itemPath ? null : itemPath);
  };

  const renderSubOptions = (subOptions) => (
    <ul className="ml-6 mt-2 space-y-2">
      {subOptions.map((subItem, subIndex) => (
        <li key={subIndex}>
          <Link
            to={subItem.path}
            onClick={!subItem.disabled ? closeSidebar : undefined}
            className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
              subItem.disabled
                ? "opacity-50 pointer-events-none"
                : location.pathname === subItem.path
                ? "bg-yellow-500 text-white"
                : "hover:bg-yellow-300"
            }`}
          >
            {subItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={closeSidebar}
        ></div>
      )}

      <div
        className={`fixed inset-y-0 left-0 bg-white text-black w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 shadow-lg h-screen z-50 overflow-y-auto`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-300">
          <Link to="/" onClick={closeSidebar}>
            <h1 className="text-2xl font-bold flex items-center space-x-2">
              <i className="fa fa-rocket text-yellow-500"></i>
              <span>Horizon Tech</span>
            </h1>
          </Link>
          <button
            onClick={toggleSidebar}
            className="text-gray-700 text-2xl focus:outline-none"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>

        <ul className="mt-4 space-y-3">
          {menus.map((menu) => (
            <li key={menu.name} className="relative">
              <button
                onClick={() => toggleDropdown(menu.name)}
                className={`w-full text-left px-4 py-3 flex items-center justify-between rounded-lg transition-all duration-300 ${
                  activeDropdown === menu.name
                    ? "bg-yellow-300"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <i className={`fa fa-${menu.icon || "circle"} text-yellow-500`}></i>
                  <span>{menu.name}</span>
                </div>
                <i
                  className={`fa text-sm ${
                    activeDropdown === menu.name ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                ></i>
              </button>

              {activeDropdown === menu.name && (
                <ul className="ml-4 mt-2 space-y-2">
                  {menu.items.map((item) => (
                    <li key={item.path} className="relative">
                      <button
                        onClick={() => toggleSubDropdown(item.path)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                          item.disabled
                            ? "opacity-50 pointer-events-none"
                            : location.pathname === item.path
                            ? "bg-yellow-500 text-white"
                            : "hover:bg-yellow-300"
                        }`}
                      >
                        {item.label}
                        {item.subOptions && (
                          <i
                            className={`fa text-xs ml-2 ${
                              activeSubDropdown === item.path
                                ? "fa-chevron-up"
                                : "fa-chevron-down"
                            }`}
                          ></i>
                        )}
                      </button>

                      {activeSubDropdown === item.path &&
                        item.subOptions &&
                        renderSubOptions(item.subOptions)}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <li>
            <Link
              to="/about"
              onClick={closeSidebar}
              className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                location.pathname === "/about"
                  ? "bg-yellow-500 text-white"
                  : "hover:bg-yellow-300"
              }`}
            >
              <i className="fa fa-info-circle text-yellow-500 mr-2"></i> About Software
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                closeSidebar();
                console.log("Exiting...");
              }}
              className="block w-full text-left px-4 py-3 rounded-lg hover:bg-yellow-300 transition-all duration-300"
            >
              <i className="fa fa-sign-out text-yellow-500 mr-2"></i> Exit
            </button>
          </li>
        </ul>
      </div>

      <div className="p-4">
        <button
          onClick={toggleSidebar}
          className="text-gray-700 text-2xl focus:outline-none"
        >
          <i className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
