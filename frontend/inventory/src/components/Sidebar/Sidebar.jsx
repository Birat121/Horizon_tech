import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { menus } from "../../reusable inputs/menus";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-40"
          onClick={closeSidebar}
        ></div>
      )}

      <div
        className={`fixed inset-y-0 left-0 bg-white text-black w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 overflow-y-auto h-screen z-50`}
      >
        <div className="p-6 flex justify-between items-center border-b border-zinc-500">
          <Link to="/" onClick={closeSidebar}>
            <h1 className="text-3xl font-bold">Horizon Tech</h1>
          </Link>
          <button
            onClick={toggleSidebar}
            className="text-black text-2xl focus:outline-none"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>

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

              {activeDropdown === menu.name && (
                <ul className="ml-4 mt-2 space-y-1">
                  {menu.items.map((item, index) => (
                    <li key={index} className="relative group">
                      <Link
                        to={item.path}
                        onClick={!item.disabled ? closeSidebar : undefined}
                        className={`block px-4 py-2 ${
                          item.disabled
                            ? "opacity-50 pointer-events-none"
                            : location.pathname === item.path
                            ? "bg-yellow-500 text-white"
                            : "hover:bg-yellow-300"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {item.subOptions && (
                        <ul className="ml-4 mt-1 space-y-1">
                          {item.subOptions.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.path}
                                onClick={!subItem.disabled ? closeSidebar : undefined}
                                className={`block px-4 py-2 ${
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
                      )}
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
            <button
              onClick={() => {
                closeSidebar();
                console.log("Exiting...");
              }}
              className="block w-full text-left px-4 py-2 hover:bg-yellow-300"
            >
              Exit
            </button>
          </li>
        </ul>
      </div>

      <div className="p-4">
        <button
          onClick={toggleSidebar}
          className="text-blue-900 text-2xl focus:outline-none"
        >
          <i className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
