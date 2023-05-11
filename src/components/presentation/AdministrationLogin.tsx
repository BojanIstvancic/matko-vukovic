import Form from "../../components/Form";
import Loading from "@/components/Loading";

import styled from "styled-components";
import { loginFormValues } from "@/utils/forms";

const StyledAdministrationLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-bottom: 20px;
`;
const ErrorMessage = styled.p`
  margin-top: 20px;
  color: var(--red-500);
`;

export interface AdministrationLoginProps {
  handleSubmit: ({ name, password }: loginFormValues) => Promise<void>;
  isLoading: boolean;
  displayErrorMessage: boolean;
}

const AdministrationLogin: React.FC<AdministrationLoginProps> = ({
  handleSubmit,
  isLoading,
  displayErrorMessage,
}) => (
  <StyledAdministrationLogin>
    <Form
      formName="Uloguj se"
      formType="login"
      buttonName="Uloguj se"
      handleSubmit={handleSubmit}
    />
    {isLoading && <Loading />}

    {displayErrorMessage && (
      <ErrorMessage>Uneli ste pogrešno korisničko ime ili šifru</ErrorMessage>
    )}
  </StyledAdministrationLogin>
);

export default AdministrationLogin;
