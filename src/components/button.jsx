import React from "react";

const Button = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
