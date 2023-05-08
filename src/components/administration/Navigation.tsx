import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";
import styled from "styled-components";
import { memo } from "react";

import Employees from "/public/images/pages/administration/employees.png";
import Blog from "/public/images/pages/administration/blog.png";
import { links } from "../../constants/links";

const StyledNavigation = styled.div`
  display: flex;

  margin-bottom: 30px;

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
const NavigationItem = styled.div`
  display: flex;
  width: 200px;

  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  background: var(--green-50);
  border: 1px solid var(--primary);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 30px;
  }

  &:hover,
  &.active {
    background: var(--primary);
  }

  &:hover {
    transition: all 500ms ease;
  }
`;
const NavigationText = styled.p`
  width: 100%;
  margin: 10px 0 0;
  padding: 10px 0;

  text-align: center;
  background: var(--white);
`;

const Navigation: React.FC<{}> = () => {
  const { asPath } = useRouter();

  return (
    <StyledNavigation>
      <Link href={links.administrationEmployees.url}>
        <NavigationItem
          className={
            asPath === links.administrationEmployees.url ? "active" : ""
          }
        >
          <Image src={Employees} alt="employees" width={100} height={85} />
          <NavigationText>Zaposleni</NavigationText>
        </NavigationItem>
      </Link>
      <Link href={links.administrationBlog.url}>
        <NavigationItem
          className={asPath === links.administrationBlog.url ? "active" : ""}
        >
          <Image src={Blog} alt="blog" width={100} height={85} />
          <NavigationText>Blog</NavigationText>
        </NavigationItem>
      </Link>
    </StyledNavigation>
  );
};

export default memo(Navigation);
