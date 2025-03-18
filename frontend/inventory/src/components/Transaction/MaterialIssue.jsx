import React, { useState } from 'react';

const MaterialIssue = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      alert(`Uploaded: ${uploadedFile.name}`);
    }
  };

  const handleGetExcelFormat = () => {
    const link = document.createElement('a');
    link.href = '/path/to/sample-format.xlsx'; // Replace with actual file path
    link.download = 'SampleMaterialIssueFormat.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex items-center justify-center -mt-14 p-6">
      <div className="w-full max-w-4xl p-8 bg-white border border-gray-300 rounded-2xl shadow-lg">
        {/* Title Section */}
        <h1 className="text-white text-lg font-semibold p-2 rounded-md mb-2">
          Material Issue
        </h1>

        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Issue Date</label>
            <input
              type="date"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Branch To</label>
            <input
              type="text"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg shadow">
            <thead className="bg-blue-600 text-white text-lg">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left">Sr.</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Product ID</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Barcode</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Product Name</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Issue Qty</th>
                <th className="border border-gray-300 px-4 py-3 text-left">UOM</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Unit Cost</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Total Amt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 text-lg text-center">1</td>
                <td className="border border-gray-300 px-4 py-3 text-lg"></td>
                <td className="border border-gray-300 px-4 py-3 text-lg"></td>
                <td className="border border-gray-300 px-4 py-3 text-lg"></td>
                <td className="border border-gray-300 px-4 py-3 text-lg"></td>
                <td className="border border-gray-300 px-4 py-3 text-lg"></td>
                <td className="border border-gray-300 px-4 py-3 text-lg"></td>
                <td className="border border-gray-300 px-4 py-3 text-lg"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md text-lg hover:bg-blue-600 transition"
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
              className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md text-lg cursor-pointer hover:bg-green-600 transition"
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
