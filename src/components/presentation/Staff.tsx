import StaffItem from "@/components/StaffItem";

import { Employee } from "@/constants/types";

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
  administration: Employee[];
  professionalService: Employee[];
  professors: Employee[];
}

const Staff: React.FC<StaffProps> = ({
  administration,
  professionalService,
  professors,
}) => {
  return (
    <StyledStaff>
      <h1>Zaposleni</h1>
      {!!administration.length && (
        <StaffBlock>
          <StaffHeading>Uprava škole</StaffHeading>
          <StaffItemContainer>
            {administration.map((member: Employee) => (
              <StaffItem item={member} key={member._id} />
            ))}
          </StaffItemContainer>
        </StaffBlock>
      )}
      {!!professionalService.length && (
        <StaffBlock>
          <StaffHeading>Stručna služba</StaffHeading>
          <StaffItemContainer>
            {professionalService.map((member: Employee) => (
              <StaffItem item={member} key={member._id} />
            ))}
          </StaffItemContainer>
        </StaffBlock>
      )}
      {!!professors.length && (
        <StaffBlock>
          <StaffHeading>Profesori</StaffHeading>
          <StaffItemContainer>
            {professors.map((member: Employee) => (
              <StaffItem item={member} key={member._id} />
            ))}
          </StaffItemContainer>
        </StaffBlock>
      )}
    </StyledStaff>
  );
};

export default Staff;
