import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCertificate } from "react-icons/fa";

import java from "../assets/certificates/java.png";
import dsa from "../assets/certificates/dsa.png";
import simplilearn from "../assets/certificates/simplilearn.png";

// 👉 Internships
const experiences = [
  {
    type: "Internship",
    title: "Java Full Stack Developer Intern",
    company: "Techeon IT Services Pvt. Ltd.",
    date: "March 2024 – Ongoing (Sep 2025)",
    desc: "Currently working on live client projects at Techeon IT Services Pvt. Ltd. I develop responsive websites with React, TailwindCSS, and TypeScript, design company websites & admin panels, and build REST APIs using Spring Boot & MySQL. I am also contributing to the PreNeet Project in an Agile team environment using Git and Postman.",
  },
  {
    type: "Internship",
    title: "Java Full Stack Developer Intern",
    company: "Infosys Springboard",
    date: "Dec 2024 – Feb 2024",
    desc: "At Infosys Springboard, I developed the CarCaddy – Car Rental Automation System. I designed and tested Spring Boot APIs, integrated the frontend with Thymeleaf, and managed relational data using MySQL (XAMPP), ensuring smooth booking and data handling.",
  },
];

// 👉 Certifications
const certifications = [
  {
    title: "Programming using Java",
    issuer: "Infosys Springboard",
    date: "August 2024",
    image: java,
  },
  {
    title: "DSA using Java",
    issuer: "Infosys Springboard",
    date: "August 2024",
    image: dsa,
  },
  {
    title: "Introduction to MERN stack",
    issuer: "Simplilearn",
    date: "March 2024",
    image: simplilearn,
  },
];

const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="scroll-mt-16 py-10 lg:py-24 px-6 md:px-20 relative bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-[#38bdf8] via-[#f472b6] to-[#facc15] rounded-full blur-3xl opacity-25 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-[#f472b6] via-[#4ade80] to-[#38bdf8] rounded-full blur-3xl opacity-25 animate-blob animation-delay-2000"></div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center leading-tight mb-12 bg-gradient-to-r from-[#38bdf8] via-[#f472b6] to-[#facc15] bg-clip-text text-transparent">
        Experience & Certifications
      </h2>

      {/* Internships */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-10">
          <FaBriefcase className="text-[#38bdf8]" /> Internships
        </h3>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-[#1a1a1a] p-6 rounded-2xl shadow-xl border border-white/10 hover:border-[#38bdf8]/40 transition-all"
            >
              <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
              <p className="text-gray-400 text-sm mb-1">{exp.company}</p>
              <p className="text-gray-500 text-xs mb-4">{exp.date}</p>
              <p className="text-gray-300 text-sm">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-10">
          <FaCertificate className="text-[#facc15]" /> Certifications
        </h3>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-[#1a1a1a] p-6 rounded-2xl shadow-xl border border-white/10 hover:border-[#f472b6]/40 transition-all group"
            >
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-50 sm:h-48 md:h-56 lg:h-64 object-cover rounded-md mb-4 border border-gray-700"
              />

              {/* Certificate Info */}
              <h4 className="text-lg font-bold text-white group-hover:text-[#f472b6] transition-colors">
                {cert.title}
              </h4>
              <p className="text-gray-400 text-sm mt-2">{cert.issuer}</p>
              <p className="text-gray-500 text-xs">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
