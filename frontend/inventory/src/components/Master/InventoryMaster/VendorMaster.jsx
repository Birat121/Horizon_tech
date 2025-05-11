import React, { useState } from "react";
import { API_URLS } from "../../../reusable inputs/config";
import axios from "axios";
import DialogBox from "../../../reusable inputs/DialogBox";
import { toast } from "react-toastify";

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

const Button = ({ label, onClick, variant = "primary", ...rest }) => {
  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600",
    success: "bg-green-500 hover:bg-green-600",
    danger: "bg-red-500 hover:bg-red-600",
  };
  return (
    <button
      onClick={onClick}
      className={`${variantClasses[variant]} text-white px-6 py-2 rounded-md`}
      {...rest}
    >
      {label}
    </button>
  );
};

const VendorMaster = () => {
  const [vendors, setVendors] = useState([]);
  const [formData, setFormData] = useState({
    VendName: "",
    Add1: "",
    CityName: "",
    PhoneNo: "",
    MobileNo: "",
    EmailID: "",
    PanNo: "",
    ContactName: "",
    
    
  });

  const [dialogMessage, setDialogMessage] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogAction, setDialogAction] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { VendName, Add1, PhoneNo } = formData;
    if (!VendName || !Add1 || !PhoneNo) {
      return "Vendor Name, Address, and Phone No are required.";
    }
    return null;
  };

  const handleSave = () => {
    const validationMessage = validateForm();
    if (validationMessage) {
      toast.error(validationMessage);
      return;
    }
    setDialogMessage("Are you sure you want to save the vendor information?");
    setDialogAction("save");
    setIsDialogOpen(true);
  };

  const handleDialogConfirm = async () => {
  if (dialogAction === "save") {
    try {
      const payload = {
        ...formData,
        EntryDate: new Date(),
      };

      await axios.post(API_URLS.CreateVendormaster, payload);

      setVendors((prev) => [...prev, payload]);
      toast.success("Vendor saved successfully!");
      setFormData({
        VendName: "",
        Add1: "",
        CityName: "",
        PhoneNo: "",
        MobileNo: "",
        EmailID: "",
        PanNo: "",
        ContactName: "",
      });
    } catch (error) {
      console.error("Error saving vendor:", error);
      toast.error("Failed to save vendor!");
    }
  }
  setIsDialogOpen(false);
};

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleModify = () => {
    console.log("Modify clicked");
  };

  const handleCancel = () => {
    setFormData({
      VendName: "",
      Add1: "",
      CityName: "",
      PhoneNo: "",
      MobileNo: "",
      EmailID: "",
      PanNo: "",
      ContactName: ""
      
    });
  };

  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className="bg-white border-2 rounded-lg shadow-lg p-6 w-full max-w-6xl">
        <h2 className="text-2xl text-center font-semibold p-2 mb-2">
          Vendor Master
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Form Panel */}
          <div className="flex-1 bg-gray-50 shadow-md rounded-md p-6 max-h-[600px] overflow-auto">
            <div className="bg-green-600 text-white text-lg font-semibold p-2 rounded-md mb-2">
              Create/Modify Vendor Information
            </div>
            <form className="space-y-4">
              <InputField
                label="Vendor Name"
                name="VendName"
                value={formData.VendName}
                onChange={handleInputChange}
              />
              <InputField
                label="Address"
                name="Add1"
                value={formData.Add1}
                onChange={handleInputChange}
              />
              <InputField
                label="City Name"
                name="CityName"
                value={formData.CityName}
                onChange={handleInputChange}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  label="Phone No"
                  name="PhoneNo"
                  value={formData.PhoneNo}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Mobile No"
                  name="MobileNo"
                  value={formData.MobileNo}
                  onChange={handleInputChange}
                />
              </div>
              <InputField
                label="Email ID"
                name="EmailID"
                value={formData.EmailID}
                onChange={handleInputChange}
                type="email"
              />
              <InputField
                label="PAN No"
                name="PanNo"
                value={formData.PanNo}
                onChange={handleInputChange}
              />
              <InputField
                label="Contact Name"
                name="ContactName"
                value={formData.ContactName}
                onChange={handleInputChange}
              />
             
            </form>
          </div>

          {/* Right Table Panel */}
          <div className="flex-1 bg-gray-50 shadow-md rounded-md p-6 max-h-[600px] overflow-auto">
            <div className="overflow-y-auto max-h-[400px] border border-gray-300 rounded-md">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200 sticky top-0">
                    <th className="border px-4 py-2">Sr.</th>
                    <th className="border px-4 py-2">Vendor Name</th>
                    <th className="border px-4 py-2">City</th>
                    <th className="border px-4 py-2">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.length > 0 ? (
                    vendors.map((vendor, index) => (
                      <tr key={index} className="odd:bg-white even:bg-gray-50">
                        <td className="border px-4 py-2">{index + 1}</td>
                        <td className="border px-4 py-2">{vendor.VendName}</td>
                        <td className="border px-4 py-2">{vendor.CityName}</td>
                        <td className="border px-4 py-2">{vendor.PhoneNo || vendor.MobileNo}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center py-4">
                        No Vendors Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <Button label="Save" onClick={handleSave} variant="success" />
          <Button label="Modify" onClick={handleModify} variant="primary" />
          <Button label="Cancel" onClick={handleCancel} variant="danger" />
        </div>
      </div>

      {/* DialogBox */}
      <DialogBox isOpen={isDialogOpen} onClose={handleDialogClose} title="Confirmation">
        <p>{dialogMessage}</p>
        <div className="flex justify-end space-x-4 mt-4">
          <Button onClick={handleDialogClose} label="Close" variant="danger" />
          <Button onClick={handleDialogConfirm} label="OK" variant="success" />
        </div>
      </DialogBox>
    </div>
  );
};

export default VendorMaster;
