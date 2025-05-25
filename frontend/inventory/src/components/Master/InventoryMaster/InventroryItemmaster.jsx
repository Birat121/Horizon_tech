import React, { useState, useEffect } from "react";
import { API_URLS } from "../../../reusable inputs/config";
import { toast } from "react-toastify";
import axios from "axios";

const InventoryItemMaster = () => {
  const [activeTab, setActiveTab] = useState("Product Information");
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [availableUoms, setAvailableUoms] = useState([]);

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
    const fetchUoms = async () => {
      try {
        const res = await axios.get(API_URLS.GET_UOM);
        if (Array.isArray(res.data)) {
          setAvailableUoms(res.data);
        } else {
          toast.error("Invalid response for UOM.");
        }
      } catch (error) {
        toast.error("Error fetching UOM.");
        console.error(error);
      }
    };

    fetchUoms();
    const fetchCategories = async () => {
      try {
        const response = await axios.get(API_URLS.GET_CATEGORIES);
        if (Array.isArray(response.data)) {
          // Convert category name strings into option objects
          const categoryObjects = response.data.map((name) => ({
            CatName: name,
          }));
          setCategories(categoryObjects);
        } else {
          toast.error("Invalid response for categories.");
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
    const selectedCatName = e.target.value;

    setProductData((prev) => ({
      ...prev,
      catName: selectedCatName,
      catId: "", // Optionally clear if not needed anymore
      subCatName: "",
      subCatId: "",
    }));

    try {
      const response = await fetch(
        `${API_URLS.GET_SUBCATEGORIES}?categoryName=${encodeURIComponent(
          selectedCatName
        )}`
      );

      const data = await response.json();

      if (Array.isArray(data)) {
        // Convert subcategory names into objects
        const subCatObjects = data.map((name) => ({
          SubCatName: name,
        }));
        setSubCategories(subCatObjects);
      } else {
        toast.error("Invalid response for subcategories.");
        setSubCategories([]);
      }
    } catch (err) {
      console.error("Failed to fetch subcategories:", err);
      toast.error("Error fetching subcategories.");
      setSubCategories([]);
    }
  };

  const handleSubCategoryChange = (e) => {
    const selectedName = e.target.value;
    setProductData((prev) => ({
      ...prev,
      subCatName: selectedName,
      subCatId: "", // optional if you're not using ID anymore
    }));
  };

  const handleProductDataChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));

    // If the field affects UOM section, update those too
    if (["unitRate", "saleRate", "wholeSalePcs"].includes(name)) {
      const updatedUoms = uomData.map((uom) => ({
        ...uom,
        packCost: name === "unitRate" ? value : uom.packCost,
        packSale: name === "saleRate" ? value : uom.packSale,
        netSale: name === "saleRate" ? value : uom.netSale,
      }));
      setUomData(updatedUoms);
    }
  };

  const handleUomChange = async (index, e) => {
    const { name, value } = e.target;
    const updatedUoms = [...uomData];
    const currentUom = { ...updatedUoms[index], [name]: value };

    // Set readonly values from productData
    currentUom.packCost = productData.unitRate;
    currentUom.packSale = productData.saleRate;

    // Auto-calculate netSale
    const packSale = parseFloat(productData.saleRate || 0);
    const discAmt = parseFloat(currentUom.discAmt || 0);
    const packCost = parseFloat(productData.unitRate || 0);
    currentUom.netSale = packSale - discAmt;

    // Auto-calculate netProfitPercent
    currentUom.netProfitPercent =
      packCost > 0
        ? (((currentUom.netSale - packCost) / packCost) * 100).toFixed(2)
        : 0;

    updatedUoms[index] = currentUom;
    setUomData(updatedUoms);

    if (name === "uom" && value) {
      try {
        const res = await axios.get(
          `${API_URLS.GET_UOM_QTY}?uom=${encodeURIComponent(value)}`
        );
        if (res.status === 200 && res.data) {
          updatedUoms[index].uomQty = res.data.uomQty || "";
          setUomData([...updatedUoms]);
        } else {
          toast.error("UOM Qty not found for selected UOM.");
        }
      } catch (error) {
        toast.error("Failed to fetch UOM Qty.");
        console.error(error);
      }
    }

    // Add new row when netProfitPercent is updated on the last row
    if (index === uomData.length - 1 && name === "discAmt") {
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
    // Define required product fields
    const requiredProductFields = [
      "productName",
      "catName",
      "subCatName",
      "unitRate",
      "saleRate",
    ];

    // Check only required product fields
    const isProductValid = requiredProductFields.every(
      (field) => productData[field]?.toString().trim() !== ""
    );

    // Check UOM rows (at least one complete row)
    const isUomValid = uomData.some((uom) => {
      return (
        uom.uom &&
        uom.uomQty &&
        uom.netSale !== "" &&
        uom.netProfitPercent !== ""
      );
    });

    return isProductValid && isUomValid;
  };

  const handleSave = async () => {
    if (!validateForm()) {
      toast.error("Please fill in all required fields.");
      console.error("Validation failed: ", { productData, uomData });
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
       discAmt: uom.discAmt ? parseFloat(uom.discAmt) : 0,

        netSale: parseFloat(uom.netSale),
        netProfitPercent: parseFloat(uom.netProfitPercent),
        ws: parseInt(productData.wholeSalePcs) || 0,
      })),
    };

    console.log("Submitting payload:", payload);

    try {
      const res = await fetch(API_URLS.SAVE_PRODUCT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      console.log("Server response:", result);

      if (res.ok && result === true) {
        toast.success("Product saved successfully.");
      } else {
        toast.error("Failed to save product.");
        console.error("Save failed:", result);
      }
    } catch (err) {
      console.error("Error during save:", err);
      toast.error("Failed to save product due to a network/server error.");
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
              name="catName"
              value={productData.catName}
              onChange={handleCategoryChange}
              className={inputClass}
            >
              <option value="">-- Select Category --</option>
              {categories.map((cat) => (
                <option key={cat.CatName} value={cat.CatName}>
                  {cat.CatName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">Sub Category Name</label>
            <select
              name="subCatName"
              value={productData.subCatName}
              onChange={handleSubCategoryChange}
              className={inputClass}
            >
              <option value="">-- Select Sub Category --</option>
              {subCategories.map((sub) => (
                <option key={sub.SubCatName} value={sub.SubCatName}>
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
                    {field === "uom" ? (
                      <select
                        name="uom"
                        value={uom.uom}
                        onChange={(e) => handleUomChange(index, e)}
                        className={inputClass}
                      >
                        <option value="">-- Select UOM --</option>
                        {availableUoms.map((u) => (
                          <option key={u} value={u}>
                            {u}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={["barcode"].includes(field) ? "text" : "number"}
                        name={field}
                        value={
                          field === "packCost"
                            ? productData.unitRate
                            : field === "packSale" || field === "netSale"
                            ? productData.saleRate
                            : uom[field]
                        }
                        onChange={(e) => handleUomChange(index, e)}
                        readOnly={
                          !["uom", "barcode", "discAmt"].includes(field)
                        }
                        className={`${inputClass} ${
                          ["packCost", "packSale", "netSale"].includes(field)
                            ? "bg-gray-100"
                            : ""
                        }`}
                      />
                    )}
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
