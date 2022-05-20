import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Projects from "./components/Pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <div id="container">
        <Header />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
