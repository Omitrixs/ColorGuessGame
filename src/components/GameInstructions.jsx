import React from 'react'

const GameInstructions = (props) => {
  return (
    <p {...props} className="mt-4 text-lg text-center text-gray-700">
      Guess the correct color by clicking one of the color boxes below!
    </p>
  );
};

export default GameInstructions