import './App.css'
import {Header} from "./components/Header/Header.jsx";
import {Main} from "./components/Main/Main.jsx";
import {PopNewCard} from "./components/Popups/PopNewCard/PopNewCard.jsx";
import {PopBrowse} from "./components/Popups/PopBrowse/PopBrowse.jsx";
import {PopUser} from "./components/Popups/PopUser/PopUser.jsx";

function App() {
  return (
        <div className="wrapper">
            <PopUser/>
            <PopNewCard/>
            <PopBrowse/>
            <Header/>
            <Main/>
        </div>
  )
}

export default App
