import React, { useState } from "react";

const ReturnMaterialIssue = () => {
  const [returnDate, setReturnDate] = useState("2025-03-19");
  const [returnNo, setReturnNo] = useState("IssR10081-820001");
  const [branch, setBranch] = useState("Main Store");

  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="bg-white border-2 shadow-lg rounded-lg p-8 w-full max-w-4xl">
        {/* Header */}
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold">Return Date:</label>
            <input
              type="date"
              className="w-full border rounded p-3"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Return No:</label>
            <input
              type="text"
              className="w-full border rounded p-3"
              value={returnNo}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Branch To:</label>
            <select className="w-full border rounded p-3" value={branch}>
              <option>Main Store</option>
            </select>
          </div>
        </div>

        {/* File Upload */}
        <div className="w-full mt-8 flex items-center">
          <span className="text-purple-800 font-bold mr-3 text-lg">Excel File</span>
          <input
            type="text"
            className="flex-grow p-3 border border-gray-300 rounded mr-3"
          />
          <button className="bg-gray-200 border border-gray-300 rounded px-5 py-3 cursor-pointer">
            Import...
          </button>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-lg">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-3 border">Sr.</th>
                <th className="p-3 border">Product ID</th>
                <th className="p-3 border">Barcode</th>
                <th className="p-3 border">Product Name</th>
                <th className="p-3 border">Issue Qty</th>
                <th className="p-3 border">UOM</th>
                <th className="p-3 border">Unit Cost</th>
                <th className="p-3 border">Total Amt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">1</td>
                <td className="p-3 border"></td>
                <td className="p-3 border"></td>
                <td className="p-3 border"></td>
                <td className="p-3 border"></td>
                <td className="p-3 border"></td>
                <td className="p-3 border"></td>
                <td className="p-3 border"></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="7" className="border px-4 py-3 font-semibold text-right">Grand Total:</td>
                <td className="border px-4 py-3 font-semibold"></td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button className="bg-blue-500 text-white p-3 rounded text-lg">Save</button>
          <button className="bg-yellow-500 text-white p-3 rounded text-lg">Cancel</button>
          <button className="bg-green-500 text-white p-3 rounded text-lg">Get Excel Format</button>
        </div>
      </div>
    </div>
  );
};

export default ReturnMaterialIssue;
