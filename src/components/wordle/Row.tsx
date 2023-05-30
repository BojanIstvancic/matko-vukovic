import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  margin: 10px 0;
`;
const Letter = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 30px;
  font-weight: 700;
  border: 1px solid var(--gray-300);
  text-transform: uppercase;
  background-color: var(--white);

  animation-name: animate;
  animation-duration: 500ms;

  @keyframes animate {
    from {
      background-color: var(--white);
    }
  }

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

  @media (min-width: 600px) {
    width: 60px;
    height: 60px;
  }
`;

export interface RowProps {
  guess?: string[];
  currentWord?: string;
}

const Row: React.FC<RowProps> = ({ guess, currentWord }) => {
  if (currentWord) {
    const letters = currentWord.split("");
    const emptyBoxes = [...Array(5 - letters.length)];

    return (
      <StyledRow>
        {letters.map((letter, index) => (
          <Letter key={index}>{letter}</Letter>
        ))}
        {!!emptyBoxes.length &&
          emptyBoxes.map((_, index) => <Letter key={index} />)}
      </StyledRow>
    );
  }

  if (guess) {
    return (
      <StyledRow>
        {guess.map((guesAttempt, index) => {
          const guesAttempPair = guesAttempt.split("-");

          return (
            <Letter key={index} className={guesAttempPair[1]}>
              {guesAttempPair[0]}
            </Letter>
          );
        })}
      </StyledRow>
    );
  }

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
