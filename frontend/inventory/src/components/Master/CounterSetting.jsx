import React, { useState } from "react";
import { toast } from "react-toastify";
import CustomDialog from "../../reusable inputs/customeDialog";
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
    setCounterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const { counter, pcName, macId } = counterData;
    if (!counter.trim() || !pcName.trim() || !macId.trim()) {
      toast.error("All fields are required before saving.");
      return;
    }

    setShowDialog(true);
  };

  const handleConfirmSave = async () => {
    try {
      const response = await fetch(API_URLS.SAVE_COUNTER_SETTING, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          CountNo: counterData.counter.trim(),
          PCName: counterData.pcName.trim(),
          MacID: counterData.macId.trim(),
        }),
      });

      if (!response.ok) throw new Error("Failed to save counter data");

      toast.success("Counter data saved successfully!");
      setIsEditable(false);
      setShowDialog(false);

      // Optional: Clear form after saving
      setCounterData({ counter: "", pcName: "", macId: "" });
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
            {["counter", "pcName", "macId"].map((field) => (
              <div className="flex items-center" key={field}>
                <label htmlFor={field} className="w-40 text-black capitalize">
                  {field === "macId" ? "Mac ID" : field === "pcName" ? "PC Name" : "Counter#"}:
                </label>
                <input
                  type="text"
                  id={field}
                  name={field}
                  value={counterData[field]}
                  onChange={handleChange}
                  disabled={!isEditable}
                  className="flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            ))}
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
            disabled={!isEditable}
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

      <CustomDialog
  isOpen={showDialog}
  onClose={handleCancelDialog}
  onConfirm={handleConfirmSave}
  title="Confirm Save"
  message="Are you sure you want to save the changes?"
/>

    </div>
  );
};

export default CounterSetting;
