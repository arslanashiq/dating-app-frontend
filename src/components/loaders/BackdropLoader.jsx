import PropTypes from "prop-types";
import { Backdrop, CircularProgress } from "@mui/material";

function BackdropLoader({ isLoading = false }) {
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

BackdropLoader.propTypes = {
  isLoading: PropTypes.bool,
};
export default BackdropLoader;
