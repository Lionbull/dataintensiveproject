import {BrowserRouter, Route, Routes} from "react-router-dom";
import CountrySelectionPage from "./components/CountrySelectionPage.jsx";
import Header from "./components/Header.jsx";
import DeveloperInformation from "./components/DeveloperInformation.jsx";
import PublisherInformation from "./components/PublisherInformation.jsx";
import GameInformation from "./components/GameInformation.jsx";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<CountrySelectionPage/>}/>

                <Route path="/dev" element={<DeveloperInformation/>}/>
                <Route path="/pub" element={<PublisherInformation/>}/>
                <Route path="/gaem" element={<GameInformation/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;