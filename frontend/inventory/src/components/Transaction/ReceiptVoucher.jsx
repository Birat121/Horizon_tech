import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DialogBox from "../../reusable inputs/DialogBox";

import { API_URLS } from "../../reusable inputs/config";

function ReceiptVoucher() {
  const [date, setDate] = useState("");
  const [voucherNo, setVoucherNo] = useState("");
  const [docNo, setDocNo] = useState("");
  const [contraAccount, setContraAccount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [rows, setRows] = useState([{ accountName: "", amount: "", narration: "" }]);

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(API_URLS.GET_RECEIPT_VOUCHER)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setVoucherNo(res.data[res.data.length - 1].voucherNo);
        }
      })
      .catch(() => toast.error("Failed to fetch voucher number"));
  }, []);

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const getGrandTotal = () => {
    return rows.reduce((total, row) => {
      const amount = parseFloat(row.amount);
      return total + (isNaN(amount) ? 0 : amount);
    }, 0);
  };

  const resetForm = () => {
    setDate("");
    setDocNo("");
    setContraAccount("");
    setRemarks("");
    setRows([{ accountName: "", amount: "", narration: "" }]);
  };

  const confirmSave = () => {
    if (!date || !voucherNo || !docNo || !contraAccount) {
      toast.error("Please fill all the required fields.");
      return;
    }

    const validRows = rows.filter((row) => row.accountName && row.amount);
    if (validRows.length === 0) {
      toast.error("Please enter at least one valid row.");
      return;
    }

    setShowConfirmDialog(true);
  };

  const handleSaveConfirmed = async () => {
    const payload = {
      date,
      voucherNo,
      docNo,
      contraAccount,
      remarks,
      entries: rows.filter((row) => row.accountName && row.amount),
      grandTotal: getGrandTotal(),
    };

    try {
      setLoading(true);
      const res = await axios.post(API_URLS.CreateReceiptVoucher, payload);
      if (res.status === 200) {
        setShowSuccessDialog(true);
        resetForm();
      }
    } catch {
      toast.error("Failed to save receipt voucher.");
    } finally {
      setLoading(false);
      setShowConfirmDialog(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-[85vh] ml-14 p-6">
      <div className="max-w-5xl w-full mx-auto bg-white border border-gray-300 rounded-2xl shadow-xl p-8">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold p-2 rounded-md mb-2">Receipt Voucher</h2>
        </div>

        {/* Form Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Date of Receipt</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm text-lg"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Voucher No</label>
            <input
              type="text"
              value={voucherNo}
              readOnly
              className="w-full mt-2 p-3 bg-gray-100 border border-gray-300 rounded-lg shadow-sm text-lg"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">DOC No</label>
            <select
              value={docNo}
              onChange={(e) => setDocNo(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm text-lg"
            >
              <option value="">Select</option>
              <option value="DOC001">DOC001</option>
              <option value="DOC002">DOC002</option>
              <option value="DOC003">DOC003</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Contra Account</label>
            <select
              value={contraAccount}
              onChange={(e) => setContraAccount(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm text-lg"
            >
              <option value="">Select</option>
              <option value="Cash">Cash</option>
              <option value="Bank">Bank</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-lg font-medium text-gray-700">Remarks</label>
            <input
              type="text"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm text-lg"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg shadow">
            <thead className="bg-gray-100 text-lg">
              <tr>
                <th className="border px-4 py-3">Sr.</th>
                <th className="border px-4 py-3">Account Name</th>
                <th className="border px-4 py-3">Amount</th>
                <th className="border px-4 py-3">Narration</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2 text-center">{index + 1}</td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      value={row.accountName}
                      onChange={(e) => handleInputChange(index, "accountName", e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      value={row.amount}
                      onChange={(e) => handleInputChange(index, "amount", e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      value={row.narration}
                      onChange={(e) => handleInputChange(index, "narration", e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Section */}
        <div className="mt-6 flex justify-between items-center">
          <div>
            <label className="text-lg font-medium text-gray-700">Grand Total:</label>
            <span className="ml-4 text-xl font-semibold border border-gray-400 px-6 py-3 rounded-lg">
              {getGrandTotal().toFixed(2)}
            </span>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md text-lg hover:bg-green-600"
              onClick={confirmSave}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md text-lg hover:bg-yellow-600">
              Modify
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md text-lg hover:bg-blue-600">
              Print
            </button>
            <button
              className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md text-lg hover:bg-red-600"
              onClick={resetForm}
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Dialogs */}
        <DialogBox
          isOpen={showConfirmDialog}
          onClose={() => setShowConfirmDialog(false)}
          title="Confirm Save"
        >
          <div className="text-center">
            <p className="mb-4 text-gray-700">Are you sure you want to save this receipt voucher?</p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={handleSaveConfirmed}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Yes, Save
              </button>
              <button
                onClick={() => setShowConfirmDialog(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </DialogBox>

        <DialogBox
          isOpen={showSuccessDialog}
          onClose={() => setShowSuccessDialog(false)}
          title="Success"
        >
          <div className="text-center">
            <p className="mb-4 text-green-600 font-semibold">Receipt voucher saved successfully!</p>
            <button
              onClick={() => setShowSuccessDialog(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              OK
            </button>
          </div>
        </DialogBox>
      </div>
    </div>
  );
}

export default ReceiptVoucher;
