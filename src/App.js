import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      <Header />
      <section className="flex justify-center items-center h-auto py-8 bg-gradient-to-br from-sky-500 to-indigo-600 text-stone-300">
        <Routes>
          <Route path="/React-Portfolio" element={<About />} />
          <Route path="React-Portfolio/portfolio" element={<Portfolio />} />
          <Route path="React-Portfolio/contact" element={<Contact />} />
          <Route path="React-Portfolio/resume" element={<Resume />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
