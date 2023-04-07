import Form from "@mui/material/Box";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import Layout from "@/components/Layout";

import styled from "styled-components";
import Container from "@/components/Container";

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Login: React.FC<{}> = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      username: data.get("username"),
      password: data.get("password"),
    });
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
              id="username"
              label="Korisničko ime"
              name="username"
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
            <Button type="submit" variant="contained" text="Uloguj se" />
          </Form>
        </StyledLogin>
      </Container>
    </Layout>
  );
};

export default Login;
