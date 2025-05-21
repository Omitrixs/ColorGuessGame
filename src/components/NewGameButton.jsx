import React from 'react'

const NewGameButton = ({ onClick, ...props }) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
    >
      New Game
    </button>
  );
};


export default NewGameButton