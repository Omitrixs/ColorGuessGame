import React from 'react'

const ColorOption = ({ color, onClick, ...props }) => {
  return (
    <button
      className="w-20 h-20 rounded shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer border-2 border-gray-300"
      style={{ backgroundColor: color }}
      onClick={onClick}
      aria-label={`Guess color ${color}`}
    ></button>
  );
  };

export default ColorOption