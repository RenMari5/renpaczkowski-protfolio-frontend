import { Route, Routes } from "react-router-dom";
import "./App.css";
import EnglishPage from "./pages/EnglishPage";
import JapanesePage from "./pages/JapanesePage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/english" element={<EnglishPage />} />
        <Route path="/japanese" element={<JapanesePage />} />
      </Routes>
    </div>
  );
}

export default App;
