import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Link from "next/link";
import styled from "styled-components";

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
const Error: React.FC<{}> = () => {
  return (
    <Layout
      title={"Matko Vuković | stranica ne postoji"}
      content={"description"}
    >
      <Container>
        <>
          <h1>Stranica nije pronađena</h1>
          <Link href="/" passHref>
            <LinkContent>Vrati se na početnu stranicu</LinkContent>
          </Link>
        </>
      </Container>
    </Layout>
  );
};

export default Error;
