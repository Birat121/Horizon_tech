import React, { useState } from "react";
import Papa from "papaparse"; // Import PapaParse for CSV parsing

const OpeningStockEntry = () => {
  const [filePath, setFilePath] = useState(""); // Store file path
  const [tableData, setTableData] = useState([]); // Store table data

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFilePath(file.name); // Update file name in the input
      const reader = new FileReader();
      
      reader.onload = () => {
        const fileContent = reader.result;
        Papa.parse(fileContent, {
          complete: (result) => {
            const data = result.data;
            // Assuming CSV structure: Barcode, Product Name, Stock in Pcs, Stock Rate, Total Amount
            const formattedData = data.map((row, index) => ({
              id: index + 1, // For Sr. column
              barcode: row[0],
              productName: row[1],
              stockInPcs: row[2],
              stockRate: row[3],
              totalAmount: row[4],
            }));
            setTableData(formattedData); // Update table data
          },
          header: false, // Assuming no header in the CSV file
        });
      };
      
      reader.readAsText(file); // Read file content as text
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-[87vh] bg-white border-2 rounded-lg shadow-lg ml-8">
      {/* Sidebar */}
      <div className="w-full md:w-1/6 bg-blue-700 text-white flex md:flex-col flex-row md:items-center md:py-4 py-2">
        <button className="w-1/4 md:w-5/6 py-2 md:py-3 mb-2 md:mb-4 bg-save hover:bg-save-hover rounded text-sm md:text-base">
          Save
        </button>
        <button className="w-1/4 md:w-5/6 py-2 md:py-3 mb-2 md:mb-4 bg-cancel hover:bg-cancel-hover rounded text-sm md:text-base">
          Cancel
        </button>
        <button className="w-1/4 md:w-5/6 py-2 md:py-3 mb-2 md:mb-4 bg-modify hover:bg-modify-hover rounded text-sm md:text-base">
          Modify
        </button>
        <button className="w-1/4 md:w-5/6 py-2 md:py-3 mb-2 md:mb-4 bg-blue-600 hover:bg-blue-800 rounded text-sm md:text-base">
          Delete
        </button>
        <button className="w-1/4 md:w-5/6 py-2 md:py-3 mt-2 md:mt-96 bg-green-600 hover:bg-green-800 rounded text-sm md:text-base">
          Get Excel
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-4">
        {/* File Path Input */}
        <div className="flex items-center space-x-4 mb-4">
          <label className="font-semibold text-lg">File Path</label>
          <input
            type="text"
            value={filePath}
            readOnly
            className="border border-gray-400 rounded p-2 flex-1"
          />
          <div>
            <label
              htmlFor="fileInput"
              className="px-4 py-2 bg-gray-200 border border-gray-400 rounded cursor-pointer hover:bg-gray-300"
            >
              ...
            </label>
            <input
              id="fileInput"
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="border border-gray-300 p-2">Sr.</th>
                <th className="border border-gray-300 p-2">Barcode</th>
                <th className="border border-gray-300 p-2">Product Name</th>
                <th className="border border-gray-300 p-2">Stock in Pcs</th>
                <th className="border border-gray-300 p-2">Stock Rate</th>
                <th className="border border-gray-300 p-2">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td className="border border-gray-300 p-2">{row.id}</td>
                  <td className="border border-gray-300 p-2">{row.barcode}</td>
                  <td className="border border-gray-300 p-2">{row.productName}</td>
                  <td className="border border-gray-300 p-2">{row.stockInPcs}</td>
                  <td className="border border-gray-300 p-2">{row.stockRate}</td>
                  <td className="border border-gray-300 p-2">{row.totalAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OpeningStockEntry;
