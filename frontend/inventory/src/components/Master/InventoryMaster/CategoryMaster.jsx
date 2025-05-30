import React, { useState } from "react";
import Button from "../../../reusable inputs/buttons";
import CustomDialog from "../../../reusable inputs/customeDialog";
import { toast } from "react-toastify";
import { API_URLS } from "../../../reusable inputs/config";

const CategoryMaster = () => {
  const [categoryName, setCategoryName] = useState("");
  const [isVatable, setIsVatable] = useState(false);
  const [vatRate, setVatRate] = useState(0.0);
  const [isSaving, setIsSaving] = useState(false);
  const [isModifying, setIsModifying] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [actionType, setActionType] = useState("");

  const handleVatableChange = () => {
    setIsVatable(!isVatable);
    setVatRate(!isVatable ? 13.0 : 0.0);
  };

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSave = async () => {
    if (!categoryName) {
      toast.error("Category name is required!");
      return;
    }

    setShowDialog(true);
    setActionType("save");
  };

  const handleModify = async () => {
    if (!categoryName) {
      toast.error("Category name is required!");
      return;
    }

    setShowDialog(true);
    setActionType("modify");
  };

  const handleCancel = () => {
    setCategoryName("");
    setIsVatable(false);
    setVatRate(0.0);
  };

  const confirmAction = async () => {
    setShowDialog(false);

    const categoryData = { CatName: categoryName, isVatable, vatRate };

    if (actionType === "save") {
      setIsSaving(true);
      try {
        const response = await fetch(API_URLS.CreateCategory, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(categoryData),
        });

        if (!response.ok) throw new Error("Failed to save category data");

        toast.success("Category created successfully!");
        handleCancel();
      } catch (error) {
        console.error("Error saving category data:", error);
        toast.error("Failed to save category data");
      } finally {
        setIsSaving(false);
      }
    } else if (actionType === "modify") {
      setIsModifying(true);
      try {
        const response = await fetch(`${API_URLS.UpdateCategory}/${categoryName}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(categoryData),
        });

        if (!response.ok) throw new Error("Failed to modify category data");

        toast.success("Category modified successfully!");
      } catch (error) {
        console.error("Error modifying category data:", error);
        toast.error("Failed to modify category data");
      } finally {
        setIsModifying(false);
      }
    }
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="bg-white border-2 p-10 rounded-lg shadow-xl w-full max-w-2xl">
        <h1 className="text-white text-xl text-center font-semibold p-3 rounded-md mb-4">
          Category Master
        </h1>
        <h2 className="text-xl font-bold mb-6 text-center">
          Create / Modify Category
        </h2>
        <div className="space-y-6">
          {/* Category Name Input Only */}
          <div>
            <label className="block text-gray-700 font-medium text-lg">
              Category Name:
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={handleCategoryNameChange}
              className="w-full p-3 border rounded-lg text-lg mt-4"
              placeholder="Enter category name"
            />
          </div>

          {/* Vatable and Non-Vatable Options */}
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
          <Button
            type="save"
            onClick={handleSave}
            className="px-6 py-3 text-lg"
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save"}
          </Button>
          <Button
            type="modify"
            onClick={handleModify}
            className="px-6 py-3 text-lg"
            disabled={isModifying}
          >
            {isModifying ? "Modifying..." : "Modify"}
          </Button>
          <Button
            type="cancel"
            onClick={handleCancel}
            className="px-6 py-3 text-lg"
          >
            Cancel
          </Button>
        </div>
      </div>

      <CustomDialog
  isOpen={showDialog}
  onClose={handleDialogClose}
  title={`Confirm ${actionType === "save" ? "Save" : "Modify"} Category`}
  message={`Are you sure you want to ${actionType} the category "${categoryName}"?`}
  onConfirm={confirmAction}
/>

    </div>
  );
};

export default CategoryMaster;
