import PropTypes from "prop-types";
import { IconButton, Slide } from "@mui/material";
import { SnackbarProvider, closeSnackbar } from "notistack";

// icons
import CloseIcon from "@mui/icons-material/Close";

// transition
const Transition = (props) => <Slide {...props} direction="down" />;

function NotistackProvider({ children }) {
  return (
    <SnackbarProvider
      TransitionComponent={Transition}
      anchorOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
      maxSnack={4}
      autoHideDuration={5000}
      action={(key) => (
        <IconButton
          size="small"
          onClick={() => closeSnackbar(key)}
          color="inherit"
        >
          <CloseIcon sx={{ fontSize: 21 }} />
        </IconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  );
}

NotistackProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default NotistackProvider;
