import { useState } from "react"
import PreviewCard from "./PreviewCard"


const PreviewList = () => {
    const [data, setData] = useState<PreviewCardDatum[]>(PreviewCardData)

    return (
        <>
            <article className="preview-wrapper">
                {data.map((datum, index) => {
                    return (
                        <PreviewCard datum={datum} key={index} />
                    )
                })}
            </article>
        </>
    )
}

export default PreviewList


const PreviewCardData = [
    {
        img: require("../../assets/image/profile.jpeg").default,
        title: "이력서",
        paragraph: "5년차 프론트엔드 개발자 진현성 이력서 입니다.",
        test: () => { return }
    }, {
        img: require("../../assets/image/github.png").default,
        title: "GitHub",
        paragraph: "github 링크 입니다.",
        test: () => { return }
    }, {
        img: require("../../assets/image/slides.png").default,
        title: "Slides",
        paragraph: "pt발표 자료 입니다.",
        test: () => { return }
    }
]
