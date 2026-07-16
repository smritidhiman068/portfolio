import "./App.css";
import PageBackground from "./components/PageBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import EducationCerts from "./components/EducationCerts";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <PageBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EducationCerts />
        <Contact />
      </main>
    </>
  );
}

export default App;
