import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import DialogBox from "../../reusable inputs/DialogBox"; // Import DialogBox component

const CounterSetting = () => {
  const [counterData, setCounterData] = useState({
    counter: "",
    pcName: "",
    macId: "",
  });

  const [isEditable, setIsEditable] = useState(false);
  const [showDialog, setShowDialog] = useState(false); // State for the dialog visibility

  // Fetch data from backend
  useEffect(() => {
    const fetchCounterData = async () => {
      try {
        const response = await fetch("/api/counter-settings");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCounterData(data);
      } catch (error) {
        console.error("Error fetching counter data:", error);
        toast.error("Failed to load counter data.");
      }
    };

    fetchCounterData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCounterData({ ...counterData, [name]: value });
  };

  const handleSave = async () => {
    setShowDialog(true); // Open dialog when save is clicked
  };

  const handleConfirmSave = async () => {
    try {
      const response = await fetch("/api/save-counter-settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(counterData),
      });

      if (!response.ok) {
        throw new Error("Failed to save counter data");
      }

      toast.success("Counter data saved successfully!");
      setIsEditable(false);
      setShowDialog(false); // Close dialog after saving
    } catch (error) {
      console.error("Error saving counter data:", error);
      toast.error("Failed to save counter data.");
      setShowDialog(false); // Close dialog if saving fails
    }
  };

  const handleCancelDialog = () => {
    setShowDialog(false); // Close the dialog without saving
  };

  return (
    <div className="flex items-center justify-center h-[85vh]">
      <div className="w-[500px] bg-white border rounded shadow-md p-6">
        <h2 className="text-xl text-center font-semibold p-2 rounded-md mb-10">
          Counter Setting
        </h2>
        <div className="text-xl font-semibold text-black mb-4">Counter Details</div>
        <div className="bg-white shadow-md rounded-b-md p-4 mb-4">
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
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-6 gap-40">
          <button
            onClick={() => setIsEditable(true)}
            className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 focus:outline-none"
          >
            Edit
          </button>

          <button
            onClick={handleSave}
            disabled={!isEditable || !counterData.counter || !counterData.pcName || !counterData.macId}
            className={`px-8 py-2 rounded focus:outline-none ${
              isEditable
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-300 text-gray-700 cursor-not-allowed"
            }`}
          >
            Save
          </button>
        </div>
      </div>

      {/* Dialog Box for Confirmation */}
      <DialogBox
        isOpen={showDialog}
        onClose={handleCancelDialog}
        title="Confirm Save"
      >
        <p>Are you sure you want to save the changes?</p>
        <div className="flex justify-between mt-6">
          <button
            onClick={handleCancelDialog}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmSave}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Confirm
          </button>
        </div>
      </DialogBox>
    </div>
  );
};

export default CounterSetting;
