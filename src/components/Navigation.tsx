import Link from "next/link";
import styled from "styled-components";
import Container from "./Container";

const StyledNavigation = styled.div`
  background: var(--primary);
`;

const StyledNavigationInner = styled.div`
  padding: 10px;

  @media (min-width: 768px) {
    padding: 0;
  }
`;
const NavigationDesktop = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  a {
    font-size: 15px;
    color: var(--gray-200);
    padding: 15px 25px;
    text-transform: uppercase;

    &:hover {
      transition: all 500ms ease;
      color: var(--white);
      background: var(--green-700);
    }
  }
`;

const NavigationHamburger = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (min-width: 768px) {
    display: none;
  }

  i {
    font-size: 30px;
    color: var(--white);
  }
`;

interface NavigationProps {
  setDisplayMobileNav: (value: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ setDisplayMobileNav }) => {
  return (
    <StyledNavigation>
      <Container>
        <StyledNavigationInner>
          <NavigationDesktop>
            <Link href="/">Naslovna</Link>
            <Link href="/vesti">Vesti</Link>
            <Link href="/o-nama">O Nama</Link>
            <Link href="/kontakt">Kontakt</Link>
          </NavigationDesktop>
          <NavigationHamburger onClick={() => setDisplayMobileNav(true)}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </NavigationHamburger>
        </StyledNavigationInner>
      </Container>
    </StyledNavigation>
  );
};

export default Navigation;
