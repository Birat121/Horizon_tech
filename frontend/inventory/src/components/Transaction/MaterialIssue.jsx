import React, { useState } from 'react';

const MaterialIssue = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    alert(`Uploaded: ${uploadedFile.name}`);
  };

  const handleGetExcelFormat = () => {
    // Dummy link for sample excel template
    const link = document.createElement('a');
    link.href = '/path/to/sample-format.xlsx';
    link.download = 'SampleMaterialIssueFormat.xlsx';
    link.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
      <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2">
            Material Issue
          </h1>

        {/* Form Section */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-medium">Issue Date</label>
            <input type="date" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block font-medium">Branch To</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Sr.</th>
                <th className="border border-gray-300 p-2">Product ID</th>
                <th className="border border-gray-300 p-2">Barcode</th>
                <th className="border border-gray-300 p-2">Product Name</th>
                <th className="border border-gray-300 p-2">Issue Qty</th>
                <th className="border border-gray-300 p-2">UOM</th>
                <th className="border border-gray-300 p-2">Unit Cost</th>
                <th className="border border-gray-300 p-2">Total Amt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">1</td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleGetExcelFormat}
          >
            Get Excel Format
          </button>
          <div>
            <input
              type="file"
              accept=".xlsx, .xls"
              className="hidden"
              id="uploadExcel"
              onChange={handleFileUpload}
            />
            <label
              htmlFor="uploadExcel"
              className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600"
            >
              Upload Excel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialIssue;

