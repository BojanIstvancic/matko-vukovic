import Form from "@mui/material/Box";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import Layout from "@/components/Layout";

import styled from "styled-components";
import Container from "@/components/Container";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { setCookie } from "@/helpers/cookieStorage";

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Login: React.FC<{}> = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        {
          name: data.get("name"),
          password: data.get("password"),
        }
      );

      setCookie("jwt", response.data.token, 7);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

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
        </StyledLogin>
      </Container>
    </Layout>
  );
};

export default Login;
