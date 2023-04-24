import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Image from "next/image";

import styled from "styled-components";

import Portrait from "/public/images/portrait.png";
import { GetServerSideProps } from "next";
import { apiCall } from "@/api/axios";
import { API_Method, API_URL } from "@/constants/api";
import { Administration, Employee } from "@/constants/types";

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
  margin-bottom: 10px;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
`;
const ItemName = styled.p`
  font-weight: bold;
`;
const ItemRole = styled.p``;

export interface StaffProps {
  employees: {
    employees: Employee[];
  };
}

const Staff: React.FC<StaffProps> = ({ employees }) => {
  const staffMembers: Employee[] = employees.employees;

  const administration = staffMembers.filter(
    (member) =>
      member.role.includes(Administration.DIRECTOR) ||
      member.role.includes(Administration.SECRETARY)
  );

  return (
    <Layout title={"Matko Vuković | Zaposleni"} content={"description"}>
      <Container>
        <StyledStaff>
          <h1>Zaposleni</h1>
          {administration && (
            <StaffBlock>
              <StaffHeading>Uprava škole</StaffHeading>
              <ItemContainer>
                {administration.map((member) => (
                  <Item key={member._id}>
                    <ItemImage>
                      <Image
                        src={member.image || Portrait}
                        alt={member.firstName}
                        width={640}
                        height={639}
                      />
                    </ItemImage>
                    <ItemName>{`${member.firstName} ${member.lastName}`}</ItemName>
                    <ItemRole>{member.role}</ItemRole>
                  </Item>
                ))}
              </ItemContainer>
            </StaffBlock>
          )}
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

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await apiCall(API_URL.EMPLOYEES, API_Method.GET);

  const employees = response.data;

  return {
    props: {
      employees,
    },
  };
};

export default Staff;
