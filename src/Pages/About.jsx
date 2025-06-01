import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { Code2, GraduationCap, FolderKanban } from "lucide-react";

const About = () => {
  const { theme } = useContext(ThemeContext);

  // Border color based on theme
  const borderColor = theme  ? "border-white" : "border-black";

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-xl">Introduction</span>
        <h1 className="text-3xl font-bold">About Me</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10 items-center mt-10">
        {/* Image Section */}
        <img
          className={`object-cover rounded-3xl h-[60vh] w-full max-w-[30rem] transition-transform duration-300 hover:scale-105 hover:shadow-lg ${theme === "dark" ? "hover:shadow-white" : "hover:shadow-black"}`}
          src="photo.jpg"
          alt="Profile"
        />

        {/* Text Section */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <p>
            I am a full stack developer from <strong>Gongabu, Kathmandu</strong>.
            Currently studying BSc.CSIT.
          </p>

          <ul className="space-y-6 flex flex-col sm:flex-row gap-6">
            {/* Languages & Tools */}
            <li className={`skills   ${borderColor}`}>
              <div className="flex items-center gap-2 mb-1">
                <Code2 />
                <h6 className="font-semibold text-lg">Languages & Tools</h6>
              </div>
              <p>HTML, CSS, JavaScript, React.js, Node.js, MongoDB</p>
            </li>

            {/* Education */}
            <li className={`skills  ${borderColor}`}>
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap />
                <h6 className="font-semibold text-lg">Education</h6>
              </div>
              <p>BSc.CSIT (Final Year)</p>
            </li>

            {/* Projects */}
            <li className={`skills ${borderColor}`}>
              <div className="flex items-center gap-2 mb-1">
                <FolderKanban />
                <h6 className="font-semibold text-lg">Projects</h6>
              </div>
              <p>Built more than 3 full-stack projects</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
