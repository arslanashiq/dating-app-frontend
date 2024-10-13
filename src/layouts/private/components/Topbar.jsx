import { useDispatch, useSelector } from "react-redux";
import { Box, IconButton, Toolbar } from "@mui/material";

// icons
import MenuIcon from "@mui/icons-material/Menu";

// slices
import { closeSidebar, openSidebar } from "@/store/slices/commonSlice";
// components
import StyledAppBar from "../../../components/styled-components/StyledAppBar";
import ThemeSlider from "@/components/ThemeSlider";

function Topbar() {
  const dispatch = useDispatch();
  const sidebarStatus = useSelector((state) => state.common.sidebarStatus);

  const handleSidebar = () => {
    if (sidebarStatus) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  };
  return (
    <StyledAppBar elevation={0} position="fixed">
      <Toolbar disableGutters sx={{ px: 1.5 }}>
        <IconButton color="inherit" onClick={handleSidebar}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ width: "100%" }}>
          <Box>
            <Box className="d-flex justify-content-center align-items-center">
              Middle
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box>
            <ThemeSlider />
          </Box>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Topbar;
