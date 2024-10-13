import { enqueueSnackbar } from "notistack";
import { Button, Grid2 as Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "@/store/slices/commonSlice";

function CustomPage() {
  const dispatch = useDispatch();

  const handleShowSnackbar = (variant) => {
    enqueueSnackbar("This is a Snackbar", { variant });
  };

  const handleStartLoading = () => {
    dispatch(startLoading());
    setTimeout(() => {
      dispatch(stopLoading());
    }, 200);
  };

  return (
    <>
      <Grid container spacing={1} mt={2}>
        {/* snackbar */}
        <Grid container>
          <Grid>
            <Button
              color="success"
              onClick={() => handleShowSnackbar("success")}
            >
              Show Success Snackbar
            </Button>
          </Grid>
          <Grid>
            <Button color="error" onClick={() => handleShowSnackbar("error")}>
              Show Error Snackbar
            </Button>
          </Grid>
          <Grid>
            <Button color="info" onClick={() => handleShowSnackbar("info")}>
              Show Info Snackbar
            </Button>
          </Grid>
          <Grid>
            <Button
              color="warning"
              onClick={() => handleShowSnackbar("warning")}
            >
              Show Warning Snackbar
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container mt={2} spacing={1}>
        <Grid>
          <Button onClick={handleStartLoading}>Start Loading</Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CustomPage;
