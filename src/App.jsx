import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="bg-white text-[#003366] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-6xl mx-auto px-4 py-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
