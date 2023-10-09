import Link from "next/link";
import React from "react";
import "./_button.scss";

interface ButtonProps {
  link: string;
  text: string;
  type: string;
}

function Button({ link, text, type }: ButtonProps) {
  return (
    <Link href={link} type={type} className="button">
      {text}
    </Link>
  );
}

export default Button;
