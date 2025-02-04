import { Button, Box, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { CenteredBox } from "../components/CenteredBox";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <CenteredBox>
      <Typography variant="h3" gutterBottom>
        {`404 :( Page Not Found`}
      </Typography>
      <Typography variant="body1" paragraph>
        The page you're looking for does not exist.
      </Typography>
      <Button variant="contained" color="primary" onClick={goHome}>
        Go Back to Home
      </Button>
    </CenteredBox>
  );
};

export default NotFoundPage;
