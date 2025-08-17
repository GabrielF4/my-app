import "./App.css";
import MainPage from "./pages/MainPage";
import logo from "./assets/logo.png";

function App() {
    return (
        <div className="page">
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
        </div>
    );
}

export default App;
