import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import PortfolioList from "./PortfolioList"
import { RootState, useAppDispatch } from "../../store"

import { fetchPortfolioListData } from "../../api/request"

const Portfolio = () => {
    const portfolio = useSelector((state: RootState) => state.portfolio)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPortfolioListData())
    }, [])

    return (
        <>
            <section>
                <PortfolioList PortfolioCardData={portfolio.PortfolioCardData} />
            </section>
        </>
    )
}
export default Portfolio 