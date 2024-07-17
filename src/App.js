import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [cell, setCell] = useState();

  function handleClick(i) {
    const newSquares = squares.slice();
    newSquares[i] = "X";
    setSquares(newSquares);
    newSquares[i] = cell;
    if (cell == "X") {
      setCell("O");
    } else {
      setCell("X");
    }
  }

  return (
    <>
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </>
  );
}
