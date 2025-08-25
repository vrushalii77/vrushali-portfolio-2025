import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-darkBg text-white font-sans">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Certifications />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
