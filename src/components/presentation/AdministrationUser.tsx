import Loading from "../Loading";

import styled from "styled-components";

import { API_LOADING_STATUS } from "@/constants/api";
import { User } from "@/constants/types";

const StyledAdministrationUser = styled.div``;

const UserWrapper = styled.div``;

const Wrapper = styled.div`
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
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

const UsersWrapper = styled.div``;
const Users = styled.div`
  max-width: 400px;
  border-radius: 5px;

  &:nth-child(2n) {
    background: var(--green-50);
  }
`;
const UsersItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 5px;
`;
const UsersItemText = styled.p`
  margin-bottom: 0;
`;

export interface AdministrationUserProps {
  user: User | null;
  status: API_LOADING_STATUS;
  users: User[] | null;
  usersStatus: API_LOADING_STATUS;
}

const AdministrationUser: React.FC<AdministrationUserProps> = ({
  status,
  user,
  users,
  usersStatus,
}) => {
  return (
    <StyledAdministrationUser>
      <h1>Korisnik</h1>

      <Wrapper>
        {user && (
          <UserWrapper>
            <UserLabel>Ime korisnika: </UserLabel>
            <UserValue>{user.firstName}</UserValue>
            <UserLabel>Prezime korisnika: </UserLabel>
            <UserValue>{user.lastName} </UserValue>
            <UserLabel>Nivo aministracije: </UserLabel>
            <UserValue>{user.administrationLevel} </UserValue>
          </UserWrapper>
        )}
        {users && (
          <UsersWrapper>
            <h3>Svi administratori</h3>
            {users.map((user) => (
              <Users key={user._id}>
                <UsersItem>
                  <UsersItemText>
                    {user.firstName} {user.lastName}
                  </UsersItemText>
                  <UsersItemText>{user.administrationLevel}</UsersItemText>
                </UsersItem>
              </Users>
            ))}
          </UsersWrapper>
        )}
      </Wrapper>

      {(status === "loading" || usersStatus === "loading") && <Loading />}
    </StyledAdministrationUser>
  );
};

export default AdministrationUser;
