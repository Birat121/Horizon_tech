import React, { useState } from "react";
import Papa from "papaparse";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URLS } from "../../../reusable inputs/config";

const ProductInformationExcel = () => {
  const [filePath, setFilePath] = useState("");
  const [tableData, setTableData] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setFilePath(selectedFile.name);

    const reader = new FileReader();
    reader.onload = () => {
      const fileContent = reader.result;
      Papa.parse(fileContent, {
        complete: (result) => {
          const rawData = result.data;

          const formattedData = rawData
            .filter((row) => row.length >= 8 && row.some(cell => cell && cell.trim() !== ""))
            .map((row, index) => ({
              id: index + 1,
              categoryName: row[0]?.trim() || "",
              subCategory: row[1]?.trim() || "",
              uom: row[2]?.trim() || "",
              barcode: row[3]?.trim() || "",
              productName: row[4]?.trim() || "",
              unitCost: row[5]?.trim() || "",
              saleRate: row[6]?.trim() || "",
              wholesale: row[7]?.trim() || "",
            }));

          if (formattedData.length === 0) {
            toast.error("CSV is empty or invalid.");
          } else {
            setTableData(formattedData);
            toast.success("CSV parsed successfully.");
          }
        },
        header: false,
      });
    };

    reader.readAsText(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        API_URLS.IMPORT_PRODUCT,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200) {
        toast.success("File uploaded successfully!");
        setTableData([]);
        setFilePath("");
        setFile(null);
      } else {
        toast.error("Upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("An error occurred while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadTemplate = () => {
    const csvHeaders = [
      "Category Name",
      "Sub Category",
      "UOM",
      "Barcode",
      "Product Name",
      "Unit Cost",
      "Sale Rate",
      "Wholesale",
    ];
    const csvContent = [csvHeaders.join(",")].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "product_template.csv";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const handleCancel = () => {
    setFile(null);
    setFilePath("");
    setTableData([]);
  };

  return (
    <div className="flex flex-col md:flex-row h-[87vh] bg-white border-2 rounded-lg shadow-lg ml-8 relative">
      {/* Sidebar */}
      <div className="w-full md:w-1/6 bg-gray-300 text-white flex md:flex-col flex-row md:items-center md:py-4 py-2">
        <button
          className="w-1/4 md:w-5/6 py-2 md:py-3 mb-2 md:mb-4 bg-save hover:bg-save-hover rounded text-sm md:text-base"
          onClick={handleUpload}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </button>
        <button
          className="w-1/4 md:w-5/6 py-2 md:py-3 mb-2 md:mb-4 bg-cancel hover:bg-cancel-hover rounded text-sm md:text-base"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="w-1/4 md:w-5/6 py-2 md:py-3 mt-2 md:mt-96 bg-green-600 hover:bg-green-800 rounded text-sm md:text-base"
          onClick={handleDownloadTemplate}
        >
          Get Excel
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-4">
        <div className="flex items-center space-x-4 mb-4">
          <label className="font-semibold text-lg">File Path</label>
          <input
            type="text"
            value={filePath}
            readOnly
            className="border border-gray-400 rounded p-2 flex-1"
          />
          <div>
            <label
              htmlFor="fileInput"
              className="px-4 py-2 bg-gray-200 border border-gray-400 rounded cursor-pointer hover:bg-gray-300"
            >
              ...
            </label>
            <input
              id="fileInput"
              type="file"
              onChange={handleFileChange}
              className="hidden"
              accept=".csv"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Sr.</th>
                <th className="border border-gray-300 p-2">Category Name</th>
                <th className="border border-gray-300 p-2">Sub Category</th>
                <th className="border border-gray-300 p-2">UOM</th>
                <th className="border border-gray-300 p-2">Barcode</th>
                <th className="border border-gray-300 p-2">Product Name</th>
                <th className="border border-gray-300 p-2">Unit Cost</th>
                <th className="border border-gray-300 p-2">Sale Rate</th>
                <th className="border border-gray-300 p-2">Wholesale</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td className="border border-gray-300 p-2">{row.id}</td>
                  <td className="border border-gray-300 p-2">{row.categoryName}</td>
                  <td className="border border-gray-300 p-2">{row.subCategory}</td>
                  <td className="border border-gray-300 p-2">{row.uom}</td>
                  <td className="border border-gray-300 p-2">{row.barcode}</td>
                  <td className="border border-gray-300 p-2">{row.productName}</td>
                  <td className="border border-gray-300 p-2">{row.unitCost}</td>
                  <td className="border border-gray-300 p-2">{row.saleRate}</td>
                  <td className="border border-gray-300 p-2">{row.wholesale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductInformationExcel;
