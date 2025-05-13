import React, { useState } from "react";
import { API_URLS } from "../../../reusable inputs/config";
import { toast } from "react-toastify";

const InventoryItemMaster = () => {
  const [activeTab, setActiveTab] = useState("Product Information");

  const [productData, setProductData] = useState({
    productName: "",
    catName: "",
    subCatName: "",
    unitRate: "",
    saleRate: "",
    wholeSalePcs: "",
    hsCode: "",
  });

  const [uomData, setUomData] = useState([
    {
      uom: "",
      uomQty: "",
      barcode: "",
      packCost: "",
      packSale: "",
      discAmt: "",
      netSale: "",
      netProfitPercent: "",
    },
  ]);

  // Handler to update Product data
  const handleProductDataChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  // Handler to update UOM data for a specific row
  const handleUomChange = (index, e) => {
    const updatedUomData = [...uomData];
    updatedUomData[index][e.target.name] = e.target.value;
    setUomData(updatedUomData);

    // Automatically add a new row when the last field in the last row is changed
    if (index === uomData.length - 1) {
      const lastField = Object.keys(uomData[index]);
      const lastFieldName = lastField[lastField.length - 1];
      if (e.target.name === lastFieldName) {
        addUomRow();
      }
    }
  };

  // Add a new UOM row
  const addUomRow = () => {
    setUomData([
      ...uomData,
      {
        uom: "",
        uomQty: "",
        barcode: "",
        packCost: "",
        packSale: "",
        discAmt: "",
        netSale: "",
        netProfitPercent: "",
      },
    ]);
  };

  const handleCancel = () => {
    setProductData({
      productName: "",
      catName: "",
      subCatName: "",
      unitRate: "",
      saleRate: "",
      wholeSalePcs: "",
      hsCode: "",
    });

    setUomData([
      {
        uom: "",
        uomQty: "",
        barcode: "",
        packCost: "",
        packSale: "",
        discAmt: "",
        netSale: "",
        netProfitPercent: "",
      },
    ]);
  };

  // Validate form before submission
  const validateForm = () => {
    return (
      productData.productName &&
      productData.catName &&
      productData.subCatName &&
      productData.unitRate &&
      uomData.every(
        (uom) =>
          uom.uom &&
          uom.uomQty &&
          uom.barcode &&
          uom.packCost &&
          uom.packSale &&
          uom.discAmt &&
          uom.netSale &&
          uom.netProfitPercent
      )
    );
  };

  // Handle Save Button Click
  const handleSave = async () => {
    if (!validateForm()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const payload = {
      productMastDTO: {
        productName: productData.productName,
        catName: productData.catName,
        subCatName: productData.subCatName,
        unitRate: parseFloat(productData.unitRate),
        saleRate: parseFloat(productData.saleRate),
        wholeSalePcs: parseFloat(productData.wholeSalePcs),
        hsCode: productData.hsCode,
      },
      productUOMDTOs: uomData.map((uom) => ({
        uom: uom.uom,
        uomQty: parseFloat(uom.uomQty),
        barcode: uom.barcode,
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
      if (result === true) {
        toast.success("Product saved successfully.");
      } else {
        toast.error("Failed to save product.");
      }
    } catch (err) {
      console.error(err);
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
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Category Name</label>
            <input
              type="text"
              name="catName"
              value={productData.catName}
              onChange={handleProductDataChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Sub Category Name</label>
            <input
              type="text"
              name="subCatName"
              value={productData.subCatName}
              onChange={handleProductDataChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Unit Rate</label>
            <input
              type="number"
              name="unitRate"
              value={productData.unitRate}
              onChange={handleProductDataChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Sale Rate</label>
            <input
              type="number"
              name="saleRate"
              value={productData.saleRate}
              onChange={handleProductDataChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Whole Sale Pcs</label>
            <input
              type="number"
              name="wholeSalePcs"
              value={productData.wholeSalePcs}
              onChange={handleProductDataChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">HS Code</label>
            <input
              type="text"
              name="hsCode"
              value={productData.hsCode}
              onChange={handleProductDataChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      );
    }

    if (activeTab === "UOM And Barcode Setting") {
      return (
        <div>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border px-4 py-2">UOM</th>
                <th className="border px-4 py-2">UOM Qty</th>
                <th className="border px-4 py-2">Barcode</th>
                <th className="border px-4 py-2">Pack Cost</th>
                <th className="border px-4 py-2">Pack Sale</th>
                <th className="border px-4 py-2">Discount Amount</th>
                <th className="border px-4 py-2">Net Sale</th>
                <th className="border px-4 py-2">Net Profit %</th>
              </tr>
            </thead>
            <tbody>
              {uomData.map((uom, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="uom"
                      value={uom.uom}
                      onChange={(e) => handleUomChange(index, e)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="uomQty"
                      value={uom.uomQty}
                      onChange={(e) => handleUomChange(index, e)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="barcode"
                      value={uom.barcode}
                      onChange={(e) => handleUomChange(index, e)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="packCost"
                      value={uom.packCost}
                      onChange={(e) => handleUomChange(index, e)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="packSale"
                      value={uom.packSale}
                      onChange={(e) => handleUomChange(index, e)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="discAmt"
                      value={uom.discAmt}
                      onChange={(e) => handleUomChange(index, e)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="netSale"
                      value={uom.netSale}
                      onChange={(e) => handleUomChange(index, e)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="netProfitPercent"
                      value={uom.netProfitPercent}
                      onChange={(e) => handleUomChange(index, e)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
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
