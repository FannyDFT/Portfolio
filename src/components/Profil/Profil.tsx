import React from "react";
import "./_profil.scss";

import { Raleway, Yeseva_One } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const yeseva = Yeseva_One({ weight: "400", subsets: ["latin"] });

interface ProfilProps {
  title: string;
  subtitle: string;
  firstText: string;
  secondText: string;
}

function Profil({ title, subtitle, firstText, secondText }: ProfilProps) {
  return (
    <div className="profil">
      <h1 className={yeseva.className}>{title}</h1>
      <h2 className={raleway.className}>{subtitle}</h2>
      <p className={raleway.className}>{firstText}</p>
      <p className={raleway.className}>{secondText}</p>
    </div>
  );
}

export default Profil;
