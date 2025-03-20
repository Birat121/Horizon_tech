import React, { useState } from "react";

const ServiceItemMaster = () => {
  const [itemDesc, setItemDesc] = useState("");
  const [saleRate, setSaleRate] = useState("");

  return (
    <div className="flex items-center justify-center h-[85vh] ">
      {/* Outer Box */}
      <div className="w-3/4 max-w-4xl bg-white border-2 rounded-lg shadow-lg overflow-hidden">
        <div className="flex">
          {/* Sidebar */}
          <div className="bg-red-600 text-white w-1/4 p-4">
            <div className="space-y-4">
              <button className="w-full bg-save hover:bg-save-hover p-2 rounded flex items-center justify-center space-x-2">
                <i className="fa fa-save"></i>
                <span>Save</span>
              </button>
              <button className="w-full bg-modify hover:bg-modify-hover p-2 rounded flex items-center justify-center space-x-2">
                <i className="fa fa-edit"></i>
                <span>Modify</span>
              </button>
              <button className="w-full bg-cancel hover:bg-cancel-hover p-2 rounded flex items-center justify-center space-x-2">
                <i className="fa fa-undo"></i>
                <span>Cancel</span>
              </button>
              
            </div>
          </div>

          {/* Main Content */}
          <div className="w-3/4 p-8">
          <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2">
            Service Item Master
          </h1>
            <p className="text-blue-600 font-semibold text-lg mb-8">
              Create / Modify Service Items
            </p>

            {/* Form */}
            <div className="space-y-4">
              <div className="flex items-center">
                <label className="w-32 text-purple-600 font-medium">
                  Item Desc:
                </label>
                <select
                  className="border p-2 rounded w-full"
                  value={itemDesc}
                  onChange={(e) => setItemDesc(e.target.value)}
                >
                  <option value="">Select Item</option>
                  <option value="item1">Item 1</option>
                  <option value="item2">Item 2</option>
                  <option value="item3">Item 3</option>
                </select>
              </div>

              <div className="flex items-center">
                <label className="w-32 text-purple-600 font-medium">
                  Sale Rate:
                </label>
                <input
                  type="text"
                  className="border p-2 rounded w-full bg-yellow-200"
                  value={saleRate}
                  onChange={(e) => setSaleRate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItemMaster;
