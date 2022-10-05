import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./components/Navigation.jsx";
import StoreListings from "./components/StoreListings";
import Navigation from "./components/Navigation.jsx";
import Background from "./components/Background";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
