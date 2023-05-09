import Container from "@/components/Container";
import Layout from "@/components/Layout";
import StaffItem from "@/components/StaffItem";
import { GetServerSideProps } from "next";

import {
  Administration,
  Employee,
  EmployeeRoles,
  ProfessionalService,
} from "@/constants/types";

import { getEmployees } from "@/api/employees";

import styled from "styled-components";

const StyledStaff = styled.section``;

const StaffBlock = styled.div`
  margin-bottom: 20px;
`;
const StaffHeading = styled.h2`
  margin-bottom: 30px;
`;

const StaffItemContainer = styled.div`
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
      member.role.includes(Administration.SECRETARY) ||
      member.role.includes(Administration.DEPUTY) ||
      member.role.includes(Administration.LAWYER)
  );

  const professionalService = staffMembers.filter(
    (member) =>
      member.role.includes(ProfessionalService.PEDAGOGUE) ||
      member.role.includes(ProfessionalService.PSYCHOLOGIST)
  );

  const professors = staffMembers.filter((member) =>
    member.role.includes(EmployeeRoles.PROFESSOR)
  );

  return (
    <Layout title={"Matko Vuković | Zaposleni"} content={"description"}>
      <Container>
        <StyledStaff>
          <h1>Zaposleni</h1>
          {administration && (
            <StaffBlock>
              <StaffHeading>Uprava škole</StaffHeading>
              <StaffItemContainer>
                {administration.map((member) => (
                  <StaffItem item={member} key={member._id} />
                ))}
              </StaffItemContainer>
            </StaffBlock>
          )}
          {professionalService && (
            <StaffBlock>
              <StaffHeading>Stručna služba</StaffHeading>
              <StaffItemContainer>
                {professionalService.map((member) => (
                  <StaffItem item={member} key={member._id} />
                ))}
              </StaffItemContainer>
            </StaffBlock>
          )}
          {professors && (
            <StaffBlock>
              <StaffHeading>Profesori</StaffHeading>
              <StaffItemContainer>
                {professors.map((member) => (
                  <StaffItem item={member} key={member._id} />
                ))}
              </StaffItemContainer>
            </StaffBlock>
          )}
        </StyledStaff>
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await getEmployees();

  const employees = response.data;

  return {
    props: {
      employees,
    },
  };
};

export default Staff;
