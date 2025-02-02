import React, { useState } from "react";

function VendorMaster() {
  const [isModifyMode, setIsModifyMode] = useState(false); // Tracks modify mode
  const [vendorName, setVendorName] = useState(""); // State for Vendor Name input
  const [cityName, setCityName] = useState(""); // State for City Name input
  const [phoneNo, setPhoneNo] = useState(""); // State for Phone No input
  const [mobileNo, setMobileNo] = useState(""); // State for Mobile No input
  const [tpinNo, setTpinNo] = useState(""); // State for TPIN No input
  const [email, setEmail] = useState(""); // State for Email input
  const [contactName, setContactName] = useState(""); // State for Contact Name input

  const handleModifyClick = () => {
    setIsModifyMode(true); // Enable modify mode when "Modify" button is clicked
  };

  const handleCancelClick = () => {
    setIsModifyMode(false); // Disable modify mode when "Cancel" button is clicked
  };

  const vendorOptions = ["Vendor 1", "Vendor 2", "Vendor 3"]; // Example vendor options
  const cityOptions = ["City 1", "City 2", "City 3"]; // Example city options

  return ( 
    <div className="flex flex-col h-[90vh] bg-gray-50 rounded-lg shadow-md">
      <div className="flex-1 flex">
        {/* Left Section: Form */}
        <div className="w-1/3 bg-gray-100 p-6 border-r border-gray-300">
          <h1 className=" text-white text-lg font-semibold p-4 rounded-md mb-4 shadow-md">
            Create / Modify Customer Information
          </h1>
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
            {/* Vendor Name */}
            <div>
              <label className="block text-xl font-medium text-gray-700 mb-2">
                Vendor Name
              </label>
              <div className="relative">
                <i className="fa fa-user absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"></i>
                {isModifyMode ? (
                  <select
                    value={vendorName}
                    onChange={(e) => setVendorName(e.target.value)}
                    className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm text-gray-700"
                  >
                    <option value="" disabled></option>
                    {vendorOptions.map((vendor, index) => (
                      <option key={index} value={vendor}>
                        {vendor}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input 
                    type="text"
                    placeholder="Enter vendor name"
                    value={vendorName}
                    onChange={(e) => setVendorName(e.target.value)}
                    className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm text-gray-700"
                  />
                )}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xl font-medium text-gray-700 mb-2">
                Address
              </label>
              <div className="relative">
                <i className="fa fa-map-marker-alt absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Enter address"
                  className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm text-gray-700"
                />
              </div>
            </div>

            {/* City Name */}
            <div>
              <label className="block text-xl font-medium text-gray-700 mb-2">
                City Name
              </label>
              <div className="relative">
                <i className="fa fa-city absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"></i>
                {isModifyMode ? (
                  <select
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm text-gray-700"
                  >
                    <option value="" disabled></option>
                    {cityOptions.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    placeholder="Enter city name"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm text-gray-700"
                  />
                )}
              </div>
            </div>

            {/* Phone No */}
            <div>
              <label className="block text-xl font-medium text-gray-700 mb-2">
                Phone No
              </label>
              <div className="relative">
                <i className="fa fa-phone-alt absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm text-gray-700"
                />
              </div>
            </div>

            {/* Mobile No */}
            <div>
              <label className="block text-xl font-medium text-gray-700 mb-2">
                Mobile No
              </label>
              <div className="relative">
                <i className="fa fa-mobile-alt absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm text-gray-700"
                />
              </div>
            </div>

            {/* TPIN No */}
            <div>
              <label className="block text-xl font-medium text-gray-700 mb-2">
                TPIN No
              </label>
              <div className="relative">
                <i className="fa fa-id-card absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Enter TPIN number"
                  value={tpinNo}
                  onChange={(e) => setTpinNo(e.target.value)}
                  className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm text-gray-700"
                />
              </div>
            </div>

            {/* Email ID */}
            <div>
              <label className="block text-xl font-medium text-gray-700 mb-2">
                Email ID
              </label>
              <div className="relative">
                <i className="fa fa-envelope absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm text-gray-700"
                />
              </div>
            </div>

            {/* Contact Name */}
            <div>
              <label className="block text-xl font-medium text-gray-700 mb-2">
                Contact Name
              </label>
              <div className="relative">
                <i className="fa fa-address-book absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Enter contact name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm text-gray-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Table */}
        <div className="flex-1 bg-white p-6 shadow-md rounded-md">
          <table className="table-auto w-full border-collapse border border-gray-400 text-left">
            {/* Your table data goes here */}
          </table>
        </div>
      </div>

      {/* Footer Section: Buttons */}
      <div className="bg-gray-100 border-t border-gray-300 p-4 justify-center flex space-x-4">
        <button className="flex items-center px-8 py-3 bg-save text-white text-lg rounded-lg shadow-lg hover:bg-save-hover">
          <i className="fa fa-save mr-3"></i> Save
        </button>
        <button
          className="flex items-center px-8 py-3 bg-modify text-white text-lg rounded-lg shadow-lg hover:bg-modify-hover"
          onClick={handleModifyClick}
        >
          <i className="fa fa-edit mr-3"></i> Modify
        </button>
        <button
          className="flex items-center px-8 py-3 bg-cancel text-white text-lg rounded-lg shadow-lg hover:bg-cancel-hover"
          onClick={handleCancelClick}
        >
          <i className="fa fa-ban mr-3"></i> Cancel
        </button>
      </div>
    </div>
  );
}

export default VendorMaster;
