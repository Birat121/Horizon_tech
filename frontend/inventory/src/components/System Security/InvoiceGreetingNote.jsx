import React, { useState, useEffect } from "react";

const InvoiceGreetingNote = () => {
  const [greetingNote, setGreetingNote] = useState("");
  const [message, setMessage] = useState(""); // For feedback message

  // Load the saved greeting note from local storage when the component mounts
  useEffect(() => {
    const savedNote = localStorage.getItem("greetingNote");
    if (savedNote) {
      setGreetingNote(savedNote);
    }
  }, []);

  const handleSave = () => {
    if (greetingNote.trim()) {
      localStorage.setItem("greetingNote", greetingNote);
      setMessage("Greeting note saved successfully!"); // Show success message
    } else {
      setMessage("Please enter a valid greeting note."); // Show error message
    }
  };

  const handleClose = () => {
    setGreetingNote(""); // Clear the input field
    setMessage(""); // Clear the message
  };

  return (
    <div className="h-[85vh] flex justify-center items-center">
      <div className="p-10 bg-white border-2 rounded-lg shadow-lg w-[40rem] max-w-full">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Invoice Greeting Note</h2>
          <form className="w-full">
            <label
              htmlFor="greetingNote"
              className="block text-lg font-semibold text-white text-center bg-red-600 py-2 px-4 rounded-md mb-4"
            >
              Enter Greeting Note
            </label>
            {/* Changed to textarea for multi-line input */}
            <textarea
              className="w-full border border-gray-400 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="greetingNote"
              id="greetingNote"
              placeholder="Enter Greeting Note"
              value={greetingNote}
              onChange={(e) => setGreetingNote(e.target.value)}
              rows="4" // Allows multiple lines for the greeting note
            />
          </form>

          {/* Display success or error message */}
          {message && (
            <div
              className={`mt-4 p-4 rounded-md text-center ${
                message.includes("successfully") ? "bg-green-200" : "bg-red-200"
              }`}
            >
              <p className="text-lg">{message}</p>
            </div>
          )}

          <div className="flex space-x-4 mt-6">
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 text-lg rounded-lg focus:outline-none focus:shadow-outline"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 text-lg rounded-lg focus:outline-none focus:shadow-outline"
              onClick={handleClose}
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
