import Experiences from "@/components/CV/Experiences";
import Informations from "@/components/CV/Informations";
import React from "react";
import "./_about.scss";
import down from "../../../public/assets/images/icones/down.png";
import Image from "next/image";

function About() {
  return (
    <div className="about">
      <div className="about__informations">
        <Informations />
      </div>

      <div className="about__experiences">
        <Experiences />
        <div className="about__experiences__down">
          <Image src={down} width={40} height={40} alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default About;
