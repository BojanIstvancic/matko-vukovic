import Head from "next/head";

import Image from "next/image";
import Container from "./Container";
import Navigation from "./AdministrationNavigation";

import Logo from "/public/images/logo.png";

import styled from "styled-components";

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

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <StyledContainer>
          <LayoutHeader>
            <Image src={Logo} alt="logo" width={100} height={60} />
            <Title>Administracija</Title>
          </LayoutHeader>
          <Navigation />
          {children}
        </StyledContainer>
      </Container>
    </>
  );
};

export default Layout;
