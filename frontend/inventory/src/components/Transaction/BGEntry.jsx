import React, { useState } from "react";
import DialogBox from "../../reusable inputs/DialogBox";
import { API_URLS } from "../../reusable inputs/config"; // Assuming API_URLS is correctly set up for your endpoints

const BGEntry = () => {
  const [formData, setFormData] = useState({
    transactionNo: "BG10081-82000001",
    transactionDate: "",
    bgNo: "",
    partyName: "",
    remarks: "",
    bgIssuedDate: "",
    bgExpiredDate: "",
    bankName: "",
    bankBranch: "",
    bgAmt: "",
    amountInWords: "",
  });

  const [dialog, setDialog] = useState({
    open: false,
    title: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const {
      transactionDate,
      bgNo,
      partyName,
      bgIssuedDate,
      bgExpiredDate,
      bankName,
      bgAmt,
      amountInWords,
    } = formData;

    if (!transactionDate || !bgNo || !partyName || !bgIssuedDate || !bgExpiredDate || !bankName || !bgAmt || !amountInWords) {
      setDialog({
        open: true,
        title: "Validation Error",
        message: "Please fill all required fields.",
      });
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    if (validateForm()) {
      try {
        const response = await fetch(API_URLS.BGEntry, {
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
            message: "BG Entry saved successfully!",
          });
        } else {
          setDialog({
            open: true,
            title: "Error",
            message: result.message || "An error occurred while saving the BG Entry.",
          });
        }
      } catch (error) {
        setDialog({
          open: true,
          title: "Error",
          message: "An error occurred while saving the BG Entry.",
        });
        console.error("Error saving BG Entry:", error);
      }
    }
  };

  const handleCloseDialog = () => {
    setDialog({ open: false, title: "", message: "" });
  };

  return (
    <div className="p-6 h-[90vh] overflow-y-auto">
      <div className="p-2 max-w-7xl mx-auto border rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold p-4 rounded mb-4 text-center">BG Entry</h2>

        {/* Party Info Section */}
        <div className="border p-6 rounded-md mb-6">
          <h3 className="font-semibold mb-3 text-gray-600 text-lg">Party Info</h3>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Transaction No.</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={formData.transactionNo}
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm">Transaction Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                name="transactionDate"
                value={formData.transactionDate}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm">BG No.</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                name="bgNo"
                value={formData.bgNo}
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
                {/* Add dynamic party options here */}
              </select>
            </div>

            <div className="col-span-2">
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

        {/* Cheque Info Section */}
        <div className="border p-6 rounded-md mb-6">
          <h3 className="font-semibold mb-3 text-gray-600 text-lg">Cheque Info</h3>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">BG Issued Date</label>
              <input
                type="date"
                className="w-full border p-2 rounded"
                name="bgIssuedDate"
                value={formData.bgIssuedDate}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">BG Expired Date</label>
              <input
                type="date"
                className="w-full border p-2 rounded"
                name="bgExpiredDate"
                value={formData.bgExpiredDate}
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
              <label className="block text-sm">BG Amt. (NPR)</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                name="bgAmt"
                value={formData.bgAmt}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm">Amount In Words</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                name="amountInWords"
                value={formData.amountInWords}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            Save
          </button>
          <button className="bg-gray-500 text-white px-6 py-2 rounded">Cancel</button>
          <button className="bg-red-500 text-white px-6 py-2 rounded">Close</button>
        </div>
      </div>

      {/* DialogBox for Success/Error */}
      <DialogBox isOpen={dialog.open} onClose={handleCloseDialog} title={dialog.title}>
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

export default BGEntry;
