import React, { useState } from "react";

const ReturnMaterialIssue = () => {
  const [returnDate, setReturnDate] = useState("2025-03-19");
  const [returnNo, setReturnNo] = useState("IssR10081-820001");
  const [branch, setBranch] = useState("Main Store");
  const [excelFileName, setExcelFileName] = useState("");

  const [rows, setRows] = useState([
    {
      productId: "",
      barcode: "",
      productName: "",
      qty: "",
      uom: "",
      unitCost: "",
      totalAmt: 0,
    },
  ]);

  const handleRowChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;

    // Calculate Total
    const qty = parseFloat(newRows[index].qty) || 0;
    const cost = parseFloat(newRows[index].unitCost) || 0;
    newRows[index].totalAmt = qty * cost;

    // Auto add new row if last row has some data
    const isLast = index === rows.length - 1;
    const hasData = Object.values(newRows[index]).some((v) => v !== "" && v !== 0);
    if (isLast && hasData) {
      newRows.push({
        productId: "",
        barcode: "",
        productName: "",
        qty: "",
        uom: "",
        unitCost: "",
        totalAmt: 0,
      });
    }

    setRows(newRows);
  };

  const handleCancel = () => {
    setReturnDate("2025-03-19");
    setReturnNo("IssR10081-820001");
    setBranch("Main Store");
    setExcelFileName("");
    setRows([
      {
        productId: "",
        barcode: "",
        productName: "",
        qty: "",
        uom: "",
        unitCost: "",
        totalAmt: 0,
      },
    ]);
  };

  const grandTotal = rows.reduce((sum, row) => sum + (parseFloat(row.totalAmt) || 0), 0);

  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="bg-white border-2 shadow-lg rounded-lg p-8 w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold p-2 rounded mb-4">Issue Return</h2>
        </div>

        {/* Form Fields */}
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
            <select
              className="w-full border rounded p-3"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            >
              <option>Main Store</option>
              <option>Branch A</option>
              <option>Branch B</option>
            </select>
          </div>
        </div>

        {/* File Upload */}
        <div className="w-full mt-8 flex items-center">
          <span className="text-purple-800 font-bold mr-3 text-lg">Excel File</span>
          <input
            type="text"
            className="flex-grow p-3 border border-gray-300 rounded mr-3"
            value={excelFileName}
            onChange={(e) => setExcelFileName(e.target.value)}
          />
          <button className="bg-gray-200 border border-gray-300 rounded px-5 py-3 cursor-pointer">
            Import...
          </button>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-x-auto max-h-[300px] overflow-y-auto border rounded">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-100 sticky top-0 z-10">
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
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td className="p-3 border text-center">{idx + 1}</td>
                  <td className="p-2 border">
                    <input
                      type="text"
                      className="w-full border rounded p-1"
                      value={row.productId}
                      onChange={(e) => handleRowChange(idx, "productId", e.target.value)}
                    />
                  </td>
                  <td className="p-2 border">
                    <input
                      type="text"
                      className="w-full border rounded p-1"
                      value={row.barcode}
                      onChange={(e) => handleRowChange(idx, "barcode", e.target.value)}
                    />
                  </td>
                  <td className="p-2 border">
                    <input
                      type="text"
                      className="w-full border rounded p-1"
                      value={row.productName}
                      onChange={(e) => handleRowChange(idx, "productName", e.target.value)}
                    />
                  </td>
                  <td className="p-2 border">
                    <input
                      type="number"
                      className="w-full border rounded p-1"
                      value={row.qty}
                      onChange={(e) => handleRowChange(idx, "qty", e.target.value)}
                    />
                  </td>
                  <td className="p-2 border">
                    <input
                      type="text"
                      className="w-full border rounded p-1"
                      value={row.uom}
                      onChange={(e) => handleRowChange(idx, "uom", e.target.value)}
                    />
                  </td>
                  <td className="p-2 border">
                    <input
                      type="number"
                      className="w-full border rounded p-1"
                      value={row.unitCost}
                      onChange={(e) => handleRowChange(idx, "unitCost", e.target.value)}
                    />
                  </td>
                  <td className="p-2 border text-right">
                    {parseFloat(row.totalAmt).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50">
                <td colSpan="7" className="border px-4 py-3 font-semibold text-right">
                  Grand Total:
                </td>
                <td className="border px-4 py-3 font-semibold text-right">
                  {grandTotal.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button className="bg-blue-500 text-white p-3 rounded text-lg">Save</button>
          <button
            className="bg-yellow-500 text-white p-3 rounded text-lg"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="bg-green-500 text-white p-3 rounded text-lg">
            Get Excel Format
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReturnMaterialIssue;
