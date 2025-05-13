import React, { useState, useEffect } from "react";
import CustomDialog from "../../reusable inputs/customeDialog";
import { API_URLS } from "../../reusable inputs/config";
import { toast } from "react-toastify";

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
    onConfirm: null,
  });

  const [parties, setParties] = useState([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const partyRes = await fetch(API_URLS.PARTY_LIST2);
        const partyData = await partyRes.json();
        setParties(partyData);
      } catch (error) {
        console.error("Error fetching parties:", error);
        toast.error("Error fetching party list");
      }

      await fetchTransactionNo();
    };

    fetchInitialData();
  }, []);

  const fetchTransactionNo = async () => {
    try {
      const res = await fetch(API_URLS.GET_NEXT_PDC_TRANSACTION_NO);
      const no = await res.text();
      setFormData((prev) => ({ ...prev, transactionNo: no }));
    } catch (err) {
      console.error("Failed to fetch transaction no:", err);
      toast.error("Failed to fetch transaction number.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
      !withdrawDate
    ) {
      setDialog({
        open: true,
        title: "Validation Error",
        message: "Please fill in all required fields.",
        onConfirm: () => setDialog({ ...dialog, open: false }),
      });
      return false;
    }
    return true;
  };

  const handleSave = () => {
    if (validateForm()) {
      setDialog({
        open: true,
        title: "Confirm Save",
        message: "Are you sure you want to save this PDC entry?",
        onConfirm: saveConfirmedEntry,
      });
    }
  };

  const saveConfirmedEntry = async () => {
    setDialog({ ...dialog, open: false });

    const dto = {
      TransNo: formData.transactionNo,
      VType: formData.voucherType,
      RefNo: formData.referenceNo,
      TrDt: formData.transactionDate,
      PartyName: formData.partyName,
      Remarks: formData.remarks,
      ChqNo: formData.chequeNo,
      ChqDate: formData.chequeDate,
      BankName: formData.bankName,
      BankBrName: formData.bankBranch,
      ChqAmt: formData.chequeAmount,
      AccountNo: formData.accountNo,
      BeneficaryName: formData.beneficiaryName,
      DepositBankName: formData.depositBankName,
      ChqType: formData.chequeType,
      WithdrawalDt: formData.withdrawDate,
    };

    try {
      const response = await fetch(API_URLS.PDCEntry, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dto),
      });

      const result = await response.text();
      let parsedResult = {};
      try {
        parsedResult = JSON.parse(result);
      } catch (err) {
        console.error("Failed to parse response:", err);
      }

      if (!response.ok) {
        throw new Error(parsedResult.message || "Failed to save.");
      }

      toast.success("PDC Entry saved successfully!");
      setDialog({
        open: true,
        title: "Success",
        message: "PDC Entry saved successfully!",
        onConfirm: () => setDialog({ ...dialog, open: false }),
      });

      handleCancel(); // Clear form
      await fetchTransactionNo(); // Fetch new transaction number
    } catch (error) {
      console.error("Save failed:", error);
      toast.error("An error occurred while saving.");
      setDialog({
        open: true,
        title: "Error",
        message: error.message || "An error occurred while saving.",
        onConfirm: () => setDialog({ ...dialog, open: false }),
      });
    }
  };

  const handleCancel = () => {
    setFormData((prev) => ({
      ...prev,
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
    }));
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
              <input type="text" className="w-full border p-2 rounded" value={formData.transactionNo} readOnly />
            </div>
            <div>
              <label className="block text-sm">Voucher Type</label>
              <select className="w-full border p-2 rounded" name="voucherType" value={formData.voucherType} onChange={handleInputChange}>
                <option>Advance Cheque</option>
              </select>
            </div>
            <div>
              <label className="block text-sm">Reference No.</label>
              <input type="text" className="w-full border p-2 rounded" name="referenceNo" value={formData.referenceNo} onChange={handleInputChange} placeholder="No Reference" />
            </div>
            <div>
              <label className="block text-sm">Transaction Date</label>
              <input type="date" className="w-full border p-2 rounded" name="transactionDate" value={formData.transactionDate} onChange={handleInputChange} />
            </div>
            <div>
              <label className="block text-sm">Party Name</label>
              <select className="w-full border p-2 rounded" name="partyName" value={formData.partyName} onChange={handleInputChange}>
                <option value="">Select Party</option>
                {parties.map((party) => (
                  <option key={party.id} value={party.name}>{party.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm">Remarks</label>
              <input type="text" className="w-full border p-2 rounded" name="remarks" value={formData.remarks} onChange={handleInputChange} />
            </div>
          </div>
        </div>

        {/* Advance Cheque Section */}
        <div className="border p-6 rounded-lg mb-6">
          <h3 className="font-semibold mb-3 text-lg">Advance Cheque</h3>
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: "Cheque No.", name: "chequeNo" },
              { label: "Cheque Date", name: "chequeDate", type: "date" },
              { label: "Bank Name", name: "bankName" },
              { label: "Bank Branch", name: "bankBranch" },
              { label: "Cheque Amount", name: "chequeAmount" },
              { label: "Account No.", name: "accountNo" },
              { label: "Beneficiary Name", name: "beneficiaryName" },
              { label: "Deposit Bank Name", name: "depositBankName" },
              { label: "Cheque Type", name: "chequeType" },
              { label: "Withdraw Date", name: "withdrawDate", type: "date" },
            ].map(({ label, name, type = "text" }) => (
              <div key={name}>
                <label className="block text-sm">{label}</label>
                <input
                  type={type}
                  className="w-full border p-2 rounded"
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button onClick={handleSave} className="bg-blue-500 text-white px-6 py-2 rounded">Save</button>
          <button onClick={handleCancel} className="bg-gray-500 text-white px-6 py-2 rounded">Cancel</button>
        </div>
      </div>

      <CustomDialog
        isOpen={dialog.open}
        onClose={() => setDialog({ ...dialog, open: false })}
        onConfirm={dialog.onConfirm}
        title={dialog.title}
        message={dialog.message}
      />
    </div>
  );
};

export default PDCEntry;


