import StyledDrawer from "@/components/styled-components/StyledDrawer";
import SidebarDrawedList from "./SidebarDrawedList";
import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "@/store/slices/commonSlice";

function SidebarDrawer() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const sidebarStatus = useSelector((state) => state.common.sidebarStatus);

  return isSmallScreen ? (
    <Drawer open={sidebarStatus} onClose={() => dispatch(closeSidebar())}>
      <SidebarDrawedList />
    </Drawer>
  ) : (
    <StyledDrawer variant="permanent" open={sidebarStatus}>
      <SidebarDrawedList />
    </StyledDrawer>
  );
}

export default SidebarDrawer;
