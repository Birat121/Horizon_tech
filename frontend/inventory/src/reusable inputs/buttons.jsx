import React from "react";

const buttonStyles = {
  save: "bg-green-500 hover:bg-green-600 text-white",
  preview: "bg-blue-500 hover:bg-blue-600 text-white",
  edit: "bg-yellow-500 hover:bg-yellow-600 text-white",
  cancel: "bg-gray-500 hover:bg-gray-600 text-white",
  delete: "bg-red-500 hover:bg-red-600 text-white",
  modify: "bg-purple-500 hover:bg-purple-600 text-white",
};

const Button = ({ type = "save", onClick, children }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${buttonStyles[type]}`}
      onClick={onClick}
    >
      {children || type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
  );
};

export default Button;
