import { memo } from "react";
import styled from "styled-components";

const StyledUsedLetters = styled.div`
  text-align: center;
`;
const UsedLetterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  max-width: 330px;
`;

const UsedLetter = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 5px;
  margin-bottom: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 30px;
  font-weight: 700;
  border: 1px solid var(--gray-300);
  text-transform: uppercase;
  color: var(--white);
  background-color: var(--gray-300);

  animation-name: animate;
  animation-duration: 500ms;

  @keyframes animate {
    from {
      background-color: var(--white);
    }
  }

  @media (min-width: 600px) {
    width: 60px;
    height: 60px;
  }
`;

const UsedLetters: React.FC<{ usedLetters: string[] }> = ({ usedLetters }) => {
  const uniqueLetters = Array.from(new Set(usedLetters));

  return (
    <StyledUsedLetters>
      <h3>Lista iskorištenih karaktera:</h3>
      <UsedLetterWrapper>
        {!!uniqueLetters.length &&
          uniqueLetters
            .sort()
            .map((letter, index) => (
              <UsedLetter key={index}>{letter}</UsedLetter>
            ))}
      </UsedLetterWrapper>
    </StyledUsedLetters>
  );
};

export default memo(UsedLetters);
