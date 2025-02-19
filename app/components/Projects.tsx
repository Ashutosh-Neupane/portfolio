"use client";

import { ColourfulText } from "./ui/colorful-text"; // adjust the import path
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
    <div className="py-20 pl-5" id="project">
      <h1 className="heading">
      <ColourfulText text="    A small selection of Recent projects" />
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {fakeProjects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex justify-center items-center mt-7 mb-3">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex lg:text-xl md:text-xs text-sm underline cursor-pointer"
                >
                  <ColourfulText text="Check Live Site" />
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
