import React, { useState, useEffect } from "react";
import DialogBox from "../../reusable inputs/DialogBox";
import { API_URLS } from "../../reusable inputs/config"; // Make sure your API_URLS are set up

const PDCEntry = () => {
  const [formData, setFormData] = useState({
    transactionNo: "",
    voucherType: "Advance Cheque",
    referenceNo: "",
    transactionDate: "",
    partyName: "",
    remarks: "",
    chequeNo: "",
    chequeDate: "",
    bankName: "",
    bankBranch: "",
    chequeAmount: "",
    accountNo: "",
    beneficiaryName: "",
    depositBankName: "",
    chequeType: "",
    withdrawDate: "",
  });

  const [dialog, setDialog] = useState({
    open: false,
    title: "",
    message: "",
  });

  const [parties, setParties] = useState([]);

  useEffect(() => {
      const fetchParties = async () => {
        try {
          const response = await fetch(API_URLS.PARTY_LIST2); // Assuming the API endpoint is API_URLS.PARTY_LIST
          const data = await response.json();
          setParties(data); // Set the fetched parties to the state
        } catch (error) {
          console.error("Error fetching parties:", error);
        }
      };
  
      // Fetch the transaction number
      const fetchTransactionNo = async () => {
        try {
          const res = await fetch(API_URLS.GET_NEXT_PDC_TRANSACTION_NO);
          const no = await res.text(); // assuming response is plain string
          setFormData((prev) => ({ ...prev, transactionNo: no }));
        } catch (err) {
          console.error("Failed to fetch transaction no:", err);
        }
      };
  
      fetchParties();
      fetchTransactionNo();
    }, []);
  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form fields
  const validateForm = () => {
    const {
      transactionDate,
      partyName,
      chequeNo,
      chequeDate,
      bankName,
      chequeAmount,
      accountNo,
      beneficiaryName,
      depositBankName,
      chequeType,
      withdrawDate,
    } = formData;

    if (
      !transactionDate ||
      !partyName ||
      !chequeNo ||
      !chequeDate ||
      !bankName ||
      !chequeAmount ||
      !accountNo ||
      !beneficiaryName ||
      !depositBankName ||
      !chequeType ||
      !withdrawDate
    ) {
      setDialog({
        open: true,
        title: "Validation Error",
        message: "Please fill in all required fields.",
      });
      return false;
    }
    return true;
  };

  // Save function to submit the form data
  const handleSave = async () => {
    if (validateForm()) {
      try {
        const response = await fetch(API_URLS.PDCEntry, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          setDialog({
            open: true,
            title: "Success",
            message: "PDC Entry saved successfully!",
          });
        } else {
          setDialog({
            open: true,
            title: "Error",
            message:
              result.message || "An error occurred while saving the PDC Entry.",
          });
        }
      } catch (error) {
        setDialog({
          open: true,
          title: "Error",
          message: "An error occurred while saving the PDC Entry.",
        });
        console.error("Error saving PDC Entry:", error);
      }
    }
  };

  const handleCloseDialog = () => {
    setDialog({ open: false, title: "", message: "" });
  };

  return (
    <div className="p-6 h-[90vh] overflow-y-auto">
      <div className="bg-white border-2 rounded-lg shadow-lg p-2 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold p-4 text-center rounded-md mb-4">
          PDC Entry
        </h2>

        {/* Party Info Section */}
        <div className="border p-6 rounded-lg mb-6">
          <h3 className="font-semibold mb-3 text-lg">Party Info</h3>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm">Transaction No.</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={formData.transactionNo}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm">Voucher Type</label>
              <select
                className="w-full border p-2 rounded"
                name="voucherType"
                value={formData.voucherType}
                onChange={handleInputChange}
              >
                <option>Advance Cheque</option>
              </select>
            </div>
            <div>
              <label className="block text-sm">Reference No.</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                name="referenceNo"
                value={formData.referenceNo}
                onChange={handleInputChange}
                placeholder="No Reference"
              />
            </div>
            <div>
              <label className="block text-sm">Transaction Date</label>
              <input
                type="date"
                className="w-full border p-2 rounded"
                name="transactionDate"
                value={formData.transactionDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm">Party Name</label>
              <select
                className="w-full border p-2 rounded"
                name="partyName"
                value={formData.partyName}
                onChange={handleInputChange}
              >
                <option value="">Select Party</option>
                {parties.map((party) => (
                  <option key={party.id} value={party.name}>
                    {party.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm">Remarks</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                name="remarks"
                value={formData.remarks}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Advance Cheque Section */}
        <div className="border p-6 rounded-lg mb-6">
          <h3 className="font-semibold mb-3 text-lg">Advance Cheque</h3>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm">Cheque No.</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                name="chequeNo"
                value={formData.chequeNo}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm">Cheque Date</label>
              <input
                type="date"
                className="w-full border p-2 rounded"
                name="chequeDate"
                value={formData.chequeDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm">Bank Name</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                name="bankName"
                value={formData.bankName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm">Bank Branch</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                name="bankBranch"
                value={formData.bankBranch}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm">Cheque Amount</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                name="chequeAmount"
                value={formData.chequeAmount}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm">Account No.</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                name="accountNo"
                value={formData.accountNo}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm">Beneficiary Name</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                name="beneficiaryName"
                value={formData.beneficiaryName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm">Deposit Bank Name</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                name="depositBankName"
                value={formData.depositBankName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm">Cheque Type</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                name="chequeType"
                value={formData.chequeType}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm">Withdraw Date</label>
              <input
                type="date"
                className="w-full border p-2 rounded"
                name="withdrawDate"
                value={formData.withdrawDate}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            Save
          </button>
          <button className="bg-gray-500 text-white px-6 py-2 rounded">
            Cancel
          </button>
          <button className="bg-red-500 text-white px-6 py-2 rounded">
            Close
          </button>
        </div>
      </div>

      {/* DialogBox for Success/Error */}
      <DialogBox
        isOpen={dialog.open}
        onClose={handleCloseDialog}
        title={dialog.title}
      >
        <div className="text-center mb-4">{dialog.message}</div>
        <div className="flex justify-center">
          <button
            onClick={handleCloseDialog}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            OK
          </button>
        </div>
      </DialogBox>
    </div>
  );
};

export default PDCEntry;
