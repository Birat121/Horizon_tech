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
        setDepartments(data);  // Assume data is an array of department objects
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
    <div className="flex items-center justify-center h-screen rounded-lg">
      <div className="w-[500px] bg-white border rounded shadow-md p-6">
      <div className="bg-green-600 text-white text-lg font-semibold p-2 rounded-md mb-2">
            Department Master
      </div>

      <div className="bg-white shadow-md rounded-b-md p-4 mb-4">
      <div className="bg-indigo-950 text-white text-lg font-semibold p-2 rounded-md mb-2">
            Create / Modify Department
        </div>
          {/* Department Dropdown */}
          <div className="flex items-center">
            <label htmlFor="department" className="w-40 text-black">
              Department:
            </label>
            <select
              id="department"
              name="department"
              value={selectedDepartment}
              onChange={handleChange}
              disabled={!isEditable}
              className="flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-300"
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
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => setIsEditable(true)}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Modify
          </button>

          <button
            onClick={handleSave}
            disabled={!isEditable || !selectedDepartment}
            className={`px-6 py-2 rounded focus:outline-none ${
              isEditable && selectedDepartment
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gray-300 text-gray-700 cursor-not-allowed"
            }`}
          >
            Save
          </button>

          <button
            onClick={handleCancel}
            disabled={!isEditable}
            className={`px-6 py-2 rounded focus:outline-none ${
              isEditable
                ? "bg-gray-300 text-gray-700 hover:bg-gray-400"
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
