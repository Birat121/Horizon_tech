import React, { useState } from "react";
import Papa from "papaparse";
import { API_URLS } from "../../../reusable inputs/config";

const ChartOfAccountExcel = () => {
  const [filePath, setFilePath] = useState("");
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFilePath(file.name);
      const reader = new FileReader();

      reader.onload = () => {
        Papa.parse(reader.result, {
          complete: (result) => {
            const data = result.data.filter(row => row.length >= 6); // Ensure correct row length

            const formattedData = data.map((row, index) => ({
              id: index + 1,
              categoryName: row[0]?.trim() || "",
              groupName: row[1]?.trim() || "",
              subGroup: row[2]?.trim() || "",
              subGroup1: row[3]?.trim() || "",
              subGroup2: row[4]?.trim() || "",
              accountHead: row[5]?.trim() || "",
            }));

            // Basic client-side validation: skip rows with all fields empty
            const validData = formattedData.filter(item =>
              Object.values(item).some(value => value !== "")
            );

            if (validData.length === 0) {
              showToast("Invalid CSV or empty rows.", "error");
              return;
            }

            setTableData(validData);
            showToast("CSV parsed successfully.");
          },
          header: false,
        });
      };

      reader.readAsText(file);
    }
  };

  const handleUpload = async () => {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (!file) {
      showToast("Please select a file first.", "error");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(API_URLS.IMPORT_COA, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        showToast(`Imported ${result.count} records.`);
        setTableData([]); // Clear table after success
        setFilePath("");
      } else {
        showToast(result.error || "Upload failed", "error");
      }
    } catch (err) {
      showToast(err.message || "Upload error", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadTemplate = () => {
    const csvHeaders = ["Category Name", "Group Name", "Sub Group", "Sub Group(1)", "Sub Group(2)", "Account Head"];
    const csvContent = [csvHeaders.join(",")].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "chart_of_accounts_template.csv";
    link.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col md:flex-row h-[87vh] bg-white border-2 rounded-lg shadow-lg ml-8 relative">
      {/* Sidebar */}
      <div className="w-full md:w-1/6 bg-gray-300 text-white flex md:flex-col flex-row md:items-center md:py-4 py-2">
        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-1/4 md:w-5/6 py-2 md:py-3 mb-2 md:mb-4 bg-save hover:bg-save-hover rounded text-sm md:text-base"
        >
          {loading ? "Saving..." : "Save"}
        </button>
        <button
          onClick={() => {
            setTableData([]);
            setFilePath("");
          }}
          className="w-1/4 md:w-5/6 py-2 md:py-3 mb-2 md:mb-4 bg-cancel hover:bg-cancel-hover rounded text-sm md:text-base"
        >
          Cancel
        </button>
        <button
          onClick={handleDownloadTemplate}
          className="w-1/4 md:w-5/6 py-2 md:py-3 mt-2 md:mt-96 bg-green-600 hover:bg-green-800 rounded text-sm md:text-base"
        >
          Get Excel
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-4">
        {/* File Path Input */}
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
              accept=".csv"
              onChange={handleFileChange}
              className="hidden"
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
                <th className="border border-gray-300 p-2">Group Name</th>
                <th className="border border-gray-300 p-2">Sub Group</th>
                <th className="border border-gray-300 p-2">Sub Group(1)</th>
                <th className="border border-gray-300 p-2">Sub Group(2)</th>
                <th className="border border-gray-300 p-2">Account Head</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td className="border border-gray-300 p-2">{row.id}</td>
                  <td className="border border-gray-300 p-2">{row.categoryName}</td>
                  <td className="border border-gray-300 p-2">{row.groupName}</td>
                  <td className="border border-gray-300 p-2">{row.subGroup}</td>
                  <td className="border border-gray-300 p-2">{row.subGroup1}</td>
                  <td className="border border-gray-300 p-2">{row.subGroup2}</td>
                  <td className="border border-gray-300 p-2">{row.accountHead}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div
          className={`absolute bottom-4 right-4 px-4 py-2 rounded shadow-lg text-white ${
            toast.type === "error" ? "bg-red-500" : "bg-green-600"
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default ChartOfAccountExcel;

