import Form from "../../components/Form";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Loading from "@/components/Loading";

import { useState, useEffect } from "react";
import { setCookie, getCookie } from "@/helpers/cookieStorage";
import { useRouter } from "next/router";

import styled from "styled-components";
import { links } from "@/constants/links";
import { loginUser } from "@/api/login";

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-bottom: 20px;
`;

type formValues = {
  name: string;
  password: string;
};

const Login: React.FC<{}> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async ({ name, password }: formValues) => {
    try {
      setIsLoading(true);

      const data = {
        name,
        password,
      };

      const response = await loginUser(data);

      setCookie("token", response.data.token, 7);

      router.push(links.administrationBlog.url);
    } catch (e) {
      setErrorMessage(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = getCookie("token");

    if (token) {
      router.push(links.administrationBlog.url);
    }
  }, [router]);

  return (
    <Layout title={"Matko Vuković | Uloguj se"} content="uloguj se">
      <Container>
        <StyledLogin>
          <Form
            formName="Uloguj se"
            formType="login"
            buttonName="Uloguj se"
            handleSubmit={handleSubmit}
          />
          {isLoading && <Loading />}

          {errorMessage && (
            <p style={{ color: "var(--red-500)", marginTop: "20px" }}>
              Uneli ste pogrešno korisničko ime ili šifru
            </p>
          )}
        </StyledLogin>
      </Container>
    </Layout>
  );
};

export default Login;
