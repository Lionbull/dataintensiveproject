import {BrowserRouter, Route, Routes} from "react-router-dom";
import CountrySelectionPage from "./components/CountrySelectionPage.jsx";

const MainRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CountrySelectionPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;