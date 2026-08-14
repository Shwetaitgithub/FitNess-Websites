import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Facilities from "./components/Facilities";
import Trainers from "./components/Trainers";
import Membership from "./components/Membership";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Trainers />
      <Membership />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;