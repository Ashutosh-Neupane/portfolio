import { useContext, useRef } from "react";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Mywork from "./Pages/Mywork";
import { ThemeContext } from "./ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const myWorkRef = useRef(null);
  const serviceRef = useRef(null);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`scroll-smooth overflow-hidden ${
        theme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Header */}
      <header
        className={`flex fixed w-full items-center justify-between md lg:px-10 py-6 shadow-md z-50 font-poppins ${
          theme ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {/* Left side: Title */}
        <h1 className="text-3xl font-bold">
          Ashutosh<span className="text-purple-600">.</span>
        </h1>

        <Navbar
          homeRef={homeRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
          myWorkRef={myWorkRef}
          serviceRef={serviceRef} // Ensure serviceRef is passed if needed by Navbar
        />

        {/* Right side: Theme Toggle - Hidden on small screens (md:block makes it visible on medium and up) */}
        <div className="hidden md:block">
          {" "}
          {/* This div hides the toggle on mobile */}
          {theme ? (
            <FaSun
              onClick={() => setTheme(false)}
              className="cursor-pointer text-2xl"
              title="Switch to light mode"
            />
          ) : (
            <FaMoon
              onClick={() => setTheme(true)}
              className="cursor-pointer text-2xl"
              title="Switch to dark mode"
            />
          )}
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[90px]" />

      {/* Sections */}
      <section ref={homeRef} className="min-h-screen scroll-mt-24">
        <Home />
      </section>

      <section ref={aboutRef} className="min-h-screen scroll-mt-24">
        <About />
      </section>

      <section ref={myWorkRef} className="min-h-screen scroll-mt-24">
        <Mywork />
      </section>

      <section ref={contactRef} className="min-h-screen scroll-mt-24">
        <Contact />
      </section>
    </div>
  );
};

export default App;
