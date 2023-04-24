import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Image from "next/image";

import styled from "styled-components";

import Portrait from "/public/images/portrait.png";

const StyledStaff = styled.section``;

const StaffBlock = styled.div`
  margin-bottom: 20px;
`;
const StaffHeading = styled.h2`
  margin-bottom: 30px;
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
  }
`;
const Item = styled.div`
  text-align: center;
`;
const ItemImage = styled.div`
  position: relative;
`;
const ItemName = styled.p`
  font-weight: bold;
`;
const ItemRole = styled.p``;

const Staff: React.FC<{}> = () => {
  return (
    <Layout title={"Matko Vuković | Zaposleni"} content={"description"}>
      <Container>
        <StyledStaff>
          <h1>Zaposleni</h1>
          <StaffBlock>
            <StaffHeading>Uprava škole</StaffHeading>
            <ItemContainer>
              <Item>
                <ItemImage>
                  <Image
                    src={Portrait}
                    alt="velika-skola"
                    width={640}
                    height={640}
                  />
                </ItemImage>
                <ItemName>Mirjana Stevanovic</ItemName>
                <ItemRole>Direktor</ItemRole>
              </Item>
              <Item>
                <ItemImage>
                  <Image
                    src={Portrait}
                    alt="velika-skola"
                    width={640}
                    height={640}
                  />
                </ItemImage>
                <ItemName>Josipa Roncevic</ItemName>
                <ItemRole>Sekretar</ItemRole>
              </Item>
            </ItemContainer>
          </StaffBlock>
          <StaffBlock>
            <StaffHeading>Stručna služba</StaffHeading>
            <ItemContainer>
              <Item>
                <ItemImage>
                  <Image
                    src={Portrait}
                    alt="velika-skola"
                    width={640}
                    height={640}
                  />
                </ItemImage>
                <ItemName>Svetlana Prezime</ItemName>
                <ItemRole>Pedagog</ItemRole>
              </Item>
              <Item>
                <ItemImage>
                  <Image
                    src={Portrait}
                    alt="velika-skola"
                    width={640}
                    height={640}
                  />
                </ItemImage>
                <ItemName>Ceca Prezime</ItemName>
                <ItemRole>Psiholog</ItemRole>
              </Item>
            </ItemContainer>
          </StaffBlock>
        </StyledStaff>
      </Container>
    </Layout>
  );
};

export default Staff;
