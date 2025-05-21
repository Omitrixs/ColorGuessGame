import React from 'react'

const Score = ({ score, highScore, attempts, ...props }) => {

  const attemptColor = attempts === 1 ? "text-orange-500" : "text-gray-800";

  return (
    <div className="mt-4 text-center">
      <p className="text-lg font-semibold text-green-700">
        Score: {score}
      </p>
      <p className="text-lg font-semibold text-blue-700">
        High Score: {highScore}
      </p>
      <p className={`text-lg font-semibold ${attemptColor}`}>
        Lives Left: {attempts}
      </p>
    </div>
  );
};

export default Score