import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import NeonLayeredButton from "./Button/NeonLayeredButton";

const projects = [
  {
    title: "Training & Placement Management",
    desc: [
      "Designed and implemented a web-based platform for managing student placements, job opportunities, and company interactions.",
      "Built distinct modules for Admin, HOD, Company, and Student, ensuring secure and role-specific functionalities.",
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "jQuery",
      "MySQL",
      "XAMPP",
    ],
    github: "https://github.com/vrushalii77/Training-And-Placement-Management",
  },
  {
    title: "CarCaddy – Car Rental Automation System",
    desc: [
      "Developed a full-stack car rental system with vehicle management, bookings, and customer interactions.",
      "Built backend APIs using Spring Boot for efficient handling of availability, pricing, and reservations.",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "Postman", "XAMPP", "Thymeleaf"],
    github:
      "https://github.com/vrushalii77/Carcaddy_Car_Rental_Automation_System",
  },
  {
    title: "Medical Management with Digital Drawer System",
    desc: [
      "Created a web-based solution to help admins quickly locate medicines using a digital drawer system.",
      "Implemented structured database to track stock levels, expiry dates, and medicine locations for smooth operations.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "jQuery", "MySQL"],
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-16 py-10 lg:py-24 px-6 md:px-20 relative bg-[#0B0B0B] overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-[#38bdf8] via-[#f472b6] to-[#facc15] rounded-full blur-[180px] opacity-25 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-[#6BCB77] via-[#f472b6] to-[#38bdf8] rounded-full blur-[180px] opacity-25 animate-blob animation-delay-2000"></div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center leading-tight mb-12 bg-gradient-to-r from-[#38bdf8] via-[#f472b6] to-[#facc15] bg-clip-text text-transparent">
        Featured Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.05, rotateX: 4, rotateY: -4 }}
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg group cursor-pointer transition-all duration-500 hover:shadow-cyan-400/40"
          >
            {/* Project Title */}
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#38bdf8] transition-colors duration-300">
              {proj.title}
            </h3>

            {/* Project Desc (Bulleted) */}
            <ul className="text-gray-300 text-sm mb-4 list-disc list-inside space-y-2">
              {proj.desc.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {proj.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#38bdf8]/30 to-[#f472b6]/30 text-gray-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Button */}
            <div className="flex justify-start">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:text-white hover:border-gray-400 hover:shadow-lg hover:shadow-gray-700/40 transition-all duration-300 ease-in-out"
              >
                <FaGithub
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-16 flex justify-center">
        <NeonLayeredButton
          text={
            <div className="flex items-center justify-center gap-2">
              <FaGithub size={20} />
              <span>View More Projects</span>
            </div>
          }
          className="mx-auto"
          sizeClassName="w-[240px] h-[55px]"
          onClick={() =>
            window.open("https://github.com/vrushalii77", "_blank")
          }
        />
      </div>
    </section>
  );
};

export default Projects;
