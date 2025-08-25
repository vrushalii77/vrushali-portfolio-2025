import React from "react";
import resumePDF from "../assets/Vrushali_Jadhav_Resume.pdf";

const Resume: React.FC = () => {
  return (
    <section className="py-20 px-10 text-center">
      <h2 className="text-4xl font-bold mb-10">View / Download Resume</h2>
      <a
        href={resumePDF}
        download
        className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transform transition duration-300"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
