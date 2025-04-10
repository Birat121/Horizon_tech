import React from "react";
import Button from "../../reusable inputs/buttons";

const AccountReGrouping = () => {
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="w-full max-w-lg p-8 bg-white border-2 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-semibold p-3 rounded-md mb-4">
          Account Re-Grouping
        </h2>
        <div className="bg-white shadow-md rounded-md p-5 mb-6">
          <div className="bg-indigo-950 text-white text-lg font-semibold p-3 rounded-md mb-4">
            Changing Account Group
          </div>
          <form className="space-y-6">
            <div className="mb-5">
              <label className="block mb-2 text-gray-700 font-medium text-lg">Select Account Name:</label>
              <select className="border border-gray-300 rounded-lg px-3 py-2 w-full text-lg">
                <option value="Account1">Account1</option>
                <option value="Account2">Account2</option>
                <option value="Account3">Account3</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-gray-700 font-medium text-lg">Change Group Name:</label>
              <select className="border border-gray-300 rounded-lg px-3 py-2 w-full text-lg">
                <option value="Group1">Group1</option>
                <option value="Group2">Group2</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-gray-700 font-medium text-lg">Account Type:</label>
              <input className="border border-gray-300 rounded-lg px-3 py-2 w-full text-lg" type="text" placeholder="" />
            </div>
          </form>
        </div>
        <div className="flex justify-center space-x-6 mt-6">
          <Button type="save">Save</Button>
          <Button type="cancel">Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default AccountReGrouping;
