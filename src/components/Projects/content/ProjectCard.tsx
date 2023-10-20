import Image from "next/image";
import React from "react";
import "./_projectcard.scss";
import Button from "../../Button/Button";

import { Raleway, Yeseva_One } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const yeseva = Yeseva_One({ weight: "400", subsets: ["latin"] });

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
  description?: string;
  technologiestitle?: string;
  technologies?: string[];
  imageGallery?: string[];
  projectLink: string;
}

function ProjectCard({
  image,
  title,
  subtitle,
  projectLink,
}: ProjectCardProps) {
  return (
    <div className="container_card">
      <div className="container_card__img">
        <Image src={`${image}`} width={133} height={133} alt="image_project" />
      </div>
      <div className="container_card__text">
        <h1 className={yeseva.className}>{title}</h1>
        <h2 className={raleway.className}>{subtitle}</h2>
        <Button type="button" text="Découvrir" link={projectLink} />
        <div className="container_card__text__line">
          <div className="container_card__text__line__style"></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
