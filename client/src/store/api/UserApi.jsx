import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5454/api/user",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("jwt");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/",
    }),
    getAllContact: builder.query({
      query: () => "/contacts",
    }),
  }),
});

export const { useGetUserQuery, useGetAllContactQuery } = userApi;
