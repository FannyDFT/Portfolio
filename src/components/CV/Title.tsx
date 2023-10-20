import React from "react";
import "./_titleLine.scss";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

function Title({ title }: { title: string }) {
  return (
    <div className="titleLine">
      <div className="titleLine__contain">
        <h1 className={raleway.className}>{title}</h1>
        <div></div>
      </div>
    </div>
  );
}

export default Title;
