import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => ({
                url: `/user`,
            })
        }),
        getUser: builder.query({
            query: (id) => ({
                url: `/user/${id}`,
            })
        }),
    })
})

export const {
    useGetUsersQuery,
    useGetUserQuery,
} = userApiSlice