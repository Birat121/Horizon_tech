import React, { useState, useEffect } from "react";

const DepartmentMaster = () => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  // Fetch departments from the backend
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        // Replace with the actual API endpoint to fetch department names
        const response = await fetch("/api/departments");
        const data = await response.json();
        setDepartments(data); // Assume data is an array of department objects
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  const handleChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const handleSave = () => {
    // Add logic to save the selected department to the backend
    alert(`Department ${selectedDepartment} saved successfully!`);
    setIsEditable(false);
  };

  const handleCancel = () => {
    // Reset selected department or other form fields if needed
    setIsEditable(false);
    setSelectedDepartment("");
  };

  return (
    <div className="flex items-center justify-center h-screen rounded-lg -my-8">
      <div className="w-[600px] bg-white border rounded shadow-md p-8">
        <h1 className=" text-white text-xl font-semibold p-3 rounded-md mb-4 text-center">
          Department Master
        </h1>

        <div className="bg-white shadow-md rounded-md p-6 mb-6">
          <div className="bg-indigo-950 text-white text-lg font-semibold p-3 rounded-md mb-4 text-center">
            Create / Modify Department
          </div>
          
          {/* Department Dropdown */}
          <div className="flex items-center mb-4">
            <label htmlFor="department" className="w-48 text-black text-lg">
              Department:
            </label>
            <select
              id="department"
              name="department"
              value={selectedDepartment}
              onChange={handleChange}
              disabled={!isEditable}
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="">Select a Department</option>
              {departments.map((department) => (
                <option key={department.id} value={department.name}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-6 space-x-6">
          <button
            onClick={() => setIsEditable(true)}
            className="bg-blue-600 text-white text-lg px-8 py-3 rounded hover:bg-blue-700 focus:outline-none"
          >
            Modify
          </button>

          <button
            onClick={handleSave}
            disabled={!isEditable || !selectedDepartment}
            className={`text-lg px-8 py-3 rounded focus:outline-none ${
              isEditable && selectedDepartment
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
    </div>
  );
};

export default DepartmentMaster;
