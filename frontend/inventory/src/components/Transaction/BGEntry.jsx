import React, { useState, useEffect } from "react";
import CustomDialog from "../../reusable inputs/customeDialog";
import { API_URLS } from "../../reusable inputs/config";
import { toast } from "react-toastify";

const BGEntry = () => {
  const initialFormData = {
    transNo: "",
    trDt: "",
    bgNo: "",
    partyName: "",
    remarks: "",
    issDt: "",
    expDt: "",
    bankName: "",
    bankBrName: "",
    bgAmt: "",
    amountInWords: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [dialog, setDialog] = useState({ open: false, title: "", message: "" });
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [parties, setParties] = useState([]);

  useEffect(() => {
    const fetchParties = async () => {
      try {
        const response = await fetch(API_URLS.PARTY_LIST);
        const data = await response.json();
        setParties(data);
      } catch (error) {
        console.error("Error fetching parties:", error);
        toast.error("Failed to fetch party list.");
      }
    };

    const fetchTransactionNo = async () => {
      try {
        const res = await fetch(API_URLS.GET_NEXT_TRANSACTION_NO);
        const no = await res.text();
        setFormData((prev) => ({ ...prev, transNo: no }));
      } catch (err) {
        console.error("Failed to fetch transaction no:", err);
        toast.error("Failed to fetch transaction number.");
      }
    };

    fetchParties();
    fetchTransactionNo();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { trDt, bgNo, partyName, issDt, expDt, bankName, bankBrName, bgAmt } =
      formData;

    if (
      !trDt ||
      !bgNo ||
      !partyName ||
      !issDt ||
      !expDt ||
      !bankName ||
      !bankBrName ||
      !bgAmt
    ) {
      toast.warn("Please fill all required fields.");
      return false;
    }
    return true;
  };

  const handleConfirmSave = () => {
    if (validateForm()) {
      setConfirmDialogOpen(true);
    }
  };

  const handleSave = async () => {
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
        toast.success("BG Entry saved successfully!");
        setDialog({
          open: true,
          title: "Success",
          message: "BG Entry saved successfully!",
        });
        setFormData(initialFormData);
        // Re-fetch transaction no after clearing
        const res = await fetch(API_URLS.GET_NEXT_TRANSACTION_NO);
        const no = await res.text();
        setFormData((prev) => ({ ...prev, transNo: no }));
      } else {
        toast.error(result.message || "Failed to save BG Entry.");
        setDialog({
          open: true,
          title: "Error",
          message:
            result.message || "An error occurred while saving the BG Entry.",
        });
      }
    } catch (error) {
      toast.error("An error occurred while saving the BG Entry.");
      setDialog({
        open: true,
        title: "Error",
        message: "An error occurred while saving the BG Entry.",
      });
      console.error("Error saving BG Entry:", error);
    } finally {
      setConfirmDialogOpen(false);
    }
  };

  const handleCloseDialog = () => {
    setDialog({ open: false, title: "", message: "" });
  };

  return (
    <div className="p-6 h-[90vh] overflow-y-auto">
      <div className="p-2 max-w-7xl mx-auto border rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold p-4 rounded mb-4 text-center">
          BG Entry
        </h2>

        {/* Party Info Section */}
        <div className="border p-6 rounded-md mb-6">
          <h3 className="font-semibold mb-3 text-gray-600 text-lg">
            Party Info
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Transaction No.
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={formData.transNo}
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm">Transaction Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                name="trDt"
                value={formData.trDt}
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
                {parties.map((party) => (
                  <option key={party.id} value={party.name}>
                    {party.name}
                  </option>
                ))}
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
          <h3 className="font-semibold mb-3 text-gray-600 text-lg">
            Cheque Info
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                BG Issued Date
              </label>
              <input
                type="date"
                className="w-full border p-2 rounded"
                name="issDt"
                value={formData.issDt}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                BG Expired Date
              </label>
              <input
                type="date"
                className="w-full border p-2 rounded"
                name="expDt"
                value={formData.expDt}
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
                name="bankBrName"
                value={formData.bankBrName}
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
            onClick={handleConfirmSave}
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            Save
          </button>
          <button
            onClick={async () => {
              setFormData(initialFormData);
              try {
                const res = await fetch(API_URLS.GET_NEXT_TRANSACTION_NO);
                const no = await res.text();
                setFormData((prev) => ({ ...prev, transNo: no }));
              } catch (err) {
                console.error("Failed to fetch transaction no:", err);
                toast.error("Failed to fetch transaction number.");
              }
            }}
            className="bg-gray-500 text-white px-6 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Success/Error Dialog */}
      <CustomDialog
        isOpen={dialog.open}
        onClose={handleCloseDialog}
        onConfirm={handleCloseDialog}
        title={dialog.title}
        message={dialog.message}
      />

      {/* Confirm Save Dialog */}
      <CustomDialog
        isOpen={confirmDialogOpen}
        onClose={() => setConfirmDialogOpen(false)}
        onConfirm={handleSave}
        title="Confirm Save"
        message="Are you sure you want to save this BG Entry?"
      />
    </div>
  );
};

export default BGEntry;
