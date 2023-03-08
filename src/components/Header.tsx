import styled from "styled-components";
import HeaderMain from "./HeaderMain";
import TopBar from "./TopBar";

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--white);
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  padding: 24px;
  overflow: hidden;

  @media (min-width: 1200px) {
    width: 1136px;
    flex-direction: column;
    padding: 16px;
  }
`;

const Header: React.FC<{}> = () => {
  return (
    <StyledHeader>
      <TopBar />
      <HeaderMain />
    </StyledHeader>
  );
};

export default Header;
