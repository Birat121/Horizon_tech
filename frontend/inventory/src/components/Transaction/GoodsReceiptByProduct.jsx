import React, { useState } from 'react';

const GoodsReceiptByProduct = () => {
  const [formData, setFormData] = useState({
    issueDate: '',
    receiptDate: '',
    issueNo: '',
    branch: '',
  });

  const [tableData, setTableData] = useState([
    { id: 1, productId: 'P001', productName: 'Product A', qty: 10, uom: 'PCS', rate: 5, total: 50, batchNo: 'B001' },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTableChange = (index, field, value) => {
    const newTableData = [...tableData];
    newTableData[index][field] = value;

    if (field === 'qty' || field === 'rate') {
      newTableData[index].total = newTableData[index].qty * newTableData[index].rate;
    }

    setTableData(newTableData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
      <div className="bg-green-600 text-white text-lg font-semibold p-2 rounded-md mb-2">
           Material Reciept
          </div>

        {/* Form Section */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Issue Date:</label>
            <input
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Receipt Date:</label>
            <input
              type="date"
              name="receiptDate"
              value={formData.receiptDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Issue No.:</label>
            <input
              type="text"
              name="issueNo"
              value={formData.issueNo}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">From Branch:</label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
            >
              <option value="">Select Branch</option>
              <option value="Branch 1">Branch 1</option>
              <option value="Branch 2">Branch 2</option>
            </select>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="border p-2">Sr.</th>
                <th className="border p-2">Product ID</th>
                <th className="border p-2">Product Name</th>
                <th className="border p-2">Issue Qty.</th>
                <th className="border p-2">UOM</th>
                <th className="border p-2">Rate</th>
                <th className="border p-2">Total Amt</th>
                <th className="border p-2">Batch No.</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={row.id}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={row.productId}
                      onChange={(e) => handleTableChange(index, 'productId', e.target.value)}
                      className="w-full border border-gray-300 rounded p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={row.productName}
                      onChange={(e) => handleTableChange(index, 'productName', e.target.value)}
                      className="w-full border border-gray-300 rounded p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={row.qty}
                      onChange={(e) => handleTableChange(index, 'qty', parseFloat(e.target.value) || 0)}
                      className="w-full border border-gray-300 rounded p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={row.uom}
                      onChange={(e) => handleTableChange(index, 'uom', e.target.value)}
                      className="w-full border border-gray-300 rounded p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={row.rate}
                      onChange={(e) => handleTableChange(index, 'rate', parseFloat(e.target.value) || 0)}
                      className="w-full border border-gray-300 rounded p-1"
                    />
                  </td>
                  <td className="border p-2">{row.total.toFixed(2)}</td>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={row.batchNo}
                      onChange={(e) => handleTableChange(index, 'batchNo', e.target.value)}
                      className="w-full border border-gray-300 rounded p-1"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Subtotal Section */}
        <div className="flex justify-end mt-4">
          <span className="font-medium">Sub Total:</span>
          <span className="ml-2 bg-teal-100 p-2 rounded">
            {tableData.reduce((sum, row) => sum + row.total, 0).toFixed(2)}
          </span>
        </div>

        {/* Button Section */}
        <div className="flex justify-between mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Save
          </button>
          <div className="space-x-4">
            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
              Cancel
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsReceiptByProduct;
