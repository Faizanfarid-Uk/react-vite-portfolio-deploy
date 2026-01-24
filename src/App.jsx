import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";


import CustomCursor from "./components/CustomCursor";
import PageHeader from "./components/PageHeader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";


function App() {
  const [loading, setLoading] = useState(true);
  const [startTyping, setStartTyping] = useState(false);

  // Loader timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // Typing sync (ONLY for intro page)
  useEffect(() => {
    if (!loading) {
      const typingTimer = setTimeout(() => {
        setStartTyping(true);
      }, 500);

      return () => clearTimeout(typingTimer);
    }
  }, [loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
    <CustomCursor />
      <Navbar />
      <PageHeader />
      <Routes>
        {/* 1️⃣ Intro Page */}
        <Route path="/" element={<Hero startTyping={startTyping} />} />

        {/* 2️⃣ About Page */}
        <Route path="/about" element={<About />} />

        {/* 3️⃣ Skills Page */}
        <Route path="/skills" element={<Skills />} />

        {/* 4️⃣ Projects Page */}
        <Route path="/projects" element={<Projects />} />

        {/* 5️⃣ Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
