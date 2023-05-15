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
  status: "loading" | "idle" | "failed";
}

const AdministrationLogin: React.FC<AdministrationLoginProps> = ({
  handleSubmit,
  status,
}) => (
  <StyledAdministrationLogin>
    <Form
      formName="Uloguj se"
      formType="login"
      buttonName="Uloguj se"
      handleSubmit={handleSubmit}
    />
    {status === "loading" && <Loading />}

    {status === "failed" && (
      <ErrorMessage>Uneli ste pogrešno korisničko ime ili šifru</ErrorMessage>
    )}
  </StyledAdministrationLogin>
);

export default AdministrationLogin;
