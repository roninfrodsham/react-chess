import Square from "./Square";
import { FILES, RANKS, PIECE_POSITIONS } from "../constants";

import "./Chessboard.css";

const Chessboard = () => {
  const board = [];

  for (let i = RANKS.length - 1; i >= 0; i--) {
    for (let j = 0; j < FILES.length; j++) {
      const squareName = `${FILES[j]}${RANKS[i]}`;
      const pieceData =
        PIECE_POSITIONS[squareName] !== undefined
          ? PIECE_POSITIONS[squareName]
          : undefined;

      board.push(
        <Square
          key={squareName}
          name={squareName}
          number={i + j}
          pieceData={pieceData}
        />
      );
    }
  }

  return (
    <div className='border'>
      <div className='chessboard'>{board}</div>
    </div>
  );
};

export default Chessboard;
