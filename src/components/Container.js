import { Box } from "@mui/material";

export default function Container({ children }) {
  return (
    <Box
      sx={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "30px",
      }}
    >
      {children}
    </Box>
  );
}
