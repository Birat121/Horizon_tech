import React, { useState } from "react";
import Button from "../../reusable inputs/buttons";

const CreditorAccountMaster = () => {
  const [creditorName, setCreditorName] = useState("");

  return (
    <div className="flex items-center justify-center h-[85vh]">
      {/* Outer Box */}
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6 border border-gray-300">
        {/* Title Section */}
        <h1 className="text-blue-700 font-bold text-lg mb-4">
          Creditor A/C Master For SPL Sales Discount
        </h1>

        {/* Form Section */}
        <div className="mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <label className="w-40 font-medium text-gray-700">
              Creditor Name:
            </label>
            <select
              className="border border-gray-400 rounded w-full p-2 bg-yellow-200 focus:outline-none"
              value={creditorName}
              onChange={(e) => setCreditorName(e.target.value)}
            >
              <option value="" disabled>
                Select Creditor
              </option>
              <option value="Debitor 1">Creditor 1</option>
              <option value="Debitor 2">Creditor 2</option>
              <option value="Debitor 3">Creditor 3</option>
            </select>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex justify-around">
        <Button type="save" >Save</Button>
        <Button type="modify">Modify</Button>
        <Button type="cancel">Cancel</Button>
          
        
        </div>
      </div>
    </div>
  );
};

export default CreditorAccountMaster;
