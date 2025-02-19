import { ColourfulText } from "./ui/colorful-text";
import Buttons from "./ui/buttons";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";

const skills = [
  {
    title: "Data Analysis",
    description: "You can call me the Sherlock Holmes of data.",
    link: "/",
    img: "/skills/datascience.svg", // Add image path
  },
  {
    title: "Machine Learning",
    description: "I've been training Jarvis in my leisure time.",
    link: "/",
    img: "/skills/machinelearning.svg", // Add image path
  },
  {
    title: "Graphics Design",
    description: "A modern-day Picasso.",
    link: "/",
    img: "/skills/graphicsdesign.svg", // Add image path
  },
];

const Hero = () => {
  return (
    <div className="flex flex-col justify-center  text-gray-300items-center w-full text-center relative overflow-visible p-4 sm:m-[3rem]  overflow-x-hidden min-h-screen">
      {/* Background Overlay */}
      <div className="h-full w-full  bg-grid-black/[0.05] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto relative z-10 gap-8 lg:gap-12">
        {/* Text Section */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left text-base p-4">
          <h1 className="uppercase tracking-widest text-2xl md:text-4xl lg:text-5xl m-2">
            <ColourfulText text="Nirajan Khatiwada" />
          </h1>
          <h2 className="uppercase tracking-widest text-xl md:text-3xl lg:text-4xl ml-2">
            <TextGenerateEffect words="Hey There!!" />
          </h2>
          <div className="m-2 text-lg md:text-xl lg:text-2xl">
            <TextGenerateEffect words="A man who will need no introduction in the near future, but for now a 6th semester Bsc.Csit student hustling to create some chaos in the field of Data science." />
          </div>

          <Link href="mailto:nirjan@gmail.com" legacyBehavior>
            <a>
              <Buttons text="Chat With Me" aria-label="Chat With Me Button" />
            </a>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center p-4">
          <Image
            src="/nirajan.png"
            alt="Portrait of Nirajan Khatiwada"
            width={300}
            height={300}
            priority={true}
            className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-lg shadow-lg"
          />
        </div>

        {/* Skills Section */}
        <div className="flex-1 flex flex-col justify-start items-start w-full max-w-sm mx-auto md:ml-4 lg:ml-0 lg:text-left">
          <h1 className="uppercase tracking-widest text-5xl m-2 font-bold lg:hidden">
            <ColourfulText text="Skills" />
          </h1>

          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-start items-start w-full bg-white dark:bg-[#2222] p-4 m-2 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 ease-in-out hover:bg-purple-50 hover:shadow-xl transform hover:translate-y-2 animate-fadeIn relative overflow-hidden"
            >
              {/* Image on the left */}
              <div className="flex-shrink-0   rounded-l mr-4">
                <Image
                  src={skill.img}
                  alt={`${skill.title} icon`}
                  width={60}
                  height={60}
                  className="w-20 h-20 object-contain overflow-clip"
                />
              </div>

              {/* Text content */}
              <div className="flex-1">
                <div className="text-lg md:text-xl lg:text-2xl uppercase font-semibold text-purple text-left">
                  <ColourfulText text={skill.title} />
                </div>
                <div className="text-left text-base md:text-lg lg:text-xl">
                  <TextGenerateEffect words={skill.description} />
                </div>
              </div>

              {/* Spinning border */}
              <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin-slow border-t-purple-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
