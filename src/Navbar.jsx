import React from "react";

const Navbar = ({ homeRef, aboutRef, contactRef, myWorkRef }) => {
  let className1 = "hover:underline  cursor-pointer";
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex gap-8 border  mx-[auto] rounded-3xl py-2 px-6 shadow-md bg-transparent">
      <button onClick={() => scrollToSection(homeRef)} className={className1}>
        Home
      </button>
      <button onClick={() => scrollToSection(aboutRef)} className={className1}>
        About
      </button>
      <button onClick={() => scrollToSection(myWorkRef)} className={className1}>
        My Work
      </button>
      <button
        onClick={() => scrollToSection(contactRef)}
        className={className1}
      >
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
