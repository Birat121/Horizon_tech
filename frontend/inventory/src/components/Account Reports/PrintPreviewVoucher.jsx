import React, { useState } from "react";

const PrintPreviewVoucher = () => {
  const [selectedReportType, setSelectedReportType] = useState("");
  const [fromDate1, setFromDate1] = useState("");
  const [toDate1, setToDate1] = useState("");
  const [fromDate2, setFromDate2] = useState("");
  const [toDate2, setToDate2] = useState("");
  const [voucherType, setVoucherType] = useState("Journal Voucher");

  const handleReportTypeChange = (type) => {
    setSelectedReportType(type);
  };

  return (
    <div className="flex flex-col h-full bg-white border-2 rounded-lg shadow-lg overflow-y-auto p-4 ml-14">
      {/* Filtering Options */}
      <div className="bg-white shadow-md rounded-md p-2 mb-2">
        <h2 className="text-xl text-center font-semibold mb-6">Print Preview Voucher</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
          <div className="flex flex-col">
            <label className="font-medium mb-1">From:</label>
            <input
              type="date"
              className="border p-1 rounded w-full"
              value={fromDate1}
              onChange={(e) => setFromDate1(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">To:</label>
            <input
              type="date"
              className="border p-1 rounded w-full"
              value={toDate1}
              onChange={(e) => setToDate1(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
          <div className="flex flex-col">
            <label className="font-medium mb-1">From:</label>
            <input
              type="date"
              className="border p-1 rounded w-full"
              value={fromDate2}
              onChange={(e) => setFromDate2(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">To:</label>
            <input
              type="date"
              className="border p-1 rounded w-full"
              value={toDate2}
              onChange={(e) => setToDate2(e.target.value)}
            />
          </div>
        </div>

        {/* Voucher Type Selection */}
        <div className="mb-2">
          <label className="block font-semibold mb-1">Select Voucher Type</label>
          {[
            "Journal Voucher",
            "Receipt Voucher",
            "Payment Voucher",
          ].map((type) => (
            <label key={type} className="block">
              <input
                type="radio"
                name="voucherType"
                value={type}
                checked={voucherType === type}
                onChange={(e) => setVoucherType(e.target.value)}
                className="mr-2"
              />
              {type}
            </label>
          ))}
        </div>

        {/* Report Type Selection */}
        <div className="mb-2">
          <label className="block font-semibold mb-1">Select Report Type</label>
          <label className="block">
            <input
              type="radio"
              name="reportType"
              value="all"
              className="mr-2"
              onChange={() => handleReportTypeChange("all")}
              checked={selectedReportType === "all"}
            />
            All Vouchers
          </label>
          <label className="block">
            <input
              type="radio"
              name="reportType"
              value="particulars"
              className="mr-2"
              onChange={() => handleReportTypeChange("particulars")}
              checked={selectedReportType === "particulars"}
            />
            Particular Voucher
          </label>

          {selectedReportType === "particulars" && (
            <select className="w-full p-1 border border-gray-400 rounded mt-1">
              <option>Select Category</option>
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
            </select>
          )}
        </div>

        {/* Preview Button */}
        <button className="w-full flex items-center justify-center p-2 bg-preview text-white rounded hover:bg-preview-hover">
          <i className="fa fa-search mr-2"></i> Preview
        </button>
      </div>

      {/* Reports Section */}
      <div className="flex-1 bg-gray-50 p-6 shadow-md rounded-md overflow-auto h-[70vh]">
        <h2 className="text-lg font-semibold mb-4">Report Preview</h2>
        {/* Report Table or Crystal Report Viewer Goes Here */}
        <div className="border p-4 bg-white rounded-md h-screen flex items-center justify-center">
          <p className="text-gray-500">Report content will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default PrintPreviewVoucher;


