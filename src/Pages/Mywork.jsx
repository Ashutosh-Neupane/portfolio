import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Mywork = () => {
  const { theme } = useContext(ThemeContext);

  
 

  const buttonClass = theme 
    ? "btn4"
    : "btn2";

  const imageBorder = theme 
    ? "border border-white"
    : "border border-black";

  const images = [
 "projects/project1.png",
    "projects/project2.png",
    "projects/project3.png",
  ];

  return (
    <section className={`min-h-screen py-10 px-6 transition-all duration-300 `}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">My Portfolio</h2>
        <h3 className="text-xl font-semibold mb-1">My Latest Work</h3>
        <p>Welcome to my web portfolio. Explore the collection of projects that I have worked on.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <img
            key={idx}
            className={`projects rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ${imageBorder}`}
            src={src}
            alt={`Work ${idx + 1}`}
          />
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          className= {buttonClass}
          onClick={() => {
           window.open("https://github.com/Ashutosh-Neupane?tab=repositories", "_blank");
          }}
        >
          Show More
        </button>
      </div>
    </section>
  );
};

export default Mywork;
