import React, { useState } from "react";

function CreateAccountLedger() {
  const [accountType, setAccountType] = useState("Group Account");

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="p-8 bg-white border shadow-lg rounded-lg w-[600px]">
      <div className="bg-green-600 text-white text-lg font-semibold p-2 rounded-md mb-2">
            Create New Account Ledger
          </div>

        {/* Account Type Selector */}
        <div className="bg-white shadow-md rounded-md p-4 mb-4">
          <h2 className="text-lg  font-semibold text-gray-700 mb-2">
            Select Group / Child Account
          </h2>
          <div className="flex space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Group Account"
                checked={accountType === "Group Account"}
                onChange={() => setAccountType("Group Account")}
                className="form-radio text-purple-600"
              />
              <span className="text-gray-700 font-medium">Group Account</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Sub Group / Ledger"
                checked={accountType === "Sub Group / Ledger"}
                onChange={() => setAccountType("Sub Group / Ledger")}
                className="form-radio text-purple-600"
              />
              <span className="text-gray-700 font-medium">Sub Group / Ledger</span>
            </label>
          </div>
        </div>

        {/* Group Account Section */}
        <div className="bg-white shadow-md rounded-md p-4 mb-4">
          <h2 className="text-lg font-semibold text-black">
            Group Account
          </h2>
          <div className="grid grid-cols-3 gap-4 items-center">
            <label className="text-gray-600 font-medium">Group Code:</label>
            <input
              type="text"
              value="HX41"
              readOnly
              className="col-span-2 p-2 bg-gray-200 border border-gray-300 rounded-lg"
            />

            <label className="text-gray-600 font-medium">Group Name:</label>
            <input
              type="text"
              placeholder="Enter Group Name"
              className="col-span-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />

            <label className="text-gray-600 font-medium">Account Type:</label>
            <select className="col-span-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="">Select Account Type</option>
              <option value="Type1">Assets</option>
              <option value="Type2">Liabilities</option>
              <option value="Type2">Income</option>
              <option value="Type2">Expenses</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-3 mt-8">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 border rounded-lg shadow hover:bg-gray-200">
            Add New
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 border rounded-lg shadow hover:bg-gray-200">
            Modify
          </button>
          <button className="px-4 py-2 bg-green-500 text-white border rounded-lg shadow hover:bg-green-600">
            Save
          </button>
          <button className="px-4 py-2 bg-red-500 text-white border rounded-lg shadow hover:bg-red-600">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountLedger;
