import React, { useState } from "react";
import axios from "axios";  // Import Axios
import { toast } from "react-toastify";

import Button from "../../../reusable inputs/buttons";  // Assuming you have a Button component
import DialogBox from "../../../reusable inputs/DialogBox";  // Import DialogBox component
import { API_URLS } from "../../../reusable inputs/config";


const SubCategoryMaster = () => {
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [vatRate, setVatRate] = useState(0.0);
  const [isVatable, setIsVatable] = useState(false);
  const [isCategorySelectMode, setIsCategorySelectMode] = useState(true); // Category select/input mode
  const [isSubCategorySelectMode, setIsSubCategorySelectMode] = useState(true); // SubCategory select/input mode
  const [actionType, setActionType] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  // Handle Category Name change
  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  // Handle SubCategory Name change
  const handleSubCategoryNameChange = (e) => {
    setSubCategoryName(e.target.value);
  };

  // Toggle Vatable status
  const handleVatableChange = () => {
    setIsVatable(!isVatable);
    setVatRate(!isVatable ? 13.0 : 0.0); // Example VAT rate of 13%
  };

  // Handle action buttons (Save, Modify)
  const handleSave = async () => {
    if (!categoryName || !subCategoryName) {
      toast.error("Both Category and Sub Category names are required!");
      return;
    }
    setActionType("save");
    setShowDialog(true);
  };

  const handleModify = async () => {
    if (!categoryName || !subCategoryName) {
      toast.error("Both Category and Sub Category names are required!");
      return;
    }
    setActionType("modify");
    setShowDialog(true);
  };

  const handleCancel = () => {
    setCategoryName("");
    setSubCategoryName("");
    setIsCategorySelectMode(true);
    setIsSubCategorySelectMode(true);
    setIsVatable(false);
    setVatRate(0.0);
  };

  const saveSubCategory = async () => {
    try {
      const response = await axios.post(API_URLS.SUBCATEGORY, {
        categoryName,
        subCategoryName,
        vatRate,
        isVatable,
      });

      if (response.status === 200) {
        toast.success("Subcategory saved successfully!");
        handleCancel(); // Reset form after saving
      }
    } catch (error) {
      toast.error("Failed to save subcategory!");
      console.error(error);
    }
  };

  const modifySubCategory = async () => {
    try {
      const response = await axios.put(API_URLS.SUBCATEGORY, {
        categoryName,
        subCategoryName,
        vatRate,
        isVatable,
      });

      if (response.status === 200) {
        toast.success("Subcategory modified successfully!");
      }
    } catch (error) {
      toast.error("Failed to modify subcategory!");
      console.error(error);
    }
  };

  const confirmAction = () => {
    setShowDialog(false);

    if (actionType === "save") {
      saveSubCategory();
    } else if (actionType === "modify") {
      modifySubCategory();
    }
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  return (
    <div className="flex items-center justify-center h-[85vh]">
      <div className="bg-white border-2 p-8 rounded-md shadow-lg w-full max-w-2xl">
        <h1 className="text-white text-center text-xl font-semibold p-3 rounded-md mb-3">
          SubCategory Master
        </h1>
        <h2 className="text-2xl font-bold mb-6 text-center">Create / Modify Sub Category</h2>
        <div className="space-y-6">
          {/* Category Name */}
          <div>
            <label className="block text-gray-700 font-medium text-lg">Category Name:</label>
            {/* Select and Input Mode toggle for Category */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsCategorySelectMode(true)}
                className={`px-4 py-2 border rounded-lg ${isCategorySelectMode ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                Select
              </button>
              <button
                onClick={() => setIsCategorySelectMode(false)}
                className={`px-4 py-2 border rounded-lg ${!isCategorySelectMode ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                Input
              </button>
            </div>

            {/* Conditional Rendering for Category Select/Input */}
            {isCategorySelectMode ? (
              <select
                value={categoryName}
                onChange={handleCategoryNameChange}
                className="w-full p-3 border rounded-md text-lg mt-4"
              >
                <option value="" disabled>Select Category</option>
                <option>Electronics</option>
                <option>Furniture</option>
                <option>Clothing</option>
              </select>
            ) : (
              <input
                type="text"
                value={categoryName}
                onChange={handleCategoryNameChange}
                className="w-full p-3 border rounded-md text-lg mt-4"
                placeholder="Enter category name"
              />
            )}
          </div>

          {/* Sub Category Name */}
          <div>
            <label className="block text-gray-700 font-medium text-lg">Sub Category Name:</label>
            {/* Select and Input Mode toggle for SubCategory */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSubCategorySelectMode(true)}
                className={`px-4 py-2 border rounded-lg ${isSubCategorySelectMode ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                Select
              </button>
              <button
                onClick={() => setIsSubCategorySelectMode(false)}
                className={`px-4 py-2 border rounded-lg ${!isSubCategorySelectMode ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                Input
              </button>
            </div>

            {/* Conditional Rendering for SubCategory Select/Input */}
            {isSubCategorySelectMode ? (
              <select
                value={subCategoryName}
                onChange={handleSubCategoryNameChange}
                className="w-full p-3 border rounded-md text-lg mt-4"
              >
                <option value="" disabled>Select Sub Category</option>
                <option>Mobile Phones</option>
                <option>Sofas</option>
                <option>Men's Wear</option>
              </select>
            ) : (
              <input
                type="text"
                value={subCategoryName}
                onChange={handleSubCategoryNameChange}
                className="w-full p-3 border rounded-md text-lg mt-4"
                placeholder="Enter sub category name"
              />
            )}
          </div>

          {/* VAT Rate */}
          <div>
            <label className="block text-gray-700 font-medium text-lg">Vat Rate:</label>
            <p className="text-red-500 font-medium text-lg">{vatRate.toFixed(2)} %</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-between">
          <Button type="save" onClick={handleSave} className="px-6 py-3 text-lg">Save</Button>
          <Button type="modify" onClick={handleModify} className="px-6 py-3 text-lg">Modify</Button>
          <Button type="cancel" onClick={handleCancel} className="px-6 py-3 text-lg">Cancel</Button>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <DialogBox
        isOpen={showDialog}
        onClose={handleDialogClose}
        title={`Confirm ${actionType === "save" ? "Save" : "Modify"} Subcategory`}
      >
        <p className="text-center">
          Are you sure you want to {actionType} the subcategory "{subCategoryName}"?
        </p>
        <div className="mt-4 flex justify-between">
          <Button type="save" onClick={confirmAction} className="px-6 py-3 bg-blue-500 text-white">Confirm</Button>
          <Button type="cancel" onClick={handleDialogClose} className="px-6 py-3 bg-gray-500 text-white">Cancel</Button>
        </div>
      </DialogBox>
    </div>
  );
};

export default SubCategoryMaster;
