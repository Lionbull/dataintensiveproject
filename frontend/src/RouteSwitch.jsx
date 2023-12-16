import {BrowserRouter, Route, Routes} from "react-router-dom";
import CountrySelectionPage from "./components/CountrySelectionPage.jsx";
import Header from "./components/Header.jsx";
import DeveloperInformation from "./components/DeveloperInformation.jsx";
import PublisherInformation from "./components/PublisherInformation.jsx";
import GameInformation from "./components/GameInformation.jsx";
import GamesListPage from "./components/GamesListPage.jsx";


const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<CountrySelectionPage/>}/>
                <Route path="/games" element={<GamesListPage country={'Finland'}/>}/>
                <Route path="/developer/:country/:id" element={<DeveloperInformation/>}/>
                <Route path="/publisher/:country/:id" element={<PublisherInformation/>}/>
                <Route path="/game/:country/:id" element={<GameInformation/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;