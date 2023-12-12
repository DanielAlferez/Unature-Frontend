import { apiSlice } from "./apiSlice";

export const postsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => ({
                url: `/post`,
            })
        }),
        getPublications: builder.query({
            query: () => ({
                url: `/publications`,
            })
        }),
        getPublication: builder.query({
            query: (id) => ({
                url: `/publication/${id}`,
            })
        }),
        createPost: builder.mutation({
            query: (data) => ({
                url: `/post`,
                method: 'POST',
                body: data,
            }),
        }),
        createIdentify: builder.mutation({
            query: (data) => ({
                url: `/identificacion`,
                method: 'POST',
                body: data,
            }),
        }),
        createApprove: builder.mutation({
            query: (data) => ({
                url: `/aprobacion`,
                method: 'POST',
                body: data,
            }),
        }),
        getIdenfities: builder.query({
            query: (id) => ({
                url: `/publicacion/${id}/identificaciones`,
            })
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `/post/${id}`,
                method: 'DELETE',
            }),
        }),
        getGlobal: builder.query({
            query: (id) => ({
                url: `/global`,
            }),
        }),
        
    })
})

export const {
    useGetPostsQuery,
    useCreatePostMutation,
    useGetPublicationsQuery,
    useGetPublicationQuery,
    useCreateIdentifyMutation,
    useCreateApproveMutation,
    useGetIdenfitiesQuery,
    useDeletePostMutation,
    useGetGlobalQuery
} = postsApiSlice