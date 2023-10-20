import React from "react";
import Image from "next/image";
import Profil from "../Profil/Profil";
import Button from "../Button/Button";
import img from "../../../public/assets/images/photos/pres.png";
import fleurs from "../../../public/assets/images/photos/fleurs.jpeg";
import "./_about.scss";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="container_about">
      <div className="container_about__content">
        <div className="container_about__content__photo">
          <Image src={img} width={244} height={328} alt="photo" />
        </div>

        <div className="container_about__content__text">
          <Profil
            title="Fanny D’Erfurth"
            subtitle="Développeuse web"
            firstText=" Récemment diplômée du titre de développeur web et web mobile, je suis
            constamment enthousiaste par les opportunités infinies offertes par
            ce domaine en constante évolution."
            secondText="Ma soif de connaissance me pousse à en apprendre chaque jour
            davantage et à rester à la pointe des dernières tendances."
          />
          <div className="container_about__content__text__btn">
            <Button type="button" link="/about" text="Me Découvrir" />
          </div>
        </div>
      </div>
      <div className="container_about__img">
        <Image src={fleurs} width={244} height={328} alt="img_pres" />
      </div>
      <div className="container_about__line"></div>
    </div>
  );
}

export default About;
