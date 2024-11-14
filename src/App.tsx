import About from "./components/index/About";
import ContactUs from "./components/index/ContactUs";
import Footer from "./components/index/Footer";
import Hero from "./components/index/Hero";
import Marques from "./components/index/Marques";
import NavBar from "./components/index/NavBar";
import Projects from "./components/index/Projects";
import Services from "./components/index/Services";

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Marques />

      <Projects />
      <ContactUs />

      <Footer />
    </div>
  );
}
