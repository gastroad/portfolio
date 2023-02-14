import { useState } from "react"
import { useNavigate } from "react-router-dom"
import cx from "classnames"

interface Props {
    datum: PreviewCardDatum
}

const PreviewCard = (props: Props) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const { datum } = props
    const { img, title, paragraph } = datum


    const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
        setIsActive(!isActive)
    }
    return (
        <div className={cx("card", { "fade-out": isActive })} onClick={handleCardClick} >
            <img className="card-img" src={img} />
            <div className="card-txt">
                <h5 className="title">{title}</h5>
                <p className="paragraph">{paragraph}</p>
            </div>
        </div>
    )

}

export default PreviewCard