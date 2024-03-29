import { useState } from "react";
import Head from "next/head";

import Header from "./Header";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import Navigation from "./Navigation";

import styled from "styled-components";

const StyledLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
`;

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
  content: string;
}

const Layout: React.FC<LayoutProps> = ({ title, content, children }) => {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={content} />
        <meta property="og:description" content={content} />
      </Head>
      <StyledLayout>
        <MobileNav
          setDisplayMobileNav={setDisplayMobileNav}
          displayMobileNav={displayMobileNav}
        />
        <Header />
        <Navigation setDisplayMobileNav={setDisplayMobileNav} />
        {children}
        <Footer />
      </StyledLayout>
    </>
  );
};

export default Layout;
