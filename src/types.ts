export type PieceProps = {
  piece: string;
  colour: string;
};

export type PiecesProps = {
  [key: string]: PieceProps;
};
