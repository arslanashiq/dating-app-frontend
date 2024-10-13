import { Box } from "@mui/material";

// components
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import StyledHeader from "@/components/styled-components/StyledHeader";

function PrivateLayout() {
  return (
    <>
      <Topbar />
      <StyledHeader />
      <Box className="container-fluid">
        <Box className="row">
          <Sidebar />
        </Box>
      </Box>
    </>
  );
}

export default PrivateLayout;
