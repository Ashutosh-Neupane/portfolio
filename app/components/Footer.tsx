"use client";
import Link from "next/link";
import Buttons from "./ui/buttons"; // Make sure you import Buttons

const socialMedia = [
  {
    id: 1,
    img: "/socialmedia/facebook.svg",
    link: "https://facebook.com/ashutoshneupane", // Replace with your actual Facebook link
  },
  {
    id: 2,
    img: "/socialmedia/x.svg",
    link: "https://twitter.com/yourprofile", // Replace with your actual Twitter link
  },
  {
    id: 3,
    img: "/socialmedia/linkedin.svg",
    link: "https://linkedin.com/in/yourprofile", // Replace with your actual LinkedIn link
  },
  {
    id: 4,
    img: "/socialmedia/github.svg",
    link: "https://github.com/yourprofile", // Replace with your actual GitHub link
  },
];

const Footer = () => {
  return (
    <footer className="w-full pt-12 pl-12 pr-12 pb-6 relative " id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-6 my-3 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <Link href="mailto:nirjan@gmail.com" legacyBehavior>
          <a >
            <Buttons text="Contact" />
          </a>
        </Link>
      </div>

      <div className="flex mt-12 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-center">
          Copyright © 2024 Nirajan Khatiwada
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center bg-white items-center backdrop-filter backdrop-blur-lg p-0 saturate-180 bg-opacity-75 rounded-lg border border-black-300"
            >
              <img className="w-full h-full" src={info.img} alt={`${info.link} icon`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;