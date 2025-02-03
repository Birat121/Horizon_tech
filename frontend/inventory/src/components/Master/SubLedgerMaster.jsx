import React, { useState } from "react";

function SubLedgerMaster() {
  const [activeTab, setActiveTab] = useState("Enter/Edit");

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="p-6 bg-white border shadow-lg rounded-lg w-[900px]">
        {/* Header Section */}
        <div className="flex justify-between items-center bg-green-600 text-white p-2 rounded-t-lg">
          <h1 className="text-lg font-semibold">Sub Ledger Master</h1>
          <div className="space-x-2">
            <button
              onClick={() => setActiveTab("Enter/Edit")}
              className={`px-3 py-1 ${
                activeTab === "Enter/Edit"
                  ? "bg-blue-500"
                  : "bg-gray-200 text-gray-700"
              } rounded shadow hover:bg-blue-600`}
            >
              Enter / Edit
            </button>
            <button
              onClick={() => setActiveTab("Sub Ledger List")}
              className={`px-3 py-1 ${
                activeTab === "Sub Ledger List"
                  ? "bg-blue-500"
                  : "bg-gray-200 text-gray-700"
              } rounded shadow hover:bg-blue-600`}
            >
              Sub Ledger List
            </button>
          </div>
        </div>

        {/* Conditional Rendering Based on Active Tab */}
        {activeTab === "Enter/Edit" ? (
          <div>
            {/* Sub Ledger Details Section */}
            <div className="border rounded-lg p-4 mt-2 shadow-sm bg-gray-50">
              <h2 className="font-semibold text-gray-700 mb-4">
                Sub Ledger Details
              </h2>
              <div className="grid grid-cols-6 gap-4 items-center">
                <label className="col-span-2 text-gray-600">
                  Sub Ledger Name:
                </label>
                <input
                  type="text"
                  className="col-span-4 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />

                <label className="col-span-2 text-gray-600">Address:</label>
                <input
                  type="text"
                  className="col-span-4 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />

                <label className="col-span-2 text-gray-600">Contact No.:</label>
                <input
                  type="text"
                  className="col-span-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />

                <label className="col-span-1 text-gray-600">Pan No.:</label>
                <input
                  type="text"
                  className="col-span-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />

                <label className="col-span-2 text-gray-600">Remarks:</label>
                <input
                  type="text"
                  className="col-span-4 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Search and Table Section */}
            <div className="mt-6">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search Ledger"
                  className="flex-grow p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
                  Select All
                </button>
              </div>

              <table className="table-auto w-full mt-4 border-t border-gray-300">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="p-2 border border-gray-300">Sr.</th>
                    <th className="p-2 border border-gray-300">Select</th>
                    <th className="p-2 border border-gray-300">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-gray-300 text-center">1</td>
                    <td className="p-2 border border-gray-300 text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="p-2 border border-gray-300">Sample Ledger</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-gray-300 text-center">2</td>
                    <td className="p-2 border border-gray-300 text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="p-2 border border-gray-300">Another Ledger</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4 mt-6">
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
                Save
              </button>
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600">
                Cancel
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600">
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Sub Ledger List Section */}
            <div className="border rounded-lg p-4 mt-2 shadow-sm bg-gray-50">
              <h2 className="font-semibold text-gray-700 mb-4">Sub Ledger List</h2>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search Sub Ledger"
                  className="flex-grow p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <table className="table-auto w-full mt-4 border-t border-gray-300">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="p-2 border border-gray-300">Sr.</th>
                    <th className="p-2 border border-gray-300">Sub Ledger Name</th>
                    <th className="p-2 border border-gray-300">Mobile No.</th>
                    <th className="p-2 border border-gray-300">Pan No.</th>
                    <th className="p-2 border border-gray-300">Address</th>
                    <th className="p-2 border border-gray-300">Remarks</th>
                    <th className="p-2 border border-gray-300">
                      No. Of Ledger Mapping
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-gray-300 text-center">1</td>
                    <td className="p-2 border border-gray-300">John Doe</td>
                    <td className="p-2 border border-gray-300">1234567890</td>
                    <td className="p-2 border border-gray-300">ABCDE1234F</td>
                    <td className="p-2 border border-gray-300">123 Main St</td>
                    <td className="p-2 border border-gray-300">Test remark</td>
                    <td className="p-2 border border-gray-300 text-center">3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SubLedgerMaster;

