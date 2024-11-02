import { useVerifyOTPUserMutation } from "@/services/public/auth";
import { backgroundColor } from "@/theme/utilities/palette";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logInUser } from "@/store/slices/userSlice";

function OTPVerification() {
  const theme = useTheme();
  const location = useLocation();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");

  const [handleVerifyOTP] = useVerifyOTPUserMutation();

  const handleOTPSubmit = async () => {
    const verifyOTPResponse = await handleVerifyOTP({
      email: location.state.values.email,
      otp,
    });
    console.log(verifyOTPResponse, "verifyOTPResponse");
    localStorage.setItem("token", location.state.signin.token);
    dispatch(logInUser(location.state.signin));
  };
  return (
    <Box className="container-fluid">
      <Box
        className="row"
        sx={{
          height: "100vh",
          backgroundColor: backgroundColor[0],
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box className="col-11 col-md-8 col-lg-4">
          <Card elevation={10}>
            <CardContent>
              <Stack spacing={4} sx={{ p: 2 }}>
                <Typography variant="h5" fontWeight="700">
                  Verify OTP
                </Typography>

                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  shouldAutoFocus
                  containerStyle={{
                    width: "100%",
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
                        height: "45px",
                        maxWidth: "45px",
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
                  Login
                </Button>
                <Typography variant="subtitle2" textAlign="center">
                  Resend Email
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default OTPVerification;
