import Image from "next/image";
import React from "react";
import image from "../../../public/assets/images/photos/img_cv.png";
import phone from "../../../public/assets/images/icones/phone.png";
import email from "../../../public/assets/images/icones/email.png";
import home from "../../../public/assets/images/icones/home.png";
import web from "../../../public/assets/images/icones/reseaux.png";
import Link from "next/link";
import "./_informations.scss";

import ContactInfos from "./ContactInfos";
import Experiences from "./Experiences";
import Profil from "./Profil";

const coordonneesData = [
  { id: 1, image: phone, texte: "06 83 43 06 36", alt: "phone" },
  { id: 2, image: email, texte: "Fannyd.erfurth@yahoo.fr", alt: "email" },
  { id: 3, image: home, texte: "Bayonne 64 100", alt: "home" },
];

function Informations() {
  return (
    <div className="informations-container">
      <div className="informations-container__contain">
        {" "}
        <div className="informations-container__contain__photo">
          <div className="informations-container__contain__photo__img">
            <Image src={image} width={390} height={430} alt="img_cv" />
          </div>
        </div>
        <div className="informations-container__contain__coordinates">
          <div className="informations-container__contain__coordinates__infos">
            <h1>Fanny D'Erfurth</h1>
            <h2>Coordonnées</h2>
            <div className="informations-container__contain__coordinates__infos__info">
              {coordonneesData.map((coordonnee) => (
                <div key={coordonnee.id}>
                  <ContactInfos
                    id={coordonnee.id}
                    image={coordonnee.image}
                    texte={coordonnee.texte}
                    alt={coordonnee.alt}
                  />
                </div>
              ))}

              <div className="informations-container__contain__coordinates__infos__info__web">
                <Image src={web} width={40} height={40} alt="web" />
                <p>
                  <Link
                    href="https://www.linkedin.com/in/fanny-d-erfurth/"
                    target="_blank"
                  >
                    Linkedin
                  </Link>{" "}
                  -{" "}
                  <Link href="https://github.com/FannyDFT" target="_blank">
                    Github
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="informations-container__profil">
        <Profil />
      </div>
    </div>
  );
}

export default Informations;
