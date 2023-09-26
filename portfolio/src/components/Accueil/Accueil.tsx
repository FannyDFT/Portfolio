import React from "react";
import "./_accueil.scss";
import Image from "next/image";
import fond from "../../../public/assets/images/photos/panier.jpeg";
import photo from "../../../public/assets/images/photos/accueil.jpeg";
import Link from "next/link";

function Accueil() {
  return (
    <div className="container">
      <div className="container__img">
        <Image src={fond} width={400} height={400} alt="fond" />
        <div className="container__photo">
          <Image src={photo} width={304} height={477} alt="fond" />
        </div>
      </div>
      <div className="container__background">
        <div className="container__background__text">
          <h1>Le Monde à Travers Ma Plume de Codeuse</h1>
          <h2>Transformant des idées en réalité numérique</h2>
          <p>
            Je suis une développeuse web avec une passion pour la création
            d'expériences en ligne.{" "}
          </p>
          <p>
            Parcourez mes projets pour découvrir mon expertise en développement
            web. Mon objectif est de contribuer de manière significative à des
            équipes talentueuses et de participer à la création de solutions web
            innovantes pour l'avenir.
          </p>
          <Link
            href="/about"
            type="button"
            className="container__background__text__button"
          >
            On y va{" "}
          </Link>
        </div>
        {/* <svg
          width="204"
          height="89"
          viewBox="0 0 204 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="container__background__line"
        >
          <path
            d="M0.204383 87.6869C133.5 87.6878 125 13.5004 211.304 0.582896"
            stroke="black"
          />
        </svg> */}
      </div>
    </div>
  );
}

export default Accueil;
