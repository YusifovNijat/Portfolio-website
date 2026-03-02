import Hero from "./components/Hero";
import AboutSkills from "./components/AboutSkills";
import "./App.css";
import Projects from "./components/Projects/Projects";
import Recommendation from "./components/Recommendation/Recommendation";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
    <Navbar />
    <div id="top">
      <Hero />
      <AboutSkills />
      <Projects />
      <Recommendation />
      <Footer />
    </div>
    </>
  );
}
