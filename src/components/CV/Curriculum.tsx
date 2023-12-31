import React from "react";
import "./_profil.scss";
import { Technicalskills } from "../../../datas/datas";
import Title from "./Title";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

function Curriculum() {
  return (
    <div className="container-profil">
      <div className="container-profil__text">
        <div className="container-profil__text__contain">
          <Title title="Profil" />
          <p className={raleway.className}>
            Après avoir terminé ma formation en développement web, j’ai
            rapidement plongé dans le monde professionnel en effectuant un stage
            enrichissant. Je recherche désormais une opportunité professionnelle
            ou une alternance pour poursuivre ma passion dans un environnement
            bienveillant.
          </p>
        </div>
      </div>
      <div className="container-profil__central-line">
        <span></span>
      </div>
      <div className="container-profil__technikalls">
        <div className="container-profil__technikalls__contain">
          <Title title="Compétences techniques" />
          <div className="container-profil__technikalls__contain__competences">
            {Technicalskills &&
              Technicalskills.map((item) => (
                <li className={raleway.className} key={item.id}>
                  {item.name}
                </li>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
