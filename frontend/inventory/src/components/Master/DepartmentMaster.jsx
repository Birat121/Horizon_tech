import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Reusable DialogBox component
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
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [isCreating, setIsCreating] = useState(true); // Flag to differentiate between creating and modifying
  const [isDialogOpen, setIsDialogOpen] = useState(false); // To toggle dialog visibility
  const [dialogMessage, setDialogMessage] = useState(""); // Message for the dialog
  const [dialogTitle, setDialogTitle] = useState(""); // Title for the dialog

  // Fetch departments from the backend
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch("/api/departments");
        const data = await response.json();
        setDepartments(data); // Assuming data is an array of department objects
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  const handleChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const handleSave = async () => {
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
      if (isCreating) {
        // Call API to create a new department
        const response = await fetch("/api/Department/CreateDepartment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: selectedDepartment }),
        });
        if (response.ok) {
          toast.success(`Department "${selectedDepartment}" created successfully!`);
        } else {
          toast.error("Error creating department");
        }
      } else {
        // Call API to update the existing department
        const response = await fetch(`/api/Department/UpdateDepartment/${selectedDepartment}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: selectedDepartment }),
        });
        if (response.ok) {
          toast.success(`Department "${selectedDepartment}" updated successfully!`);
        } else {
          toast.error("Error updating department");
        }
      }
      setIsEditable(false);
      setSelectedDepartment(""); // Optionally reset selected department after saving
    } catch (error) {
      console.error("Error saving department:", error);
      toast.error("An error occurred while saving the department.");
    }
    setIsDialogOpen(false);
  };

  const handleModify = () => {
    setIsEditable(true);
    setIsCreating(false); // Set to false to indicate we're modifying
  };

  const handleCancel = () => {
    setIsEditable(false);
    setSelectedDepartment("");
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

          {/* Department Input */}
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

        {/* Buttons */}
        <div className="flex justify-center mt-6 space-x-6">
          <button
            onClick={handleModify}
            className="bg-yellow-600 text-white text-lg px-8 py-3 rounded hover:bg-yellow-700 focus:outline-none"
            disabled={selectedDepartment === ""}
          >
            Modify
          </button>

          <button
            onClick={handleSave}
            disabled={!selectedDepartment || !isEditable}
            className={`text-lg px-8 py-3 rounded focus:outline-none ${
              selectedDepartment && isEditable
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-300 text-gray-700 cursor-not-allowed"
            }`}
          >
            Save
          </button>

          <button
            onClick={handleCancel}
            disabled={!isEditable}
            className={`text-lg px-8 py-3 rounded focus:outline-none ${
              isEditable
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-gray-300 text-gray-700 cursor-not-allowed"
            }`}
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Dialog Box */}
      <DialogBox
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={handleConfirmSave}
        title={dialogTitle}
        message={dialogMessage}
      />

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default DepartmentMaster;
