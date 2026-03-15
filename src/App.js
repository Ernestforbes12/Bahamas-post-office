import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Calculator from "./components/Calculator";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Stats/>
      <Calculator/>
      <Locations/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;