import { useRef } from "react";
import Square from "./Square";
import { FILES, RANKS, PIECE_POSITIONS } from "../constants";

import "./Chessboard.css";

const Chessboard = () => {
  const chessboardRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const board = [];
  let selectedPiece: HTMLElement | null = null;

  const selectPiece = (e: React.MouseEvent<Element, MouseEvent>) => {
    const element = e.target as HTMLElement;
    if (element.classList.contains("piece")) {
      const elementInfo = element.getBoundingClientRect();
      element.style.width = `${elementInfo.width}px`;
      element.style.height = `${elementInfo.height}px`;
      element.style.position = "absolute";
      element.style.left = `${
        e.clientX - chessboardRef.current.offsetLeft - elementInfo.width / 2
      }px`;
      element.style.top = `${
        e.clientY - chessboardRef.current.offsetTop - elementInfo.height / 2
      }px`;

      selectedPiece = element;
    }
  };

  const movePiece = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (selectedPiece) {
      const elementInfo = selectedPiece.getBoundingClientRect();
      selectedPiece.style.position = "absolute";
      selectedPiece.style.top = `${
        e.clientY - chessboardRef.current.offsetTop - elementInfo.height / 2
      }px`;
      selectedPiece.style.left = `${
        e.clientX - chessboardRef.current.offsetLeft - elementInfo.width / 2
      }px`;
    }
  };

  const dropPiece = () => {
    if (selectedPiece) {
      selectedPiece = null;
    }
  };

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
      <div
        className='chessboard'
        onMouseDown={(e) => selectPiece(e)}
        onMouseMove={(e) => movePiece(e)}
        onMouseUp={() => dropPiece()}
        ref={chessboardRef}
      >
        {board}
      </div>
    </div>
  );
};

export default Chessboard;
