import React, { useState } from "react";

function VendorMaster() {
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [vendorName, setVendorName] = useState("");
  const [cityName, setCityName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [tpinNo, setTpinNo] = useState("");
  const [email, setEmail] = useState("");
  const [contactName, setContactName] = useState("");

  const handleModifyClick = () => setIsModifyMode(true);
  const handleCancelClick = () => setIsModifyMode(false);

  const vendorOptions = ["Vendor 1", "Vendor 2", "Vendor 3"];
  const cityOptions = ["City 1", "City 2", "City 3"];

  return (
    <div className="flex flex-col h-[85vh] bg-white border rounded-lg shadow-md p-4 overflow-y-auto ml-10">
      <div className="flex-1 flex gap-4">
        {/* Left Section: Form */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300 rounded-lg">
          <h1 className="text-gray-700 text-base font-semibold p-2 mb-3 shadow-sm">
            Create / Modify Vendor Information
          </h1>
          <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
            {/* Vendor Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vendor Name</label>
              {isModifyMode ? (
                <select
                  value={vendorName}
                  onChange={(e) => setVendorName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-1 focus:ring-green-500"
                >
                  <option value="" disabled></option>
                  {vendorOptions.map((vendor, index) => (
                    <option key={index} value={vendor}>{vendor}</option>
                  ))}
                </select>
              ) : (
                <input 
                  type="text"
                  placeholder="Enter vendor name"
                  value={vendorName}
                  onChange={(e) => setVendorName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-1 focus:ring-green-500"
                />
              )}
            </div>
            {/* Other Fields */}
            {[{ label: "City Name", value: cityName, setValue: setCityName, options: cityOptions },
              { label: "Phone No", value: phoneNo, setValue: setPhoneNo },
              { label: "Mobile No", value: mobileNo, setValue: setMobileNo },
              { label: "TPIN No", value: tpinNo, setValue: setTpinNo },
              { label: "Email ID", value: email, setValue: setEmail },
              { label: "Contact Name", value: contactName, setValue: setContactName }]
              .map((field, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                  {field.options ? (
                    <select
                      value={field.value}
                      onChange={(e) => field.setValue(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-1 focus:ring-green-500"
                    >
                      <option value="" disabled></option>
                      {field.options.map((option, i) => (
                        <option key={i} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                      value={field.value}
                      onChange={(e) => field.setValue(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-1 focus:ring-green-500"
                    />
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Right Section: Table */}
        <div className="flex-1 bg-white p-4 shadow-md rounded-lg">
          <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
            {/* Table Content */}
          </table>
        </div>
      </div>

      {/* Footer Section: Buttons */}
      <div className="bg-gray-100 border-t border-gray-300 p-3 flex justify-center space-x-3">
        <button className="px-6 py-2 bg-green-500 text-white text-sm rounded shadow-md hover:bg-green-600">Save</button>
        <button className="px-6 py-2 bg-blue-500 text-white text-sm rounded shadow-md hover:bg-blue-600" onClick={handleModifyClick}>Modify</button>
        <button className="px-6 py-2 bg-red-500 text-white text-sm rounded shadow-md hover:bg-red-600" onClick={handleCancelClick}>Cancel</button>
      </div>
    </div>
  );
}

export default VendorMaster;
