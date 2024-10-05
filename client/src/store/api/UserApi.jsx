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
    getContactById: builder.query({
      query: (id) => `/contact/${id}`,
    }),
    createContact: builder.mutation({
      query: (data) => ({
        url: "/add-contact",
        method: "POST",
        body: data,
      }),
    }),
    updateContact: builder.mutation({
      query: ({ formData, id }) => ({
        url: `/contact/${id}`,
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetAllContactQuery,
  useCreateContactMutation,
  useGetContactByIdQuery,
  useUpdateContactMutation,
} = userApi;
