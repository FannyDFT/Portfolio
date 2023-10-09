import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import fond from "../../../public/assets/images/photos/panier.jpeg";
import photo from "../../../public/assets/images/photos/photo-accueil.jpg";
import "./_home.scss";
import Profil from "../Profil/Profil";

function Accueil() {
  return (
    <div className="container-home">
      <div className="container-home__img">
        <Image src={fond} width={400} height={400} alt="content image" />
        <div className="container-home__img__photo">
          <Image src={photo} width={304} height={477} alt="fond" />
        </div>
      </div>
      <div className="container-home__content">
        <div className="container-home__content__profil">
          <div className="container-home__content__profil__text">
            <Profil
              title="Le Monde à Travers Ma Plume de Codeuse"
              subtitle="Transformant des idées en réalité numérique"
              firstText="Je suis une développeuse web Fullstack avec une appétence pour le
          Frontend et"
              secondText=" Parcourez mes projets pour découvrir mon expertise en développement
          web. Mon objectif est de contribuer de manière significative à des
          équipes talentueuses et de participer à la création de solutions web
          innovantes pour l'avenir."
            />
          </div>

          <div className="container-home__content__profil__button">
            <Button text="On y va ?" type="button" link="/projects" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
