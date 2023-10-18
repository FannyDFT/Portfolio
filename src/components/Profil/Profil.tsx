import React from "react";
import "./_profil.scss";
interface ProfilProps {
  title: string;
  subtitle: string;
  firstText: string;
  secondText: string;
}

function Profil({ title, subtitle, firstText, secondText }: ProfilProps) {
  return (
    <div className="profil">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{firstText}</p>
      <p>{secondText}</p>
    </div>
  );
}

export default Profil;
