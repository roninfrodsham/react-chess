import { Pawn, Rook, Knight, Bishop, Queen, King } from "./Pieces";

import "./Piece.css";

const Piece = ({ name, pieceData }: PieceProps) => {
  const PieceComponents: PieceComponentsProps = {
    pawn: Pawn,
    knight: Knight,
    bishop: Bishop,
    rook: Rook,
    queen: Queen,
    king: King,
  };

  const PieceComponent = PieceComponents[pieceData.piece];

  return (
    <div className='pieceContainer' data-name={name}>
      <PieceComponent colour={pieceData.colour} />
    </div>
  );
};

type PieceProps = {
  name: string;
  pieceData: {
    piece: string;
    colour: string;
  };
};

type Props = {
  colour: string;
};

type PieceComponentsProps = {
  [key: string]: React.FC<Props>;
};

export default Piece;
