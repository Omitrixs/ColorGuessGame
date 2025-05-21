import { useState, useEffect } from "react";

import ColorBox from "./components/ColorBox";
import ColorOption from "./components/ColorOption";
import GameInstructions from "./components/GameInstructions";
import GameStatus from "./components/GameStatus";
import NewGameButton from "./components/NewGameButton";
import Score from "./components/Score";

const COLOR_SET = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#A133FF",
  "#33FFF5",
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function App() {
  const [targetColor, setTargetColor] = useState("");
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("");
  const [attempts, setAttempts] = useState(3);
  const [containerColor, setContainerColor] = useState("#ffffff");
  const [clickedColor, setClickedColor] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const initializeGame = () => {
    const shuffledColors = shuffleArray(COLOR_SET);
    const randomTarget = shuffledColors[Math.floor(Math.random() * shuffledColors.length)];
    setOptions(shuffledColors);
    setTargetColor(randomTarget);
    setGameStatus("");
    setAttempts(3);
    setContainerColor("#ffffff");
    setClickedColor(null);
    setGameOver(false);
    setGameStarted(true);
  };

  const reshuffleGame = () => {
    const reshuffledColors = shuffleArray(COLOR_SET);
    const newTarget = reshuffledColors[Math.floor(Math.random() * reshuffledColors.length)];
    setOptions(reshuffledColors);
    setTargetColor(newTarget);
    setClickedColor(null);
  };

  const handleGuess = (color) => {
    if (!gameStarted || gameOver) return;

    setClickedColor(color);

    if (color === targetColor) {
      const newScore = score + 1;
      setScore(newScore);
      setGameStatus("Correct!");
      setContainerColor(targetColor);
      if (newScore > highScore) setHighScore(newScore);

      setTimeout(() => {
        reshuffleGame();
        setGameStatus("");
        setContainerColor("#ffffff");
      }, 1000);
    } else {
      const remainingAttempts = attempts - 1;
      setAttempts(remainingAttempts);
      setGameStatus("Wrong! Try again.");
      setContainerColor(color);

      if (remainingAttempts <= 0) {
        setScore(0);
        setGameStatus("Game Over!");
        setGameOver(true);
        setContainerColor("#ffffff");
        setGameStarted(false);
      } else {
        setTimeout(() => {
          reshuffleGame();
          setGameStatus("");
          setContainerColor("#ffffff");
        }, 1000);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Color Guessing Game</h1>

      <ColorBox color={containerColor} data-testid="colorBox" />

      {gameStarted && !gameOver && (
        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm text-gray-700">Guess this color:</span>
          <div
            className="w-10 h-10 rounded border"
            style={{ backgroundColor: targetColor }}
            data-testid="targetColorBox"
          />
        </div>
      )}

      <GameInstructions data-testid="gameInstructions" />

      <div className="flex flex-wrap justify-center mt-6 gap-4">
        {options.map((color) => {
          const isCorrect = gameStatus === "Correct!" && color === clickedColor;
          const isWrong = gameStatus === "Wrong! Try again." && color === clickedColor;

          const animationClass = isCorrect
            ? "animate-bounce"
            : isWrong
            ? "animate-pulse"
            : "";

          return (
            <div
              key={color}
              className={animationClass + " transition-all duration-300"}
            >
              <ColorOption
                color={color}
                onClick={() => handleGuess(color)}
                data-testid="colorOption"
              />
            </div>
          );
        })}
      </div>

      <GameStatus status={gameStatus} data-testid="gameStatus" />

      <Score
        score={score}
        highScore={highScore}
        attempts={attempts}
        data-testid="score"
      />

      <NewGameButton onClick={initializeGame} data-testid="newGameButton" />
    </div>
  );
}

export default App;
