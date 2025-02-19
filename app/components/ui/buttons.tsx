import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-[#f9fe8f] text-[#222222]  font-bold justify-center flex text-center  hover:opacity-80 transition ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
