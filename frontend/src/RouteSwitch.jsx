import {BrowserRouter, Route, Routes} from "react-router-dom";
import CountrySelectionPage from "./components/CountrySelectionPage.jsx";
import Header from "./components/Header.jsx";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<CountrySelectionPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;