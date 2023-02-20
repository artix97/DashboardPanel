import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers", "Transactions", "Geography"],
  endpoints: (build) => ({
    getUser: build.query({
      query: ({ email, password }) => ({
        url: "http://127.0.0.1:8000/api/admins/login",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: (token,type) => ({
        url: "http://127.0.0.1:8000/api/users",
        method: "GET",
        prepareHeaders: (headers, token) => {
          // If we have a token set in state, let's assume that we should be passing it.
          if (token) {
            headers.set("authorization", `Bearer ${token}`);
            headers.set("role", "admin")
          }
          return headers;
        },
        params:{ type
        }
      }),
    }),

    // getCustomers: build.query({
    //   query: () => "client/customers",
    //   providesTags: ["Customers"],
    // }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
} = api;
