import {Column} from "../Column/Column.jsx";
import {Card} from "../Card/Card.jsx";

export const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__block">
                    <div className="main__content">
                        <Column title={'Без статуса'} cards={
                            <>
                                <Card name={'Web design'} color={'_orange'} />
                                <Card name={'Research'} color={'_green'} />
                                <Card name={'Copywrite'} color={'_purple'} />
                                <Card name={'Copywrite'} color={'_purple'} />
                            </>
                        } />
                        <Column title={'Нужно сделать'} cards={<Card name={'Web design'} color={'_orange'} />} />
                        <Column title={'В работе'} cards={
                            <>
                                <Card name={'Research'} color={'_green'} />
                                <Card name={'Copywrite'} color={'_purple'} />
                            </>
                        } />
                        <Column title={'Тестирование'} cards={<Card name={'Copywrite'} color={'_purple'} />}/>
                        <Column title={'Готово'} cards={
                            <>
                                <Card name={'Web design'} color={'_orange'} />
                                <Card name={'Research'} color={'_green'} />
                                <Card name={'Copywrite'} color={'_purple'} />
                                <Card name={'Copywrite'} color={'_purple'} />
                                <Card name={'Web design'} color={'_orange'} />
                                <Card name={'Research'} color={'_green'} />
                                <Card name={'Copywrite'} color={'_purple'} />
                                <Card name={'Copywrite'} color={'_purple'} />
                            </>
                        } />
                    </div>
                </div>
            </div>
        </main>
    )
}