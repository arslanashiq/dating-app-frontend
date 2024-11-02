import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import OTPInput from "react-otp-input";
import { useVerifyOTPUserMutation } from "@/services/public/auth";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Stack, Typography, useTheme } from "@mui/material";

export default function VerificationEmail({ open, setOpen, handleOTP, email }) {
  const theme = useTheme();
  const [otp, setOtp] = React.useState("");

  const [handleVerifyOTP] = useVerifyOTPUserMutation();

  const handleOTPSubmit = async () => {
    const verifyOTPResponse = await handleVerifyOTP({
      email,
      otp,
    });
    handleOTP(verifyOTPResponse);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
        <DialogTitle className="fw-bold">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" className="fw-bold">
              Verify Email
            </Typography>
            <IconButton
              size="large"
              onClick={() => {
                handleClose();
              }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={4}>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              shouldAutoFocus
              containerStyle={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
              inputType="tel"
              renderInput={(props) => (
                <input
                  {...props}
                  className="react-otp-input"
                  style={{
                    height: "50px",
                    maxWidth: "50px",
                    textAlign: "center",
                    borderRadius: 5,
                    border: `1px solid ${theme.palette.primary.main}`,
                  }}
                />
              )}
            />
            <Button
              size="large"
              className="fw-bold"
              // sx={{ fontSize: 20 }}
              onClick={() => {
                handleOTPSubmit();
              }}
            >
              Verify
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
