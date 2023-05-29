import styled from "styled-components";
import Row from "./Row";

const StyledGrid = styled.div``;

export interface GridProps {
  guesses: string[];
  turn: number;
  currentWord: string;
}

const Grid: React.FC<GridProps> = ({ guesses, turn, currentWord }) => {
  return (
    <StyledGrid>
      {guesses.map((guess, index) => {
        if (turn === index) {
          return <Row guess={currentWord} key={index} />;
        }
        return <Row guess={guess} key={index} />;
      })}
    </StyledGrid>
  );
};

export default Grid;
