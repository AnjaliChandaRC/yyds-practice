import "./App.css";
import AboutUs from "./components/AboutUs";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurBuilders from "./components/OurBuilders";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Tokenomics />
      <Roadmap />
      <OurBuilders />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
