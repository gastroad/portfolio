import { useEffect, FC } from 'react'
import { useSelector } from 'react-redux'

import PortfolioList from "./PortfolioList"
import { RootState, useAppDispatch } from "../../store"
import { fetchPortfolioList } from "../../api/request"
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner"



const Portfolio: FC = () => {
    const portfolio = useSelector((state: RootState) => state.portfolio)
    const { portfolioList, status } = portfolio
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPortfolioList())
    }, [])

    return (
        <>
            {status === "PENDDING" && <LoadingSpinner />}
            <section>
                <PortfolioList portfolioList={portfolioList} />
            </section>
        </>
    )
}
export default Portfolio 