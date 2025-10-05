import { Navbar } from "./components/Navbar";
import Destination from "./sections/Destination";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Logos from "./sections/Logos";
import Service from "./sections/Service";
import Testimonials from "./sections/Testimonials";
import Tips from "./sections/Tips";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Destination />
      <Tips />
      <Testimonials />
      <Logos />
      <Footer />
    </div>
  );
}

export default App;
