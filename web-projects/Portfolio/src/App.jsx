import { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Experience from "./components/Experience";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
   
  };
  

  return (
    <>
      <div className={"fixed -z-10 w-full min-h-screen"} style={{
          background: isDarkMode
            ? 'radial-gradient(125% 125% at 50% 20%, rgba(0, 0, 0, 1) 50%, rgba(255, 0, 0, 1) 100%)'
            : 'linear-gradient(to bottom, #cfd9df 0%, #cccccc 100%)' // Light background
        }}></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Hero />
        <Tech />
        <Projects />
        <Experience/>
        <Contact />
      </main>
    </>
  );
}

export default App;
