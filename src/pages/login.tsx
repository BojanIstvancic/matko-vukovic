import Container from "@/components/Container";
import Form from "@mui/material/Box";
import Button from "../components/Button";
import TextField from "../components/TextField";
import Logo from "/public/images/logo.png";

import styled from "styled-components";
import Image from "next/image";

const StyledLogin = styled.div`
  max-width: 400px;
  margin: 100px auto 0;
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
    <Container>
      <StyledLogin>
        <Image src={Logo} alt="logo" width={100} height={60} />
        <h1 style={{ marginTop: "20px" }}>Uloguj se</h1>
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
  );
};

export default Login;
