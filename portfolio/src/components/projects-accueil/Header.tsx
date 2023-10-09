import React from "react";
import "./_header.scss";
import ShowMoreProjects from "./header/ShowMoreProjects";
import TitleProjects from "./TitleProjects/TitleProjects";

function Header() {
  return (
    <div className="header">
      <TitleProjects />
      <ShowMoreProjects />
    </div>
  );
}

export default Header;
