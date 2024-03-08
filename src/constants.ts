import { PiecesProps } from "./types";

// files are the columns on a chess board
export const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];
// rannks are the rows on a chess board
export const RANKS = ["1", "2", "3", "4", "5", "6", "7", "8"];

const WHITE = "#ffffff";
const BLACK = "#000000";

// positions of pieces on the board
export const PIECE_POSITIONS: PiecesProps = {
  a1: {
    piece: "rook",
    colour: WHITE,
  },
  b1: {
    piece: "knight",
    colour: WHITE,
  },
  c1: {
    piece: "bishop",
    colour: WHITE,
  },
  d1: {
    piece: "queen",
    colour: WHITE,
  },
  e1: {
    piece: "king",
    colour: WHITE,
  },
  f1: {
    piece: "bishop",
    colour: WHITE,
  },
  g1: {
    piece: "knight",
    colour: WHITE,
  },
  h1: {
    piece: "rook",
    colour: WHITE,
  },
  a2: {
    piece: "pawn",
    colour: WHITE,
  },
  b2: {
    piece: "pawn",
    colour: WHITE,
  },
  c2: {
    piece: "pawn",
    colour: WHITE,
  },
  d2: {
    piece: "pawn",
    colour: WHITE,
  },
  e2: {
    piece: "pawn",
    colour: WHITE,
  },
  f2: {
    piece: "pawn",
    colour: WHITE,
  },
  g2: {
    piece: "pawn",
    colour: WHITE,
  },
  h2: {
    piece: "pawn",
    colour: WHITE,
  },
  a7: {
    piece: "pawn",
    colour: BLACK,
  },
  b7: {
    piece: "pawn",
    colour: BLACK,
  },
  c7: {
    piece: "pawn",
    colour: BLACK,
  },
  d7: {
    piece: "pawn",
    colour: BLACK,
  },
  e7: {
    piece: "pawn",
    colour: BLACK,
  },
  f7: {
    piece: "pawn",
    colour: BLACK,
  },
  g7: {
    piece: "pawn",
    colour: BLACK,
  },
  h7: {
    piece: "pawn",
    colour: BLACK,
  },
  a8: {
    piece: "rook",
    colour: BLACK,
  },
  b8: {
    piece: "knight",
    colour: BLACK,
  },
  c8: {
    piece: "bishop",
    colour: BLACK,
  },
  d8: {
    piece: "queen",
    colour: BLACK,
  },
  e8: {
    piece: "king",
    colour: BLACK,
  },
  f8: {
    piece: "bishop",
    colour: BLACK,
  },
  g8: {
    piece: "knight",
    colour: BLACK,
  },
  h8: {
    piece: "rook",
    colour: BLACK,
  },
};
