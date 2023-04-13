import Form from "@mui/material/Box";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import Layout from "@/components/Layout";
import { CircularProgress } from "@mui/material";
import Container from "@/components/Container";

import { useState, useEffect } from "react";
import { setCookie, getCookie } from "@/helpers/cookieStorage";
import { apiCall } from "../../api/axios";
import { useRouter } from "next/router";

import { API_Method, API_URL } from "../../constants/api";

import styled from "styled-components";
import { links } from "@/constants/links";

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-bottom: 20px;
`;

const Login: React.FC<{}> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      setIsLoading(true);

      const apiData = {
        name: formData.get("name"),
        password: formData.get("password"),
      };

      const response = await apiCall(API_URL.LOGIN, API_Method.POST, apiData);

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
          <h1 style={{ width: "100%" }}>Uloguj se</h1>
          <Form component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              name="name"
              label="Korisničko ime"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Šifra"
              type="password"
              autoComplete="password"
            />
            <Button
              sx={{
                marginTop: 2,
              }}
              type="submit"
              variant="contained"
              disabled={isLoading}
            >
              Uloguj se
            </Button>
          </Form>

          {isLoading && (
            <CircularProgress
              style={{ color: "var(--primary)", marginTop: "20px" }}
            />
          )}

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
