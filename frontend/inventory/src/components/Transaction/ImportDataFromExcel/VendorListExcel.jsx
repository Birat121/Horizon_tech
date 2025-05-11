import React, { useState } from "react";
import Papa from "papaparse";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URLS } from "../../../reusable inputs/config";

const VendorListExcel = () => {
  const [filePath, setFilePath] = useState("");
  const [tableData, setTableData] = useState([]);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFilePath(selectedFile.name);

      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result;
        Papa.parse(fileContent, {
          complete: (result) => {
            const data = result.data;
            const formattedData = data.map((row, index) => ({
              id: index + 1,
              groupName: row[0],
              vendorName: row[1],
              address: row[2],
              phoneNo: row[3],
              mobileNo: row[4],
              panNo: row[5],
              contactPerson: row[6],
            }));
            setTableData(formattedData);
          },
          header: false,
        });
      };
      reader.readAsText(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        API_URLS.IMPORT_VENDOR,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        toast.success(`Vendors imported successfully. Total: ${response.data.count}`);
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Failed to upload file.");
    }
  };

  const handleDownloadTemplate = () => {
  const csvHeaders = [
    "GroupName",
    "VendorName",
    "Address",
    "PhoneNo",
    "MobileNo",
    "PanNo",
    "ContactPerson",
  ];
  const csvContent = [csvHeaders.join(",")].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "vendor_template.csv";
  link.click();
  window.URL.revokeObjectURL(url);
};

const handleCancel = () => {
  setFile(null);
  setFilePath("");
  setTableData([]);
};


  return (
    <div className="flex flex-col md:flex-row h-[87vh] bg-white border-2 rounded-lg shadow-lg ml-8">
      {/* Sidebar */}
      <div className="w-full md:w-1/6 bg-gray-300 text-white flex md:flex-col flex-row md:items-center md:py-4 py-2">
        <button
          onClick={handleUpload}
          className="w-1/4 md:w-5/6 py-2 md:py-3 mb-2 md:mb-4 bg-save hover:bg-save-hover rounded text-sm md:text-base"
        >
          Save
        </button>
        <button className="w-1/4 md:w-5/6 py-2 md:py-3 mb-2 md:mb-4 bg-cancel hover:bg-cancel-hover rounded text-sm md:text-base"
        onClick={handleCancel}>
          Cancel
        </button>
        <button className="w-1/4 md:w-5/6 py-2 md:py-3 mt-2 md:mt-96 bg-green-600 hover:bg-green-800 rounded text-sm md:text-base"
        onClick={handleDownloadTemplate}>
        
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
              accept=".csv"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Sr.</th>
                <th className="border border-gray-300 p-2">GroupName</th>
                <th className="border border-gray-300 p-2">Vendor Name</th>
                <th className="border border-gray-300 p-2">Address</th>
                <th className="border border-gray-300 p-2">PhoneNo</th>
                <th className="border border-gray-300 p-2">MobileNo</th>
                <th className="border border-gray-300 p-2">PanNo</th>
                <th className="border border-gray-300 p-2">ContactPerson</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td className="border border-gray-300 p-2">{row.id}</td>
                  <td className="border border-gray-300 p-2">{row.groupName}</td>
                  <td className="border border-gray-300 p-2">{row.vendorName}</td>
                  <td className="border border-gray-300 p-2">{row.address}</td>
                  <td className="border border-gray-300 p-2">{row.phoneNo}</td>
                  <td className="border border-gray-300 p-2">{row.mobileNo}</td>
                  <td className="border border-gray-300 p-2">{row.panNo}</td>
                  <td className="border border-gray-300 p-2">{row.contactPerson}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default VendorListExcel;
