import Image from "next/image";
import Container from "../Container";
import Navigation from "./Navigation";

import Logo from "/public/images/logo.png";

import styled from "styled-components";
import Head from "next/head";

const StyledContainer = styled.div`
  margin-top: 40px;
`;

const LayoutHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  padding: 0;
  margin-bottom: 0;
  margin-left: 30px;
`;

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
  heading: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, heading }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <StyledContainer>
          <LayoutHeader>
            <Image src={Logo} alt="logo" width={100} height={60} />
            <Title>Matko Vuković - administracija</Title>
          </LayoutHeader>
          <Navigation />
          {children}
        </StyledContainer>
      </Container>
    </>
  );
};

export default Layout;
