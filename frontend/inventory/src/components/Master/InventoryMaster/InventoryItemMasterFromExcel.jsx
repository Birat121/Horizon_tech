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

  const handleSave = () => {
    console.log("Data saved", data);
  };

  const handleCancel = () => {
    setFilePath("");
    setData([]);
  };

  return (
    <div className="flex h-[85vh] overflow-hidden ml-14">
      {/* Sidebar */}
      <div className="w-1/6 bg-gray-300 p-3 flex flex-col items-center gap-3 text-white">
        <button className="w-full bg-save hover:bg-save-hover py-1.5 rounded text-sm" onClick={handleSave}>
          Save
        </button>
        <button className="w-full bg-cancel hover:bg-cancel-hover py-1.5 rounded text-sm" onClick={handleCancel}>
          Cancel
        </button>
        <label className="w-full bg-blue-500 hover:bg-blue-600 py-1.5 rounded text-sm text-center cursor-pointer">
          Get Excel
          <input type="file" className="hidden" onChange={handleFileUpload} />
        </label>
      </div>

      {/* Main Content */}
      <div className="w-5/6 bg-gray-100 p-4 overflow-auto">
        <div className="border border-gray-300 rounded shadow-lg bg-white p-3 h-full">
          <div className="flex items-center gap-2 mb-3">
            <label className="text-sm font-semibold">File Path:</label>
            <input type="text" value={filePath} readOnly className="flex-grow border border-gray-300 rounded px-2 py-1 text-sm" />
          </div>
          <div className="overflow-auto max-h-[calc(100vh-180px)]">
            <table className="w-full border-collapse border border-gray-400 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  {[
                    "Sr.", "Category Name", "Sub Category", "UOM", "Barcode", "Product Name", "Unit Cost", "Sale Rate", "Wholesale",
                  ].map((header, index) => (
                    <th key={index} className="border border-gray-300 px-2 py-1">
                      {header}
                    </th>
                  ))}
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
                    <td colSpan="9" className="text-center border border-gray-300 py-3 text-sm">
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


