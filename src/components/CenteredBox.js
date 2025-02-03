import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const CenteredBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "16px",
});
