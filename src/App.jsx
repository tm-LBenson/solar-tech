import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Pricing from './components/Pricing';
import "./main.scss";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Pricing/>
      </main>
      <Footer />
    </>
  );
}

export default App;
