import React from "react";
import "./_header.scss";
import ShowMoreProjects from "./ShowMoreProjects";
import TitleProjects from "./TitleProjects";

function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <TitleProjects />
      </div>
      <div className="header__moreProject">
        <ShowMoreProjects />
      </div>
    </div>
  );
}

export default Header;
