import HeaderMain from "./HeaderMain";
import TopBar from "./TopBar";

import styled from "styled-components";

const StyledHeader = styled.div`
  background: var(--white);
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
