import React, { useState } from "react";
import axios from "axios";
import CustomDialog from "../../reusable inputs/customeDialog"; // adjusted to your CustomDialog path
import { API_URLS } from "../../reusable inputs/config"; // adjust if needed

export default function BarcodeLabelPrint() {
  const [startNumber, setStartNumber] = useState(1);
  const [items, setItems] = useState([{ id: "", name: "", rate: "", qty: "" }]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (index === items.length - 1) {
        setItems([...items, { id: "", name: "", rate: "", qty: "" }]);
        setTimeout(() => {
          document.getElementById(`product-id-${index + 1}`)?.focus();
        }, 50);
      }
    }
  };

  const handleCancel = () => {
    setStartNumber(1);
    setItems([{ id: "", name: "", rate: "", qty: "" }]);
  };

  const validateItems = () => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (!item.name || !item.rate || !item.qty) {
        setDialogMessage(`Row ${i + 1}: Please fill in all required fields (Name, Rate, Qty).`);
        setIsDialogOpen(true);
        return false;
      }
      if (isNaN(item.rate) || Number(item.rate) <= 0) {
        setDialogMessage(`Row ${i + 1}: Sale Rate must be a positive number.`);
        setIsDialogOpen(true);
        return false;
      }
      if (isNaN(item.qty) || Number(item.qty) <= 0) {
        setDialogMessage(`Row ${i + 1}: Quantity must be a positive number.`);
        setIsDialogOpen(true);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (isPreview = false) => {
    if (!validateItems()) return;

    try {
      for (const item of items) {
        if (!item.name) continue;

        const barData = {
          pName: item.name,
          rate: parseFloat(item.rate),
          qty: parseInt(item.qty),
          enteredBy: "admin",
        };

        const response = await axios.post(
          `${API_URLS.BARCODE_PRINT}?isPreview=${isPreview}`,
          barData
        );

        if (isPreview && response.data.barcodeData) {
          const imageBase64 = response.data.barcodeData;
          const newWindow = window.open();
          newWindow.document.write(
            `<html><body><img src="data:image/png;base64,${imageBase64}" /></body></html>`
          );
        }
      }

      setDialogMessage(isPreview ? "Preview generated." : "Barcodes saved successfully.");
      setIsDialogOpen(true);
      if (!isPreview) handleCancel();
    } catch (error) {
      console.error(error);
      setDialogMessage("Error submitting barcode data.");
      setIsDialogOpen(true);
    }
  };

  return (
    <div className="p-6 h-[85vh] flex items-center justify-center">
      <div className="p-6 bg-white border rounded-lg shadow-lg w-full max-w-3xl relative">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Barcode Label Print
        </h2>

        <div className="absolute top-6 right-6">
          <img src="/barcode.png" alt="Barcode" className="h-12" />
        </div>

        <div className="mb-4 flex items-center space-x-2">
          <label className="font-medium text-gray-600">Start Number:</label>
          <input
            type="number"
            value={startNumber}
            onChange={(e) => setStartNumber(Number(e.target.value))}
            className="border border-gray-300 rounded-md px-2 py-1 w-20 focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border border-gray-300 px-3 py-2">Sr.</th>
                <th className="border border-gray-300 px-3 py-2">Product ID</th>
                <th className="border border-gray-300 px-3 py-2">Product Name</th>
                <th className="border border-gray-300 px-3 py-2">Sale Rate</th>
                <th className="border border-gray-300 px-3 py-2">Qty</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100">
                  <td className="border border-gray-300 px-3 py-2 text-center">{index + 1}</td>
                  <td className="border border-gray-300 px-3 py-2">
                    <input
                      id={`product-id-${index}`}
                      value={item.id}
                      onChange={(e) => {
                        const newItems = [...items];
                        newItems[index].id = e.target.value;
                        setItems(newItems);
                      }}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:ring focus:ring-blue-300 bg-yellow-200"
                    />
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    <input
                      value={item.name}
                      onChange={(e) => {
                        const newItems = [...items];
                        newItems[index].name = e.target.value;
                        setItems(newItems);
                      }}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:ring focus:ring-blue-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    <input
                      type="number"
                      value={item.rate}
                      onChange={(e) => {
                        const newItems = [...items];
                        newItems[index].rate = e.target.value;
                        setItems(newItems);
                      }}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:ring focus:ring-blue-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    <input
                      type="number"
                      value={item.qty}
                      onChange={(e) => {
                        const newItems = [...items];
                        newItems[index].qty = e.target.value;
                        setItems(newItems);
                      }}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:ring focus:ring-blue-300"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-end">
          <span className="font-medium text-gray-700">No. of Qty:</span>
          <span className="ml-2 font-semibold text-gray-800">
            {items.reduce((total, item) => total + (Number(item.qty) || 0), 0)}
          </span>
        </div>

        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            onClick={() => handleSubmit(false)}
          >
            Save And Print
          </button>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
            onClick={() => handleSubmit(true)}
          >
            Preview Barcode
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Custom Dialog for messages */}
      <CustomDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Notice"
      >
        <p className="text-center text-gray-700">{dialogMessage}</p>
      </CustomDialog>
    </div>
  );
}

