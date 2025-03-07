import React from "react";
import Button from "../../reusable inputs/buttons";

const AccountReGrouping = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow">
        <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2">
          Account Re-Grouping
        </h1>
        <div className="bg-white shadow-md rounded-b-md p-4 mb-4">
          <div className="bg-indigo-950 text-white text-lg font-semibold p-2 rounded-md mb-2">
            Changing Account Group
          </div>
          <form className="space-y-4">
            <div className="mb-4">
              <label className="block mb-2">Select Account Name:</label>
              <select className="border border-gray-300 rounded-md px-2 py-1 w-full">
                <option value="Account1">Account1</option>
                <option value="Account2">Account2</option>
                <option value="Account3">Account3</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Change Group Name:</label>
              <select className="border border-gray-300 rounded-md px-2 py-1 w-full">
                <option value="Group1">Group1</option>
                <option value="Group2">Group2</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Account Type</label>
              <input
                className="border border-gray-300 rounded-md px-2 py-1 w-full"
                type="text"
                placeholder=""
              />
            </div>
          </form>
        </div>
        <div className="flex justify-between mt-4">
        <Button type="save" >Save</Button>
        <Button type="cancel">Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default AccountReGrouping;
