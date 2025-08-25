import React from "react";
import profileImg from "../assets/selfImg.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import NeonLayeredButton from "./Button/NeonLayeredButton";
import resume from "../assets/Vrushali_Jadhav_Resume.pdf";

const Header: React.FC = () => {
  return (
    <header className="relative w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-32 py-12 lg:py-20  bg-[#0B0B0B] text-white overflow-hidden">
      {/* Subtle gradient animated background blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-[#38bdf8] via-[#f472b6] to-[#facc15] rounded-full opacity-20 blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-[#f472b6] via-[#38bdf8] to-[#4ade80] rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>

      {/* Left Section - Text */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-6 z-10 pt-2 lg:pt-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#38bdf8] via-[#f472b6] to-[#facc15] bg-clip-text text-transparent leading-tight">
          Hi, I'm <span className="text-white">Vrushali</span>
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200">
          Full Stack Developer | Java & React
        </h2>
        <p className="text-gray-400 max-w-md sm:max-w-lg text-sm sm:text-base lg:text-lg">
          I craft modern web applications with responsive frontends, scalable
          backends, and clean, maintainable code — delivering experiences that
          are efficient and user-friendly.
        </p>

        {/* Resume Button & Social Icons */}
        <div className="flex flex-col items-center lg:items-start gap-6 mt-6">
          {/* Neon Button */}
          <a href={resume} download>
            <NeonLayeredButton text="Download Resume" />
          </a>

          {/* Social Icons */}
          <div className="flex space-x-6 text-2xl sm:text-3xl mt-2">
            <a
              href="https://www.linkedin.com/in/vrushali-jadhav007/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0ea5e9] transition transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/vrushalii77"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#f472b6] transition transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="mailto:vrushalinjadhav123@gmail.com"
              className="text-white hover:text-[#facc15] transition transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="flex-1 flex justify-center lg:justify-end relative mb-10 lg:mb-0 mt-24 lg:mt-12">
        {/* Glow around image */}
        <div className="absolute w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-[#38bdf8] via-[#f472b6] to-[#facc15] rounded-full opacity-30 blur-2xl animate-pulse -z-10"></div>

        <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.6)] border-4 border-gradient-to-tr from-[#38bdf8] via-[#f472b6] to-[#facc15] hover:scale-105 transform transition duration-500">
          <img
            src={profileImg}
            alt="Vrushali Jadhav"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
