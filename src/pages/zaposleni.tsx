import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Image from "next/image";

import { GetServerSideProps } from "next";
import { apiCall } from "@/api/axios";
import { API_Method, API_URL } from "@/constants/api";
import {
  Administration,
  Employee,
  ProfessionalService,
} from "@/constants/types";
import { staffRoles } from "@/constants/helpers";

import Portrait from "/public/images/portrait.png";
import styled from "styled-components";

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

  const professionalService = staffMembers.filter(
    (member) =>
      member.role.includes(ProfessionalService.PEDAGOGUE) ||
      member.role.includes(ProfessionalService.PSYCHOLOGIST)
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
                    <ItemRole>{staffRoles[member.role]}</ItemRole>
                  </Item>
                ))}
              </ItemContainer>
            </StaffBlock>
          )}
          {professionalService && (
            <StaffBlock>
              <StaffHeading>Stručna služba</StaffHeading>
              <ItemContainer>
                {professionalService.map((member) => (
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
                    <ItemRole>{staffRoles[member.role]}</ItemRole>
                  </Item>
                ))}
              </ItemContainer>
            </StaffBlock>
          )}
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
