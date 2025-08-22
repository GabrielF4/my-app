import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import logo from "./assets/logo.png";

function getWeekNumber(d = new Date()) {
    return Math.ceil(
        ((d - new Date(d.getFullYear(), 0, 1)) / 86400000 +
            new Date(d.getFullYear(), 0, 1).getDay() +
            1) /
            7
    );
}

function App() {
    return (
        <BrowserRouter>
            <div className="page">
                <header>
                    <img
                        src={logo}
                        alt="Svenska Röda Korset Logotyp"
                        className="logo"
                    />
                    <div className="weekLabel">Vecka: {getWeekNumber()}</div>
                </header>
                <main>
                    <MainPage />
                </main>
                <footer>
                    Obs! This is a private project and isn't made by the red
                    cross brand.
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
