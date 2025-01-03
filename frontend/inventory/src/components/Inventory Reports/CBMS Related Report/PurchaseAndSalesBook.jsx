import React, { useState, useEffect } from "react";
import axios from "axios";

const PurchaseAndSalesBook = () => {
  const [selectedVendorType, setSelectedVendorType] = useState(""); // Tracks selected vendor type
  const [selectedPurchaseDateType, setSelectedPurchaseDateType] = useState(""); // Tracks selected purchase date type
  const [transactionType, setTransactionType] = useState("Purchase");
  const [fromDate1, setFromDate1] = useState(""); // First "From" date
  const [toDate1, setToDate1] = useState(""); // First "To" date
  const [fromDate2, setFromDate2] = useState(""); // Second "From" date
  const [toDate2, setToDate2] = useState(""); // Second "To" date
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the backend
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://your-backend-url/api/categories");
        setCategories(response.data); // Assume the API returns an array of categories
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);


  const handleVendorTypeChange = (type) => {
    setSelectedVendorType(type);
  };

  const handlePurchaseDateChange = (type) => {
    setSelectedPurchaseDateType(type);
  };

  return (
    <div className="flex flex-col h-[90vh] rounded-lg overflow-y-auto bg-gray-50">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
          <div className="bg-green-600 text-white text-lg font-semibold p-2 rounded-md mb-2">
            Purchase And Sales Book
          </div>
          {/* Till Purchase Date */}
          <div className="bg-white shadow-md rounded-b-md p-4">
            {/* Report Between Date */}
            <div className="border border-gray-300 p-4 rounded mb-4">
              <label className="block font-semibold mb-2">Select On Date Here</label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="purchaseDate"
                  value="tillPurchaseDate"
                  className="mr-2"
                  onChange={() => handlePurchaseDateChange("tillPurchaseDate")}
                  checked={selectedPurchaseDateType === "tillPurchaseDate"}
                />
                Report On Date
              </label>
              <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
                <input
                  type="date"
                  className="border p-2 w-full"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  disabled={selectedPurchaseDateType !== "tillPurchaseDate"}
                />
                <input
                  type="date"
                  className="border p-2 w-full"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  disabled={selectedPurchaseDateType !== "tillPurchaseDate"}
                />
              </div>
            </div>

            {/* Selected Purchase Date */}
            <div className="border border-gray-300 p-4 rounded mb-4">
              <h3 className="text-md font-semibold mb-2">
                Select Date Range Here..
              </h3>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="purchaseDate"
                  value="selectedPurchaseDate"
                  className="mr-2"
                  onChange={() =>
                    handlePurchaseDateChange("selectedPurchaseDate")
                  }
                  checked={selectedPurchaseDateType === "selectedPurchaseDate"}
                />
                Date Between(Solved Date)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="font-medium mb-1">From:</label>
                  <input
                    type="date"
                    className="border p-2 rounded w-full"
                    value={fromDate1}
                    onChange={(e) => setFromDate1(e.target.value)}
                    disabled={
                      selectedPurchaseDateType !== "selectedPurchaseDate"
                    }
                  />
                  <label className="font-medium mb-1">From:</label>
                  <input
                    type="date"
                    className="border p-2 rounded w-full"
                    value={fromDate2}
                    onChange={(e) => setToDate2(e.target.value)}
                    disabled={
                      selectedPurchaseDateType !== "selectedPurchaseDate"
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium mb-1">To:</label>
                  <input
                    type="date"
                    className="border p-2 rounded w-full"
                    value={toDate1}
                    onChange={(e) => setToDate1(e.target.value)}
                    disabled={
                      selectedPurchaseDateType !== "selectedPurchaseDate"
                    }
                  />
                  <label className="font-medium mb-1">To:</label>
                  <input
                    type="date"
                    className="border p-2 rounded w-full"
                    value={toDate2}
                    onChange={(e) => setFromDate2(e.target.value)}
                    disabled={
                      selectedPurchaseDateType !== "selectedPurchaseDate"
                    }
                  />
                </div>
              </div>
            </div>

            {/* Transaction Type */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-4">
              Select Transaction Type Here
            </label>
            <div className="grid grid-cols-2 gap-4">
              {/* Transaction type radio buttons */}
              {["Purchase", "Purchase Return", "Sales", "Sales Return"].map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="radio"
                    name="transactionType"
                    value={type}
                    checked={transactionType === type}
                    onChange={(e) => setTransactionType(e.target.value)}
                    className="mr-2"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>


            {/* Vendor Type Radio Group */}
            <div className="border border-gray-300 p-4 rounded mb-4">
              <h2 className="text-lg font-bold mb-2">
                Select Customer Type here...
              </h2>
              <label className="block">
                <input
                  type="radio"
                  name="vendorType"
                  value="allVendor"
                  className="mr-2"
                  onChange={() => handleVendorTypeChange("allVendor")}
                  checked={selectedVendorType === "allVendor"}
                />
                All Vendor/customer
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="vendorType"
                  value="particularVendor"
                  className="mr-2"
                  onChange={() => handleVendorTypeChange("particularVendor")}
                  checked={selectedVendorType === "particularVendor"}
                />
                Particular Vendor/Customer
              </label>

              {/* Dropdown for Particular Vendor */}
              <div className="mb-4">
                <select
                  className="w-full p-2 border border-gray-400 rounded mb-2"
                  disabled={selectedVendorType !== "particularVendor"}
                >
                  <option>Select Category</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                </select>
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
    </div>
  );
};

export default PurchaseAndSalesBook;
