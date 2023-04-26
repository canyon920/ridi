import { configureStore} from "@reduxjs/toolkit"
import {apiSlice} from '../../blog-cu/src/Router/Common/apiSlice'
import authReducer from '../src/Router/Common/authSlice'

export const store = configureStore({
reducer: {
    [aplSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer
    },
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(apliSlice.middleware)
})