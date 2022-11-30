import { Route, Routes } from "react-router-dom";
import "./App.css";
import EnglishPage from "./pages/EnglishPage";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Welcome!</h1>
      <Routes>
        <Route path="/" element={<EnglishPage />} />
      </Routes>
    </div>
  );
}

export default App;
