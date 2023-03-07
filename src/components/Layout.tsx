import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import MobileNav from "./MobileNav";
const StyledLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);
  return (
    <>
      <StyledLayout>
        <MobileNav
          setDisplayMobileNav={setDisplayMobileNav}
          displayMobileNav={displayMobileNav}
        />
        {/* <Header setDisplayMobileNav={setDisplayMobileNav} />  */}
        {children}
        {/* * <Footer /> */}
      </StyledLayout>
    </>
  );
};

export default Layout;
