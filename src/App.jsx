// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Faculty from "./pages/Faculty";
import Programs from "./pages/Programs";
import Students from "./pages/Students";
import Research from "./pages/Research";

// Simple placeholder for Contact until you build the page
const Contact = () => (
  <div className="pt-20 min-h-screen flex justify-center items-center">
    <h1 className="text-2xl">Contact Us Page Coming Soon</h1>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        {/* Give global top padding to avoid fixed header overlap on any route */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/students" element={<Students />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
