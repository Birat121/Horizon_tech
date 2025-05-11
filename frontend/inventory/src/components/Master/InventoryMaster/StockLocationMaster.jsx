import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URLS } from "../../../reusable inputs/config";

const ConfirmationDialog = ({ show, message, onConfirm, onCancel }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">{message}</h2>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const StockLocationMaster = () => {
  const [locationName, setLocationName] = useState("");
  const [isCreating, setIsCreating] = useState(true);
  const [stockLocations, setStockLocations] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const [nextLocId, setNextLocId] = useState(1); // Counter to generate LocId

  // Fetch stock locations and the latest LocId on component mount
  useEffect(() => {
    const fetchStockLocations = async () => {
      const response = await fetch(API_URLS.GetStockLocs);
      if (response.ok) {
        const data = await response.json();
        setStockLocations(data);
      } else {
        toast.error("Error fetching stock locations");
      }
    };

    const fetchLatestLocId = async () => {
      const response = await fetch(API_URLS.GetLatestLocId); // Get the latest LocId
      if (response.ok) {
        const data = await response.json();
        const lastLocId = data.LocId; // The latest LocId returned from the backend

        // Extract numeric part of LocId and increment
        const lastIdPart = lastLocId.substring(4); // Extract the numeric part after "StkL"
        const newId = parseInt(lastIdPart, 10) + 1;

        setNextLocId(newId); // Set the next available LocId
      } else {
        toast.error("Error fetching the latest LocId");
      }
    };

    fetchStockLocations();
    fetchLatestLocId(); // Fetch the latest LocId
  }, []);

  const handleChange = (e) => {
    setLocationName(e.target.value);
  };

  const handleSave = () => {
    setDialogTitle(isCreating ? "Create Location" : "Modify Location");
    setDialogMessage(
      isCreating
        ? `Are you sure you want to create the location "${locationName}"?`
        : `Are you sure you want to update the location "${locationName}"?`
    );
    setShowDialog(true);
  };

  const handleConfirmSave = async () => {
    const locId = `StkL${nextLocId.toString().padStart(5, "0")}`; // Generate the LocId
    const locationData = {
      LocId: locId, // Add LocId to the locationData
      LocName: locationName,
      EnteredDate: new Date().toISOString(),
      EnteredBy: "system", // Can be dynamically fetched
      EnteredSys: window.navigator.userAgent, // Or system identifier
    };

    let response;

    if (isCreating) {
      response = await fetch(API_URLS.CreateStockLoc, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(locationData),
      });

      if (response.ok) {
        const createdLocation = await response.json(); // Get response with generated ID
        setStockLocations((prev) => [
          ...prev,
          {
            ...createdLocation,
          },
        ]);
        toast.success(`Location "${locationName}" created successfully!`);
        setNextLocId(nextLocId + 1); // Increment the LocId counter for next entry
      } else {
        const error = await response.text();
        toast.error(`Error creating location: ${error}`);
      }
    } else {
      // If modifying an existing location, send the location ID (LocId) to update
      const locationToUpdate = stockLocations.find(loc => loc.LocName === locationName);
      locationData.LocId = locationToUpdate.LocId; // Ensure the correct LocId is sent for update

      response = await fetch(API_URLS.UpdateStockLoc, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(locationData),
      });

      if (response.ok) {
        toast.success(`Location "${locationName}" updated successfully!`);
      } else {
        const error = await response.text();
        toast.error(`Error updating location: ${error}`);
      }
    }

    setShowDialog(false); // Close dialog after confirm
  };

  const handleModify = (loc) => {
    setLocationName(loc.LocName); // Populate the input with the existing location name
    setIsCreating(false); // Set to false to trigger update mode
    setDialogTitle("Modify Location");
    setDialogMessage(`Are you sure you want to update the location "${loc.LocName}"?`);
    setShowDialog(true);
  };

  return (
    <div className="flex items-center justify-center h-auto py-8 px-4 sm:px-8">
      <div className="w-full max-w-6xl bg-white border-2 rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-center text-3xl font-semibold p-4 rounded-md mb-4">
            Stock Location Master
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-6">
            <label className="w-full sm:w-40 text-gray-600 font-medium text-lg mb-2 sm:mb-0">
              Location Name:
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded w-full p-3 text-lg"
              placeholder="Enter location name"
              value={locationName}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-6">
            <button
              className="flex items-center space-x-3 bg-save text-white px-6 py-3 rounded hover:bg-save-hover text-lg mb-4 sm:mb-0"
              onClick={handleSave}
            >
              <i className="fa fa-save"></i>
              <span>{isCreating ? "Save" : "Update"}</span>
            </button>
            <button
              className="flex items-center space-x-3 bg-cancel text-white px-6 py-3 rounded hover:bg-cancel-hover text-lg"
              onClick={() => setLocationName("")} // Reset location name for cancel
            >
              <i className="fa fa-undo"></i>
              <span>Cancel</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto mt-8">
          <table className="w-full border border-gray-300 text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 border text-center">Sr.</th>
                <th className="px-6 py-3 border">Location Name</th>
                <th className="px-6 py-3 border">Entered By</th>
                <th className="px-6 py-3 border">Entry Date</th>
              </tr>
            </thead>
            <tbody>
              {stockLocations.map((loc, index) => (
                <tr key={loc.TransID}>
                  <td className="px-6 py-3 border text-center">{index + 1}</td>
                  <td className="px-6 py-3 border">
                    <div className="flex justify-between items-center">
                      <span>{loc.LocName}</span>
                      <button
                        className="ml-4 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
                        onClick={() => handleModify(loc)}
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-3 border">{loc.EnteredBy || "-"}</td>
                  <td className="px-6 py-3 border">
                    {loc.EnteredDate ? new Date(loc.EnteredDate).toLocaleString() : "-"}
                  </td>
                </tr>
              ))}
              {stockLocations.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No stock locations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ConfirmationDialog
        show={showDialog}
        message={dialogMessage}
        onConfirm={handleConfirmSave}
        onCancel={() => setShowDialog(false)}
      />
    </div>
  );
};

export default StockLocationMaster;
