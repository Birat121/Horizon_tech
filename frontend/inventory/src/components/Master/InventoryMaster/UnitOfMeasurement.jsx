import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Dialog } from "@headlessui/react";

import "react-toastify/dist/ReactToastify.css";

import { API_URLS } from "../../../reusable inputs/config";

const UnitOfMeasurement = () => {
  const [uomDescription, setUomDescription] = useState("");
  const [uomQuantity, setUomQuantity] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [actionType, setActionType] = useState("save"); // 'save' or 'modify'

  const handleSave = () => {
    if (!uomDescription || !uomQuantity) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (Number(uomQuantity) <= 0) {
      toast.error("Quantity must be greater than zero.");
      return;
    }
    setActionType("save");
    setIsDialogOpen(true);
  };

  const handleModify = () => {
    if (!uomDescription || !uomQuantity) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (Number(uomQuantity) <= 0) {
      toast.error("Quantity must be greater than zero.");
      return;
    }
    setActionType("modify");
    setIsDialogOpen(true);
  };

  const handleCancel = () => {
    setUomDescription("");
    setUomQuantity("");
  };

  const handleConfirm = async () => {
    try {
      const payload = {
        UomDesc: uomDescription,
        UomQty: Number(uomQuantity),
      };

      if (actionType === "save") {
        await axios.post(API_URLS.CreateUOM, payload);
        toast.success("UOM saved successfully!");
      } else {
        await axios.put(API_URLS.UOM.UpdateUOM, payload);
        toast.success("UOM updated successfully!");
      }

      handleCancel();
    } catch (error) {
      toast.error("An error occurred while processing your request.");
    } finally {
      setIsDialogOpen(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-[90vh] ">
      <ToastContainer />
      <div className="bg-white border-2 p-8 rounded-md shadow-md w-full max-w-lg">
        <h1 className="text-white text-center text-xl font-semibold p-3 rounded-md mb-3 bg-blue-500">
          Unit of Measurement
        </h1>
        <h2 className="text-xl font-bold mb-6 text-center">
          Create / Modify Unit Of Measurement
        </h2>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium text-lg">
              UOM Description:
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-md  text-lg"
              value={uomDescription}
              onChange={(e) => setUomDescription(e.target.value)}
              placeholder="Enter UOM Description"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium text-lg">
              UOM Quantity:
            </label>
            <input
              type="number"
              placeholder="Enter Quantity"
              className="w-full p-3 border rounded-md text-lg"
              value={uomQuantity}
              onChange={(e) => setUomQuantity(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-8 flex justify-between">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={handleModify}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Modify
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          {/* Manually creating the overlay */}
          <div
            className="fixed inset-0 bg-black opacity-30"
            aria-hidden="true"
          />

          <div className="bg-white rounded max-w-sm mx-auto p-6 z-20">
            <Dialog.Panel>
              <Dialog.Title className="text-lg font-medium text-gray-900">
                Confirm {actionType === "save" ? "Save" : "Modify"}
              </Dialog.Title>

              <Dialog.Description className="mt-2 text-sm text-gray-500">
                Are you sure you want to {actionType} this Unit of Measurement?
              </Dialog.Description>

              <div className="mt-4 flex justify-end space-x-4">
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Confirm
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default UnitOfMeasurement;
