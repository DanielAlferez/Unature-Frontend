import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080/',
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  }
});

export const apiSlice = createApi({
  reducerPath: "api",
  refetchOnReconnect: true,
  pollingInterval: 1000,
  refetchOnMountOrArgChange: true,
  baseQuery: baseQuery,
  endpoints: () => ({}),
});