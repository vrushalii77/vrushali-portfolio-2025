import React from "react";

interface LayeredButtonProps {
  text?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  sizeClassName?: string; // ✅ new prop for width & height
}

const NeonLayeredButton: React.FC<LayeredButtonProps> = ({
  text = "",
  onClick,
  className = "",
  disabled = false,
  sizeClassName = "", // ✅ default empty (uses fallback)
}) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      {/* Bottom layer */}
      <div
        className="
    absolute -top-2 -left-2 w-full h-full
    bg-black border border-gray-500 rounded-md
    shadow-lg shadow-cyan-500/20
    transition-all duration-300
    group-hover:border-[1px]
    group-hover:[background:linear-gradient(black,black)_padding-box,linear-gradient(#38A5D1)_border-box]
    group-hover:border-transparent
    group-hover:rounded-lg
  "
      ></div>
      {/* Main button */}
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          relative bg-black border border-gray-500 text-white
          flex items-center justify-center font-[poppins] rounded-lg font-medium
          transition-all duration-300
          hover:border-transparent hover:bg-gradient-to-r hover:from-[#20437E] hover:to-[#38A5D1]
          active:border-transparent active:bg-gradient-to-r active:from-[#20437E] active:to-[#38A5D1]
          ${
            sizeClassName ||
            "w-[150px] h-[50px] sm:w-[180px] sm:h-[55px] md:w-[180px] md:h-[60px] lg:w-[200px] lg:h-[50px]"
          }
        `}
      >
        <span
          className="
            flex items-center gap-2 text-center
            text-[13px] sm:text-base md:text-lg lg:text-[18px]
          "
        >
          {text}
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default NeonLayeredButton;
