import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { Code2, GraduationCap, FolderKanban } from "lucide-react";

const About = () => {
  const { theme } = useContext(ThemeContext);

  const borderColor = theme ? "border-white" : "border-black";

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="text-lg sm:text-xl">Introduction</span>
        <h1 className="text-2xl sm:text-3xl font-bold">About Me</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Image */}
        <div className="w-full lg:w-1/3">
          <img
            className={`w-full h-auto object-cover rounded-3xl transition-transform duration-300 hover:scale-105 hover:shadow-lg ${
              theme === "dark" ? "hover:shadow-white" : "hover:shadow-black"
            }`}
            src="photo.jpg"
            alt="Profile"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-2/3 mt-6 lg:mt-0">
          <p className="text-base sm:text-lg mb-6 leading-relaxed text-left">
            I am a full stack developer from <strong>Gongabu, Kathmandu</strong>. Currently
            studying BSc.CSIT.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Languages & Tools */}
            <div className={`border rounded-xl p-4 flex-1 ${borderColor}`}>
              <div className="flex items-center gap-2 mb-2">
                <Code2 />
                <h6 className="font-semibold text-lg">Languages & Tools</h6>
              </div>
              <p className="text-sm sm:text-base">
                HTML, CSS, JavaScript, React.js, Node.js, MongoDB
              </p>
            </div>

            {/* Education */}
            <div className={`border rounded-xl p-4 flex-1 ${borderColor}`}>
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap />
                <h6 className="font-semibold text-lg">Education</h6>
              </div>
              <p className="text-sm sm:text-base">BSc.CSIT (Final Year)</p>
            </div>

            {/* Projects */}
            <div className={`border rounded-xl p-4 flex-1 ${borderColor}`}>
              <div className="flex items-center gap-2 mb-2">
                <FolderKanban />
                <h6 className="font-semibold text-lg">Projects</h6>
              </div>
              <p className="text-sm sm:text-base">Built more than 3 full-stack projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
