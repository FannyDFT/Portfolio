import Image from "next/image";
import React from "react";
import "./_projectcard.scss";
import Button from "../../Button/Button";

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
        <Image
          src={`/assets/${image}`}
          width={133}
          height={133}
          alt="image_project"
        />
      </div>
      <div className="container_card__text">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <Button type="button" text="Découvrir" link={projectLink} />
        <div className="container_card__text__line">
          <div className="container_card__text__line__style"></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
