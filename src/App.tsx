import "./App.css";
import AppContainer from "./components/AppContainer";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <AppContainer header={<AppHeader />}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>;
    </AppContainer>
  );
}

export default App;
