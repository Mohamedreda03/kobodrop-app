import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Partners from "./components/Partners";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Partners />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
