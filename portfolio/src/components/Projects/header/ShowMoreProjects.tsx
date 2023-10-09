import Link from "next/link";
import React from "react";
import plus from "../../../../public/assets/images/icones/plus.png";
import Image from "next/image";
import "./_showMoreProjects.scss";

function ShowMoreProjects() {
  return (
    <div className="header-more">
      <div className="header-more__para">
        <p>En voir plus</p>
        <div className="header-more__para__line">
          <div className="header-more__para__line__style"></div>
        </div>
      </div>
      <Link href="/projects" className="header-more__img">
        <Image src={plus} width={30} height={30} alt="arrow_back" />
      </Link>
    </div>
  );
}

export default ShowMoreProjects;
