import React, { useState, useEffect } from "react";
import axios from "axios";

const PurchaseSalesIssueBook = () => {
  const [transactionType, setTransactionType] = useState("Purchase");
  const [customerType, setCustomerType] = useState("All Vendor/Customers");
  const [fromDate1, setFromDate1] = useState("");
  const [toDate1, setToDate1] = useState("");
  const [fromDate2, setFromDate2] = useState("");
  const [toDate2, setToDate2] = useState("");
  const [reportType, setReportType] = useState("Summary Only");
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

  const handleCustomerTypeChange = (type) => setCustomerType(type);

  return (
    <div className="flex flex-col h-[90vh] rounded-lg overflow-y-auto bg-gray-50">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
          <div className="bg-green-600 text-white text-lg font-semibold p-2 rounded-md mb-2">
            Vendor Purchase / Return Category Wise
          </div>

          {/* Transaction Type */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-4">
              Select Transaction Type Here
            </label>
            <div className="grid grid-cols-2 gap-4">
              {/* Transaction type radio buttons */}
              {["Purchase", "Purchase Return", "Sales", "Sales Return", "Issued", "Damage Goods"].map((type) => (
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

          {/* Vendor Type */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">
              Select Report Type Here
            </label>
            {["Summary Only", "With Product Detail"].map((type) => (
              <label key={type} className="block">
                <input
                  type="radio"
                  name="reportType"
                  value={type}
                  onChange={() => setReportType(type)}
                  checked={reportType === type}
                  className="mr-2"
                />
                {type}
              </label>
            ))}
          </div>

          {/* Category Type */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">
              Select Customer Type Here
            </label>
            {["All Vendor/Customers", "Particular Customer"].map((type) => (
              <label key={type} className="block">
                <input
                  type="radio"
                  name="customerType"
                  value={type}
                  onChange={() => handleCustomerTypeChange(type)}
                  checked={customerType === type}
                  className="mr-2"
                />
                {type}
              </label>
            ))}
            {customerType === "Particular Customer" && (
              <select className="w-full p-2 border border-gray-400 rounded mt-2">
                <option>Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Date Selection */}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-semibold mb-2">Select Date Here</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-medium mb-1">From (First Date):</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={fromDate1}
                  onChange={(e) => setFromDate1(e.target.value)}
                />
              </div>
              <div>
                <label className="font-medium mb-1">To (First Date):</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={toDate1}
                  onChange={(e) => setToDate1(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-medium mb-1">From (Second Date):</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={fromDate2}
                  onChange={(e) => setFromDate2(e.target.value)}
                />
              </div>
              <div>
                <label className="font-medium mb-1">To (Second Date):</label>
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

export default PurchaseSalesIssueBook;
