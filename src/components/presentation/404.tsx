import Link from "next/link";

import { links } from "@/constants/links";
import styled from "styled-components";

const StyledError = styled.div``;
const LinkContent = styled.h2`
  display: inline-block;

  margin-bottom: 30px;
  padding: 10px;

  border: 1px solid var(--primary);
  border-radius: 5px;
  transition: all 500ms ease;

  &:hover {
    cursor: pointer;
    background: var(--primary);
    color: var(--white);
  }

  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

const Error: React.FC<{}> = () => (
  <StyledError>
    <h1>Stranica nije pronađena</h1>
    <Link href={links.index.url} passHref>
      <LinkContent>Vrati se na početnu stranicu</LinkContent>
    </Link>
  </StyledError>
);

export default Error;
