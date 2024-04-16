import {Card} from "../Card/Card.jsx";

export const Column = ({title, cards}) => {
    return (
        <div className="main__column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            <div className="cards">
                {cards}
            </div>
        </div>
    )
}