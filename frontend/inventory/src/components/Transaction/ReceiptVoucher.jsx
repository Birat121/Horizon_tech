import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CustomDialog from "../../reusable inputs/customeDialog";
import { API_URLS } from "../../reusable inputs/config";

function ReceiptVoucher() {
  const [date, setDate] = useState("");
  const [voucherNo, setVoucherNo] = useState("");
  const [docNo, setDocNo] = useState("");
  const [contraAccount, setContraAccount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [rows, setRows] = useState([
    { accountName: "", amount: "", narration: "" },
  ]);
  const [accountNames, setAccountNames] = useState([]);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchVoucherNumberAndAccountNames = async () => {
    try {
      const [voucherRes, accountRes] = await Promise.all([
        axios.get(API_URLS.GET_RECEIPT_VOUCHER),
        axios.get(API_URLS.GET_ACCOUNT_NAMES),
      ]);

      if (voucherRes.data && voucherRes.data.voucherNo) {
        setVoucherNo(voucherRes.data.voucherNo);
      }
      if (accountRes.data) {
        setAccountNames(accountRes.data);
      }
    } catch (error) {
      toast.error("Failed to fetch voucher number or account names");
    }
  };

  useEffect(() => {
    fetchVoucherNumberAndAccountNames();
  }, []);

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);

    if (
      updatedRows[index].accountName &&
      updatedRows[index].amount &&
      updatedRows[index].narration &&
      index === updatedRows.length - 1
    ) {
      setRows([...updatedRows, { accountName: "", amount: "", narration: "" }]);
    }
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
    fetchVoucherNumberAndAccountNames();
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
    const validRows = rows.filter((row) => row.accountName && parseFloat(row.amount) > 0);

    try {
      setLoading(true);
      for (const row of validRows) {
        const payload = {
          Acc: row.accountName,
          ContraAcc: contraAccount,
          Amount: parseFloat(row.amount),
          TransDate: date,
          Narration: row.narration || remarks,
          EntryBy: "admin", // Replace with actual username from auth if needed
          VoucherRef: voucherNo,
          DocNo: parseInt(docNo),
        };

        console.log("Sending entry:", payload);

        const res = await axios.post(`${API_URLS.CreateReceiptVoucher}?voucherType=RV`, payload);

        if (res.status !== 200) {
          throw new Error(res.data?.error || "Error saving entry");
        }
      }

      toast.success("Receipt voucher saved successfully.");
      setShowSuccessDialog(true);
      resetForm();
    } catch (error) {
      console.error("Error:", error.response || error.message);
      toast.error(error.response?.data?.error || "Failed to save receipt voucher.");
    } finally {
      setLoading(false);
      setShowConfirmDialog(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-[85vh] ml-14 p-6">
      <div className="max-w-5xl w-full mx-auto bg-white border border-gray-300 rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold p-2 rounded-md mb-2">Receipt Voucher</h2>
        </div>

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
            <input
              type="text"
              value={docNo}
              onChange={(e) => setDocNo(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm text-lg"
            />
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
                    <select
                      value={row.accountName}
                      onChange={(e) =>
                        handleInputChange(index, "accountName", e.target.value)
                      }
                      className="w-full p-2 border rounded"
                    >
                      <option value="">Select Account</option>
                      {accountNames.map((name, idx) => (
                        <option key={idx} value={name}>
                          {name}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      value={row.amount}
                      onChange={(e) =>
                        handleInputChange(index, "amount", e.target.value)
                      }
                      className="w-full p-2 border rounded"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      value={row.narration}
                      onChange={(e) =>
                        handleInputChange(index, "narration", e.target.value)
                      }
                      className="w-full p-2 border rounded"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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

        <CustomDialog
          isOpen={showConfirmDialog}
          message="Are you sure you want to save this receipt voucher?"
          onClose={() => setShowConfirmDialog(false)}
          onConfirm={handleSaveConfirmed}
        />

        <CustomDialog
          isOpen={showSuccessDialog}
          message="Receipt Voucher saved successfully!"
          onClose={() => setShowSuccessDialog(false)}
          onConfirm={resetForm}
        />
      </div>
    </div>
  );
}

export default ReceiptVoucher;


