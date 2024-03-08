import { useRef, useMemo } from "react";
import Square from "./Square";
import { FILES, RANKS, PIECE_POSITIONS } from "../constants";

import "./Chessboard.css";

function Chessboard() {
  const chessboardRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const board = useMemo(() => {
    const board = [];

    for (let i = RANKS.length - 1; i >= 0; i--) {
      for (let j = 0; j < FILES.length; j++) {
        const squareName = `${FILES[j]}${RANKS[i]}`;
        const pieceData = PIECE_POSITIONS[squareName] !== undefined ? PIECE_POSITIONS[squareName] : undefined;

        board.push(<Square key={squareName} name={squareName} number={i + j} pieceData={pieceData} />);
      }
    }

    return board;
  }, []);

  let selectedPiece: HTMLElement | null = null;

  const selectPiece = (e: React.MouseEvent<Element, MouseEvent>) => {
    const element = e.target as HTMLElement;
    if (element.classList.contains("piece")) {
      const elementInfo = element.getBoundingClientRect();
      element.style.width = `${elementInfo.width}px`;
      element.style.height = `${elementInfo.height}px`;
      element.style.position = "absolute";
      element.style.left = `${e.clientX - chessboardRef.current.offsetLeft - elementInfo.width / 2}px`;
      element.style.top = `${e.clientY - chessboardRef.current.offsetTop - elementInfo.height / 2}px`;

      selectedPiece = element;
    }
  };

  const movePiece = (e: React.MouseEvent<Element, MouseEvent>) => {
    const chessboard = chessboardRef.current;
    if (selectedPiece && chessboard) {
      const elementInfo = selectedPiece.getBoundingClientRect();
      const offsetX = chessboard.offsetLeft;
      const offsetY = chessboard.offsetTop;
      const minX = 0;
      const maxX = chessboard.clientWidth - elementInfo.width;
      const minY = 0;
      const maxY = chessboard.clientHeight - elementInfo.height;
      const mouseX = e.clientX - offsetX - elementInfo.width / 2;
      const mouseY = e.clientY - offsetY - elementInfo.height / 2;

      if (mouseX < minX) {
        selectedPiece.style.left = `${minX}px`;
      } else if (mouseX > maxX) {
        selectedPiece.style.left = `${maxX}px`;
      } else {
        selectedPiece.style.left = `${mouseX}px`;
      }

      if (mouseY < minY) {
        selectedPiece.style.top = `${minY}px`;
      } else if (mouseY > maxY) {
        selectedPiece.style.top = `${maxY}px`;
      } else {
        selectedPiece.style.top = `${mouseY}px`;
      }
    }
  };

  const dropPiece = () => {
    selectedPiece = null;
  };

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
}

export { Chessboard };
