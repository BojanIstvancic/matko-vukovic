import Link from "next/link";
import { useRouter } from "next/router";

import Container from "./Container";

import styled from "styled-components";
import { links } from "../constants/links";

const StyledNavigation = styled.div`
  position: sticky;
  top: 0;
  background: var(--primary);
  margin-bottom: 20px;
  z-index: 20;
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
            <Link href={links.index.url} passHref>
              <a className={asPath === links.index.url ? "active" : ""}>
                Naslovna
              </a>
            </Link>
            <Link href={links.news.url} passHref>
              <a className={asPath === links.news.url ? "active" : ""}>Vesti</a>
            </Link>
            <Link href={links.staff.url} passHref>
              <a className={asPath === links.staff.url ? "active" : ""}>
                Zaposleni
              </a>
            </Link>
            <Link href={links.about.url} passHref>
              <a className={asPath === links.about.url ? "active" : ""}>
                O školi
              </a>
            </Link>
            <Link href={links.contact.url} passHref>
              <a className={asPath === links.contact.url ? "active" : ""}>
                Kontakt
              </a>
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
