import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URLS } from "../../reusable inputs/config";

const DialogBox = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-[400px]">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const DepartmentMaster = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [isCreating, setIsCreating] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const [transId, setTransId] = useState(null); // ✅ added

  const handleChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const handleSave = () => {
    setDialogTitle(isCreating ? "Create Department" : "Modify Department");
    setDialogMessage(
      isCreating
        ? `Are you sure you want to create the department "${selectedDepartment}"?`
        : `Are you sure you want to update the department "${selectedDepartment}"?`
    );
    setIsDialogOpen(true);
  };

  const handleConfirmSave = async () => {
    try {
      const departmentData = {
        DeptName: selectedDepartment,
        // Send other necessary fields for creation, leave out DeptId and let backend generate it
        DeptId: "", // Backend will handle this for creation
        EnteredDate: new Date().toISOString(), // Ensure it's a valid date format
        EnteredBy: "system", // or dynamically fetch the user info if needed
        EnteredSys: window.navigator.userAgent, // or system identifier
      };
  
      let response;
      
      // If creating a new department
      if (isCreating) {
        response = await fetch(API_URLS.CreateDepartment, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(departmentData),
        });
  
        if (response.ok) {
          toast.success(`Department "${selectedDepartment}" created successfully!`);
        } else {
          const error = await response.text();
          toast.error(`Error creating department: ${error}`);
        }
      }
      // If updating an existing department
      else {
        response = await fetch(`${API_URLS.UpdateDepartment}/${transId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            DeptName: selectedDepartment,
            TransID: transId, // Ensure you're sending the correct TransID for the department you're updating
          }),
        });
  
        if (response.ok) {
          toast.success(`Department "${selectedDepartment}" updated successfully!`);
        } else {
          const error = await response.text();
          toast.error(`Error updating department: ${error}`);
        }
      }
  
      // Reset state after successful action
      setIsEditable(false);
      setSelectedDepartment("");
      setTransId(null);
      setIsCreating(true);
    } catch (error) {
      console.error("Error saving department:", error);
      toast.error("An error occurred while saving the department.");
    }
  
    setIsDialogOpen(false);
  };
  

  const handleModify = () => {
    // 🔁 Replace these with real selected department values from a list/table
    setSelectedDepartment("HR");  // for example
    setTransId(1);                // existing department's TransID

    setIsCreating(false);
    setIsEditable(true);
  };

  const handleCancel = () => {
    setSelectedDepartment("");
    setIsCreating(true);
    setIsEditable(false);
    setTransId(null);
  };

  return (
    <div className="flex items-center justify-center h-[85vh] rounded-lg">
      <div className="w-[600px] bg-white border rounded shadow-md p-8">
        <h1 className="text-white text-xl font-semibold p-3 rounded-md mb-2 text-center">
          Department Master
        </h1>

        <div className="bg-white shadow-md rounded-md p-6 mb-6">
          <div className="bg-indigo-950 text-white text-lg font-semibold p-3 rounded-md mb-4 text-center">
            {isCreating ? "Create Department" : "Modify Department"}
          </div>

          <div className="flex items-center mb-4">
            <label htmlFor="department" className="w-48 text-black text-lg">
              Department:
            </label>
            <input
              id="department"
              name="department"
              type="text"
              value={selectedDepartment}
              onChange={handleChange}
              placeholder="Enter department name"
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-6">
          <button
            onClick={handleModify}
            className="bg-yellow-600 text-white text-lg px-8 py-3 rounded hover:bg-yellow-700 focus:outline-none"
            disabled={!selectedDepartment || isEditable}
          >
            Modify
          </button>

          <button
            onClick={handleSave}
            disabled={!selectedDepartment || (!isCreating && !isEditable)}
            className={`text-lg px-8 py-3 rounded focus:outline-none ${
              selectedDepartment && (isCreating || isEditable)
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-300 text-gray-700 cursor-not-allowed"
            }`}
          >
            Save
          </button>

          <button
            onClick={handleCancel}
            disabled={!isEditable && isCreating}
            className={`text-lg px-8 py-3 rounded focus:outline-none ${
              isEditable || !isCreating
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-gray-300 text-gray-700 cursor-not-allowed"
            }`}
          >
            Cancel
          </button>
        </div>
      </div>

      <DialogBox
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={handleConfirmSave}
        title={dialogTitle}
        message={dialogMessage}
      />

      <ToastContainer />
    </div>
  );
};

export default DepartmentMaster;
