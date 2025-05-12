import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../reusable inputs/buttons";
import CustomDialog from "../../reusable inputs/customeDialog";  // Custom Dialog import
import { API_URLS } from "../../reusable inputs/config";
import { toast } from "react-toastify";

function CreateAccountLedger() {
  const [accountType, setAccountType] = useState("Group Account");
  const [groupCode, setGroupCode] = useState("");
  const [groupAccounts, setGroupAccounts] = useState([]); // just names
  const [selectedGroupType, setSelectedGroupType] = useState("");
  const [formData, setFormData] = useState({
    groupName: "",
    ledgerName: "",
    selectedAccountType: "",
    selectedGroupAc: "",
    subLedgerEnable: false,
    isVat: false,
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogAction, setDialogAction] = useState(null);

  useEffect(() => {
    fetchNextGroupCode();
    fetchGroupAccounts();
  }, []);

  const fetchNextGroupCode = async () => {
    try {
      const response = await axios.get(API_URLS.GetGroupCode);
      setGroupCode(response.data.nextCode);
    } catch (error) {
      toast.error("Failed to fetch next group code.");
    }
  };

  const fetchGroupAccounts = async () => {
    try {
      const response = await axios.get(API_URLS.GetGroupAccounts); // should return [ "Sales", "Purchase", ... ]
      setGroupAccounts(response.data);
    } catch (error) {
      toast.error("Failed to load group accounts.");
    }
  };

  const fetchAccountType = async (groupName) => {
    try {
      const response = await axios.get(API_URLS.GetAccountType, {
        params: { groupName },
      });
      setSelectedGroupType(response.data); // expecting string
    } catch (error) {
      toast.error("Failed to fetch account type.");
      setSelectedGroupType("");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    if (accountType === "Group Account") {
      if (!formData.groupName.trim()) {
        toast.error("Group Name is required.");
        return false;
      }
      if (!formData.selectedAccountType) {
        toast.error("Account Type is required for Group Account.");
        return false;
      }
    } else if (accountType === "Sub Group / Ledger") {
      if (!formData.selectedGroupAc) {
        toast.error("Group selection is required.");
        return false;
      }
      if (!formData.ledgerName.trim()) {
        toast.error("Child Name is required.");
        return false;
      }
      if (!selectedGroupType) {
        toast.error("Account Type is missing for selected group.");
        return false;
      }
    }
    return true;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    setDialogMessage("Are you sure you want to save this account?");
    setDialogAction("save");
    setIsDialogOpen(true);
  };

 const handleDialogConfirm = async () => {
  if (dialogAction === "save") {
    const payload =
      accountType === "Group Account"
        ? {
            Acc: groupCode,
            Acn: formData.groupName,
            Actype: formData.selectedAccountType,
          }
        : {
            ParentGroupName: formData.selectedGroupAc,  // Send Parent Group Name
            AccountType: selectedGroupType,  // Send Account Type
            SubGroupName: formData.ledgerName,  // Send Sub Group Name
            SubLedgerEnable: formData.subLedgerEnable,
            IsVat: formData.isVat,
          };

    try {
      const apiUrl =
        accountType === "Group Account"
          ? API_URLS.CreateGroupAccount
          : API_URLS.CreateSubGroupAccount;

      await axios.post(apiUrl, payload);
      toast.success("Account saved successfully!");
      setDialogMessage("Account saved successfully!");
      fetchNextGroupCode();

      // Reset form after successful save
      setFormData({
        groupName: "",
        ledgerName: "",
        selectedAccountType: "",
        selectedGroupAc: "",
        subLedgerEnable: false,
        isVat: false,
      });
      setSelectedGroupType("");
    } catch (error) {
      console.error("Error response:", error.response?.data || error.message);
      toast.error("Failed to save account.");
      setDialogMessage("Failed to save. Try again!");
    }
  }
  setIsDialogOpen(false);
};


  const handleDialogClose = () => {
    setIsDialogOpen(false);
    if (dialogAction === "cancel") {
      setFormData({
        groupName: "",
        ledgerName: "",
        selectedAccountType: "",
        selectedGroupAc: "",
        subLedgerEnable: false,
        isVat: false,
      });
      setSelectedGroupType("");
    }
  };

  return (
    <div className="flex items-center justify-center h-[90vh] overflow-y-hidden">
      <div className="p-10 bg-white border-2 rounded-lg shadow-lg w-[750px]">
        <h2 className="text-center text-2xl font-semibold p-3 rounded-md mb-4">
          Create New Account Ledger
        </h2>

        {/* Account Type Selector */}
        <div className="bg-white shadow-md rounded-md p-5 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Select Group / Child Account
          </h2>
          <div className="flex space-x-8">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Group Account"
                checked={accountType === "Group Account"}
                onChange={() => setAccountType("Group Account")}
                className="form-radio text-purple-600"
              />
              <span className="text-gray-700 font-medium">Group Account</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Sub Group / Ledger"
                checked={accountType === "Sub Group / Ledger"}
                onChange={() => setAccountType("Sub Group / Ledger")}
                className="form-radio text-purple-600"
              />
              <span className="text-gray-700 font-medium">
                Sub Group / Ledger
              </span>
            </label>
          </div>
        </div>

        {/* Group Account Form */}
        {accountType === "Group Account" && (
          <div className="bg-white shadow-md rounded-md p-5 mb-6">
            <h2 className="text-xl font-semibold text-black">Group Account</h2>
            <div className="grid grid-cols-3 gap-6 items-center">
              <label className="text-gray-600 font-medium">Group Code:</label>
              <input
                type="text"
                value={groupCode}
                readOnly
                className="col-span-2 p-3 bg-gray-200 border border-gray-300 rounded-lg"
              />

              <label className="text-gray-600 font-medium">Group Name:</label>
              <input
                type="text"
                name="groupName"
                value={formData.groupName}
                onChange={handleChange}
                placeholder="Enter Group Name"
                className="col-span-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />

              <label className="text-gray-600 font-medium">Account Type:</label>
              <select
                name="selectedAccountType"
                value={formData.selectedAccountType}
                onChange={handleChange}
                className="col-span-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select Account Type</option>
                <option value="Assets">Assets</option>
                <option value="Liabilities">Liabilities</option>
                <option value="Income">Income</option>
                <option value="Expenses">Expenses</option>
              </select>
            </div>
          </div>
        )}

        {/* Sub Group / Ledger Form */}
        {accountType === "Sub Group / Ledger" && (
          <div className="bg-white shadow-md rounded-md p-5 mb-6">
            <h2 className="text-xl font-semibold text-black">Child Account</h2>
            <div className="grid grid-cols-3 gap-6 items-center">
              <label className="text-gray-600 font-medium">
                Select GroupAc:
              </label>
              <select
                name="selectedGroupAc"
                value={formData.selectedGroupAc}
                onChange={(e) => {
                  const selectedGroup = e.target.value;
                  setFormData((prev) => ({
                    ...prev,
                    selectedGroupAc: selectedGroup,
                  }));
                  fetchAccountType(selectedGroup);
                }}
                className="col-span-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select Group</option>
                {groupAccounts.map((group, index) => (
                  <option key={index} value={group}>
                    {group}
                  </option>
                ))}
              </select>

              <label className="text-gray-600 font-medium">
                Enter Child Name:
              </label>
              <input
                type="text"
                name="ledgerName"
                value={formData.ledgerName}
                onChange={handleChange}
                placeholder="Enter Child Name"
                className="col-span-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />

              <label className="text-gray-600 font-medium">Account Type:</label>
              <input
                type="text"
                value={selectedGroupType}
                readOnly
                className="col-span-2 p-3 bg-gray-100 border border-gray-300 rounded-lg"
              />

              <label className="col-span-1"></label>
              <div className="col-span-2 flex space-x-5">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="subLedgerEnable"
                    checked={formData.subLedgerEnable}
                    onChange={handleChange}
                    className="form-checkbox text-purple-600"
                  />
                  <span className="text-gray-700">Sub Ledger Enable</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="isVat"
                    checked={formData.isVat}
                    onChange={handleChange}
                    className="form-checkbox text-purple-600"
                  />
                  <span className="text-gray-700">Is VAT</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-10">
          <button
            className="px-5 py-3 bg-gray-100 text-gray-700 border rounded-lg shadow hover:bg-gray-200"
            onClick={() => {
              setDialogAction("cancel");
              setIsDialogOpen(true);
              setDialogMessage(
                "Are you sure you want to cancel and clear the form?"
              );
            }}
          >
            Cancel
          </button>
          <Button onClick={handleSave} type="save">
            Save
          </Button>
        </div>
      </div>

      {/* Custom DialogBox */}
      <CustomDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        onConfirm={handleDialogConfirm}
        message={dialogMessage}
        title="Confirmation"
      />
    </div>
  );
}

export default CreateAccountLedger;
