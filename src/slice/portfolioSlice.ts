import { createSlice } from '@reduxjs/toolkit'
import { fetchPortfolioListData } from "../api/request"

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        PortfolioCardData: [{ img: "", title: "", paragraph: "", link: "" }]
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPortfolioListData.fulfilled, (state, action) => {
            state.PortfolioCardData = action.payload
        })
        builder.addCase(fetchPortfolioListData.pending, (state, action) => {
            console.log("pendding")
        })
        builder.addCase(fetchPortfolioListData.rejected, () => {
            console.log("rejected")
        })
    },

})

export default portfolioSlice.reducer
