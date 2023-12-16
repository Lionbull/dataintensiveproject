import {BrowserRouter, Route, Routes} from "react-router-dom";
import CountrySelectionPage from "./components/CountrySelectionPage.jsx";
import NavBar from "./components/NavBar.jsx";
import DeveloperInformation from "./components/DeveloperInformation.jsx";
import PublisherInformation from "./components/PublisherInformation.jsx";
import GameInformation from "./components/GameInformation.jsx";
import GamesListPage from "./components/GamesListPage.jsx";
import DeveloperListPage from "./components/DeveloperListPage.jsx";
import PublisherListPage from "./components/PublisherListPage.jsx";


const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<CountrySelectionPage/>}/>
                <Route path="/games/:country" element={<GamesListPage/>}/>
                <Route path="/developer/:country/:id" element={<DeveloperInformation/>}/>
                <Route path="/publisher/:country/:id" element={<PublisherInformation/>}/>
                <Route path="/game/:country/:id" element={<GameInformation/>}/>
                <Route path="/devlist/" element={<DeveloperListPage/>}/>
                <Route path="/publist/" element={<PublisherListPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;