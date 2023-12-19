import Square from "./Square";

import "./Chessboard.css";

const Chessboard = () => {
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const board = [];

  for (let i = ranks.length - 1; i >= 0; i--) {
    for (let j = 0; j < files.length; j++) {
      const squareID = `${files[j]}${ranks[i]}`;

      board.push(<Square key={squareID} name={squareID} number={i + j} />);
    }
  }

  return (
    <div className='border'>
      <div className='chessboard'>{board}</div>
    </div>
  );
};

export default Chessboard;
