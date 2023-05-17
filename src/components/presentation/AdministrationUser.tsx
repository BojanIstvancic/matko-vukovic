import Loading from "../Loading";

import styled from "styled-components";

import { API_LOADING_STATUS } from "@/constants/api";
import { User } from "@/constants/types";

const StyledAdministrationUser = styled.div``;

const StyledUser = styled.div`
  padding: 20px;
`;

const UserLabel = styled.p`
  font-weight: bold;
`;
const UserValue = styled.p`
  padding: 5px;
  background: var(--green-50);
  max-width: 400px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export interface AdministrationUserProps {
  user: User | null;
  status: API_LOADING_STATUS;
}

const AdministrationUser: React.FC<AdministrationUserProps> = ({
  status,
  user,
}) => {
  return (
    <StyledAdministrationUser>
      <h1>Korisnik</h1>

      {user && (
        <StyledUser>
          <UserLabel>Ime korisnika: </UserLabel>
          <UserValue>{user.firstName}</UserValue>
          <UserLabel>Prezime korisnika: </UserLabel>
          <UserValue>{user.lastName} </UserValue>
          <UserLabel>Nivo aministracije: </UserLabel>
          <UserValue>{user.administrationLevel} </UserValue>
        </StyledUser>
      )}

      {status === "loading" && <Loading />}
    </StyledAdministrationUser>
  );
};

export default AdministrationUser;
