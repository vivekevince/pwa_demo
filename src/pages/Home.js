import { useContext } from "react";

import { Button, Box, Grid2, Typography } from "@mui/material";

import { AuthContext } from "../store/AuthContext";
import Container from "../components/Container";

import IntroImage from "../assets/images/app-intro.png";
import LogoImage from "../assets/images/logo.png";

const Home = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <header>
        <Container>
          <img src={LogoImage} alt="ride share logo" />
        </Container>
      </header>
      <Container>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            mb: 4, // margin bottom for spacing
          }}
        >
          <img
            src={IntroImage}
            alt="intro ride share logo"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Grid2 item xs={12}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
              fontWeight: "bold",
              mb: 2, // margin bottom
            }}
          >
            Share ride, reduce cost
          </Typography>
        </Grid2>
        <Grid2 item xs={12}>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" }, // Responsive text size
              color: "text.secondary",
              mb: 3, // margin bottom
            }}
          >
            Register your route on the map, and we'll send you matches for
            people taking the same route, so you could share the same ride.
          </Typography>
        </Grid2>
        <Grid2 item xs={12}>
          <Button
            variant="contained"
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem" }, // Responsive button size
              padding: { xs: "8px 16px", sm: "12px 24px" }, // Adjust button padding based on screen size
              display: "block",
              marginLeft: "auto",
              marginRight: "auto", // Center the button
              marginBottom: "10px",
            }}
          >
            Start Booking
          </Button>
          <Button
            onClick={handleLogout}
            variant="contained"
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem" }, // Responsive button size
              padding: { xs: "8px 16px", sm: "12px 24px" }, // Adjust button padding based on screen size
              display: "block",
              marginLeft: "auto",
              marginRight: "auto", // Center the button
            }}
          >
            Logout
          </Button>
        </Grid2>{" "}
      </Container>
    </>
  );
};

export default Home;
