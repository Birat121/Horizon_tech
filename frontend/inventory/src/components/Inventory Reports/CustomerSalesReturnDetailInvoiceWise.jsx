import React, { useState } from "react";

const CustomerSalesReturnDetailInvoiceWise = () => {
  const [transactionType, setTransactionType] = useState(""); // Voucher type state
  const [selectedCustomerType, setSelectedCustomerType] = useState(""); // "all" or "particulars"
  const [fromDate1, setFromDate1] = useState(""); // First "From" date
  const [toDate1, setToDate1] = useState(""); // First "To" date
  const [fromDate2, setFromDate2] = useState(""); // Second "From" date
  const [toDate2, setToDate2] = useState(""); // Second "To" date
  const [reportType, setReportType] = useState("Invoice Wise"); // Report type state

  const handleCustomerTypeChange = (type) => {
    setSelectedCustomerType(type);
  };

  return (
    <div className="flex flex-col h-[90vh] rounded-lg overflow-y-auto bg-gray-50">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
        <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2">
            Customer Sales / Sales Return Invoice Wise
          </h1>
          {/* Voucher Type Radio Buttons */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">
              Select Transaction Type Here
            </label>
            <label className="block">
              <input
                type="radio"
                name="transactionType"
                value="Sales Invoice"
                checked={transactionType === "Sales Invoice"}
                onChange={(e) => setTransactionType(e.target.value)}
                className="mr-2"
              />
              Sales Invoice
            </label>
            <label className="block">
              <input
                type="radio"
                name="transactionType"
                value="Sales Return Invoice"
                checked={transactionType === "Sales Return Invoice"}
                onChange={(e) => setTransactionType(e.target.value)}
                className="mr-2"
              />
              Sales Return Invoice
            </label>
          </div>

          {/* Report Type Radio Buttons */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">
              Select Customer Type Here
            </label>
            <label className="block">
              <input
                type="radio"
                name="productType"
                value="all"
                className="mr-2"
                onChange={() => handleCustomerTypeChange("all")}
                checked={selectedCustomerType === "all"}
              />
              All Customers
            </label>
            <label className="block">
              <input
                type="radio"
                name="productType"
                value="particulars"
                className="mr-2"
                onChange={() => handleCustomerTypeChange("particulars")}
                checked={selectedCustomerType === "particulars"}
              />
              Particular Customer
            </label>
          {/* Dropdown for Particulars */}
          {selectedCustomerType === "particulars" && (
            <div className="mb-4 mt-4">
              <select className="w-full p-2 border border-gray-400 rounded">
                <option>Select Category</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
            </div>
          )}
          </div>

          {/* Report Type Selection */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">
              Select Report Type Here
            </label>
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
          </div>

          {/* Date Selection */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">
              Select Date Here
            </label>
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
            <button className="w-full flex items-center justify-center p-3 bg-preview text-white rounded hover:bg-preview-hover">
              <i className="fa fa-search mr-2"></i> Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSalesReturnDetailInvoiceWise;
