import { useState } from "react"
import PortfolioCard from "./PortfolioCard"


interface Props {
    PortfolioCardData: PortfolioCardDatum[]
}

const PortfolioList = (props: Props) => {
    const { PortfolioCardData } = props

    return (
        <>
            <article className="portfolio-wrapper">
                {PortfolioCardData.map((datum, index) => {
                    return (
                        <PortfolioCard datum={datum} key={index} />
                    )
                })}
            </article>
        </>
    )
}

export default PortfolioList


