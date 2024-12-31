import React, { useState } from "react";

const VendorPurchaseReturnDetailInvoiceWise = () => {
  const [transactionType, setTransactionType] = useState("Purchase"); // Voucher type state
  const [reportType, setReportType] = useState("Invoice Wise"); // Report type state

  const [fromDate1, setFromDate1] = useState(""); // First "From" date
  const [toDate1, setToDate1] = useState(""); // First "To" date
  const [fromDate2, setFromDate2] = useState(""); // Second "From" date
  const [toDate2, setToDate2] = useState(""); // Second "To" date
  const [vendorType, setVendorType] = useState("All Vendors");

  const handleVendorTypeChange = (type) => {
    setVendorType(type);
  };

  return (
    <div className="flex flex-col h-[90vh] rounded-lg overflow-y-auto bg-gray-50">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
          {/* Voucher Type Radio Buttons */}
          {/* Transaction Type Radio Buttons */}
          <fieldset className="flex flex-col mb-6">
            <legend className="text-lg font-bold mb-4">
              Select Transaction Type here...
            </legend>
            <label className="block">
              <input
                type="radio"
                name="transactionType"
                value="Purchase"
                checked={transactionType === "Purchase"}
                onChange={(e) => setTransactionType(e.target.value)}
                className="mr-2"
              />
              Purchase Invoice
            </label>
            <label className="block">
              <input
                type="radio"
                name="transactionType"
                value="Purchase Return"
                checked={transactionType === "Purchase Return"}
                onChange={(e) => {
                  setTransactionType(e.target.value);
                }}
                className="mr-2"
              />
              Purchase Return Invoice
            </label>
          </fieldset>

          <fieldset className="mb-4">
            <legend className="text-lg font-bold mb-4">
              Select Vendor Type here...
            </legend>
            <label className="block">
              <input
                type="radio"
                name="vendorType"
                value="All Vendors"
                className="mr-2"
                onChange={() => handleVendorTypeChange("All Vendors")}
                checked={vendorType === "All Vendors"} // Corrected comparison
              />
              All Vendors
            </label>
            <label className="block">
              <input
                type="radio"
                name="vendorType"
                value="Particular Vendor"
                className="mr-2"
                onChange={() => handleVendorTypeChange("Particular Vendor")}
                checked={vendorType === "Particular Vendor"} // Corrected comparison
              />
              Particular Vendor
            </label>
          </fieldset>

          {/* Dropdown for Particulars */}
          {vendorType === "Particular Vendor" && (
            <div className="mb-4">
              <select className="w-full p-2 border border-gray-400 rounded">
                <option>Select Category</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
            </div>
          )}

          <fieldset className="flex flex-col mb-6">
            <legend className="text-lg font-bold mb-4">
              Select Report Type here...
            </legend>
            <label className="block">
              <input
                type="radio"
                name="reportType"
                value="Invoice Wise"
                checked={reportType === "Invoice Wise"}
                onChange={(e) => setReportType(e.target.value)}
                className="mr-2"
              />
              Invoice Wise
            </label>
            <label className="block">
              <input
                type="radio"
                name="reportType"
                value="Summary Only"
                checked={reportType === "Summary Only"}
                onChange={(e) => setReportType(e.target.value)}
                className="mr-2"
              />
              Summary Only
            </label>
          </fieldset>

          {/* Date Selection */}
          <div className="mb-6">
            <h3 className="text-md font-semibold mb-2">Select Date here...</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <label className="font-medium mb-1">From:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={fromDate1}
                  onChange={(e) => setFromDate1(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium mb-1">To:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={toDate1}
                  onChange={(e) => setToDate1(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-medium mb-1">From:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={fromDate2}
                  onChange={(e) => setFromDate2(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium mb-1">To:</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={toDate2}
                  onChange={(e) => setToDate2(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4 mt-10">
            <button className="w-full flex items-center justify-center p-3 bg-green-500 text-white rounded hover:bg-green-600">
              <i className="fa fa-search mr-2"></i> Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorPurchaseReturnDetailInvoiceWise;
