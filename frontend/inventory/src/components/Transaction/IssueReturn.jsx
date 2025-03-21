import React, { useState } from "react";

const ReturnMaterialIssue = () => {
  const [returnDate, setReturnDate] = useState("2025-03-19");
  const [returnNo, setReturnNo] = useState("IssR10081-820001");
  const [branch, setBranch] = useState("Main Store");


  return (
    <div className="p-4  bg-gray-100 ">
      <div className="bg-white shadow-lg rounded-lg p-4">
        {/* Header */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold">Return Date:</label>
            <input
              type="date"
              className="w-full border rounded p-2"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Return No:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={returnNo}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Branch To:</label>
            <select className="w-full border rounded p-2" value={branch}>
              <option>Main Store</option>
            </select>
          </div>
         
        </div>
        <div className=" w-full mt-6  flex items-center">
        <span className="text-purple-800 font-bold mr-2">Excel File</span>
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded mr-2"
        />
        <button className="bg-gray-200 border border-gray-300 rounded px-4 py-2 cursor-pointer">
          Import...
        </button>
      </div>

        {/* Table */}
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-2 border">Sr.</th>
                <th className="p-2 border">Product ID</th>
                <th className="p-2 border">Barcode</th>
                <th className="p-2 border">Product Name</th>
                <th className="p-2 border">Issue Qty</th>
                <th className="p-2 border">UOM</th>
                <th className="p-2 border">Unit Cost</th>
                <th className="p-2 border">Total Amt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">1</td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
              </tr>
            </tbody>
            <tfoot>
            <tr>
              <td colSpan="3" className=" border px-4 py-2 font-semibold">Grand Total :-</td>
              <td className="border px-4 py-2 font-semibold"></td>
              
            </tr>
          </tfoot>
          </table>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 text-white p-2 rounded">Save</button>
          <button className="bg-yellow-500 text-white p-2 rounded">Cancel</button> 
          <button className="bg-green-500 text-white p-2 rounded">Get Excel Format</button>
        </div>
      </div>
    </div>
  );
};

export default ReturnMaterialIssue;
