import React, { useState, useEffect } from "react";
import Button from "../../reusable inputs/buttons";
import DialogBox from "../../reusable inputs/DialogBox"; // Assuming you have a DialogBox component
import axios from "axios";
import { API_URLS } from "../../reusable inputs/config"; // Replace with your actual API URLs
import { toast } from "react-toastify";

const ChangeAccountType = () => {
  const [groupName, setGroupName] = useState("");
  const [groupCode, setGroupCode] = useState("");
  const [accountType, setAccountType] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogAction, setDialogAction] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch group code based on group name
  useEffect(() => {
    if (groupName) {
      fetchGroupCode();
    }
  }, [groupName]);

  const fetchGroupCode = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URLS.GetGroupCodeByName}/${groupName}`);
      setGroupCode(response.data.groupCode); // Assuming the response contains groupCode
    } catch (error) {
      toast.error("Failed to fetch Group Code.");
      setGroupCode(""); // Clear group code on error
    } finally {
      setLoading(false);
    }
  };

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  };

  const handleSave = () => {
    setDialogMessage("Are you sure you want to save these changes?");
    setDialogAction("save");
    setIsDialogOpen(true);
  };

  const handleDialogConfirm = async () => {
    if (dialogAction === "save") {
      const payload = {
        groupName,
        groupCode,
        accountType,
      };

      try {
        setLoading(true);
        await axios.post(API_URLS.ChangeAccountType, payload);
        toast.success("Account type updated successfully!");
        setDialogMessage("Account type updated successfully!");
      } catch (error) {
        toast.error("Failed to update account type.");
        setDialogMessage("Failed to update. Try again!");
      } finally {
        setIsDialogOpen(false);
        setLoading(false);
      }
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleCancel = () => {
    setGroupName("");
    setGroupCode("");
    setAccountType("");
  };

  return (
    <div className="h-[90vh] flex items-center justify-center">
      <div className="p-10 bg-white border-2 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-center text-2xl font-semibold p-3 rounded-md mb-4">
          Change Account Type
        </h2>
        <div className="bg-white shadow-md rounded-md p-5 mb-6">
          <label className="block font-semibold mb-3 text-lg">Select Account</label>
          <form className="space-y-6">
            <div className="mb-5">
              <label className="block mb-2 text-gray-700 font-medium text-lg">Group Code:</label>
              <input
                className="border border-gray-300 rounded-lg px-3 py-2 w-full text-lg"
                type="text"
                value={groupCode}
                readOnly
                placeholder={loading ? "Loading..." : "Group Code will appear here"}
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-gray-700 font-medium text-lg">Group Name:</label>
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 w-full text-lg"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              >
                <option value="">Select Group Name</option>
                <option value="Group1">Group 1</option>
                <option value="Group2">Group 2</option>
                {/* Add other group options here */}
              </select>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-gray-700 font-medium text-lg">Account Type:</label>
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 w-full text-lg"
                value={accountType}
                onChange={handleAccountTypeChange}
              >
                <option value="">Select Account Type</option>
                <option value="Assets">Assets</option>
                <option value="Liabilities">Liabilities</option>
                <option value="Income">Income</option>
                <option value="Expenses">Expenses</option>
              </select>
            </div>
          </form>
        </div>
        <div className="flex justify-center space-x-6 mt-6">
          <Button type="save" onClick={handleSave} disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
          <Button type="cancel" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </div>

      {/* DialogBox - Confirmation */}
      <DialogBox isOpen={isDialogOpen} onClose={handleDialogClose} title="Confirmation">
        <p>{dialogMessage}</p>
        <div className="flex justify-end space-x-4 mt-4">
          <Button onClick={handleDialogClose} type="cancel" className="px-5 py-3 bg-gray-200">
            Close
          </Button>
          <Button
            onClick={handleDialogConfirm}
            type="save"
            className="px-5 py-3 bg-purple-600 text-white"
            disabled={loading}
          >
            {loading ? "Saving..." : "OK"}
          </Button>
        </div>
      </DialogBox>
    </div>
  );
};

export default ChangeAccountType;
