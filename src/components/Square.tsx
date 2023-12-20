import Piece from "./Piece";

import "./Square.css";

const Square = ({ name, number, pieceData }: SquareProps) => {
  const squareColour = number % 2 === 0 ? "dark" : "light";

  return (
    <div className={squareColour} data-name={name}>
      {pieceData !== undefined ? (
        <Piece name={name} pieceData={pieceData} />
      ) : null}
    </div>
  );
};

type SquareProps = {
  name: string;
  number: number;
  pieceData: PieceProps | undefined;
};

type PieceProps = {
  piece: string;
  colour: string;
};

export default Square;
