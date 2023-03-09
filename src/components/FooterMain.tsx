import styled from "styled-components";
import Container from "./Container";
import FooterContact from "./FooterContact";
import FooterQuery from "./FooterQuery";

const StyledFooterMain = styled.div`
  background-color: var(--gray-400);
`;
const StyledFooterMainInner = styled.div`
  padding: 20px 0;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const FooterMain: React.FC<{}> = () => {
  return (
    <StyledFooterMain>
      <Container>
        <StyledFooterMainInner>
          <FooterQuery />
          <FooterContact />
        </StyledFooterMainInner>
      </Container>
    </StyledFooterMain>
  );
};

export default FooterMain;
