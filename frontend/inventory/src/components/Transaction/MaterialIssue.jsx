import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { API_URLS } from "../../reusable inputs/config";
import CustomDialog from "../../reusable inputs/customeDialog";

const MaterialIssue = () => {
  const initialRow = {
    productId: "",
    barcode: "",
    productName: "",
    issueQty: "",
    uom: "",
    unitCost: "",
    totalAmt: "",
  };

  const [file, setFile] = useState(null);
  const [rows, setRows] = useState([initialRow]);
  const [issueDate, setIssueDate] = useState("");
  const [branchTo, setBranchTo] = useState("");
  const [isp, setIsp] = useState("");
  const [branches, setBranches] = useState([]);
  const [productNames, setProductNames] = useState([]);
  const [dialog, setDialog] = useState({ isOpen: false, title: "", message: "", onConfirm: null });

  useEffect(() => {
    fetch(API_URLS.ISP_LIST)
      .then((response) => {
        if (!response.ok) throw new Error("Network error");
        const contentType = response.headers.get("Content-Type");
        return contentType.includes("application/json") ? response.json() : response.text();
      })
      .then((data) => {
        setIsp(typeof data === "string" ? data : data.isp);
      })
      .catch(() => toast.error("Failed to fetch ISP"));

    fetch(API_URLS.BRANCH_LIST)
      .then((res) => res.json())
      .then(setBranches)
      .catch(() => toast.error("Failed to fetch branches"));

    fetch(API_URLS.PRODUCT_LIST)
      .then((res) => res.json())
      .then(setProductNames)
      .catch(() => toast.error("Failed to fetch product names"));
  }, []);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      toast.success(`Uploaded: ${uploadedFile.name}`);
    }
  };

  const handleGetExcelFormat = () => {
    const link = document.createElement("a");
    link.href = "/path/to/sample-format.xlsx"; // Replace with actual path
    link.download = "SampleMaterialIssueFormat.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;

    if (field === "issueQty" || field === "unitCost") {
      const qty = parseFloat(updatedRows[index].issueQty) || 0;
      const cost = parseFloat(updatedRows[index].unitCost) || 0;
      updatedRows[index].totalAmt = (qty * cost).toFixed(2);
    }

    setRows(updatedRows);

    const isLastRow = index === rows.length - 1;
    const allFilled = Object.values(updatedRows[index]).every((val) => val !== "");
    if (isLastRow && allFilled) {
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
          totalAmt: updatedRows[index].issueQty
            ? (parseFloat(updatedRows[index].issueQty) * parseFloat(data.unitCost || 0)).toFixed(2)
            : "",
        };
        setRows(updatedRows);
      } else {
        toast.error("Product details not found");
      }
    } catch {
      toast.error("Failed to fetch product details");
    }
  };

  const validateForm = () => {
    if (!issueDate || !branchTo) {
      setDialog({
        isOpen: true,
        title: "Validation Error",
        message: "Please fill in Issue Date and Branch To.",
        onConfirm: () => setDialog({ ...dialog, isOpen: false }),
      });
      return false;
    }

    const filledRows = rows.filter((row) => row.productName && row.issueQty);

    if (filledRows.length === 0) {
      setDialog({
        isOpen: true,
        title: "Validation Error",
        message: "Please add at least one valid product row.",
        onConfirm: () => setDialog({ ...dialog, isOpen: false }),
      });
      return false;
    }

    for (let i = 0; i < filledRows.length; i++) {
      if (isNaN(filledRows[i].issueQty) || parseFloat(filledRows[i].issueQty) <= 0) {
        setDialog({
          isOpen: true,
          title: "Validation Error",
          message: `Invalid quantity in row ${i + 1}.`,
          onConfirm: () => setDialog({ ...dialog, isOpen: false }),
        });
        return false;
      }
    }

    return true;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    setDialog({
      isOpen: true,
      title: "Confirm Save",
      message: "Are you sure you want to save this Material Issue entry?",
      onConfirm: () => {
        const dataToSave = {
          issueDate,
          branchTo,
          isp,
          rows: rows.filter((r) => r.productName && r.issueQty), // only filled rows
        };

        fetch(API_URLS.MATERIAL_ISSUE, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSave),
        })
          .then((res) => res.json())
          .then(() => {
            toast.success("Material issue saved successfully!");
            handleCancel(); // Reset form
          })
          .catch(() => toast.error("Failed to save material issue"));

        setDialog({ ...dialog, isOpen: false });
      },
    });
  };

  const handleCancel = () => {
    setRows([initialRow]);
    setIssueDate("");
    setBranchTo("");
    setFile(null);
    
  };

  return (
    <div className="h-[85vh] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl p-8 bg-white border border-gray-300 rounded-2xl shadow-lg flex flex-col">
        <h2 className="text-center text-xl font-semibold p-2 mb-4">Material Issue</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Issue Date</label>
            <input
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-lg"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Issue No.</label>
            <input
              type="text"
              value={isp}
              readOnly
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-lg"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Branch To</label>
            <select
              value={branchTo}
              onChange={(e) => setBranchTo(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-lg"
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

        <div className="overflow-y-auto border border-gray-300 rounded-lg" style={{ maxHeight: "300px" }}>
          <table className="w-full text-left text-lg min-w-[800px]">
            <thead className="bg-gray-100 sticky top-0 z-10">
              <tr>
                <th className="border px-4 py-3">Sr.</th>
                <th className="border px-4 py-3">Product Name</th>
                <th className="border px-4 py-3">Product ID</th>
                <th className="border px-4 py-3">Barcode</th>
                <th className="border px-4 py-3">Issue Qty</th>
                <th className="border px-4 py-3">UOM</th>
                <th className="border px-4 py-3">Unit Cost</th>
                <th className="border px-4 py-3">Total Amt</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="bg-white">
                  <td className="border px-4 py-2 text-center">{index + 1}</td>
                  <td className="border px-4 py-2">
                    <select
                      value={row.productName}
                      onChange={(e) => handleProductChange(index, e.target.value)}
                      className="w-full p-2 border rounded text-sm"
                    >
                      <option value="">Select Product</option>
                      {productNames.map((product, idx) => (
                        <option key={idx} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>
                  </td>
                  {["productId", "barcode", "issueQty", "uom", "unitCost", "totalAmt"].map((field) => (
                    <td key={field} className="border px-4 py-2">
                      <input
                        type={field === "issueQty" || field === "unitCost" ? "number" : "text"}
                        className="w-full p-2 border rounded text-sm"
                        value={row[field]}
                        readOnly={field === "totalAmt"}
                        onChange={(e) => handleInputChange(index, field, e.target.value)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow text-lg hover:bg-blue-600"
            onClick={handleGetExcelFormat}
          >
            Get Excel Format
          </button>
          <div className="flex gap-3">
            <input type="file" accept=".xlsx, .xls" className="hidden" id="uploadExcel" onChange={handleFileUpload} />
            <label htmlFor="uploadExcel" className="px-6 py-3 bg-green-500 text-white rounded-lg shadow text-lg cursor-pointer hover:bg-green-600">
              Upload Excel
            </label>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow text-lg hover:bg-blue-600" onClick={handleSave}>
              Save
            </button>
            <button className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow text-lg hover:bg-gray-600" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>

      <CustomDialog
        isOpen={dialog.isOpen}
        title={dialog.title}
        message={dialog.message}
        onClose={() => setDialog({ ...dialog, isOpen: false })}
        onConfirm={dialog.onConfirm}
      />
    </div>
  );
};

export default MaterialIssue;
