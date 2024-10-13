import { Box, Typography } from "@mui/material";

function PageNotFound() {
  return (
    <Box
      className="row justify-content-center align-items-center"
      sx={{ height: "100vh" }}
    >
      <Typography className="text-center" variant="h2">
        Page Not Found
      </Typography>
    </Box>
  );
}

export default PageNotFound;
