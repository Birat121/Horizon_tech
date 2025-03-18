import React from 'react';

const EndOfDay = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[85vh] p-6 ">
      <div className="w-full max-w-3xl bg-white border-2 rounded-lg shadow-lg p-8">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          End Of Day
        </h2>

        {/* Day Going to Ending */}
        <div className="flex flex-wrap items-center mb-6">
          <label className="text-gray-800 font-semibold w-full md:w-52">Day Going to Ending:</label>
          <div className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg w-full md:w-auto text-center mt-2 md:mt-0">
            11/09/2081 Thursday
          </div>
        </div>

        {/* Next Start Of Day */}
        <div className="flex flex-wrap items-center mb-8">
          <label className="text-gray-800 font-semibold w-full md:w-52">Next Start Of Day:</label>
          <div className="flex flex-wrap items-center gap-3 w-full mt-2 md:mt-0">
            <input
              type="date"
              className="border border-gray-400 rounded-lg px-4 py-2 w-full md:w-48"
            />
            <input
              type="date"
              className="border border-gray-400 rounded-lg px-4 py-2 w-full md:w-48"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <button className="flex items-center justify-center w-full md:w-52 bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-200">
            End Of Day
          </button>
          <button className="flex items-center justify-center w-full md:w-52 bg-red-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-200">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndOfDay;
