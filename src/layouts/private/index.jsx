import { Box } from "@mui/material";

// components
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import StyledHeader from "@/components/styled-components/StyledHeader";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateLayout() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/auth/signin" replace />;
  }
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
