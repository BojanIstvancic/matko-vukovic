import StaffItem from "@/components/StaffItem";
import { API_LOADING_STATUS } from "@/constants/api";

import { Employee } from "@/constants/types";

import styled from "styled-components";
import Loading from "../Loading";

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
  // I DON'T like css here adjust this
`;

export interface StaffProps {
  administration: Employee[] | undefined;
  professionalService: Employee[] | undefined;
  professors: Employee[] | undefined;
  support: Employee[] | undefined;
  library: Employee[] | undefined;
  status: API_LOADING_STATUS;
}

const Staff: React.FC<StaffProps> = ({
  administration,
  professionalService,
  professors,
  support,
  library,
  status,
}) => {
  return (
    <StyledStaff>
      <h1>Zaposleni</h1>
      {!!administration?.length && (
        <StaffBlock>
          <StaffHeading>Uprava škole</StaffHeading>
          <StaffItemContainer>
            {administration.map((member: Employee) => (
              <StaffItem item={member} key={member._id} />
            ))}
          </StaffItemContainer>
        </StaffBlock>
      )}
      {!!professionalService?.length && (
        <StaffBlock>
          <StaffHeading>Stručna služba</StaffHeading>
          <StaffItemContainer>
            {professionalService.map((member: Employee) => (
              <StaffItem item={member} key={member._id} />
            ))}
          </StaffItemContainer>
        </StaffBlock>
      )}
      {!!professors?.length && (
        <StaffBlock>
          <StaffHeading>Profesori</StaffHeading>
          <StaffItemContainer>
            {professors.map((member: Employee) => (
              <StaffItem item={member} key={member._id} />
            ))}
          </StaffItemContainer>
        </StaffBlock>
      )}
      {!!support?.length && (
        <StaffBlock>
          <StaffHeading>Pomoćno osoblje</StaffHeading>
          <StaffItemContainer>
            {support.map((member: Employee) => (
              <StaffItem item={member} key={member._id} />
            ))}
          </StaffItemContainer>
        </StaffBlock>
      )}
      {!!library?.length && (
        <StaffBlock>
          <StaffHeading>Biblioteka</StaffHeading>
          <StaffItemContainer>
            {library.map((member: Employee) => (
              <StaffItem item={member} key={member._id} />
            ))}
          </StaffItemContainer>
        </StaffBlock>
      )}

      {status === "loading" && <Loading />}

      {status === "failed" && (
        <h3>Doslo je do greske prilikom konekcije na bazu podataka.</h3>
      )}
    </StyledStaff>
  );
};

export default Staff;
