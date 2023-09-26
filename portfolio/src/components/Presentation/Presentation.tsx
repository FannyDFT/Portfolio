import React from "react";
import "./_presentation.scss";
import Link from "next/link";
import Image from "next/image";
import img from "../../../public/assets/images/photos/pres.png";
import fleurs from "../../../public/assets/images/photos/fleurs.jpeg";

function Presentation() {
  return (
    <div className="container_pres">
      <div className="container_pres__presentation">
        <Image
          className="container_pres__img"
          src={img}
          width={244}
          height={328}
          alt="img_pres"
        />
        <div className="container_pres__text">
          <h1>Fanny D’Erfurth</h1>
          <h2>Développeuse web</h2>
          <p>
            Récemment diplômé du titre de développeur web et web mobile, je suis
            constamment enthousiasmée par les opportunités infinies offertes par
            ce domaine en constante évolution.
          </p>
          <p>
            Ma soif de connaissance me pousse à en apprendre chaque jours
            davantage et de rester à la pointe des dernière tendances.
          </p>
          <div className="container_pres__text__link">
            <Link href="/about">Me Découvrir</Link>
          </div>
        </div>
      </div>
      <div className="container_pres__img">
        <Image src={fleurs} width={244} height={328} alt="img_pres" />
      </div>
    </div>
  );
}

export default Presentation;
