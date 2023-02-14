import { useDispatch } from 'react-redux'


import { configureStore } from '@reduxjs/toolkit'
import portfolioReducer from "./slice/portfolioSlice"

const store = configureStore({
    reducer: { portfolio: portfolioReducer }
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

