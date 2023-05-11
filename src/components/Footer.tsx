import BottomBar from "./BottomBar";
import FooterContact from "./FooterContact";

import styled from "styled-components";

const StyledFooter = styled.div`
  color: var(--white);
`;

const Footer: React.FC<{}> = () => {
  return (
    <StyledFooter>
      <FooterContact />
      <BottomBar />
    </StyledFooter>
  );
};

export default Footer;
