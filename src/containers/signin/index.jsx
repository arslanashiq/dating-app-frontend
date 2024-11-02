import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "@emotion/react";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";

// icons

import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VisibilityIcon from "@mui/icons-material/Visibility";

// theme
import { backgroundColor } from "@/theme/utilities/palette";
// services
import {
  useLoginUserMutation,
  useSendOTPUserMutation,
} from "@/services/public/auth";
// components
import CustomInput from "@/components/react-hook-form/CustomInput";
import {
  SIGNIN_FORM_INITIAL_VALUES,
  SIGNIN_FORM_VALIDATION_SCHEMA,
} from "./utilities/constant";
import VerificationEmail from "../signup/components/VerificationEmail";
import { enqueueSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { logInUser } from "@/store/slices/userSlice";

function SigninPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [customerResponse, setCustomerResponse] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [openVerificationDialog, setOpenVerificationDialog] = useState(false);

  const { handleSubmit, trigger, control, setError, watch } = useForm({
    resolver: yupResolver(SIGNIN_FORM_VALIDATION_SCHEMA),
    defaultValues: SIGNIN_FORM_INITIAL_VALUES,
  });

  const [handleSendOTP] = useSendOTPUserMutation();

  const [handleLoginUser] = useLoginUserMutation();

  const onSubmitLoginForm = async (values) => {
    try {
      setIsLoading(true);
      const { data, error } = await handleLoginUser(values);
      if (error) {
        setError("email", { message: error?.data?.error?.email || "" });
        setError("password", { message: error?.data?.error?.password || "" });

        return;
      }
      await handleSendOTP({ email: values.email });
      setOpenVerificationDialog(true);
      setCustomerResponse(data.data);
    } catch (error) {
      console.error("Error While Login");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOTP = async (verifyOTPResponse) => {
    if (verifyOTPResponse?.error) {
      enqueueSnackbar("Invalid or Expired OTP", { variant: "error" });
      return;
    }
    dispatch(logInUser(customerResponse.customer));
    enqueueSnackbar("Login Sccess", { variant: "success" });
    dispa;
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
        <Box className="col-11 col-md-8 col-lg-6 col-xl-3">
          <form onSubmit={handleSubmit(onSubmitLoginForm)}>
            <Card elevation={10}>
              <CardContent>
                <Stack spacing={4} sx={{ p: 2 }}>
                  <Typography variant="h5" fontWeight="700">
                    Sign in
                  </Typography>
                  <CustomInput
                    name="email"
                    label="Email"
                    control={control}
                    trigger={trigger}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AlternateEmailIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <CustomInput
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
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
                  <Button
                    size="large"
                    className="fw-bold"
                    type="submit"
                    // sx={{ fontSize: 20 }}
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </Button>
                  <Typography variant="subtitle2" textAlign="center">
                    Don't have an account?{" "}
                    <Link
                      to={"/auth/signup"}
                      className="fw-bold"
                      style={{
                        textDecoration: "none",
                        color: theme.palette.primary.main,
                      }}
                    >
                      Sign up
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

export default SigninPage;
