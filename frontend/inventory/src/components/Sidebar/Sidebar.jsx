import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { FileText } from "lucide-react";

import { menus } from "../../reusable inputs/menus";

const Sidebar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Default to open
  const location = useLocation();

  const toggleDropdown = (menuName) => {
    setActiveDropdown((prev) => (prev === menuName ? null : menuName));
    setActiveSubDropdown(null);
  };

  const toggleSubDropdown = (itemPath) => {
    setActiveSubDropdown((prev) => (prev === itemPath ? null : itemPath));
  };

  const getMenuIcon = (menuName) => {
    const icons = {
      Master: "Database",
      Transaction: "FileText",
      Reports: "BarChart2",
      Settings: "Settings",
      "User Management": "Users",
    };
    return icons[menuName] || "Menu";
  };

  return (
    <div className="flex ">
      {/* Toggle Sidebar Button - Fixed */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 bg-yellow-500 text-white p-2 rounded-full shadow-lg"
      >
        {isSidebarOpen ? (
          <LucideIcons.X size={24} />
        ) : (
          <LucideIcons.Menu size={24} />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen w-64 bg-gray-600 text-black shadow-lg p-4 space-y-4 overflow-y-auto max-h-screen transition-all duration-300 z-40
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-64"}`}
      >
        {/* Fixed Header inside Sidebar */}
        <div className="sticky top-0 left-0 w-full   pb-3 z-50">
          <Link to="/">
            <h2 className="text-white text-lg font-semibold p-2 rounded-md mb-2 text-center">
              <i className="fa fa-rocket text-yellow-500"></i>
              <span className="ml-2"> HORIZON TECH</span>
            </h2>
          </Link>
        </div>

        {/* Sidebar Menu (Scrollable) */}
        <ul className="space-y-2 overflow-y-auto max-h-[calc(100vh-64px)] pb-4">
          {menus.map((menu) => (
            <li key={menu.name} className="relative">
              <button
                onClick={() => toggleDropdown(menu.name)}
                className={`w-full text-white text-left px-4 py-3 flex items-center justify-between rounded-lg transition-all duration-300 ${
                  activeDropdown === menu.name
                    ? "bg-yellow-500 text-white"
                    : "hover:bg-gray-200 hover:text-black"
                }`}
              >
                <div className="flex items-center gap-2">
                  {React.createElement(LucideIcons[getMenuIcon(menu.name)], {
                    size: 20,
                    className: "text-white",
                  })}
                  <span>{menu.name}</span>
                </div>
                {activeDropdown === menu.name ? (
                  <LucideIcons.ChevronUp size={16} />
                ) : (
                  <LucideIcons.ChevronDown size={16} />
                )}
              </button>

              {/* Submenu */}
              {activeDropdown === menu.name && (
                <ul className="ml-4 mt-2 space-y-2">
                  {menu.items.map((item) => (
                    <li key={item.path} className="relative">
                      <Link
                        to={item.path}
                        onClick={() => toggleSubDropdown(item.path)}
                        className={`px-4 py-2 text-white rounded-lg transition-all duration-300 flex justify-between ${
                          item.disabled
                            ? "opacity-50 pointer-events-none"
                            : location.pathname === item.path
                            ? "bg-yellow-500 text-white"
                            : "hover:bg-gray-200 hover:text-black"
                        }`}
                      >
                        {item.label}
                        {item.subOptions &&
                          (activeSubDropdown === item.path ? (
                            <LucideIcons.ChevronUp size={14} />
                          ) : (
                            <LucideIcons.ChevronDown size={14} />
                          ))}
                      </Link>

                      {activeSubDropdown === item.path && item.subOptions && (
                        <ul className="ml-6 mt-1 p-2 rounded-lg space-y-2 text-white">
                          {item.subOptions.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.path}
                                className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                                  location.pathname === subItem.path
                                    ? "bg-yellow-500 text-white"
                                    : "hover:bg-gray-200 hover:text-black"
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
    to="/systemsecurity"
    className={`px-4 py-3 text-white rounded-lg transition-all duration-300 flex items-center ${
      location.pathname === "/systemsecurity"
        ? "bg-yellow-500 text-white"
        : "hover:bg-gray-200 hover:text-black"
    }`}
  >
    <FileText className="text-white mr-2" size={20} /> System Security
  </Link>
</li>



<li>
  <Link
    to="/reports"
    className={`px-4 py-3 text-white rounded-lg transition-all duration-300 flex items-center ${
      location.pathname === "/reports"
        ? "bg-yellow-500 text-white"
        : "hover:bg-gray-200 hover:text-black"
    }`}
  >
    <FileText className="text-white mr-2" size={20} /> Reports
  </Link>
</li>


          {/* About Software */}
          <li>
            <Link
              to="/about"
              className={`px-4 py-3 text-white rounded-lg transition-all duration-300 flex items-center ${
                location.pathname === "/about"
                  ? "bg-yellow-500 text-white"
                  : "hover:bg-gray-200 hover:text-black"
              }`}
            >
              <LucideIcons.Info className="text-white mr-2 " size={20} /> About
              Software
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
