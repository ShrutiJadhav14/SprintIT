import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Placement from "./pages/Placement";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import DetailedCourse from "./pages/DetailedCourse";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/about" element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path="/courses/:courseId" element={<DetailedCourse />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
