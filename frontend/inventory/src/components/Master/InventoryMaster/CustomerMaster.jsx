import React, { useState, useEffect } from "react";
import { API_URLS } from "../../../reusable inputs/config";
import { toast } from "react-toastify";
// Reusable InputField component
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

// Reusable Button component
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

// Dialog Box Component
const DialogBox = ({ open, title, message, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-md shadow-lg p-6 w-full max-w-sm">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            OK
          </button>
        </div>
      </div>
    </div>
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
  const [dialog, setDialog] = useState({ open: false, title: "", message: "" });

  const showDialog = (title, message) => {
    setDialog({ open: true, title, message });
  };

  const closeDialog = () => {
    setDialog({ ...dialog, open: false });
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URLS.Customer);
        const data = await response.json();
        setCustomers(data || []);
      } catch (error) {
        toast.error("Error fetching customers.");
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
    if (!formData.customerName.trim()) {
      showDialog("Validation Error", "Customer Name is required.");
      return false;
    }
    if (!formData.creditLimit) {
      showDialog("Validation Error", "Credit Limit is required.");
      return false;
    }
    if (!formData.address.trim()) {
      showDialog("Validation Error", "Address is required.");
      return false;
    }
    if (!formData.phoneNo.trim()) {
      showDialog("Validation Error", "Phone Number is required.");
      return false;
    }
    return true;
  };

  const handleFormSubmit = async () => {
    if (!validateForm()) return;

    try {
      const response = await fetch(API_URLS.CreateCustomer, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          CustomerName: formData.customerName,
          CrLimit: parseFloat(formData.creditLimit),
          TermsDays: formData.terms ? parseInt(formData.terms) : null,
          DiscPer: formData.discount ? parseFloat(formData.discount) : null,
          Add1: formData.address,
          PhoneNo: formData.phoneNo,
          MobileNo: formData.mobileNo || null,
          EmailID: formData.emailId || null,
          ContactName: formData.contactName || null,
          PanNo: formData.tpinNo || null,
         
        }),
      });
      const result = await response.json();
      if (response.ok) {
        showDialog("Success", "Customer created successfully!");
        setCustomers((prev) => [...prev, result]);
        toast.success("Customer created successfully!");
        handleCancel();
      } else {
        showDialog("Error", result.message || "Error creating customer.");
      }
    } catch (error) {
      showDialog("Network Error", "Failed to submit customer data.");
      toast.error("Failed to submit customer data.");
    }
  };

  const handleSave = () => {
    handleFormSubmit();
  };

  const handleModify = () => {
    showDialog("Modify", "Modify logic not implemented yet.");
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
  };

  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className="bg-white border-2 rounded-lg shadow-lg p-6 w-full max-w-6xl">
        <h2 className="text-2xl text-center font-semibold p-2 rounded-md mb-2">
          Customer Master
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Input Section */}
          <div className="flex-1 bg-gray-50 shadow-md rounded-md p-6 overflow-auto max-h-[600px]">
            <div className="bg-green-600 text-white text-lg font-semibold p-2 rounded-md mb-2">
              Create/Modify Customer Information
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
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
                      <th className="border px-4 py-2">Sr.</th>
                      <th className="border px-4 py-2">Customer Name</th>
                      <th className="border px-4 py-2">Address</th>
                      <th className="border px-4 py-2">Contact No</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.length > 0 ? (
                      customers.map((customer, index) => (
                        <tr
                          key={index}
                          className="odd:bg-white even:bg-gray-50"
                        >
                          <td className="border px-4 py-2">{index + 1}</td>
                          <td className="border px-4 py-2">
                            {customer.customerName}
                          </td>
                          <td className="border px-4 py-2">
                            {customer.address}
                          </td>
                          <td className="border px-4 py-2">
                            {customer.phoneNo || customer.mobileNo}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center py-4">
                          No Customers Found
                        </td>
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

        {/* Dialog Box */}
        <DialogBox
          open={dialog.open}
          title={dialog.title}
          message={dialog.message}
          onClose={closeDialog}
        />
      </div>
    </div>
  );
};

export default CustomerMaster;
