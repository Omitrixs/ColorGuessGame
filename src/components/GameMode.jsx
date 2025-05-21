import React from "react";

const GameMode = ({ selectedMode, setSelectedMode }) => {
  const modes = [
    { label: "Easy", value: 3 },
    { label: "Medium", value: 6 },
    { label: "Hard", value: 9 },
  ];

  return (
    <div className="flex gap-2 justify-center my-4" data-testid="gameMode">
      {modes.map((mode) => (
        <button
          key={mode.value}
          onClick={() => setSelectedMode(mode.value)}
          className={`px-4 py-2 rounded font-semibold border ${
            selectedMode === mode.value
              ? "bg-blue-600 text-white"
              : "bg-white text-black"
          }`}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
};

export default GameMode;
