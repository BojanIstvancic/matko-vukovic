import Image from "next/image";
import Container from "../Container";
import Navigation from "./Navigation";

import Logo from "/public/images/logo.png";

import styled from "styled-components";
import { useRouter } from "next/router";

const StyledContainer = styled.div`
  margin-top: 40px;
`;

interface LayoutProps {
  children: JSX.Element;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const { asPath } = useRouter();
  return (
    <Container>
      <StyledContainer>
        <Image src={Logo} alt="logo" width={100} height={60} />
        <br />
        <h1 style={{ marginTop: "20px", display: "inline-block" }}>{title}</h1>
        {asPath !== "/administracija" && <Navigation />}
        {children}
      </StyledContainer>
    </Container>
  );
};

export default Layout;
