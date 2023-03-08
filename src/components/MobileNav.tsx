import Link from "next/link";
import styled, { css } from "styled-components";

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
const NavLink = styled.a`
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
`;

interface MobileNavProps {
  setDisplayMobileNav: (value: boolean) => void;
  displayMobileNav: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({
  setDisplayMobileNav,
  displayMobileNav,
}) => {
  return (
    <StyledNav displayMobileNav={displayMobileNav}>
      <NavContent>
        <NavCloseButton onClick={() => setDisplayMobileNav(false)}>
          X
        </NavCloseButton>
        <Link href="/" passHref>
          <NavLink onClick={() => setDisplayMobileNav(false)}>Naslovna</NavLink>
        </Link>
        <Link href="/vesti" passHref>
          <NavLink onClick={() => setDisplayMobileNav(false)}>Vesti</NavLink>
        </Link>
        <Link href="/o-nama" passHref>
          <NavLink onClick={() => setDisplayMobileNav(false)}>O nama</NavLink>
        </Link>
        <Link href="/kontakt" passHref>
          <NavLink onClick={() => setDisplayMobileNav(false)}>Kontakt</NavLink>
        </Link>
      </NavContent>
    </StyledNav>
  );
};

export default MobileNav;
