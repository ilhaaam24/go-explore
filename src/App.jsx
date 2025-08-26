import { Navbar } from "./components/Navbar";
import Destination from "./sections/Destination";
import Hero from "./sections/Hero";
import Service from "./sections/Service";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Destination />
    </div>
  );
}

export default App;
