import React, { useState, useEffect } from "react";
import CustomDialog from "../../../reusable inputs/customeDialog";
import Button from "../../../reusable inputs/buttons";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URLS } from "../../../reusable inputs/config";

const SubCategoryMaster = () => {
  const [categoryNames, setCategoryNames] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [vatRate, setVatRate] = useState(0.0);
  const [isVatable, setIsVatable] = useState(false);
  const [actionType, setActionType] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  // Fetch category names on component mount
  useEffect(() => {
    const fetchCategoryNames = async () => {
      try {
        const response = await axios.get(API_URLS.GET_CATEGORY_NAMES); // Update with your actual endpoint
        setCategoryNames(response.data);
      } catch (error) {
        toast.error("Failed to fetch category names");
        console.error(error);
      }
    };

    fetchCategoryNames();
  }, []);

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSubCategoryNameChange = (e) => {
    setSubCategoryName(e.target.value);
  };

  const handleVatableChange = () => {
    setIsVatable(!isVatable);
    setVatRate(!isVatable ? 13.0 : 0.0);
  };

  const handleSave = () => {
    if (!categoryName || !subCategoryName) {
      toast.error("Both Category and Sub Category names are required!");
      return;
    }
    setActionType("save");
    setShowDialog(true);
  };

  const handleModify = () => {
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
    setIsVatable(false);
    setVatRate(0.0);
  };

  const saveSubCategory = async () => {
    try {
      const response = await axios.post(API_URLS.SUBCATEGORY, {
        CatName: categoryName,
        SubCatName: subCategoryName,
        vatRate,
        isVatable,
      });

      if (response.status === 200) {
        toast.success("Subcategory saved successfully!");
        handleCancel();
      }
    } catch (error) {
      toast.error("Failed to save subcategory!");
      console.error(error);
    }
  };

  const modifySubCategory = async () => {
    try {
      const response = await axios.put(API_URLS.SUBCATEGORY, {
        CatName:categoryName,
        SubCatName:subCategoryName,
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
          {/* Category Name (Dropdown) */}
          <div>
            <label className="block text-gray-700 font-medium text-lg">Category Name:</label>
            <select
              value={categoryName}
              onChange={handleCategoryNameChange}
              className="w-full p-3 border rounded-md text-lg mt-4"
            >
              <option value="" disabled>Select Category</option>
              {categoryNames.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Sub Category Name (Input Only) */}
          <div>
            <label className="block text-gray-700 font-medium text-lg">Sub Category Name:</label>
            <input
              type="text"
              value={subCategoryName}
              onChange={handleSubCategoryNameChange}
              className="w-full p-3 border rounded-md text-lg mt-4"
              placeholder="Enter sub category name"
            />
          </div>

          {/* Vatable and Vat Rate */}
          <div className="flex items-center justify-between text-lg">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="vatable"
                checked={isVatable}
                onChange={handleVatableChange}
                className="mr-3 w-5 h-5"
              />
              <label htmlFor="vatable" className="text-gray-700 font-medium">
                Vatable Item
              </label>
            </div>
            <p className="text-red-500 font-bold">{vatRate.toFixed(2)} %</p>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="non-vatable"
                checked={!isVatable}
                onChange={handleVatableChange}
                className="mr-3 w-5 h-5"
              />
              <label htmlFor="non-vatable" className="text-gray-700 font-medium">
                Non Vatable Item
              </label>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-between">
          <Button type="save" onClick={handleSave} className="px-6 py-3 text-lg">Save</Button>
          <Button type="modify" onClick={handleModify} className="px-6 py-3 text-lg">Modify</Button>
          <Button type="cancel" onClick={handleCancel} className="px-6 py-3 text-lg">Cancel</Button>
        </div>
      </div>

      <CustomDialog
  isOpen={showDialog}
  onClose={handleDialogClose}
  onConfirm={confirmAction}
  title={`Confirm ${actionType === "save" ? "Save" : "Modify"} Subcategory`}
  message={`Are you sure you want to ${actionType} the subcategory "${subCategoryName}"?`}
/>

    </div>
  );
};

export default SubCategoryMaster;
