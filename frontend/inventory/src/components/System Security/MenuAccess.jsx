import React, { useState } from "react";

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
    <div className="flex justify-center items-center h-screen">
      <div className="w-[450px] bg-white rounded-lg shadow-lg">
        {/* Header */}
        <h1 className=" p-4 text-center text-lg font-bold text-white rounded-t-lg">
          Set Access to Users
        </h1>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Searchable Dropdown */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2">Username:</label>
            {/* Dropdown Toggle */}
            <div
              className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 flex justify-between items-center cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>{selectedUser || "Select a user"}</span>
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute w-full bg-white border border-gray-300 rounded-md mt-2 z-10 shadow-lg">
                {/* Search Box */}
                <input
                  type="text"
                  className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* Filtered Users */}
                <ul className="max-h-40 overflow-y-auto">
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user, index) => (
                      <li
                        key={index}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
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
                    <li className="px-3 py-2 text-gray-500">No users found</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="p-4 bg-gray-100 rounded-b-lg flex justify-between space-x-2">
          <button className="flex-1 py-2 bg-save hover:bg-save-hover text-black font-medium rounded-md shadow transition">
            Set Access
          </button>
          <button className="flex-1 py-2 bg-preview hover:bg-preview-hover text-black font-medium rounded-md shadow transition">
            Select All
          </button>
          <button
            className="flex-1 py-2 bg-cancel hover:bg-cancel-hover text-black font-medium rounded-md shadow transition"
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
