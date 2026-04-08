import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Explore from "./components/Explore";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Explore />
        <Testimonials />
        <Features />
        <About />
        {/* <Team /> */}
        <Contact />
      </main>
    </>
  );
}

export default App;
