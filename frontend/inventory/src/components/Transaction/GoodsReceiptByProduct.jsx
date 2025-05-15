import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { API_URLS } from "../../reusable inputs/config";
import CustomDialog from "../../reusable inputs/customeDialog";

const GoodsReceiptByProduct = () => {
  const initialRow = {
    productId: "",
    barcode: "",
    productName: "",
    receiptQty: "",
    uom: "",
    unitCost: "",
    totalAmt: "",
  };

  const [file, setFile] = useState(null);
  const [rows, setRows] = useState([initialRow]);
  const [receiptDate, setReceiptDate] = useState("");
  const [branchFrom, setBranchFrom] = useState("");
  const [isp, setIsp] = useState("");
  const [branches, setBranches] = useState([]);
  const [productNames, setProductNames] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [errors, setErrors] = useState({}); // Validation errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [branchesRes, productNamesRes, ispRes] = await Promise.all([
          fetch(API_URLS.BRANCH_LIST),
          fetch(API_URLS.PRODUCT_LIST),
          fetch(API_URLS.GET_NEXT_ISSUE_NO),
        ]);

        if (!branchesRes.ok || !productNamesRes.ok || !ispRes.ok) {
          throw new Error("Error fetching data");
        }

        const [branchesData, productNamesData, ispDataRaw] = await Promise.all([
          branchesRes.json(),
          productNamesRes.json(),
          ispRes.text(),
        ]);

        setBranches(branchesData);
        setProductNames(productNamesData);
        setIsp(ispDataRaw);
      } catch (error) {
        console.error("Fetch Error:", error);
        toast.error("Failed to fetch necessary data.");
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;

    if (field === "receiptQty" || field === "unitCost") {
      const qty = parseFloat(updatedRows[index].receiptQty) || 0;
      const cost = parseFloat(updatedRows[index].unitCost) || 0;
      updatedRows[index].totalAmt = (qty * cost).toFixed(2);
    }

    setRows(updatedRows);

    if (
      index === rows.length - 1 &&
      Object.values(updatedRows[index]).every((v) => v !== "")
    ) {
      setRows([...updatedRows, { ...initialRow }]);
    }
  };

  const handleProductChange = async (index, productName) => {
    try {
      const response = await fetch(
        `${API_URLS.GET_PRODUCT_DETAILS}?productName=${encodeURIComponent(productName)}`
      );
      const data = await response.json();

      if (response.ok) {
        const updatedRows = [...rows];
        updatedRows[index] = {
          ...updatedRows[index],
          productName,
          productId: data.productId || "",
          barcode: data.barcode || "",
          uom: data.uom || "",
          unitCost: data.unitCost || "",
          totalAmt: updatedRows[index].receiptQty
            ? (
                parseFloat(updatedRows[index].receiptQty) *
                parseFloat(data.unitCost || 0)
              ).toFixed(2)
            : "",
        };
        setRows(updatedRows);
      } else {
        toast.error("Product details not found");
      }
    } catch (error) {
      toast.error("Failed to fetch product details");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!receiptDate) newErrors.receiptDate = true;
    if (!branchFrom) newErrors.branchFrom = true;

    const rowErrors = rows.map((row) => ({
      productName: !row.productName,
      receiptQty: !row.receiptQty,
    }));

    const hasRowError = rowErrors.some(
      (r) => r.productName || r.receiptQty
    );

    if (hasRowError) newErrors.rows = rowErrors;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      setShowDialog(true);
    } else {
      toast.error("Please fill all required fields.");
    }
  };

  const confirmSave = () => {
    const dataToSave = {
      receiptDate,
      branchFrom,
      isp,
      rows: rows.filter((r) => r.productName && r.receiptQty),
    };

    fetch(API_URLS.GOODS_RECEIPT, {
      method: "POST",
      body: JSON.stringify(dataToSave),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Goods receipt data saved successfully!");
        setShowDialog(false);
        setRows([initialRow]);
        setReceiptDate("");
        setBranchFrom("");
        setFile(null);
        setErrors({});
      })
      .catch(() => {
        toast.error("Failed to save goods receipt");
        setShowDialog(false);
      });
  };

  const handleCancel = () => {
    setRows([initialRow]);
    setReceiptDate("");
    setBranchFrom("");
    setFile(null);
    setErrors({});
    toast.info("Form has been cleared.");
  };

  return (
    <div className="h-[85vh] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl p-8 bg-white border border-gray-300 rounded-2xl shadow-lg flex flex-col">
        <h2 className="text-center text-xl font-semibold p-2 mb-4">
          Goods Receipt
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Receipt Date
            </label>
            <input
              type="date"
              value={receiptDate}
              onChange={(e) => setReceiptDate(e.target.value)}
              className={`w-full mt-2 p-3 border ${
                errors.receiptDate ? "border-red-500" : "border-gray-300"
              } rounded-lg text-lg`}
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Receipt No.
            </label>
            <input
              type="text"
              value={isp}
              readOnly
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-lg"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Branch From
            </label>
            <select
              value={branchFrom}
              onChange={(e) => setBranchFrom(e.target.value)}
              className={`w-full mt-2 p-3 border ${
                errors.branchFrom ? "border-red-500" : "border-gray-300"
              } rounded-lg text-lg`}
            >
              <option value="">Select Branch</option>
              {branches.map((branch, index) => (
                <option key={index} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Table */}
        <div
          className="overflow-y-auto border border-gray-300 rounded-lg"
          style={{ maxHeight: "300px" }}
        >
          <table className="w-full text-left text-lg min-w-[800px]">
            <thead className="bg-gray-100 sticky top-0 z-10">
              <tr>
                <th className="border px-4 py-3">Sr.</th>
                <th className="border px-4 py-3">Product Name</th>
                <th className="border px-4 py-3">Product ID</th>
                <th className="border px-4 py-3">Barcode</th>
                <th className="border px-4 py-3">Receipt Qty</th>
                <th className="border px-4 py-3">UOM</th>
                <th className="border px-4 py-3">Unit Cost</th>
                <th className="border px-4 py-3">Total Amt</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                const rowError = errors.rows?.[index] || {};
                return (
                  <tr key={index}>
                    <td className="border px-4 py-3 text-center">{index + 1}</td>
                    <td className="border px-4 py-3">
                      <select
                        value={row.productName}
                        onChange={(e) =>
                          handleProductChange(index, e.target.value)
                        }
                        className={`w-full p-3 border rounded-lg ${
                          rowError.productName ? "border-red-500" : "border-gray-300"
                        }`}
                      >
                        <option value="">Select Product</option>
                        {productNames.map((productName, idx) => (
                          <option key={idx} value={productName}>
                            {productName}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="border px-4 py-3">{row.productId}</td>
                    <td className="border px-4 py-3">{row.barcode}</td>
                    <td className="border px-4 py-3">
                      <input
                        type="number"
                        value={row.receiptQty}
                        onChange={(e) =>
                          handleInputChange(index, "receiptQty", e.target.value)
                        }
                        className={`w-full p-3 border rounded-lg ${
                          rowError.receiptQty ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                    </td>
                    <td className="border px-4 py-3">{row.uom}</td>
                    <td className="border px-4 py-3">{row.unitCost}</td>
                    <td className="border px-4 py-3">{row.totalAmt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white p-3 rounded-lg"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="bg-red-500 text-white p-3 rounded-lg"
          >
            Cancel
          </button>
        </div>

        {/* Confirmation Dialog */}
        <CustomDialog
          isOpen={showDialog}
          onClose={() => setShowDialog(false)}
          onConfirm={confirmSave}
          title="Confirm Save"
          message="Are you sure you want to save this Goods Receipt?"
        />
      </div>
    </div>
  );
};

export default GoodsReceiptByProduct;
