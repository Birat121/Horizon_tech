import React, { useState } from "react";
import { toast } from "react-toastify";
import { API_URLS } from "../../../reusable inputs/config";

const ServiceItemMaster = () => {
  const [description, setDescription] = useState("");
  const [rt, setRt] = useState("");
  const [transId, setTransId] = useState(null);
  const [isCreating, setIsCreating] = useState(true);
  const [isEditable, setIsEditable] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");

  const handleSave = () => {
    setDialogTitle(isCreating ? "Create Service Item" : "Modify Service Item");
    setDialogMessage(
      isCreating
        ? `Are you sure you want to create the service item "${description}"?`
        : `Are you sure you want to update the service item "${description}"?`
    );
    setIsDialogOpen(true);
  };

  const handleConfirmSave = async () => {
    try {
      const serviceItemData = {
        Description: description,
        Rt: parseFloat(rt),
        TransID: transId || 0,
        EnteredDate: new Date().toISOString(),
        EnteredBy: "system",
        EnteredSys: window.navigator.userAgent,
        Itemcode: "", // Let backend generate it
      };

      let response;

      if (isCreating) {
        response = await fetch(API_URLS.CreateServiceItem, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(serviceItemData),
        });

        if (response.ok) {
          toast.success(`Service Item "${description}" created successfully!`);
        } else {
          const error = await response.text();
          toast.error(`Error creating service item: ${error}`);
        }
      } else {
        response = await fetch(`${API_URLS.UpdateServiceItem}/${transId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(serviceItemData),
        });

        if (response.ok) {
          toast.success(`Service Item "${description}" updated successfully!`);
        } else {
          const error = await response.text();
          toast.error(`Error updating service item: ${error}`);
        }
      }

      // Reset state
      setIsEditable(false);
      setIsCreating(true);
      setTransId(null);
      setDescription("");
      setRt("");
    } catch (error) {
      console.error("Error saving service item:", error);
      toast.error(`Error saving service item: ${error}`);
    }

    setIsDialogOpen(false);
  };

  const handleCancel = () => {
    setDescription("");
    setRt("");
    setIsCreating(true);
    setIsEditable(false);
    setTransId(null);
  };

  return (
    <div className="flex items-center justify-center h-[85vh]">
      <div className="w-3/4 max-w-6xl bg-white border-2 rounded-lg shadow-lg overflow-hidden">
        <div className="flex">
          <div className="bg-gray-300 text-white w-1/4 p-6">
            <div className="space-y-6">
              <button
                className="w-full bg-save hover:bg-save-hover p-3 rounded flex items-center justify-center space-x-3 text-lg"
                onClick={handleSave}
              >
                <i className="fa fa-save"></i>
                <span>{isCreating ? "Save" : "Update"}</span>
              </button>
              <button
                className="w-full bg-modify hover:bg-modify-hover p-3 rounded flex items-center justify-center space-x-3 text-lg"
                onClick={() => {}}
              >
                <i className="fa fa-edit"></i>
                <span>Modify</span>
              </button>
              <button
                className="w-full bg-cancel hover:bg-cancel-hover p-3 rounded flex items-center justify-center space-x-3 text-lg"
                onClick={handleCancel}
              >
                <i className="fa fa-undo"></i>
                <span>Cancel</span>
              </button>
            </div>
          </div>

          <div className="w-3/4 p-8">
            <h2 className="text-3xl text-center font-semibold p-4 mb-3">
              Service Item Master
            </h2>
            <p className="font-semibold text-xl mb-8 text-center">
              Create / Modify Service Items
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <label className="w-40 text-purple-600 font-medium text-lg">
                  Item Desc:
                </label>
                <input
                  type="text"
                  className="border border-gray-400 p-3 rounded w-full text-lg"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter Item Description"
                />
              </div>

              <div className="flex items-center">
                <label className="w-40 text-purple-600 font-medium text-lg">
                  Sale Rate:
                </label>
                <input
                  type="number"
                  className="border border-gray-400 p-3 rounded w-full text-lg"
                  value={rt}
                  onChange={(e) => setRt(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">{dialogTitle}</h3>
            <p className="mb-6">{dialogMessage}</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmSave}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceItemMaster;
