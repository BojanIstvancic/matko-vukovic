import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Container from "./Container";

const StyledNavigation = styled.div`
  background: var(--primary);
`;

const StyledNavigationInner = styled.div`
  padding: 10px 0;

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

    &:hover,
    &.active {
      color: var(--white);
      background: var(--green-700);
    }

    &:hover {
      transition: all 500ms ease;
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
    cursor: pointer;
  }
`;

interface NavigationProps {
  setDisplayMobileNav: (value: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ setDisplayMobileNav }) => {
  const { asPath } = useRouter();
  return (
    <StyledNavigation>
      <Container>
        <StyledNavigationInner>
          <NavigationDesktop>
            <Link href="/" passHref>
              <a className={asPath === "/" ? "active" : ""}>Naslovna</a>
            </Link>
            <Link href="/vesti" passHref>
              <a className={asPath === "vesti" ? "active" : ""}>Vesti</a>
            </Link>
            <Link href="/rec-direktora" passHref>
              <a className={asPath === "rec-direktora" ? "active" : ""}>
                Reč direktora
              </a>
            </Link>
            <Link href="/o-nama" passHref>
              <a className={asPath === "o-nama" ? "active" : ""}>O Nama</a>
            </Link>
            <Link href="/kontakt" passHref>
              <a className={asPath === "kontakt" ? "active" : ""}>Kontakt</a>
            </Link>
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
