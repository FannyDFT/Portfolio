import React from "react";
import plus from "../../../public/assets/images/icones/plus.png";
import Image from "next/image";
import "./_header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__text">
        <h1>Mes projets</h1>
        <h2>Découvrez mes différents projets</h2>
      </div>
      <div className="header__more">
        <div className="header__more__para">
          <p>En voir plus</p>
          <div className="header__more__para__line">
            <div className="header__more__para__line__style"></div>
          </div>
        </div>
        <div className="header__more__img">
          <Image src={plus} width={30} height={30} alt="arrow_back" />
        </div>
      </div>
    </div>
  );
}

export default Header;
