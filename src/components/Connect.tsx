import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NeonLayeredButton from "./Button/NeonLayeredButton"; // ✅ import your button

const contacts = [
  {
    icon: faEnvelope,
    label: "Email",
    value: "vrushalinjadhav123@gmail.com",
    href: "mailto:vrushalinjadhav123@gmail.com",
  },
  {
    icon: faPhone,
    label: "Phone",
    value: "+91 93736 35461",
    href: "tel:+919373635461",
  },
  {
    icon: faLinkedin,
    label: "LinkedIn",
    value: "Vrushali Jadhav",
    href: "https://www.linkedin.com/in/vrushali-jadhav007/",
  },
];

const Connect: React.FC = () => {
  return (
    <section
      id="connect"
      className="py-10 lg:py-24 px-6 md:px-20 bg-[#0B0B0B] text-center"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-[#38bdf8] via-[#f472b6] to-[#facc15] bg-clip-text text-transparent">
        Let’s Connect
      </h2>
      <p className="text-gray-300 text-lg sm:text-xl md:text-xl mb-6 max-w-2xl mx-auto">
        Open to Full Stack Developer Opportunities! I’m passionate about
        building modern web applications, solving complex problems, and
        collaborating in dynamic teams. Let’s create something amazing together!
      </p>

      {/* Simple Row of Links */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {contacts.map((contact, idx) => (
          <a
            key={idx}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-[#38bdf8] transition-colors"
          >
            <FontAwesomeIcon icon={contact.icon} className="text-lg" />
            <span className="text-sm sm:text-base">{contact.value}</span>
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <NeonLayeredButton
        text="Send Me a Message"
        onClick={() =>
          (window.location.href = "mailto:vrushalinjadhav123@gmail.com")
        }
      />
    </section>
  );
};

export default Connect;
