import React from 'react';

const CustomDialog = ({ isOpen, onClose, onConfirm, message, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>
        <p className="text-center mb-6">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
          >
            Close
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomDialog;
