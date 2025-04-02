import React, { useState, useEffect } from "react";

const PrinterSetup = () => {
  const [posPrinter, setPosPrinter] = useState("");
  const [barcodePrinter, setBarcodePrinter] = useState("");
  const [printerOptions, setPrinterOptions] = useState([]);

  useEffect(() => {
    const fetchPrinters = async () => {
      try {
        // Fetch connected printers from the system
        const printers = await window.navigator.getInstalledPrinters(); // Hypothetical API for fetching printers

        setPrinterOptions(printers);

        // Set default values if printers are available
        if (printers.length > 0) {
          setPosPrinter(printers[0]);
          setBarcodePrinter(printers[0]);
        }
      } catch (error) {
        console.error("Error fetching printers:", error);
      }
    };

    fetchPrinters();
  }, []);

  return (
    <div className="flex items-center justify-center h-[85vh]">
      <div className="w-[50rem] bg-white border-2 rounded-lg shadow-xl p-10">
        <h2 className=" text-2xl font-semibold p-2 rounded-md mb-6 text-center">
          Billing Printer Setup
        </h2>
        <div className="border border-gray-300 rounded-lg p-6 mb-6">
          <div className="text-black-700 font-medium text-center mb-4">
            Select Printer
          </div>
          <div className="mb-6">
            <label htmlFor="posPrinter" className="block text-gray-700 mb-2 text-lg font-semibold">
              POS Printer:
            </label>
            <select
              id="posPrinter"
              value={posPrinter}
              onChange={(e) => setPosPrinter(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 text-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              {printerOptions.map((printer, index) => (
                <option key={index} value={printer}>
                  {printer}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="barcodePrinter" className="block text-gray-700 mb-2 text-lg font-semibold">
              Barcode Printer:
            </label>
            <select
              id="barcodePrinter"
              value={barcodePrinter}
              onChange={(e) => setBarcodePrinter(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 text-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              {printerOptions.map((printer, index) => (
                <option key={index} value={printer}>
                  {printer}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-between space-x-6">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 text-lg font-semibold">
            Save
          </button>
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-600 text-lg font-semibold">
            Modify
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrinterSetup;

