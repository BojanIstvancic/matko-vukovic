import styled from "styled-components";
import BottomBar from "./BottomBar";
import FooterMain from "./FooterMain";

const StyledFooter = styled.div`
  color: var(--white);
`;

const Footer: React.FC<{}> = () => {
  return (
    <StyledFooter>
      <FooterMain />
      <BottomBar />
    </StyledFooter>
  );
};

export default Footer;
