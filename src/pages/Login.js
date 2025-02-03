import { useContext } from "react";

import { Button, Typography, Container } from "@mui/material";

import { AuthContext } from "../store/AuthContext";

import { CenteredBox } from "../components/CenteredBox";

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <Container maxWidth="xs">
      <CenteredBox>
        <Typography variant="h4" gutterBottom>
          Login Page
        </Typography>
        <Button variant="contained" color="primary" fullWidth onClick={login}>
          Login
        </Button>
      </CenteredBox>
    </Container>
  );
};

export default Login;
