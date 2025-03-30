import React, { useState } from "react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    employeeId: "",
    employeeName: "",
    password: "",
    rePassword: "",
  });

  const [isEditable, setIsEditable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (formData.password !== formData.rePassword) {
      alert("Passwords do not match!");
      return;
    }
    // Add logic to save data
    alert("Signup details saved successfully!");
    setIsEditable(false);
  };

  const handleCancel = () => {
    setFormData({ username: "", employeeId: "", employeeName: "", password: "", rePassword: "" });
    setIsEditable(false);
  };

  const handleAddNew = () => {
    setIsEditable(true);
    setFormData({ username: "", employeeId: "", employeeName: "", password: "", rePassword: "" });
  };

  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="w-[600px] bg-white border rounded-lg shadow-xl p-8">
      <h1 className=" text-white text-center text-lg font-semibold p-2 rounded-md mb-2">
            Sign Up
          </h1>
        <div className="space-y-6">
          <div className="flex items-center">
            <label htmlFor="username" className="w-40 text-gray-700 text-lg">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              disabled={!isEditable}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="employeeId" className="w-40 text-gray-700 text-lg">
              Employee ID:
            </label>
            <input
              type="text"
              id="employeeId"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              disabled={!isEditable}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="employeeName" className="w-40 text-gray-700 text-lg">
              Employee Name:
            </label>
            <input
              type="text"
              id="employeeName"
              name="employeeName"
              value={formData.employeeName}
              onChange={handleChange}
              disabled={!isEditable}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="password" className="w-40 text-gray-700 text-lg">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              disabled={!isEditable}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="rePassword" className="w-40 text-gray-700 text-lg">
              Re-Password:
            </label>
            <input
              type="password"
              id="rePassword"
              name="rePassword"
              value={formData.rePassword}
              onChange={handleChange}
              disabled={!isEditable}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
        <div className="flex justify-between space-x-6 mt-6">
          <button
            onClick={handleAddNew}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 text-lg font-semibold focus:outline-none"
          >
            Add New
          </button>
          <button
            onClick={handleSave}
            disabled={!isEditable}
            className={`px-8 py-3 rounded-lg text-lg font-semibold focus:outline-none ${
              isEditable
                ? "bg-save text-white hover:bg-save-hover"
                : "bg-gray-300 text-gray-700 cursor-not-allowed"
            }`}
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            disabled={!isEditable}
            className={`px-8 py-3 rounded-lg text-lg font-semibold focus:outline-none ${
              isEditable
                ? "bg-cancel text-gray-700 hover:bg-cancel-hover"
                : "bg-gray-300 text-gray-700 cursor-not-allowed"
            }`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
