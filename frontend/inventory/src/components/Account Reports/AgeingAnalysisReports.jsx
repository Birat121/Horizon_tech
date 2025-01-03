import React, { useState } from "react";

const AgeingAnalysisReports = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const [dropdownValue1, setDropdownValue1] = useState("");
  const [dropdownValue2, setDropdownValue2] = useState("");
  const [dropdownOptions1, setDropdownOptions1] = useState([]);
  const [dropdownOptions2, setDropdownOptions2] = useState([]);
  const [isDropdownDisabled1, setIsDropdownDisabled1] = useState(true);
  const [isDropdownDisabled2, setIsDropdownDisabled2] = useState(true);

  // State for due periods
  const [duePeriods, setDuePeriods] = useState([
    { from: 1, to: 30 },
    { from: 31, to: 60 },
    { from: 61, to: 90 },
    { from: 91, to: 120 },
    { from: 121, to: "More" },
  ]);

  // Handle change in the "to" value
  const handleToValueChange = (index, newValue) => {
    const updatedPeriods = [...duePeriods];

    // Update the "to" value of the current row
    updatedPeriods[index].to = newValue;

    // Update the "from" value of the next row, if it exists
    if (index + 1 < updatedPeriods.length) {
      const nextFromValue = isNaN(Number(newValue))
        ? updatedPeriods[index + 1].from
        : Number(newValue) + 1;
      updatedPeriods[index + 1].from = nextFromValue;
    }

    setDuePeriods(updatedPeriods);
  };

  const fetchDropdownOptions = async (type) => {
    try {
      const response = await fetch(
        `https://your-backend-api.com/dropdown-options?type=${type}` // Replace with your API endpoint
      );
      const data = await response.json();
      if (type === "account1") {
        setDropdownOptions1(data);
      } else {
        setDropdownOptions2(data);
      }
    } catch (error) {
      console.error("Error fetching dropdown options:", error);
    }
  };

  const handleRadioChange = (type) => {
    setRadioValue(type);
    if (type === "account1") {
      setIsDropdownDisabled1(false);
      setIsDropdownDisabled2(true);
      fetchDropdownOptions("account1");
    } else {
      setIsDropdownDisabled1(true);
      setIsDropdownDisabled2(false);
      fetchDropdownOptions("account2");
    }
  };

  return (
    <div className="flex flex-col h-[90vh] rounded-lg overflow-y-auto bg-gray-50">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
          <div className="bg-green-600 text-white text-lg font-semibold p-2 rounded-md mb-2">
            Ageing Analysis Reports
          </div>
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-medium mb-2">On Date</label>
            <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
              <input
                type="date"
                className="p-2 border border-gray-300 rounded w-full "
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
              <input
                type="date"
                className="p-2 border border-gray-300 rounded "
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-medium mb-2">Select Due Period</label>
            <div className="space-y-4">
              {duePeriods.map((period, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="font-medium text-gray-700">Due Between:</span>
                  <input
                    type="text"
                    value={period.from}
                    readOnly
                    className="w-14 text-center border rounded bg-gray-200 text-black"
                  />
                  <span className="font-medium text-gray-700">And</span>
                  <input
                    type="text"
                    value={period.to}
                    onChange={(e) => handleToValueChange(index, e.target.value)}
                    className="w-14 text-center border rounded bg-blue-100 text-black"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <label className="block font-medium mb-2">Select Account</label>
            <div className="mb-2 mt-2">
              <input
                type="radio"
                name="account"
                value="account1"
                className="mr-2"
                checked={radioValue === "account1"}
                onChange={() => handleRadioChange("account1")}
              />
              Particular Group
              <div className="mb-4 mt-4">
                <select
                  value={dropdownValue1}
                  onChange={(e) => setDropdownValue1(e.target.value)}
                  disabled={isDropdownDisabled1}
                  className={`border rounded p-2 w-full ${
                    isDropdownDisabled1 ? "bg-gray-200" : "bg-white"
                  }`}
                >
                  <option value="">Select an option</option>
                  {dropdownOptions1.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                name="account"
                value="account2"
                className="mr-2"
                checked={radioValue === "account2"}
                onChange={() => handleRadioChange("account2")}
              />
              Particular Account
              <div className="mb-4 mt-4">
                <select
                  value={dropdownValue2}
                  onChange={(e) => setDropdownValue2(e.target.value)}
                  disabled={isDropdownDisabled2}
                  className={`border rounded p-2 w-full ${
                    isDropdownDisabled2 ? "bg-gray-200" : "bg-white"
                  }`}
                >
                  <option value="">Select an option</option>
                  {dropdownOptions2.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="space-y-4 mt-10">
            <button className="w-full flex items-center justify-center p-3 bg-green-500 text-white rounded hover:bg-green-600">
              <i className="fa fa-search mr-2"></i> Preview
            </button>
          </div>
          <div className="bg-white shadow-md rounded-md p-4 mb-2 mt-4">
            <label className="block font-medium mb-2">Order By</label>
            <input type="radio" name="orderBy" value="orderByName" className="mr-2" />
            By Name
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeingAnalysisReports;
