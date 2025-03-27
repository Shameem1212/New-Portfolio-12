import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function AboutUs() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        I am an up and coming DJ that travels all the way from Portland Oregon,
        traveling to places like Los Angeles, New York, Las Vegas, and more to
        come. I am currently in a bootcamp for coding to start a different
        career path.
      </p>
    </div>
  );
}

export default App;
