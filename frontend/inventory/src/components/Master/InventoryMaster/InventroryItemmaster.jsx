import React, { useState, useEffect } from "react";
import { API_URLS } from "../../../reusable inputs/config";
import { toast } from "react-toastify";
import axios from "axios";

const InventoryItemMaster = () => {
  const [activeTab, setActiveTab] = useState("Product Information");
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const defaultProductData = {
    productName: "",
    catId: "", // Updated to store catId
    catName: "", // Existing catName
    subCatId: "", // Added for Subcategory ID
    subCatName: "",
    unitRate: "",
    saleRate: "",
    wholeSalePcs: "",
    hsCode: "",
  };

  const defaultUomRow = {
    uom: "",
    uomQty: "",
    barcode: "",
    packCost: "",
    packSale: "",
    discAmt: "",
    netSale: "",
    netProfitPercent: "",
  };

  const [productData, setProductData] = useState(defaultProductData);
  const [uomData, setUomData] = useState([defaultUomRow]);

  const inputClass = "w-full p-2 border border-gray-300 rounded-md";

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(API_URLS.GET_CATEGORIES);
        console.log("Categories response:", response.data); // Log the categories response
        if (Array.isArray(response.data)) {
          setCategories(response.data);
        } else {
          toast.error("Invalid response for categories.");
          console.warn("Invalid categories format:", response.data);
          setCategories([]);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        toast.error("Error fetching categories.");
      }
    };

    fetchCategories();
  }, []);

  // Fetch subcategories based on selected category
  const handleCategoryChange = async (e) => {
    const selectedCatId = e.target.value;
    const selectedCat = categories.find((c) => c.CatId === selectedCatId);

    if (!selectedCat) return;

    // Update product data with both catId and catName
    setProductData({
      ...productData,
      catId: selectedCat.CatId,
      catName: selectedCat.CatName,
      subCatName: "",
      subCatId: "",
    });

    try {
      const response = await fetch(
        `${API_URLS.GET_SUBCATEGORIES}?categoryName=${encodeURIComponent(
          selectedCat.CatName
        )}`
      );

      const data = await response.json();

      if (Array.isArray(data)) {
        setSubCategories(data);
      } else {
        toast.error("Invalid response for subcategories.");
        setSubCategories([]);
        console.warn("Subcategory API response:", data);
      }
    } catch (err) {
      console.error("Failed to fetch subcategories:", err);
      toast.error("Error fetching subcategories.");
      setSubCategories([]);
    }
  };

  const handleSubCategoryChange = (e) => {
    const selectedSubCatId = e.target.value;
    const selectedSubCat = subCategories.find(
      (sc) => sc.SubCatId === selectedSubCatId
    );

    if (selectedSubCat) {
      setProductData({
        ...productData,
        subCatName: selectedSubCat.SubCatName,
        subCatId: selectedSubCat.SubCatId,
      });
    }
  };

  const handleProductDataChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleUomChange = (index, e) => {
    const updatedUoms = [...uomData];
    updatedUoms[index][e.target.name] = e.target.value;
    setUomData(updatedUoms);

    if (index === uomData.length - 1 && e.target.name === "netProfitPercent") {
      addUomRow();
    }
  };

  const addUomRow = () => {
    setUomData([...uomData, { ...defaultUomRow }]);
  };

  const handleCancel = () => {
    setProductData({ ...defaultProductData });
    setUomData([{ ...defaultUomRow }]);
  };

  const validateForm = () => {
    const isProductValid = Object.values(productData).every(
      (val) => val !== ""
    );
    const isUomValid = uomData.every((uom) =>
      Object.values(uom).every((val) => val !== "")
    );
    return isProductValid && isUomValid;
  };

  const handleSave = async () => {
    if (!validateForm()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const payload = {
      productMastDTO: {
        ...productData,
        unitRate: parseFloat(productData.unitRate),
        saleRate: parseFloat(productData.saleRate),
        wholeSalePcs: parseFloat(productData.wholeSalePcs),
      },
      productUOMDTOs: uomData.map((uom) => ({
        uom: uom.uom,
        uomQty: parseFloat(uom.uomQty),
        unitRate: parseFloat(uom.packCost),
        unitSale: parseFloat(uom.packSale),
        discAmt: parseFloat(uom.discAmt),
        netSale: parseFloat(uom.netSale),
        netProfitPercent: parseFloat(uom.netProfitPercent),
      })),
    };

    try {
      const res = await fetch(API_URLS.SAVE_PRODUCT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      result === true
        ? toast.success("Product saved successfully.")
        : toast.error("Failed to save product.");
    } catch (err) {
      console.error("Save error:", err);
      toast.error("Failed to save product.");
    }
  };

  const renderTabContent = () => {
    if (activeTab === "Product Information") {
      return (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Product Name</label>
            <input
              type="text"
              name="productName"
              value={productData.productName}
              onChange={handleProductDataChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Category Name</label>
            <select
              name="catId"
              value={productData.catId} // Bind to catId
              onChange={handleCategoryChange}
              className={inputClass}
            >
              <option value="">-- Select Category --</option>
              {categories.map((cat) => (
                <option key={cat.CatId} value={cat.CatId}>
                  {cat.CatName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">Sub Category Name</label>
            <select
              name="subCatId"
              value={productData.subCatId} // Bind to subCatId
              onChange={handleSubCategoryChange}
              className={inputClass}
            >
              <option value="">-- Select Sub Category --</option>
              {Array.isArray(subCategories) &&
                subCategories.map((sub) => (
                  <option key={sub.SubCatId} value={sub.SubCatId}>
                    {sub.SubCatName}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">Unit Rate</label>
            <input
              type="number"
              name="unitRate"
              value={productData.unitRate}
              onChange={handleProductDataChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Sale Rate</label>
            <input
              type="number"
              name="saleRate"
              value={productData.saleRate}
              onChange={handleProductDataChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Whole Sale Pcs</label>
            <input
              type="number"
              name="wholeSalePcs"
              value={productData.wholeSalePcs}
              onChange={handleProductDataChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">HS Code</label>
            <input
              type="text"
              name="hsCode"
              value={productData.hsCode}
              onChange={handleProductDataChange}
              className={inputClass}
            />
          </div>
        </div>
      );
    }

    return (
      <div>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              {[
                "UOM",
                "UOM Qty",
                "Barcode",
                "Pack Cost",
                "Pack Sale",
                "Discount Amount",
                "Net Sale",
                "Net Profit %",
              ].map((header) => (
                <th key={header} className="border px-4 py-2">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {uomData.map((uom, index) => (
              <tr key={index}>
                {Object.keys(defaultUomRow).map((field) => (
                  <td key={field}>
                    <input
                      type={
                        ["barcode", "uom"].includes(field) ? "text" : "number"
                      }
                      name={field}
                      value={uom[field]}
                      onChange={(e) => handleUomChange(index, e)}
                      className={inputClass}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-4xl p-6 bg-white border-2 rounded-lg shadow-lg mt-4">
        <header className="w-full py-2 mb-4">
          <h2 className="text-center text-2xl font-bold">
            Inventory Item Master
          </h2>
        </header>

        <div className="tabs flex space-x-4 mb-6">
          {["Product Information", "UOM And Barcode Setting"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
          {renderTabContent()}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-green-500 text-white rounded-md"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="px-6 py-2 bg-red-500 text-white rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryItemMaster;
