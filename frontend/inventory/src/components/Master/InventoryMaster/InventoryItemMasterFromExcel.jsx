import React, { useState } from "react";

const ImportExcel = () => {
  const [filePath, setFilePath] = useState("");
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFilePath(file.name);
      // Implement logic to read and parse the Excel file
    }
  };

  const handleGetExcel = () => {
    // Trigger file input click
    document.getElementById("fileInput").click();
  };

  const handleSave = () => {
    // Logic to save the imported data
    console.log("Data saved", data);
  };

  const handleCancel = () => {
    // Reset the form
    setFilePath("");
    setData([]);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/5 bg-blue-700 p-4 flex flex-col items-center gap-4 text-white">
        <button
          className="w-full bg-save hover:bg-save-hover py-2 rounded text-center"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="w-full bg-cancel hover:bg-cancel-hover py-2 rounded text-center"
          onClick={handleCancel}
        >
          Cancel
        </button>
        
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded text-center"
          onClick={handleGetExcel}
        >
          Get Excel
        </button>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>

      {/* Main Content */}
      <div className="w-4/5 bg-gray-100 p-6 overflow-auto">
        <div className="border border-blue-700 rounded shadow-lg bg-white p-4 h-full">
          <div className="flex items-center gap-2 mb-4">
            <label className="text-lg font-semibold">File Path:</label>
            <input
              type="text"
              value={filePath}
              readOnly
              className="flex-grow border border-gray-300 rounded px-2 py-1"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              ...
            </button>
          </div>
          <div className="overflow-auto max-h-[calc(100vh-180px)]">
            <table className="w-full border-collapse border border-gray-400">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="border border-gray-300 px-2 py-1">Sr.</th>
                  <th className="border border-gray-300 px-2 py-1">Category Name</th>
                  <th className="border border-gray-300 px-2 py-1">Sub Category</th>
                  <th className="border border-gray-300 px-2 py-1">UOM</th>
                  <th className="border border-gray-300 px-2 py-1">Barcode</th>
                  <th className="border border-gray-300 px-2 py-1">Product Name</th>
                  <th className="border border-gray-300 px-2 py-1">Unit Cost</th>
                  <th className="border border-gray-300 px-2 py-1">Sale Rate</th>
                  <th className="border border-gray-300 px-2 py-1">Wholesale</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((row, index) => (
                    <tr key={index} className="text-center">
                      <td className="border border-gray-300 px-2 py-1">{index + 1}</td>
                      <td className="border border-gray-300 px-2 py-1">{row.category}</td>
                      <td className="border border-gray-300 px-2 py-1">{row.subCategory}</td>
                      <td className="border border-gray-300 px-2 py-1">{row.uom}</td>
                      <td className="border border-gray-300 px-2 py-1">{row.barcode}</td>
                      <td className="border border-gray-300 px-2 py-1">{row.productName}</td>
                      <td className="border border-gray-300 px-2 py-1">{row.unitCost}</td>
                      <td className="border border-gray-300 px-2 py-1">{row.saleRate}</td>
                      <td className="border border-gray-300 px-2 py-1">{row.wholesale}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="9"
                      className="text-center border border-gray-300 py-4"
                    >
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportExcel;

