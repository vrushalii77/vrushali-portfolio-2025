import React from "react";
import { motion } from "framer-motion";

// Frontend icons
import ReactIcon from "../assets/technologyIcons/react.png";
import TypeScriptIcon from "../assets/technologyIcons/typescript.png";
import TailwindIcon from "../assets/technologyIcons/tailwind.png";
import HTMLIcon from "../assets/technologyIcons/html.png";
import CSSIcon from "../assets/technologyIcons/css.png";
import JSIcon from "../assets/technologyIcons/javascript.png";

// Backend icons
import JavaIcon from "../assets/technologyIcons/java.png";
import SpringBootIcon from "../assets/technologyIcons/springboot.png";
import MySQLIcon from "../assets/technologyIcons/mysql.png";
import PythonIcon from "../assets/technologyIcons/python.png";
// import GitIcon from "../assets/technologyIcons/git.png";

interface Skill {
  name: string;
  img: string;
}

const frontendSkills: Skill[] = [
  { name: "React", img: ReactIcon },
  { name: "TypeScript", img: TypeScriptIcon },
  { name: "TailwindCSS", img: TailwindIcon },
  { name: "HTML", img: HTMLIcon },
  { name: "CSS", img: CSSIcon },
  { name: "JavaScript", img: JSIcon },
];

const backendSkills: Skill[] = [
  { name: "Java", img: JavaIcon },
  { name: "Spring Boot", img: SpringBootIcon },
  { name: "MySQL", img: MySQLIcon },
  { name: "Python", img: PythonIcon },
];

const Skills: React.FC = () => {
  const renderSkills = (skillsArray: Skill[]) =>
    skillsArray.map((skill, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: idx * 0.1 }}
        className="flex flex-col items-center space-y-3 cursor-pointer"
      >
        {/* Circle Icon with Glow */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full bg-[#111] shadow-lg hover:shadow-[0_0_20px_#38bdf8] transition-all duration-300">
          <img
            src={skill.img}
            alt={skill.name}
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
          />
        </div>
        <span className="text-white font-medium text-sm sm:text-base md:text-lg">
          {skill.name}
        </span>
      </motion.div>
    ));

  return (
    <section
      id="skills"
      className="py-10 lg:py-24 px-6 md:px-20 text-center relative bg-[#0A0A0A] overflow-hidden"
    >
      {/* Animated gradient background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-[#38bdf8] via-[#f472b6] to-[#facc15] rounded-full blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-[#f472b6] via-[#4ade80] to-[#38bdf8] rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 leading-tight bg-gradient-to-r from-[#38bdf8] via-[#f472b6] to-[#facc15] bg-clip-text text-transparent">
        My Skills
      </h2>

      {/* Frontend Section */}
      <div className="mb-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-10">
          Frontend Technologies
        </h3>
        <div className="flex flex-wrap justify-center gap-10">
          {renderSkills(frontendSkills)}
        </div>
      </div>

      {/* Backend Section */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-10">
          Backend & Tools
        </h3>
        <div className="flex flex-wrap justify-center gap-10">
          {renderSkills(backendSkills)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
