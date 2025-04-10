import React, { useState } from "react";

const ServiceItemMaster = () => {
  const [itemDesc, setItemDesc] = useState("");
  const [saleRate, setSaleRate] = useState("");

  return (
    <div className="flex items-center justify-center h-[85vh]">
      {/* Outer Box */}
      <div className="w-3/4 max-w-6xl bg-white border-2 rounded-lg shadow-lg overflow-hidden">
        <div className="flex">
          {/* Sidebar */}
          <div className="bg-gray-300 text-white w-1/4 p-6">
            <div className="space-y-6">
              <button className="w-full bg-save hover:bg-save-hover p-3 rounded flex items-center justify-center space-x-3 text-lg">
                <i className="fa fa-save"></i>
                <span>Save</span>
              </button>
              <button className="w-full bg-modify hover:bg-modify-hover p-3 rounded flex items-center justify-center space-x-3 text-lg">
                <i className="fa fa-edit"></i>
                <span>Modify</span>
              </button>
              <button className="w-full bg-cancel hover:bg-cancel-hover p-3 rounded flex items-center justify-center space-x-3 text-lg">
                <i className="fa fa-undo"></i>
                <span>Cancel</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-3/4 p-8">
            <h2 className="text-3xl text-center font-semibold p-4 mb-3">
              Service Item Master
            </h2>
            <p className="font-semibold text-xl mb-8 text-center">
              Create / Modify Service Items
            </p>

            {/* Form */}
            <div className="space-y-6">
              <div className="flex items-center">
                <label className="w-40 text-purple-600 font-medium text-lg">
                  Item Desc:
                </label>
                <select
                  className="border border-gray-400 p-3 rounded w-full text-lg"
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
                <label className="w-40 text-purple-600 font-medium text-lg">
                  Sale Rate:
                </label>
                <input
                  type="text"
                  className="border border-gray-400 p-3 rounded w-full  text-lg"
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
