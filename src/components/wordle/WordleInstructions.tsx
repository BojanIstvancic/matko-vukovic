import styled from "@emotion/styled";

const StyledWordleInstructions = styled.div``;

const Instructions = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  padding-bottom: 0;
  border-top: 1px solid var(--incorrect-200);
`;

const LetterContainer = styled.div`
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

const WordleInstructions: React.FC<{}> = () => (
  <StyledWordleInstructions>
    <h1>Kako igrati</h1>
    <p>
      Pogoditi <b>Wordle - traženu reč</b> u šest pokušaja ili manje.
    </p>
    <p>
      Svaka predpostavka mora biti reč od pet slova. Pritisnite taster enter da
      biste podneli poogodak.
    </p>
    <p>
      Nakon što pogodite pogodite, pločice će promeniti boju da ukazuju na koja
      su slova vaše reči tačna ili gotovo tačna.
    </p>
    <Instructions>
      <h2>Primeri</h2>
      <LetterContainer>
        <Letter className="correct">D</Letter>
        <Letter>O</Letter>
        <Letter>M</Letter>
        <Letter>A</Letter>
        <Letter>R</Letter>
      </LetterContainer>
      <p>
        <b>D</b> je u reči na tačnoj lokaciji!
      </p>
      <LetterContainer>
        <Letter>G</Letter>
        <Letter>O</Letter>
        <Letter className="semicorrect">S</Letter>
        <Letter>P</Letter>
        <Letter>A</Letter>
      </LetterContainer>
      <p>
        <b>S</b> je u reči, ali ne na tačnoj lokaciji.
      </p>
      <LetterContainer>
        <Letter>B</Letter>
        <Letter>A</Letter>
        <Letter>S</Letter>
        <Letter>A</Letter>
        <Letter className="incorrect">M</Letter>
      </LetterContainer>
      <p>
        <b>M</b> nije prisutan u reči koju pokušavate pogoditi.
      </p>
    </Instructions>
  </StyledWordleInstructions>
);

export default WordleInstructions;
