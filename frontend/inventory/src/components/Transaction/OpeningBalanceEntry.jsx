import React, { useState, useEffect } from "react";
import Papa from "papaparse"; // Import PapaParse for CSV parsing
import { toast } from "react-toastify";
import { API_URLS } from "../../reusable inputs/config";

const OpeningBalanceEntry = () => {
  const [filePath, setFilePath] = useState("");
  const [accountHeads, setAccountHeads] = useState([]); // State to hold account head values
  const [tableData, setTableData] = useState([]); // State to hold the parsed table data
  const [selectedAccountHead, setSelectedAccountHead] = useState(""); // State to track selected account head

  // Fetch account heads from the backend on component mount
  useEffect(() => {
    const fetchAccountHeads = async () => {
      try {
        const response = await fetch(API_URLS.GET_ACCOUNT_HEADS); // Replace with your backend endpoint
        const data = await response.json();
        setAccountHeads(data); // Assume the response is an array of account head names or IDs
      } catch (error) {
        console.error("Error fetching account heads:", error);
      }
    };
    
    fetchAccountHeads();
  }, []);

  // Handle file selection and parse it
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFilePath(file.name); // Set the file name in the input
      const reader = new FileReader();
      reader.onload = () => {
        // Parse CSV content when the file is loaded
        const fileContent = reader.result;
        Papa.parse(fileContent, {
          complete: (result) => {
            const data = result.data;
            // Assuming the CSV structure is: Account Head, Debit, Credit
            const formattedData = data.map((row, index) => ({
              id: index + 1,
              accountHead: row[0],
              debit: row[1],
              credit: row[2],
            }));
            setTableData(formattedData); // Populate table with parsed data
          },
          header: false, // If no header row exists
        });
      };
      reader.readAsText(file);
    }
  };

  const handleAccountHeadChange = (e) => {
    setSelectedAccountHead(e.target.value); // Update the selected account head
  };
  const handleDownloadTemplate = () => {
  const csvHeaders = [
    "AccountHead",
    
    "Debit",
    "Credit",
  ];
  const csvContent = [csvHeaders.join(",")].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "opening_balance_template.csv";
  link.click();
  window.URL.revokeObjectURL(url);
};

  // Handle the form submission and upload the CSV data to backend
  const handleSave = async () => {
    if (tableData.length === 0) {
     toast.error("No data to upload.");
      return;
    }

    try {
      const response = await fetch(API_URLS.IMPORT_OPENING_BALANCE, {
        method: "POST",
        body: JSON.stringify(tableData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (response.ok) {
       toast.success("Data uploaded successfully.");
      } else {
       toast.error("Failed to upload data.");
      }
    } catch (error) {
      console.error("Error uploading data:", error);
     toast.error("Failed to upload data.");
    }

    
  };

  

  return (
    <div className="flex flex-col md:flex-row h-[85vh] bg-white border-2 rounded-lg shadow-lg ml-8">
      {/* Sidebar */}
      <div className="w-full md:w-1/6 bg-gray-300 text-white flex md:flex-col flex-row md:items-center md:py-4 py-2">
        <button
          onClick={handleSave}
          className="w-1/4 md:w-5/6 py-2 md:py-3 mb-2 md:mb-4 bg-save hover:bg-save-hover rounded text-sm md:text-base"
        >
          Save
        </button>
        <button
          className="w-1/4 md:w-5/6 py-2 md:py-3 mb-2 md:mb-4 bg-cancel hover:bg-cancel-hover rounded text-sm md:text-base"
        >
          Cancel
        </button>
        <button className="w-1/4 md:w-5/6 py-2 md:py-3 mb-2 md:mb-4 bg-modify hover:bg-modify-hover rounded text-sm md:text-base">
          Modify
        </button>
        <button className="w-1/4 md:w-5/6 py-2 md:py-3 mb-2 md:mb-4 bg-blue-600 hover:bg-blue-800 rounded text-sm md:text-base">
          Delete
        </button>
        <button className="w-1/4 md:w-5/6 py-2 md:py-3 mt-2 md:mt-4 bg-green-600 hover:bg-green-800 rounded text-sm md:text-base"
         onClick={handleDownloadTemplate}>
       
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
                <th className="border border-gray-300 p-2">Account Head</th>
                <th className="border border-gray-300 p-2">Debit</th>
                <th className="border border-gray-300 p-2">Credit</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{row.id}</td>
                  <td className="border border-gray-300 p-2">
                    <select
                      value={row.accountHead}
                      onChange={(e) => {
                        const updatedTableData = [...tableData];
                        updatedTableData[index].accountHead = e.target.value;
                        setTableData(updatedTableData);
                      }}
                      className="border border-gray-400 rounded p-2 w-full"
                    >
                      <option value="">Select Account Head</option>
                      {accountHeads.map((accountHead, index) => (
                        <option key={index} value={accountHead.id}>
                          {accountHead.name}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="border border-gray-300 p-2">{row.debit}</td>
                  <td className="border border-gray-300 p-2">{row.credit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OpeningBalanceEntry;
