import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CountrySelectionPage from "./components/CountrySelectionPage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<CountrySelectionPage/>}/>
        </Routes>
    </BrowserRouter>,
)
