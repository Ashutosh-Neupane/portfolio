import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[100vh] px-4 text-center">
      <div className="flex flex-col items-center">
        <img
          src="photo.jpg"
          alt="profile"
          className="object-cover w-48 h-48 rounded-full"
        />
        <h3 className="mt-4 text-xl font-bold">Hi! I am Ashutosh Neupane</h3>
      </div>

      <h6 className="text-lg font-semibold ">
        Full Stack Web Developer (MERN)
      </h6>

      <p className="max-w-xl ">
        I am a full stack developer from <strong>Gongabu, Kathmandu</strong>. 
        Currently studying BSc.CSIT.
      </p>

      <div className="flex gap-4 mt-4">
        <button className={theme ? "btn3" : "btn1"}>
          Contact Me
        </button>
        <button className={theme ? "btn4" : "btn2"}>
          My Resume
        </button>
      </div>
    </div>
  );
};

export default Home;
