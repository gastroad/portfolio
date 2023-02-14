import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { portfolioCardData } from "./mockData"
// import { userAPI } from './userAPI'

const fetchPortfolioListData = createAsyncThunk(
    'fetchPortfolioListData',
    async () => {
        return await getPortfolioCardData();
    },
);

const getPortfolioCardData = async (): Promise<PortfolioCardDatum[]> => {
    return new Promise(resolve => {
        setTimeout(() => { resolve(portfolioCardData) }, 1000)
    })
}

export { fetchPortfolioListData }