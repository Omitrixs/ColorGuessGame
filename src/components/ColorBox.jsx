import React from 'react'


const ColorBox = ({ color, ...props }) => {
  return (
    <div
      {...props}
      style={{ backgroundColor: color }}
      className="w-48 h-48 rounded-lg shadow-md border border-gray-300"
    />
  );
};


export default ColorBox