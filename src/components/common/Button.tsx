import React from "react";

interface ButtonProps {
  fill: boolean;
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ fill, text, onClick }: ButtonProps) {
  const buttonStyle = fill
    ? "bg-main text-white"
    : "bg-white border border-solid border-main text-main";

  return (
    <button
      className={`${buttonStyle} rounded-lg px-5 py-2 whitespace-nowrap`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
