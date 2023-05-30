import styled from "@emotion/styled";
import Row from "./Row";

const StyledWordleInstructions = styled.div``;

const Instructions = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  padding-bottom: 0;
  border-top: 1px solid var(--gray-200);
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
      <Row guess={["d-correct", "o", "m", "a", "r"]} />
      <p>
        <b>D</b> je u reči na tačnoj lokaciji!
      </p>
      <Row guess={["g", "o", "s-semicorrect", "p", "a"]} />
      <p>
        <b>S</b> je u reči, ali ne na tačnoj lokaciji.
      </p>
      <Row guess={["b", "a", "s", "a", "n-incorrect"]} />
      <p>
        <b>M</b> nije prisutan u reči koju pokušavate pogoditi.
      </p>
    </Instructions>
  </StyledWordleInstructions>
);

export default WordleInstructions;
