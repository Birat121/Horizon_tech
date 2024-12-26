import React from 'react';

const InvoiceGreetingNote = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="p-6 bg-white shadow-md rounded-lg max-w-sm w-full">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Invoice Greeting Note</h2>
          <form className="w-full">
            <label
              htmlFor="greetingNote"
              className="block text-lg font-medium text-white mb-4 text-center border-2 border-slate-700 bg-red-600 rounded-md"
            >
              Enter Greeting Note
            </label>
            <input
              className="w-full border border-slate-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="greetingNote"
              id="greetingNote"
              placeholder="Enter Greeting Note"
            />
          </form>
          <div>
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline mt-4"
            >
              Save
            </button>
            <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline mt-4 ml-2"
            >
              Close
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGreetingNote;
