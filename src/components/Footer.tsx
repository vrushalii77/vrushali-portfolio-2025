import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0B0B0B] py-6 px-4 sm:px-6 md:px-20 text-center overflow-hidden">
      {/* Animated background blob */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-gradient-to-r from-[#38bdf8] via-[#f472b6] to-[#facc15] rounded-full blur-3xl opacity-20 animate-blob"></div>

      <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4">
        © 2025 Vrushali Jadhav. All rights reserved.
      </p>

      <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-4">
        Designed & Built by Vrushali
      </p>
    </footer>
  );
};

export default Footer;
