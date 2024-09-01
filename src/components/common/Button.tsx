import React from "react";

interface ButtonProps {
  fill?: boolean;
  text: string;
  small?: boolean;
  isSubmit?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  fill = false,
  text,
  small = false,
  isSubmit = false,
  onClick,
}: ButtonProps) {
  const buttonStyle = fill
    ? "bg-main text-white"
    : "bg-white border border-solid border-main text-main";

  const buttonSize = small
    ? "py-2 font-normal"
    : "py-3 font-bold shadow-lg";

  return (
    <button
      className={`${buttonStyle} ${buttonSize} shadow- rounded-lg px-5 text-base whitespace-nowrap`}
      onClick={onClick}
      type={isSubmit ? "submit" : "button"}
    >
      {text}
    </button>
  );
}
