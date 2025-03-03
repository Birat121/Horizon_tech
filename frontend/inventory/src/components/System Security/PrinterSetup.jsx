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
    <div className="flex items-center justify-center h-screen ">
      <div className="w-1/3 bg-white rounded-lg shadow-md p-6">
      <h1 className=" text-white text-lg font-semibold p-2 rounded-md mb-2 text-center">
            Billing Printer Setup
          </h1>
        <div className="border border-gray-300 rounded-lg p-4 mb-6">
          <div className="text-black-700 font-medium text-center mb-4">
            Select Printer
          </div>
          <div className="mb-4">
            <label htmlFor="posPrinter" className="block text-gray-700 mb-2">
              POS Printer:
            </label>
            <select
              id="posPrinter"
              value={posPrinter}
              onChange={(e) => setPosPrinter(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            >
              {printerOptions.map((printer, index) => (
                <option key={index} value={printer}>
                  {printer}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="barcodePrinter" className="block text-gray-700 mb-2">
              Barcode Printer:
            </label>
            <select
              id="barcodePrinter"
              value={barcodePrinter}
              onChange={(e) => setBarcodePrinter(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            >
              {printerOptions.map((printer, index) => (
                <option key={index} value={printer}>
                  {printer}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-around">
          <button className="bg-save text-gray-700 px-6 py-2 rounded-md hover:bg-save-hover">
            Save
          </button>
          <button className="bg-modify text-white px-6 py-2 rounded-md hover:bg-modify-hover">
            Modify
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default PrinterSetup;
