"use client";

import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/images/icones/logo.png";
import github from "../../../public/assets/images/icones/github.png";
import linkedin from "../../../public/assets/images/icones/linkedin.png";
import arrow from "../../../public/assets/images/icones/retour.png";
import "./_footer.scss";
import Link from "next/link";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Position en haut de la page
      behavior: "smooth", // Animation de défilement fluide
    });
  };
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__logo">
          <Image src={logo} width={135} height={144} alt="logo" />
        </div>

        <div className="footer__container__text">
          <h1>Fanny D&apos;Erfurth</h1>
          <h2>
            Pour moi, le travail bien fait, la persévérance et la bienveillance
            sont les piliers d&apos;une réussite durable
          </h2>
        </div>
        <div className="footer__container__follow">
          <h3>Suivez moi !</h3>
          <div className="footer__container__follow__img">
            <Link href="https://github.com/FannyDFT" target="_blank">
              <Image src={github} width={40} height={32} alt="github" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/fanny-d-erfurth/"
              target="_blank"
            >
              <Image src={linkedin} width={36} height={34} alt="linkedin" />
            </Link>
          </div>
        </div>
        <button
          type="button"
          onClick={scrollToTop}
          className="footer__container__arrow"
        >
          <Image src={arrow} width={33} height={33} alt="arrow top" />
          <p>Top</p>
        </button>
      </div>
      <div className="footer__mentions">
        <p>MENTIONS LEGALES</p>
        <p>C 2023</p>
      </div>
    </div>
  );
}

export default Footer;
