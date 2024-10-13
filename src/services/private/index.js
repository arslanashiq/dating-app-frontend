import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "@/utilities/constants";
// utilities

export const privateApi = createApi({
  reducerPath: "privateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),

  endpoints: () => ({}),
});
export const test = "";
