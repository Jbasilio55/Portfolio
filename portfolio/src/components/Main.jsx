import React from "react";
import pic2 from "../img/pic2.jpeg";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={pic2}
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Jorge Basilio
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Software Developer",
                2000, // Waits 2s
                "Software Engineer",
                2000, // Waits 2s
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://www.instagram.com/jorgelb/" target="_blank">
              <FaInstagram
                className="cursor-pointer"
                size={30}
                to="https://www.instagram.com/jorgelb/"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jorge-basilio-180484198/"
              target="_blank"
            >
              <FaLinkedin
                className="cursor-pointer"
                size={30}
                to="https://www.linkedin.com/in/jorge-basilio-180484198/"
              />
            </a>
            <a href="https://github.com/Jbasilio55" target="_blank">
              <FaGithub
                className="cursor-pointer"
                size={30}
                to="https://github.com/Jbasilio55"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
