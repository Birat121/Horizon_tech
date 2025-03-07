import React from "react";
import Button from "../../../reusable inputs/buttons";

const UnitOfMeasurement = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white border-2 p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-lg font-bold mb-4 text-center text-blue-700">
          Create / Modify Unit Of Measurement
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">
              UOM Description:
            </label>
            <select
              className="w-full p-2 border rounded-md bg-yellow-100"
              defaultValue=""
            >
              <option value="" disabled>
                Select UOM
              </option>
              <option>Piece</option>
              <option>Box</option>
              <option>Kg</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">UOM Quantity:</label>
            <input
              type="number"
              placeholder="Enter Quantity"
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-between">
        <Button type="save" >Save</Button>
        <Button type="modify">Modify</Button>
        <Button type="cancel">Cancel</Button>
          
          
        </div>
      </div>
    </div>
  );
};

export default UnitOfMeasurement;
