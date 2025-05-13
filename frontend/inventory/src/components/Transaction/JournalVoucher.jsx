import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URLS } from "../../reusable inputs/config";
import { toast } from "react-toastify";

const JournalVoucher = () => {
  const [transactionDate, setTransactionDate] = useState("");
  const [docNo, setDocNo] = useState("");
  const [voucherNo, setVoucherNo] = useState("");
  const [accountOptions, setAccountOptions] = useState([]);
  const [rows, setRows] = useState([
    { sr: 1, accountName: "", particulars: "", debit: "", credit: "" },
  ]);
  const [difference, setDifference] = useState("0.00");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchVoucherNo();
    fetchAccountNames();
  }, []);

  const fetchVoucherNo = async () => {
    try {
      const res = await axios.get(API_URLS.GET_VOUCHER_NO);
      setVoucherNo(res.data.voucherNo);
    } catch (error) {
      toast.error("Failed to fetch voucher number");
      console.error(error);
    }
  };

  const fetchAccountNames = async () => {
    try {
      const res = await axios.get(API_URLS.GET_ACCOUNT_NAMES);
      const accounts = Array.isArray(res.data)
        ? res.data
        : res.data.accounts || [];
      setAccountOptions(accounts);
    } catch (error) {
      toast.error("Failed to fetch account names");
      console.error(error);
      setAccountOptions([]);
    }
  };

  const handleRowChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);

    const isLastRow = index === rows.length - 1;
    const filled = Object.values(updatedRows[index]).some((v) => v !== "");

    if (isLastRow && filled) {
      setRows([
        ...updatedRows,
        {
          sr: rows.length + 1,
          accountName: "",
          particulars: "",
          debit: "",
          credit: "",
        },
      ]);
    }

    calculateDifference(updatedRows);
  };

  const calculateDifference = (rows) => {
    const debit = rows.reduce((sum, r) => sum + parseFloat(r.debit || 0), 0);
    const credit = rows.reduce((sum, r) => sum + parseFloat(r.credit || 0), 0);
    setDifference((debit - credit).toFixed(2));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const form = e.target.form;
      const index = Array.prototype.indexOf.call(form, e.target);
      form.elements[index + 1]?.focus();
      e.preventDefault();
    }
  };

  const handleSave = async () => {
    const entries = rows.filter(
      (r) => r.accountName || r.particulars || r.debit || r.credit
    );

    const totalDebit = entries.reduce(
      (sum, r) => sum + parseFloat(r.debit || 0),
      0
    );
    const totalCredit = entries.reduce(
      (sum, r) => sum + parseFloat(r.credit || 0),
      0
    );

    const invalidRow = entries.some(
      (row) =>
        (row.debit === "" && row.credit === "") ||
        row.accountName === "" ||
        row.particulars === ""
    );

    if (invalidRow) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (totalDebit <= 0 || totalCredit <= 0) {
      toast.error("Debit and Credit must both be greater than zero.");
      return;
    }

    if (totalDebit !== totalCredit) {
      toast.error("Total Debit and Credit must be equal.");
      return;
    }

    const payload = {
      transDate: transactionDate,
      docNo,
      voucherRef:voucherNo,
      entries: entries.map((row) => ({
        acc: row.accountName,
        narration: row.particulars,
        dr: parseFloat(row.debit || 0),
        cr: parseFloat(row.credit || 0),
      })),
    };

    setLoading(true);

    try {
      const res = await axios.post(API_URLS.CREATE_JOURNAL_VOUCHER, payload);
      if (res.status === 200) {
        toast.success("Voucher saved successfully!");
        handleCancel();
        fetchVoucherNo(); // refresh voucher number
      }
    } catch (err) {
      console.error("Save error:", err.response?.data || err.message);
      toast.error("Failed to save voucher!");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setTransactionDate("");
    setDocNo("");
    setRows([
      { sr: 1, accountName: "", particulars: "", debit: "", credit: "" },
    ]);
    setDifference("0.00");
  };

  return (
    <div className="flex items-center justify-center h-[85vh] ml-12 p-6">
      <div className="bg-white border border-gray-300 rounded-2xl shadow-xl p-8 w-full max-w-5xl">
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-semibold">Journal Voucher Entry</h2>
        </div>

        <form>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-lg font-medium">
                Transaction Date
              </label>
              <input
                type="date"
                value={transactionDate}
                onChange={(e) => setTransactionDate(e.target.value)}
                onKeyDown={handleKeyDown}
                className="mt-2 w-full p-3 border rounded text-lg"
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Voucher No.</label>
              <input
                type="text"
                value={voucherNo}
                className="mt-2 w-full p-3 border rounded text-lg bg-gray-100"
                readOnly
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Doc No.</label>
              <input
                type="text"
                value={docNo}
                onChange={(e) => setDocNo(e.target.value)}
                onKeyDown={handleKeyDown}
                className="mt-2 w-full p-3 border rounded text-lg"
              />
            </div>
          </div>

          <div className="overflow-y-auto max-h-64 mb-6">
            <table className="w-full table-auto border border-gray-300">
              <thead className="bg-gray-100 text-left text-lg">
                <tr>
                  <th className="px-4 py-2 border">Sr.</th>
                  <th className="px-4 py-2 border">Account Name</th>
                  <th className="px-4 py-2 border">Particulars</th>
                  <th className="px-4 py-2 border">Debit</th>
                  <th className="px-4 py-2 border">Credit</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td className="px-4 py-2 border">{row.sr}</td>
                    <td className="px-4 py-2 border">
                      <select
                        value={row.accountName}
                        onChange={(e) =>
                          handleRowChange(i, "accountName", e.target.value)
                        }
                        onKeyDown={handleKeyDown}
                        className="w-full p-2 border rounded"
                      >
                        <option value="">Select Account</option>
                        {accountOptions.map((account, idx) => (
                          <option key={idx} value={account}>
                            {account}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-2 border">
                      <input
                        type="text"
                        value={row.particulars}
                        onChange={(e) =>
                          handleRowChange(i, "particulars", e.target.value)
                        }
                        onKeyDown={handleKeyDown}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border">
                      <input
                        type="number"
                        value={row.debit}
                        onChange={(e) =>
                          handleRowChange(i, "debit", e.target.value)
                        }
                        onKeyDown={handleKeyDown}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border">
                      <input
                        type="number"
                        value={row.credit}
                        onChange={(e) =>
                          handleRowChange(i, "credit", e.target.value)
                        }
                        onKeyDown={handleKeyDown}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 items-center">
            <div>
              <label className="block text-lg font-medium">Attach File</label>
              <input
                type="file"
                className="mt-2 w-full p-3 border rounded text-lg"
              />
            </div>
            <div className="col-span-2 flex justify-end gap-4 items-center">
              <span className="text-lg font-medium">Difference:</span>
              <span
                className={`text-xl font-bold border px-4 py-2 rounded ${
                  difference !== "0.00" ? "text-red-600" : "text-green-600"
                }`}
              >
                {difference}
              </span>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleSave}
                className={`bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 ${
                  loading || difference !== "0.00"
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
                disabled={loading || difference !== "0.00"}
              >
                {loading ? "Saving..." : "Save"}
              </button>
              <button
                type="button"
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                Modify
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JournalVoucher;
