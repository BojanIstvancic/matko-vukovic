import { useRouter } from "next/router";

import Link from "next/link";

import styled, { css } from "styled-components";
import { links } from "../constants/links";

const StyledNav = styled.div<{ displayMobileNav: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  background: var(--primary);
  pointer-events: none;
  opacity: 0;

  ${({ displayMobileNav }) =>
    displayMobileNav &&
    css`
      transition: all 500ms ease;
      height: 100%;
      opacity: 1;
      z-index: 999;
      pointer-events: auto;
    `};
`;
const NavContent = styled.div`
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NavLink = styled(Link)`
  position: relative;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  font-size: 16px;
  color: var(--white);
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid var(--white);
  }

  &.active {
    background: var(--green-700);
  }

  &:hover {
    transition: all 500ms ease;
    background: var(--green-700);
  }

  @media (min-width: 600px) {
    font-size: 18px;
  }
`;
const NavCloseButton = styled.div`
  width: 100%;
  text-align: right;
  font-size: 30px;
  color: var(--white);
  cursor: pointer;
  margin-bottom: 20px;
`;

interface MobileNavProps {
  setDisplayMobileNav: (value: boolean) => void;
  displayMobileNav: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({
  setDisplayMobileNav,
  displayMobileNav,
}) => {
  const { asPath } = useRouter();
  return (
    <StyledNav displayMobileNav={displayMobileNav}>
      <NavContent>
        <NavCloseButton onClick={() => setDisplayMobileNav(false)}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </NavCloseButton>
        <NavLink
          href={links.index.url}
          className={asPath === links.index.url ? "active" : ""}
          onClick={() => setDisplayMobileNav(false)}
        >
          Naslovna
        </NavLink>
        <NavLink
          href={links.events.url}
          className={asPath === links.events.url ? "active" : ""}
          onClick={() => setDisplayMobileNav(false)}
        >
          Dešavanja
        </NavLink>
        <NavLink
          href={links.news.url}
          className={asPath === links.news.url ? "active" : ""}
          onClick={() => setDisplayMobileNav(false)}
        >
          Vesti
        </NavLink>
        <NavLink
          href={links.staff.url}
          className={asPath === links.staff.url ? "active" : ""}
          onClick={() => setDisplayMobileNav(false)}
        >
          Zaposleni
        </NavLink>
        <NavLink
          href={links.about.url}
          className={asPath === links.about.url ? "active" : ""}
          onClick={() => setDisplayMobileNav(false)}
        >
          O školi
        </NavLink>
        <NavLink
          href={links.fun.url}
          className={asPath === links.fun.url ? "active" : ""}
          onClick={() => setDisplayMobileNav(false)}
        >
          Zabava
        </NavLink>
        <NavLink
          href={links.contact.url}
          className={asPath === links.contact.url ? "active" : ""}
          onClick={() => setDisplayMobileNav(false)}
        >
          Kontakt
        </NavLink>
      </NavContent>
    </StyledNav>
  );
};

export default MobileNav;
