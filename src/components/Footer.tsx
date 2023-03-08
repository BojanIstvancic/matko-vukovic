import styled from "styled-components";
import Container from "./Container";

const StyledFooter = styled.div``;

const BottomBar = styled.div`
  background-color: var(--gray-500);
`;

const Footer: React.FC<{}> = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <BottomBar>
        <Container>
          <p>Copyright @{currentYear}Matko Vuković Subotica</p>
        </Container>
      </BottomBar>
    </StyledFooter>
  );
};

export default Footer;
