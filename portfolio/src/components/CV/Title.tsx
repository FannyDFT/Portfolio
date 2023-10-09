import React from "react";
import "./_titleLine.scss";

function Title({ title }: { title: string }) {
  return (
    <div className="titleLine">
      <div className="titleLine__contain">
        <h1>{title}</h1>
        <div></div>
      </div>
    </div>
  );
}

export default Title;
