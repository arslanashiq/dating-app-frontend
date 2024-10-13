import Box from "@mui/material/Box";

// components
import SidebarDrawer from "./SidebarDrawer";
// slices
import { Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <SidebarDrawer />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
