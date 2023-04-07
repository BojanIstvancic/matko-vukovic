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

import { API_Method } from "../../constants/api";

import styled from "styled-components";

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

      const response = await apiCall("auth/login", API_Method.POST, apiData);

      setCookie("token", response.data.token, 7);

      router.push("/administracija/blog");
    } catch (e) {
      setErrorMessage(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = getCookie("token");

    if (token) {
      router.push("/administracija/blog");
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
              label="Korisničko ime"
              name="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Šifra"
              type="password"
              id="password"
              autoComplete="password"
            />
            <Button
              type="submit"
              variant="contained"
              text="Uloguj se"
              disabled={isLoading}
            />
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
