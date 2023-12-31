"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import fond from "../../../public/assets/images/photos/panier.jpeg";
import photo from "../../../public/assets/images/photos/photo-accueil.jpg";
import "./_home.scss";
import Profil from "../Profil/Profil";
import Link from "next/link";

function Accueil() {
  return (
    <div className="container-home">
      <div className="container-home__img">
        <Image src={fond} width={400} height={400} alt="content image" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container-home__img__photo"
        >
          <Image src={photo} width={304} height={477} alt="fond" />
        </motion.div>
      </div>
      <div className="container-home__content">
        <div className="container-home__content__profil">
          <div className="container-home__content__profil__text">
            <Profil
              title="Le Monde à Travers Ma Plume de Codeuse"
              subtitle="Transformant des idées en réalité numérique"
              firstText="Je suis une développeuse web Fullstack avec une appétence pour le
          Frontend "
              secondText=" Parcourez mes projets pour découvrir mon expertise en développement
          web. Mon objectif est de contribuer de manière significative à des
          équipes talentueuses et de participer à la création de solutions web
          innovantes pour l'avenir."
            />
          </div>

          <div className="container-home__content__profil__button">
            <Link href="/projects">
              <Button text="On y va ?" type="button" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
