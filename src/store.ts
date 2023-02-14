import { useDispatch } from 'react-redux'


import { configureStore } from '@reduxjs/toolkit'
import portfolioReducer from "./slice/portfolioSlice"

const store = configureStore({
    reducer: { portfolio: portfolioReducer }
})
export default store

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch


