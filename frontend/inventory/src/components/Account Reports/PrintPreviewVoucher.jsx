import React, { useState } from "react";

const PrintPreviewVoucher = () => {
  const [selectedReportType, setSelectedReportType] = useState(""); // "all" or "particulars"
  const [fromDate1, setFromDate1] = useState(""); // First "From" date
  const [toDate1, setToDate1] = useState(""); // First "To" date
  const [fromDate2, setFromDate2] = useState(""); // Second "From" date
  const [toDate2, setToDate2] = useState(""); // Second "To" date
  const [voucherType, setVoucherType] = useState("Journal Voucher");

  const handleReportTypeChange = (type) => {
    setSelectedReportType(type);
  };

  return (
    <div className="flex flex-col h-[90vh] rounded-lg overflow-hidden bg-gray-50">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300 ">
          <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2">
            Print Preview Voucher
          </h1>
          {/* Select Date Section */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">Select Date Here</label>

            {/* First Date Picker */}
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

            {/* Second Date Picker */}
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

          {/* Radio Buttons */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">
              Select Voucher Typer Here
            </label>
            <label className="block">
              <input
                type="radio"
                name="Journal Voucher"
                value="Journal Voucher"
                checked={voucherType === "Journal Voucher"}
                onChange={(e) => setVoucherType(e.target.value)}
                className="mr-2"
              />
              Journal Voucher
            </label>

            <label className="block">
              <input
                type="radio"
                name="Journal Voucher"
                value="Journal Voucher"
                checked={voucherType === "Journal Voucher"}
                onChange={(e) => setVoucherType(e.target.value)}
                className="mr-2"
              />
              Receipt Voucher
            </label>

            <label className="block">
              <input
                type="radio"
                name="Journal Voucher"
                value="Journal Voucher"
                checked={voucherType === "Journal Voucher"}
                onChange={(e) => setVoucherType(e.target.value)}
                className="mr-2"
              />
              Payment Voucher
            </label>
          </div>

          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">
              Select Report Type Here
            </label>

            <label className="block">
              <input
                type="radio"
                name="productType"
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
                name="productType"
                value="particulars"
                className="mr-2"
                onChange={() => handleReportTypeChange("particulars")}
                checked={selectedReportType === "particulars"}
              />
              Particular Voucher
            </label>

            {/* Dropdown for Particulars Category */}
            {selectedReportType === "particulars" && (
              <div className="mb-4">
                <select className="w-full p-2 border border-gray-400 rounded mb-2">
                  <option>Select Category</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                </select>
              </div>
            )}
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

export default PrintPreviewVoucher;
