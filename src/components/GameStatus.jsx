import React from 'react'

const GameStatus = ({ status, ...props }) => {
   if (!status) return null;

    const color = status.includes("Correct")
    ? "text-green-600"
    : status.includes("Game over")
    ? "text-red-600"
    : "text-orange-500";

  return (
    <p className={`mt-4 text-lg font-bold ${color}`}>
      {status}
    </p>
  );
};

export default GameStatus