import Image from "next/image";
import React from "react";
import "./_projectcard.scss";

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
}

function ProjectCard({ image, title, subtitle }: ProjectCardProps) {
  return (
    <div className="container_card">
      <div className="container_card__img">
        <Image
          src={`/assets/images${image}`}
          width={133}
          height={133}
          alt="image_project"
        />
      </div>
      <div className="container_card__text">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <button type="button">Découvrir</button>
        <div className="container_card__text__line">
          <div className="container_card__text__line__style"></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
