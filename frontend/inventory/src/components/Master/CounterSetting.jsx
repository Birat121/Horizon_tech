import React, { useState } from "react";
import { toast } from "react-toastify";
import DialogBox from "../../reusable inputs/DialogBox";
import { API_URLS } from "../../reusable inputs/config";

const CounterSetting = () => {
  const [counterData, setCounterData] = useState({
    counter: "",
    pcName: "",
    macId: "",
  });

  const [isEditable, setIsEditable] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCounterData({ ...counterData, [name]: value });
  };

  const handleSave = async () => {
    setShowDialog(true); // Open confirmation dialog
  };

  const handleConfirmSave = async () => {
    try {
      const response = await fetch(API_URLS.SAVE_COUNTER_SETTING, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          CountNo: counterData.counter,
          PCName: counterData.pcName,
          MacID: counterData.macId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save counter data");
      }

      toast.success("Counter data saved successfully!");
      setIsEditable(false);
      setShowDialog(false);
    } catch (error) {
      console.error("Error saving counter data:", error);
      toast.error("Failed to save counter data.");
      setShowDialog(false);
    }
  };

  const handleCancelDialog = () => {
    setShowDialog(false);
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
            <div className="flex items-center">
              <label htmlFor="counter" className="w-40 text-black">Counter#:</label>
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

            <div className="flex items-center">
              <label htmlFor="pcName" className="w-40 text-black">PC Name:</label>
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

            <div className="flex items-center">
              <label htmlFor="macId" className="w-40 text-black">Mac Id:</label>
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

      <DialogBox isOpen={showDialog} onClose={handleCancelDialog} title="Confirm Save">
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
