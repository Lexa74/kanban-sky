import './App.css'
import {Header} from "./components/Header/Header.jsx";
import {Main} from "./components/Main/Main.jsx";
import {PopNewCard} from "./components/Popups/PopNewCard/PopNewCard.jsx";
import {PopBrowse} from "./components/Popups/PopBrowse/PopBrowse.jsx";
import {PopUser} from "./components/Popups/PopUser/PopUser.jsx";
import {useEffect, useState} from "react";
import {tasks} from "./data.js";
import {GlobalStyle, Wrapper} from "./globalStyle.styled.js";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./themeStyle.styled.js";

function App() {
    const [cards, setCards] = useState(tasks)
    const [isLoading, setIsLoading] = useState(false)
    const [globalTheme, setGlobalTheme] = useState(true)

    const addCard = (e) => {
        e.preventDefault()
        const newCard = {
            id: cards[cards.length - 1].id + 10,
            date: '30.1.2023',
            theme: "Copywriting",
            title: "Название задачи1",
            status: "Без статуса",
        }

        setCards([...cards, newCard])
    }

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 0)
    }, [])

  return (
      <ThemeProvider theme={globalTheme ? lightTheme : darkTheme}>
          <GlobalStyle/>
          <Wrapper>
              <PopUser/>
              <PopNewCard/>
              <PopBrowse/>
              <Header setGlobalTheme={setGlobalTheme} globalTheme={globalTheme} addCard={addCard}/>
              <Main isLoading={isLoading} cards={cards}/>
          </Wrapper>
      </ThemeProvider>
  )
}

export default App
