import React from 'react';

const EndOfDay = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <div className="w-full max-w-2xl bg-white border-2 border-red-500 rounded-md shadow-md p-6">
        {/* Header */}
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-6">
          End Of Day
        </h2>

        {/* Day Going to Ending */}
        <div className="flex flex-wrap items-center mb-4">
          <label className="text-gray-700 font-medium w-full md:w-40">Day Going to Ending:</label>
          <div className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md w-full md:w-auto mt-2 md:mt-0">
            11/09/2081 Thursday
          </div>
        </div>

        {/* Next Start Of Day */}
        <div className="flex flex-wrap items-center mb-6">
          <label className="text-gray-700 font-medium w-full md:w-40">Next Start Of Day:</label>
          <div className="flex flex-wrap items-center gap-2 w-full mt-2 md:mt-0">
            <input
              type="date"
              className="border border-gray-300 rounded-md px-2 py-1 w-full md:w-auto"
            />
            <input
              type="date"
              className="border border-gray-300 rounded-md px-2 py-1 w-full md:w-auto"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-between mt-4 gap-4">
          <button className="flex items-center justify-center gap-2 w-full md:w-40 bg-cyan-500 text-white font-medium py-2 rounded-md hover:bg-cyan-600">
            
            End Of Day
          </button>
          <button className="flex items-center justify-center gap-2 w-full md:w-40 bg-red-500 text-white font-medium py-2 rounded-md hover:bg-red-600">
            
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndOfDay;
