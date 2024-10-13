import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// utilities
import { API_BASE_URL } from "@/utilities/constants";

export const publicApi = createApi({
  reducerPath: "publicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: () => ({}),
});
export const test = "";
