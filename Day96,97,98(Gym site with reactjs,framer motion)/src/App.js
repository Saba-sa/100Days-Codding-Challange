import "./App.css";
import Hero from "./components/Hero/Hero";
import Program from "./components/Program/Program.jsx";
import Reasons from "./components/Reasons/Reasons.jsx";
import Plans from "./components/Plans/Plans.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Newsletter from "./components/Newsletter/Newsletter.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
