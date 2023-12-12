import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/Api/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query/react'; // Corrected import path

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

setupListeners(store.dispatch)
