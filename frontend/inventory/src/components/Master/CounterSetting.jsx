import React, { useState, useEffect } from "react";

const CounterSetting = () => {
  const [counterData, setCounterData] = useState({
    counter: "",
    pcName: "",
    macId: "",
  });

  const [isEditable, setIsEditable] = useState(false);

  // Fetch data from backend (mocked for this example)
  useEffect(() => {
    const fetchCounterData = async () => {
      try {
        // Replace with actual API call
        const response = await fetch("/api/counter-settings");
        const data = await response.json();
        setCounterData(data);
      } catch (error) {
        console.error("Error fetching counter data:", error);
      }
    };

    fetchCounterData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCounterData({ ...counterData, [name]: value });
  };

  const handleSave = () => {
    // Add logic to save data to the backend
    alert("Counter data saved successfully!");
    setIsEditable(false);
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-[500px] bg-white border rounded shadow-md p-6">
        <div className="text-xl font-semibold text-black mb-4">
          Counter Details
        </div>

        <div className="space-y-3">
          {/* Counter# */}
          <div className="flex items-center">
            <label htmlFor="counter" className="w-40 text-black">
              Counter#:
            </label>
            <input
              type="text"
              id="counter"
              name="counter"
              value={counterData.counter}
              onChange={handleChange}
              disabled={!isEditable}
              className="flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* PC Name */}
          <div className="flex items-center">
            <label htmlFor="pcName" className="w-40 text-black">
              PC Name:
            </label>
            <input
              type="text"
              id="pcName"
              name="pcName"
              value={counterData.pcName}
              onChange={handleChange}
              disabled={!isEditable}
              className="flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Mac Id */}
          <div className="flex items-center">
            <label htmlFor="macId" className="w-40 text-black">
              Mac Id:
            </label>
            <input
              type="text"
              id="macId"
              name="macId"
              value={counterData.macId}
              onChange={handleChange}
              disabled={!isEditable}
              className="flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-6 gap-40">
          <button
            onClick={() => setIsEditable(true)} // Enable editing
            className="bg-blue-500 text-white px-8 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Edit
          </button>

          <button
            onClick={handleSave}
            disabled={!isEditable}
            className={`px-8 py-2 rounded focus:outline-none ${
              isEditable
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gray-300 text-gray-700 cursor-not-allowed"
            }`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterSetting;
