import styled from "styled-components";
import BottomBar from "./BottomBar";

const StyledFooter = styled.div`
  color: var(--white);
`;

const Footer: React.FC<{}> = () => {
  return (
    <StyledFooter>
      <BottomBar />
    </StyledFooter>
  );
};

export default Footer;
