import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Importing icons from lucide-react
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Navbar = ({ homeRef, aboutRef, contactRef, myWorkRef }) => {
  const { theme } = useContext(ThemeContext);
  // State to manage the mobile menu's open/close status
  const [isOpen, setIsOpen] = useState(false);

  // Common class for navigation buttons
  let navButtonClass =
    "hover:underline cursor-pointer py-2 px-4 rounded-md transition-colors duration-200";
  let mobileNavButtonClass =
    "block text-center w-full py-3  hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 self-center";

  // Function to scroll to a section and close the mobile menu if it's open
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <nav className={`fixed top-4 left-[85%] md:left-1/2 -translate-x-1/2 z-50`}>
      <div
        className={`flex items-center justify-between border mx-auto rounded-3xl py-2 px-6 shadow-lg   overflow-hidden md:${
          theme ? "border-gray-200" : "border-gray-700"
        }`}
      >
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection(homeRef)}
            className={navButtonClass}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className={navButtonClass}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(myWorkRef)}
            className={navButtonClass}
          >
            My Work
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className={navButtonClass}
          >
            Contact
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none   rounded-md"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (conditionally rendered) */}
      {isOpen && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 mt-2   border flex justify-center flex-col align-center  rounded-lg shadow-lg py-2 px-4 animate-fade-in-down ${  theme?"bg-black text-white":"bg-white text-black"} `}
        >
          <button
            onClick={() => scrollToSection(homeRef)}
            className={mobileNavButtonClass}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className={mobileNavButtonClass}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(myWorkRef)}
            className={mobileNavButtonClass}
          >
            My Work
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className={mobileNavButtonClass}
          >
            Contact
          </button>
        </div>
      )}

      {/* Tailwind CSS custom animation for fade-in-down */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
