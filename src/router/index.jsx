import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// pages
import PrivateLayout from "@/layouts/private";
import PublicLayout from "@/layouts/public";
import TestFrom from "@/components/react-hook-form/TestForm";
import SectionLoader from "@/components/loaders/SectionLoader";
import { logInUser, logOutUser } from "@/store/slices/userSlice";
import { PageNotFound, SigninPage, OTPVerificationPage, SignupPage } from "@/containers";

function Router() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    if (token) {
      dispatch(logInUser());
    } else {
      dispatch(logOutUser());
    }
  }, []);
  return (
    <SectionLoader
      showContentWhileLoading={false}
      isLoading={isAuthenticated === null}
    >
      <Routes>
        <Route path="/">
          <Route path="auth" element={<PublicLayout />}>
            <Route path="signin" element={<SigninPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="verify-otp" element={<OTPVerificationPage />} />
          </Route>
          <Route path="/" element={<PrivateLayout />}>
            <Route path="form"  element={<TestFrom />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </SectionLoader>
  );
}

export default Router;
