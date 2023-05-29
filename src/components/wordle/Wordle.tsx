import { memo, useEffect } from "react";
import useWordle from "./useWordle";

import Grid from "./Grid";
import styled from "@emotion/styled";

const StyledWordle = styled.div`
  margin: 0 auto;
  width: 450px;
  padding: 40px;
`;

export interface WordleProps {
  solution: string;
}

const Wordle: React.FC<WordleProps> = ({ solution }) => {
  const { handleKeyUp, guesses, currentWord, turn } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  return (
    <StyledWordle>
      <Grid guesses={guesses} currentWord={currentWord} turn={turn} />
    </StyledWordle>
  );
};

export default memo(Wordle);
