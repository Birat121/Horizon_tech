import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { FileText } from "lucide-react";
import { menus } from "../../reusable inputs/menus";

const Sidebar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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
    <>
      {/* Fixed Toggle Button - must be OUTSIDE any scrolling containers */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="bg-yellow-500 text-white p-2 rounded-full shadow-lg"
        >
          {isSidebarOpen ? (
            <LucideIcons.X size={24} />
          ) : (
            <LucideIcons.Menu size={24} />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-600 shadow-lg p-4 overflow-y-auto z-40 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="sticky top-0 bg-gray-600 pb-3 z-50">
          <Link to="/">
            <h2 className="text-white text-lg font-semibold p-2 text-center">
              <i className="fa fa-rocket text-yellow-500"></i>
              <span className="ml-2">INVENTORY</span>
            </h2>
          </Link>
        </div>

        <ul className="space-y-2">
          {menus.map((menu) => (
            <li key={menu.name}>
              <button
                onClick={() => toggleDropdown(menu.name)}
                className={`w-full text-white px-4 py-3 flex justify-between items-center rounded-lg ${
                  activeDropdown === menu.name
                    ? "bg-yellow-500"
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

              {activeDropdown === menu.name && (
                <ul className="ml-4 mt-2 space-y-2">
                  {menu.items.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => toggleSubDropdown(item.path)}
                        className={`block px-4 py-2 rounded-lg ${
                          location.pathname === item.path
                            ? "bg-yellow-500 text-white"
                            : "hover:bg-gray-200 hover:text-black text-white"
                        }`}
                      >
                        {item.label}
                        {item.subOptions &&
                          (activeSubDropdown === item.path ? (
                            <LucideIcons.ChevronUp size={14} className="ml-2" />
                          ) : (
                            <LucideIcons.ChevronDown
                              size={14}
                              className="ml-2"
                            />
                          ))}
                      </Link>

                      {activeSubDropdown === item.path && item.subOptions && (
                        <ul className="ml-6 mt-1 space-y-2">
                          {item.subOptions.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.path}
                                className={`block px-4 py-2 rounded-lg ${
                                  location.pathname === subItem.path
                                    ? "bg-yellow-500 text-white"
                                    : "hover:bg-gray-200 hover:text-black text-white"
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

          {/* Additional Links */}
          <li>
            <Link
              to="/systemsecurity"
              className={`px-4 py-3 block rounded-lg text-white ${
                location.pathname === "/systemsecurity"
                  ? "bg-yellow-500"
                  : "hover:bg-gray-200 hover:text-black"
              }`}
            >
              <FileText className="inline mr-2" size={20} /> System Security
            </Link>
          </li>

          <li>
            <Link
              to="/reports"
              className={`px-4 py-3 block rounded-lg text-white ${
                location.pathname === "/reports"
                  ? "bg-yellow-500"
                  : "hover:bg-gray-200 hover:text-black"
              }`}
            >
              <FileText className="inline mr-2" size={20} /> Reports
            </Link>
          </li>

          
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

