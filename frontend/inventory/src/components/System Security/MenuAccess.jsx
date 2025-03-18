import React, { useState } from "react";
import Button from "../../reusable inputs/buttons";

function MenuAccess() {
  const [searchTerm, setSearchTerm] = useState(""); // To track search input
  const [dropdownOpen, setDropdownOpen] = useState(false); // To toggle dropdown
  const [selectedUser, setSelectedUser] = useState(""); // To track the selected user
  const users = ["User 1", "User 2", "User 3", "User 4", "User 5"]; // Sample user list

  // Filter users based on the search term
  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center h-[85vh]  ">
      <div className="w-[500px] bg-white border-2 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="p-6 text-center text-2xl font-bold text-white  rounded-t-xl">
          Set Access to Users
        </h1>

        {/* Body */}
        <div className="p-8 space-y-6">
          {/* Searchable Dropdown */}
          <div className="relative">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Username:</label>
            {/* Dropdown Toggle */}
            <div
              className="w-full bg-gray-100 border border-gray-400 rounded-lg px-4 py-3 flex justify-between items-center cursor-pointer text-lg"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>{selectedUser || "Select a user"}</span>
              <span className="text-gray-500">&#9662;</span> {/* Downward arrow */}
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute w-full bg-white border border-gray-400 rounded-lg mt-2 z-10 shadow-xl">
                {/* Search Box */}
                <input
                  type="text"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none text-lg"
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* Filtered Users */}
                <ul className="max-h-48 overflow-y-auto">
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user, index) => (
                      <li
                        key={index}
                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-lg"
                        onClick={() => {
                          setSelectedUser(user);
                          setDropdownOpen(false);
                          setSearchTerm("");
                        }}
                      >
                        {user}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-3 text-gray-500 text-lg">No users found</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="p-6 bg-gray-100 rounded-b-xl flex justify-between space-x-4">
          <button className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg shadow-md transition">
            Set Access
          </button>
          <button className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md transition">
            Select All
          </button>
          <button
            className="flex-1 py-3 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md transition"
            onClick={() => {
              setSelectedUser(""); // Reset the selected user to default
              setSearchTerm(""); // Clear the search term
            }}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuAccess;
