import { Route, Routes } from "react-router-dom";
import "./main.scss";
import Home from "./pages/homepage/Home";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </>
  );
}

export default App;
