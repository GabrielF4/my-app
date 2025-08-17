import "./App.css";
import MainPage from "./MainPage";
import logo from "../assets/logo.png";

function App() {
    return (
        <>
            <header>
                <img
                    src={logo}
                    alt="Svenska Röda Korset Logotyp"
                    className="logo"
                />
            </header>
            <main>
                <MainPage />
            </main>
            <footer>
                Obs! This is a private project and isn't made by the red cross
                brand.
            </footer>
        </>
    );
}

export default App;
