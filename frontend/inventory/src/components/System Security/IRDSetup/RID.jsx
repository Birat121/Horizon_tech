import React, { useState } from "react";

const RID = () => {
  const [schedulerStatus, setSchedulerStatus] = useState("Yes");

  return (
    <div className="h-[85vh]  flex justify-center items-center p-4">
      <div className="flex bg-white border-2 rounded-lg shadow-lg">
        {/* Sidebar */}
        <div className="w-28 bg-red-500 flex flex-col items-center py-10 space-y-4">
          <button className="flex items-center justify-center bg-white rounded-md p-2 shadow-md hover:scale-105 transition">
            Update
          </button>
          <button className="flex items-center justify-center bg-white rounded-md p-2 shadow-md hover:scale-105 transition">
            Cancel
          </button>
          <button className="flex items-center justify-center bg-white rounded-md p-2 shadow-md hover:scale-105 transition">
            Close
          </button>
        </div>

        {/* Main Content */}
        <div className="w-full p-6 space-y-4">
          {/* Header */}
          <h2 className="text-lg font-bold text-red-500 text-center">
            CBMS Real Time Data
          </h2>

          {/* Scheduler Effective From */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex items-center space-x-4 mb-4">
              <span className="font-medium text-gray-700">
                Scheduler Effective From
              </span>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Yes"
                  checked={schedulerStatus === "Yes"}
                  onChange={(e) => setSchedulerStatus(e.target.value)}
                  className="form-radio text-blue-500"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="No"
                  checked={schedulerStatus === "No"}
                  onChange={(e) => setSchedulerStatus(e.target.value)}
                  className="form-radio text-blue-500"
                />
                <span>No</span>
              </label>
            </div>

            <div className="flex space-x-4">
              <input
                type="date"
                className="border border-gray-300 rounded-md px-3 py-1 w-full"
              />
              <input
                type="date"
                className="border border-gray-300 rounded-md px-3 py-1 w-full"
              />
            </div>
          </div>

          {/* CBMS Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="w-1/4 font-medium text-gray-700">CBMS Uid</label>
              <input
                type="text"
                defaultValue="Test_CBMS"
                className="border border-gray-300 rounded-md px-3 py-1 w-full"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/4 font-medium text-gray-700">CBMS Pwd</label>
              <input
                type="password"
                defaultValue="test@321"
                className="border border-gray-300 rounded-md px-3 py-1 w-full"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/4 font-medium text-gray-700">CBMS Uri</label>
              <input
                type="text"
                defaultValue="https://cbapi.ird.gov.np/"
                className="border border-gray-300 rounded-md px-3 py-1 w-full"
              />
            </div>
          </div>

          {/* Security Verification */}
          <div className="border rounded-lg p-4 bg-gray-300">
            <h3 className="font-medium text-gray-700 mb-2">
              Security Verification
            </h3>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Username"
                className="border border-gray-300 rounded-md px-3 py-1 w-full"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded-md px-3 py-1 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RID;
