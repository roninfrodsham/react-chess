import "./Square.css";

type SquareProps = {
  name: string;
  number: number;
};

const Square = ({ name, number }: SquareProps) => {
  const squareColour = number % 2 === 0 ? "dark" : "light";

  return <div className={squareColour} data-name={name}></div>;
};

export default Square;
