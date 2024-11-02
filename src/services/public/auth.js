import { publicApi } from "./index";

const authApi = publicApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
      providesTags: ["loginUser"],
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: "customer",
        method: "POST",
        body,
      }),
      providesTags: ["registerUser"],
    }),
    sendOTPUser: builder.mutation({
      query: (body) => ({
        url: "/otp/user",
        method: "POST",
        body,
      }),
      providesTags: ["sendOTPUser"],
    }),
    verifyOTPUser: builder.mutation({
      query: (body) => ({
        url: "otp/user/verify",
        method: "POST",
        body,
      }),
      providesTags: ["verifyOTPUser"],
    }),
    logoutUser: builder.mutation({
      query: (token) => ({
        url: "/auth/logout",
        method: "POST",
        headers: {
          "x-sh-auth": token,
        },
      }),
      providesTags: ["logoutUser"],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useSendOTPUserMutation,
  useVerifyOTPUserMutation,
  useLogoutUserMutation,
} = authApi;
