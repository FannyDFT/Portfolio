import Link from "next/link";
import React from "react";
import "./_button.scss";

interface ButtonProps {
  onClick: () => void;
  text: string;
  type?: "button" | "submit" | "reset";
}

function Button({ onClick, text, type }: ButtonProps) {
  return (
    <button type={type} className="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
