import React, { useState, useEffect } from "react";

// Reusable InputField component for form fields
const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
    />
  </div>
);

// Reusable Button component for actions
const Button = ({ label, onClick, variant = "primary" }) => {
  const variantClasses = {
    primary: "bg-green-500 hover:bg-green-600",
    success: "bg-orange-500 hover:bg-orange-600",
    danger: "bg-red-500 hover:bg-red-600",
  };

  return (
    <button
      onClick={onClick}
      className={`${variantClasses[variant]} text-white px-6 py-2 rounded-md`}
    >
      {label}
    </button>
  );
};

const CustomerMaster = () => {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    customerName: "",
    creditLimit: "",
    terms: "",
    discount: "",
    address: "",
    phoneNo: "",
    mobileNo: "",
    emailId: "",
    membershipNo: "",
    tpinNo: "",
    contactName: "",
    salesAreaName: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://api.example.com/customers");
        if (!response.ok) throw new Error("Failed to fetch customers");
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customers:", error);
       
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.customerName) {
      alert("Customer Name is required");
      return false;
    }
    if (!formData.phoneNo && !formData.mobileNo) {
      alert("At least one contact number is required");
      return false;
    }
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  const handleSave = () => {
    console.log("Save clicked:", formData);
    // Add save logic here
  };

  const handleModify = () => {
    console.log("Modify clicked");
    // Add modify logic here
  };

  const handleCancel = () => {
    setFormData({
      customerName: "",
      creditLimit: "",
      terms: "",
      discount: "",
      address: "",
      phoneNo: "",
      mobileNo: "",
      emailId: "",
      membershipNo: "",
      tpinNo: "",
      contactName: "",
      salesAreaName: "",
    });
    console.log("Form reset");
  };

  return (
    <div className="flex items-center justify-center h-[90vh] p-4">
      {/* Main Container */}
      <div className="bg-white border-2 rounded-lg shadow-lg p-6 w-full max-w-6xl">
      <h1 className=" text-white text-lg text-center font-semibold p-2 rounded-md mb-2">
            Customer Master
          </h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Input Section */}
          <div className="flex-1 bg-gray-50 shadow-md rounded-md p-6 overflow-auto max-h-[600px]">
          <div className="bg-green-600 text-white text-lg font-semibold p-2 rounded-md mb-2">
            Create/Modify Customer Information
          </div>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <InputField
                label="Customer Name"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  label="Credit Limit"
                  name="creditLimit"
                  value={formData.creditLimit}
                  onChange={handleInputChange}
                  type="number"
                />
                <InputField
                  label="Terms (Days)"
                  name="terms"
                  value={formData.terms}
                  onChange={handleInputChange}
                  type="number"
                />
              </div>
              <InputField
                label="Discount (%)"
                name="discount"
                value={formData.discount}
                onChange={handleInputChange}
                type="number"
              />
              <InputField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
              <InputField
                label="Contact Name"
                name="contactName"
                value={formData.contactName}
                onChange={handleInputChange}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  label="Phone No"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Mobile No"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleInputChange}
                />
              </div>
              <InputField
                label="Email ID"
                name="emailId"
                value={formData.emailId}
                onChange={handleInputChange}
                type="email"
              />
              <InputField
                label="TPIN No"
                name="tpinNo"
                value={formData.tpinNo}
                onChange={handleInputChange}
              />
              <InputField
                label="Sales Area Name"
                name="salesAreaName"
                value={formData.salesAreaName}
                onChange={handleInputChange}
              />
            </form>
          </div>

          {/* Table Section */}
          <div className="flex-1 bg-gray-50 shadow-md rounded-md p-6 overflow-auto max-h-[600px]">
            
            <div className="overflow-y-auto max-h-[400px] border border-gray-300 rounded-md">
              {loading ? (
                <div className="text-center py-4">Loading...</div>
              ) : (
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200 sticky top-0">
                      <th className="border border-gray-300 px-4 py-2">Sr.</th>
                      <th className="border border-gray-300 px-4 py-2">Customer Name</th>
                      <th className="border border-gray-300 px-4 py-2">Address</th>
                      <th className="border border-gray-300 px-4 py-2">Contact No</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.length > 0 ? (
                      customers.map((customer, index) => (
                        <tr key={index} className="odd:bg-white even:bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                          <td className="border border-gray-300 px-4 py-2">{customer.name}</td>
                          <td className="border border-gray-300 px-4 py-2">{customer.address}</td>
                          <td className="border border-gray-300 px-4 py-2">{customer.contact}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center py-4">No Customers Found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-end gap-4 mt-4">
          <Button label="Save" onClick={handleSave} variant="success" />
          <Button label="Modify" onClick={handleModify} variant="primary" />
          <Button label="Cancel" onClick={handleCancel} variant="danger" />
        </div>
      </div>
    </div>
  );
};

export default CustomerMaster;
