"use client";

import { ColourfulText } from "./ui/colorful-text"; // Adjust the import path
import { PinContainer } from "./ui/PinContainer";

const randomWebsites = [
  "https://example.com",
  "https://github.com",
  "https://vercel.com",
  "https://netlify.com",
  "https://react.dev",
  "https://nextjs.org",
  "https://tailwindcss.com",
];

const fakeProjects = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  title: `Project ${index + 1}`,
  img: `https://source.unsplash.com/random/500x300?sig=${index + 1}`, // Random Unsplash image
  des: `A brief description of project ${index + 1}.`,
  link: randomWebsites[Math.floor(Math.random() * randomWebsites.length)], // Random website link
}));

const RecentProjects = () => {
  return (
    <div className="py-20 pl-5 bg-[#222222] text-gray-300" id="projects">
      <h1 className="uppercase tracking-widest text-2xl md:text-4xl lg:text-5xl m-2">
        <ColourfulText text="A small selection of Recent projects" />
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {fakeProjects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 bg-[#222222]">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#222222]"
                >
                  <img src="/bg.png" alt="Background" className="w-full h-full object-cover opacity-50" />
                </div>
                <img
                  src={item.img}
                  alt="Project Cover"
                  className="z-10 absolute bottom-0 w-full h-auto"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-[#f9fe8f]">
                {item.title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-gray-300 mt-2">
                {item.des}
              </p>

              <div className="flex justify-center items-center mt-7 mb-3">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex lg:text-xl md:text-xs text-sm underline cursor-pointer text-[#f9fe8f]"
                >
                  Check Live Site
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
