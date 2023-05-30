import { memo, useEffect } from "react";
import useWordle from "./useWordle";

import Grid from "./Grid";
import GameOverModal from "./GameOverModal";
import UsedLetters from "./UsedLetters";

import styled from "@emotion/styled";

const StyledWordle = styled.div`
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 40px;
`;

export interface WordleProps {
  solution: string;
}

const Wordle: React.FC<WordleProps> = ({ solution }) => {
  const { handleKeyUp, guesses, currentWord, turn, isCorrect, usedLetters } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (isCorrect || turn > 5) {
      window.removeEventListener("keyup", handleKeyUp);
    }

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect, turn]);

  return (
    <StyledWordle>
      <Grid guesses={guesses} currentWord={currentWord} turn={turn} />
      <GameOverModal isCorrect={isCorrect} turn={turn} solution={solution} />
      <UsedLetters usedLetters={usedLetters} />
    </StyledWordle>
  );
};

export default memo(Wordle);
