import React, { useState } from "react";

const InventoryItemMaster = () => {
  const [activeTab, setActiveTab] = useState("Product Information");

  const renderTabContent = () => {
    if (activeTab === "Product Information") {
      return (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Category Name</label>
            <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option value="">Select category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">Sub Category Name</label>
            <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option value="">Select subcategory</option>
              <option value="subcategory1">Subcategory 1</option>
              <option value="subcategory2">Subcategory 2</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">Cost Price</label>
            <input
              type="number"
              placeholder="Enter cost price"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Retail Price</label>
            <input
              type="number"
              placeholder="Enter retail price"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Whole Sale Rate</label>
            <input
              type="number"
              placeholder="Enter wholesale rate"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">H. S. Code</label>
            <input
              type="text"
              placeholder="Enter H. S. code"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>
      );
    }

    if (activeTab === "UOM And Barcode Setting") {
      return (
        <div>
          <table className="table-auto w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Sr.</th>
                <th className="border px-4 py-2">UOM</th>
                <th className="border px-4 py-2">UOM Qty</th>
                <th className="border px-4 py-2">Barcode</th>
                <th className="border px-4 py-2">Pack Cost</th>
                <th className="border px-4 py-2">Pack Sale</th>
                <th className="border px-4 py-2">Disc Amt</th>
                <th className="border px-4 py-2">Net Sale</th>
                <th className="border px-4 py-2">Net Profit %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    placeholder="UOM"
                    className="w-full p-1 border border-gray-300 rounded-md"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    placeholder="Qty"
                    className="w-full p-1 border border-gray-300 rounded-md"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    placeholder="Barcode"
                    className="w-full p-1 border border-gray-300 rounded-md"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    placeholder="Pack Cost"
                    className="w-full p-1 border border-gray-300 rounded-md"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    placeholder="Pack Sale"
                    className="w-full p-1 border border-gray-300 rounded-md"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    placeholder="Disc Amt"
                    className="w-full p-1 border border-gray-300 rounded-md"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    placeholder="Net Sale"
                    className="w-full p-1 border border-gray-300 rounded-md"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    placeholder="Net Profit %"
                    className="w-full p-1 border border-gray-300 rounded-md"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }

    if (activeTab === "Multiple Retail Price") {
      return (
        <div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-medium mb-2">Product Name</label>
              <input
                type="text"
                value="Product Name"
                readOnly
                className="w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Retail Price</label>
              <input
                type="text"
                value="Retail Price"
                readOnly
                className="w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <table className="table-auto w-full border border-gray-300 text-center">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border px-4 py-2">Sr.</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Sales Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    placeholder="Description"
                    className="w-full p-1 border border-gray-300 rounded-md"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    placeholder="Sales Rate"
                    className="w-full p-1 border border-gray-300 rounded-md"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-full max-w-4xl bg-white p-6 shadow-lg rounded-lg mt-4">
        <header className="w-full bg-blue-600 text-white py-4 shadow-md mb-2">
          <h2 className="text-center text-2xl font-bold">Inventory Item Master</h2>
        </header>
        <div className="tabs flex space-x-4 mb-6">
          {["Product Information", "UOM And Barcode Setting", "Multiple Retail Price"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 ${
                activeTab === tab
                  ? "bg-blue-500 text-white focus:ring-blue-300"
                  : "bg-gray-300 hover:bg-gray-400 focus:ring-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner">{renderTabContent()}</div>
        <div className="flex justify-between mt-6">
          <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
            Save
          </button>
          <button className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300">
            Modify
          </button>
          <button className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
            Cancel
          </button>
          <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryItemMaster;



