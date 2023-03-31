import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@/components/Container";
import Button from "../components/Button";
import TextField from "../components/TextField";

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
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Uloguj se</h1>
        <Box component="form" onSubmit={handleSubmit} noValidate>
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
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
