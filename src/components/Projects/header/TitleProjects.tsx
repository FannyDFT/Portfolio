import React from "react";
import "./_titleProjects.scss";
import { Raleway, Yeseva_One } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const yeseva = Yeseva_One({ weight: "400", subsets: ["latin"] });

function TitleProjects() {
  return (
    <div className="header-text">
      <h1 className={yeseva.className}>Mes projets</h1>
      <h2 className={raleway.className}>Découvrez mes différents projets</h2>
    </div>
  );
}

export default TitleProjects;
