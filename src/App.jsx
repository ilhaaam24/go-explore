import { Navbar } from "./components/Navbar";
import Destination from "./sections/Destination";
import Hero from "./sections/Hero";
import Service from "./sections/Service";
import Tips from "./sections/Tips";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Destination />
      <Tips />
    </div>
  );
}

export default App;
