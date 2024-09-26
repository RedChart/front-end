import React from "react";

interface ButtonProps {
  text: string;
  isSubmit?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  text,
  isSubmit = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className="py-3 bg-main text-white font-bold shadow-lg rounded-lg px-5 text-base whitespace-nowrap"
      onClick={onClick}
      type={isSubmit ? "submit" : "button"}
    >
      {text}
    </button>
  );
}
