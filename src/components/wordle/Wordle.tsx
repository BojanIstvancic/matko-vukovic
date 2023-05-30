import { memo, useEffect } from "react";
import useWordle from "./useWordle";

import Grid from "./Grid";
import GameOverModal from "./GameOverModal";

import styled from "@emotion/styled";

const StyledWordle = styled.div`
  margin: 0 auto;

  display: flex;
  justify-content: center;

  padding: 40px;
`;

export interface WordleProps {
  solution: string;
}

const Wordle: React.FC<WordleProps> = ({ solution }) => {
  const { handleKeyUp, guesses, currentWord, turn, isCorrect } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (isCorrect || turn > 5) {
      window.removeEventListener("keyup", handleKeyUp);
    }

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect, turn]);
  console.log(solution);
  return (
    <StyledWordle>
      <Grid guesses={guesses} currentWord={currentWord} turn={turn} />
      <GameOverModal isCorrect={isCorrect} turn={turn} solution={solution} />
    </StyledWordle>
  );
};

export default memo(Wordle);
