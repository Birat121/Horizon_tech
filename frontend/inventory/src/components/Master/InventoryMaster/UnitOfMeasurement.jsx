import React from "react";
import Button from "../../../reusable inputs/buttons";

const UnitOfMeasurement = () => {
  return (
    <div className="flex items-center justify-center h-[85vh]">
      <div className="bg-white border-2 p-8 rounded-md shadow-md w-full max-w-lg">
        <h1 className="text-white text-center text-xl font-semibold p-3 rounded-md mb-3">
          Unit of Measurement
        </h1>
        <h2 className="text-xl font-bold mb-6 text-center">
          Create / Modify Unit Of Measurement
        </h2>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium text-lg">
              UOM Description:
            </label>
            <select
              className="w-full p-3 border rounded-md bg-yellow-100 text-lg"
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
            <label className="block text-gray-700 font-medium text-lg">
              UOM Quantity:
            </label>
            <input
              type="number"
              placeholder="Enter Quantity"
              className="w-full p-3 border rounded-md text-lg"
            />
          </div>
        </div>
        <div className="mt-8 flex justify-between">
          <Button type="save">Save</Button>
          <Button type="modify">Modify</Button>
          <Button type="cancel">Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default UnitOfMeasurement;
