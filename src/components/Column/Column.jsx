import {Card} from "../Card/Card.jsx";

export const Column = ({title, cards}) => {
    return (
        <div className="main__column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            <div className="cards">
                {cards.map(el => <Card title={el.title} key={el.id} theme={el.theme} date={el.date} />)}
            </div>
        </div>
    )
}