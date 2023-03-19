import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import FoodCreate from "./components/FoodCreate";
import Nav from "./components/Nav";
import Detail from "./components/Detail";
import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = "https://pi-food-back-production-97f8.up.railway.app";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/foodcreate" element={<FoodCreate />} />
        <Route path="/recipes/:recipeId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
