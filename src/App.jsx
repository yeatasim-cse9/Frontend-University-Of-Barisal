import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./data/pages/Home";

const About = () => (
  <div className="pt-20 min-h-screen flex justify-center items-center">
    <h1 className="text-2xl">About Us Page Coming Soon</h1>
  </div>
);
const Faculty = () => (
  <div className="pt-20 min-h-screen flex justify-center items-center">
    <h1 className="text-2xl">Faculty Page Coming Soon</h1>
  </div>
);
const Programs = () => (
  <div className="pt-20 min-h-screen flex justify-center items-center">
    <h1 className="text-2xl">Programs Page Coming Soon</h1>
  </div>
);
const Research = () => (
  <div className="pt-20 min-h-screen flex justify-center items-center">
    <h1 className="text-2xl">Research Page Coming Soon</h1>
  </div>
);
const Students = () => (
  <div className="pt-20 min-h-screen flex justify-center items-center">
    <h1 className="text-2xl">Students Page Coming Soon</h1>
  </div>
);
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
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/research" element={<Research />} />
            <Route path="/students" element={<Students />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
