import CustomInput from "@/components/react-hook-form/CustomInput";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
  useSendOTPUserMutation,
} from "@/services/public/auth";
import { backgroundColor } from "@/theme/utilities/palette";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// icons

import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VerifiedIcon from "@mui/icons-material/Verified";
import VerificationEmail from "./components/VerificationEmail";
import { enqueueSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";
import { SIGNUP_FORM_INITIAL_VALUES, SIGNUP_FORM_VALIDATION_SCHEMA } from "./utilities/constant";

function SignupPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [openVerificationDialog, setOpenVerificationDialog] = useState(false);
  const [isEmailVerified, setisEmailVerified] = useState("");

  const { handleSubmit, trigger, control, setError, watch } = useForm({
    resolver: yupResolver(SIGNUP_FORM_VALIDATION_SCHEMA),
    defaultValues: SIGNUP_FORM_INITIAL_VALUES,
  });

  const [handleSendOTP] = useSendOTPUserMutation();

  const [handleRegisterUser] = useRegisterUserMutation();

  const onSubmitRegisterUserForm = async (values) => {
    try {
      if (!isEmailVerified) {
        setError("email", { message: "Verify your email first." });
        return;
      }
      setIsLoading(true);
      const { data, error } = await handleRegisterUser(values);
      if (error) {
        setError("first_name", {
          message: error?.data?.error?.first_name || "",
        });
        setError("last_name", { message: error?.data?.error?.last_name || "" });
        setError("email", { message: error?.data?.error?.email || "" });
        setError("password", { message: error?.data?.error?.password || "" });
        setError("confirm_password", {
          message: error?.data?.error?.confirm_password || "",
        });

        return;
      }

      navigate(`/auth/signin`);
      enqueueSnackbar("User Registered Successfully", { variant: "success" });
    } catch (error) {
      console.error("Error While Login", error?.message);
    } finally {
      setIsLoading(false);
    }
  };
  const handleClickVerifyEmailButton = async () => {
    const email = watch("email");
    if (!email) {
      setError("email", {
        message: "Email is Required",
      });
    } else {
      const { error, data } = await handleSendOTP({
        email: watch("email"),
        signup: true,
      });

      if (error) {
        setError("email", { message: error?.data?.message });
        return;
      }
      setOpenVerificationDialog(true);
    }
  };
  const handleOTP = async (verifyOTPResponse) => {
    if (verifyOTPResponse?.error) {
      enqueueSnackbar("Invlice OTP", { variant: "error" });
      return;
    }
    setOpenVerificationDialog(false);
    setisEmailVerified(true);
  };
  return (
    <Box className="container-fluid">
      <VerificationEmail
        open={openVerificationDialog}
        setOpen={setOpenVerificationDialog}
        email={watch("email")}
        handleOTP={handleOTP}
      />
      <Box
        className="row"
        sx={{
          height: "100vh",
          backgroundColor: backgroundColor[0],
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box className="col-11 col-md-8 col-lg-6 col-xl-4">
          <form onSubmit={handleSubmit(onSubmitRegisterUserForm)}>
            <Card elevation={10}>
              <CardContent>
                <Stack spacing={4} sx={{ p: 2 }}>
                  <Typography variant="h5" fontWeight="700">
                    Sign Up
                  </Typography>
                  <Stack spacing={4} direction={{ xs: "column", lg: "row" }}>
                    <CustomInput
                      name="first_name"
                      label="First Name"
                      control={control}
                      trigger={trigger}
                    />
                    <CustomInput
                      name="last_name"
                      label="Last Name"
                      control={control}
                      trigger={trigger}
                    />
                  </Stack>
                  <CustomInput
                    name="email"
                    label="Email"
                    control={control}
                    trigger={trigger}
                    onChange={() => {
                      setisEmailVerified(false);
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AlternateEmailIcon color="primary" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          {isEmailVerified ? (
                            <IconButton disabled>
                              <VerifiedIcon color="primary" />
                            </IconButton>
                          ) : (
                            <Tooltip title="Verify Email" placement="top" arrow>
                              <Button
                                size="small"
                                onClick={handleClickVerifyEmailButton}
                              >
                                Verify Email
                              </Button>
                            </Tooltip>
                          )}
                        </InputAdornment>
                      ),
                    }}
                  />
                  <CustomInput
                    name="password"
                    label="Password"
                    control={control}
                    trigger={trigger}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon color="primary" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <IconButton color="primary">
                            {showPassword ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <CustomInput
                    name="confirm_password"
                    label="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    control={control}
                    trigger={trigger}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon color="primary" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          <IconButton color="primary">
                            {showConfirmPassword ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    size="large"
                    className="fw-bold"
                    type="submit"
                    // sx={{ fontSize: 20 }}
                    // disabled={!isEmailVerified}
                  >
                    {isLoading ? "Loading..." : "Signup"}
                  </Button>
                  <Typography variant="subtitle2" textAlign="center">
                    Already have an account?{" "}
                    <Link
                      to={"/auth/signin"}
                      className="fw-bold"
                      style={{
                        textDecoration: "none",
                        color: theme.palette.primary.main,
                      }}
                    >
                      Signin
                    </Link>
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default SignupPage;
