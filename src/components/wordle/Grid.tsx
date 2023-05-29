import styled from "styled-components";
import Row from "./Row";

const StyledGrid = styled.div``;

export interface GridProps {
  guesses: string[];
  currentWord: string;
  turn: number;
}

const Grid: React.FC<GridProps> = ({ guesses, currentWord, turn }) => (
  <StyledGrid>
    {guesses.map((guess, index) => {
      if (turn === index) {
        return <Row currentWord={currentWord} key={index} />;
      }
      return <Row guess={guess} key={index} />;
    })}
  </StyledGrid>
);

export default Grid;
