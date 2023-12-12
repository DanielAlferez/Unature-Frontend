import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: (data) => ({
                url: `/login`,
                method: 'POST',
                body: data,
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `/signup`,
                method: 'POST',
                body: data,
            }),
        }),
    })
})

export const {
    useLoginMutation,
    useRegisterMutation
} = authApiSlice