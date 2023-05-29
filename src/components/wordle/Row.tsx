import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  margin: 10px 0;
`;
const Letter = styled.div`
  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 30px;
  font-weight: 700;
  border: 1px solid var(--black);

  &:not(:last-child) {
    margin-right: 5px;
  }

  &.correct,
  &.semicorrect,
  &.incorrect {
    color: var(--white);
    border: none;
  }

  &.correct {
    background-color: var(--primary);
  }

  &.semicorrect {
    background-color: var(--yellow-400);
  }

  &.incorrect {
    background-color: var(--gray-300);
  }
`;

export interface RowProps {
  guess?: string;
  currentGuess?: string;
}

const Row: React.FC<RowProps> = ({ guess, currentGuess }) => {
  return (
    <StyledRow>
      <Letter></Letter>
      <Letter></Letter>
      <Letter></Letter>
      <Letter></Letter>
      <Letter></Letter>
    </StyledRow>
  );
};

export default Row;
