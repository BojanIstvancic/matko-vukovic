import styled from "@emotion/styled";
import { generateGoalWord } from "./helpers";
import { useEffect, useState } from "react";

const StyledWordle = styled.div`
  margin: 0 auto;
  width: 450px;
  padding: 40px;
`;

const Letter = styled.span`
  width: 60px;
  height: 60px;

  display: inline-flex;
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

const Wordle: React.FC<{}> = () => {
  const goalWord = generateGoalWord();
  const letters = "abcčćdđefghijklmnoprsštuvzž";

  const [currentWord, setCurrentWord] = useState("");

  const renderResults = () => {
    let results = [];

    for (let i = 1; i <= 30; i++) {
      results.push(<Letter key={i} />);
    }

    return results;
  };

  const gameStart = (event: any) => {
    const enteredValue = event.key;
    console.log(enteredValue);
  };

  useEffect(() => {
    window.addEventListener("keyup", gameStart);

    return () => {
      window.removeEventListener("keydown", gameStart);
    };
  }, []);

  return <StyledWordle>{renderResults()}</StyledWordle>;
};

export default Wordle;
