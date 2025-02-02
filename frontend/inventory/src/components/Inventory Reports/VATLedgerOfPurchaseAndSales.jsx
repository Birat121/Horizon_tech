import React, { useState, useEffect } from "react";

const VATLedgerOfPurchaseAndSales = () => {
  const [radioValue, setRadioValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);

  useEffect(() => {
    const fetchDropdownOptions = async () => {
      try {
        const response = await fetch(
          "https://your-backend-api.com/dropdown-options"
        );
        const data = await response.json();
        setDropdownOptions(data); // Assuming `data` is an array of options
      } catch (error) {
        console.error("Error fetching dropdown options:", error);
      }
    };
    fetchDropdownOptions();
  }, []);

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await fetch(
          `https://your-backend-api.com/table-data?filter=${radioValue}`
        );
        const { headers, data } = await response.json();
        setTableHeaders(headers); // Headers for the table
        setTableData(data); // Data for the table rows
      } catch (error) {
        console.error("Error fetching table data:", error);
      }
    };
    fetchTableData();
  }, [radioValue]);

  const fetchData = async (type) => {
    try {
      const response = await fetch(
        `https://your-backend-api.com/data?radio=${radioValue}&dropdown=${dropdownValue}&type=${type}`
      );
      const data = await response.json();
      console.log("Fetched Data:", data);
      // Handle data here (e.g., display it in the UI)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col h-[90vh] shadow-lg rounded-lg overflow-y-auto bg-gray-50">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
          <div className="bg-green-600 text-white text-lg font-semibold p-2 rounded-md mb-2">
            VAT Ledger of Purchase and Sales
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Select Report Type Here
              </label>
              <input
                type="radio"
                name="reportType"
                value="Purchase"
                checked={radioValue === "Purchase"}
                onChange={(e) => setRadioValue(e.target.value)}
                className="mr-2"
              />
              <label className="text-gray-700">Purchase</label>
              <br />
              <input
                type="radio"
                name="reportType"
                value="Sales"
                checked={radioValue === "Sales"}
                onChange={(e) => setRadioValue(e.target.value)}
                className="mr-2"
              />
              Sales
              <br />
              <input
                type="radio"
                name="reportType"
                value="PurchaseReturn"
                checked={radioValue === "PurchaseReturn"}
                onChange={(e) => setRadioValue(e.target.value)}
                className="mr-2"
              />
              Purchase Return
              <br />
              <input
                type="radio"
                name="reportType"
                value="SalesReturn"
                checked={radioValue === "SalesReturn"}
                onChange={(e) => setRadioValue(e.target.value)}
                className="mr-2"
              />
              Sales Return
              <br />
              {/* Dropdown Menu */}
              <select
                value={dropdownValue}
                onChange={(e) => setDropdownValue(e.target.value)}
                className="border rounded p-2 mt-4 w-full"
              >
                <option value="">Select an option</option>
                {dropdownOptions.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="mt-16">
                <input
                  type="radio"
                  name="reportType"
                  value="MonthWiseSummary"
                  checked={radioValue === "MonthWiseSummary"}
                  onChange={(e) => setRadioValue(e.target.value)}
                  className="mr-2"
                />
                Month Wise Summary
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => fetchData("grid")}
              className="px-6 py-2 bg-save text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
            >
              On Grid
            </button>
            <button
              onClick={() => fetchData("preview")}
              className="px-6 py-2 bg-preview text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
            >
              Preview
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 mt-56">
            <label className="block text-gray-700 font-semibold mb-2">
              Select Order By Here
            </label>
            <input
              type="radio"
              name="orderBy"
              value="BillNo"
              checked={radioValue === "BillNo"}
              onChange={(e) => setRadioValue(e.target.value)}
              className="mr-2"
            />
            Bill No
            <br />
            <input
              type="radio"
              name="orderBy"
              value="invoiceDate"
              checked={radioValue === "invoiceDate"}
              onChange={(e) => setRadioValue(e.target.value)}
              className="mr-2"
            />
            Invoice Date
          </div>
        </div>
      </div>
    </div>
  );
};

export default VATLedgerOfPurchaseAndSales;
