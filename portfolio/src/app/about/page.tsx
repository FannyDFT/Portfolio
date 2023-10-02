import Experiences from "@/components/APropos/Experiences";
import Informations from "@/components/APropos/Informations";
import React from "react";
import "./_about.scss";

function About() {
  return (
    <div className="about">
      <div className="about__informations">
        <Informations />
      </div>

      <div className="about__experiences">
        <Experiences />
      </div>
    </div>
  );
}

export default About;
