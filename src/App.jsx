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

function getWeekColor(week) {
    const colors = new Map([
        [0, "#334093ff"],
        [1, "#4E8C4C"],
        [2, "#C44545"],
        [3, "#1c1c1cff"],
        [4, "#fff700ff"],
    ]);

    //Week 28 is missing
    return week < 28 ? colors.get(week % 5) : colors.get((week + 1) % 5);
}

function getWeekTextColor(week) {
    let thisWeek = week < 28 ? week : week + 1;

    //Week 28 is missing
    return thisWeek % 5 === 4 ? "black" : "white";
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
                    <div
                        className="weekLabel"
                        style={{
                            backgroundColor: getWeekColor(getWeekNumber()),
                            color: getWeekTextColor(getWeekNumber()),
                        }}
                    >
                        Vecka: {getWeekNumber()}
                    </div>
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
