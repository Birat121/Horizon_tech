import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomDialog from "../../reusable inputs/customeDialog"; // Adjust path as needed
import { API_URLS } from "../../reusable inputs/config";
import { toast } from "react-toastify";

function PaymentVoucher() {
  const [voucherNo, setVoucherNo] = useState("");
  const [dateOfPayment, setDateOfPayment] = useState("");
  const [docNo, setDocNo] = useState("");
  const [contraAccount, setContraAccount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [accountEntries, setAccountEntries] = useState([{ sr: 1, accountName: "", amount: "", narration: "" }]);
  const [accountNameOptions, setAccountNameOptions] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Fetch voucher number and account names on load
  useEffect(() => {
    axios.get(API_URLS.GET_PAYMENT_VOUCHER_No)
      .then(res => setVoucherNo(res.data.voucherNo))
      .catch(err => console.error("Error fetching voucher number:", err));

    axios.get(API_URLS.GET_ACCOUNT_NAMES)
      .then(res => setAccountNameOptions(res.data))
      .catch(err => console.error("Error fetching account names:", err));
  }, []);

  const handleInputChange = (index, field, value) => {
    const updatedEntries = [...accountEntries];
    updatedEntries[index][field] = value;
    setAccountEntries(updatedEntries);
  };

  const addNewRow = () => {
    const newRow = { sr: accountEntries.length + 1, accountName: "", amount: "", narration: "" };
    setAccountEntries([...accountEntries, newRow]);
  };

  const calculateGrandTotal = () => {
    return accountEntries.reduce((sum, entry) => {
      const amt = parseFloat(entry.amount);
      return sum + (isNaN(amt) ? 0 : amt);
    }, 0).toFixed(2);
  };

  const handleSave = () => {
    setDialogOpen(true);
  };

 const confirmSave = async () => {
  try {
    const requests = accountEntries
      .filter(entry => entry.accountName && entry.amount && entry.narration)
      .map(entry => {
        const dto = {
          Acc: entry.accountName,
          ContraAcc: contraAccount,
          Amount: parseFloat(entry.amount),
          Narration: entry.narration,
          VoucherRef: voucherNo,
          TransDate: dateOfPayment,
          EntryBy: "admin", // Replace with actual user if available
          DocNo: docNo ? parseInt(docNo) : null
        };

        return axios.post(`${API_URLS.CREATE_PAYMENT_VOUCHER}?voucherType=PV`, dto);
      });

    await Promise.all(requests);

    toast.success("Payment voucher saved successfully.");
    resetForm();
    setDialogOpen(false);
  } catch (err) {
    console.error("Error saving payment voucher:", err);
    toast.error("Failed to save payment voucher.");
    setDialogOpen(false);
  }
};


  const resetForm = () => {
    setDateOfPayment("");
    setDocNo("");
    setContraAccount("");
    setRemarks("");
    setAccountEntries([{ sr: 1, accountName: "", amount: "", narration: "" }]);
  };

  // Check if all fields in the last row are filled, if yes, add a new row
  useEffect(() => {
    const lastEntry = accountEntries[accountEntries.length - 1];
    if (lastEntry.accountName && lastEntry.amount && lastEntry.narration) {
      addNewRow();
    }
  }, [accountEntries]);

  return (
    <div className="flex items-center justify-center h-[85vh] ml-14 p-6">
      <div className="max-w-5xl w-full mx-auto bg-white border border-gray-300 rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold p-2 rounded-md mb-2">Payment Voucher</h2>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Date of Payment</label>
            <input
              type="date"
              value={dateOfPayment}
              onChange={(e) => setDateOfPayment(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Voucher No</label>
            <input
              type="text"
              value={voucherNo}
              readOnly
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">DOC No</label>
            <input
              type="text"
              value={docNo}
              onChange={(e) => setDocNo(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Contra Account</label>
            <input
              type="text"
              value={contraAccount}
              onChange={(e) => setContraAccount(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-lg font-medium text-gray-700">Remarks</label>
            <input
              type="text"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg shadow">
            <thead className="bg-gray-100 text-lg">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left">Sr.</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Account Name</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Amount</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Narration</th>
              </tr>
            </thead>
            <tbody>
              {accountEntries.map((entry, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-3 text-lg text-center">{entry.sr}</td>
                  <td className="border border-gray-300 px-4 py-3 text-lg">
                    <select
                      value={entry.accountName}
                      onChange={(e) => handleInputChange(index, "accountName", e.target.value)}
                      className="w-full border-none outline-none"
                    >
                      <option value="">Select Account</option>
                      {accountNameOptions.map((name, idx) => (
                        <option key={idx} value={name}>{name}</option>
                      ))}
                    </select>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-lg">
                    <input
                      type="number"
                      value={entry.amount}
                      onChange={(e) => handleInputChange(index, "amount", e.target.value)}
                      className="w-full border-none outline-none"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-lg">
                    <input
                      type="text"
                      value={entry.narration}
                      onChange={(e) => handleInputChange(index, "narration", e.target.value)}
                      className="w-full border-none outline-none"
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
              {calculateGrandTotal()}
            </span>
          </div>
          <div className="flex gap-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600" onClick={handleSave}>Save</button>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600">Modify</button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Print</button>
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">Cancel</button>
          </div>
        </div>
      </div>

      {/* Custom Confirmation Dialog */}
      <CustomDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={confirmSave}
        title="Confirm Save"
        message="Are you sure you want to save this Payment Voucher?"
      />
    </div>
  );
}

export default PaymentVoucher;
