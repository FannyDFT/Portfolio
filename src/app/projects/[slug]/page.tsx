import { Projectdetails } from "../../../../datas/datas";
import React from "react";
import "./_details.scss";
import arrow from "../../../../public/assets/images/icones/plus.png";
import Image from "next/image";
import Link from "next/link";
import { Raleway, Yeseva_One } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const yeseva = Yeseva_One({ weight: "400", subsets: ["latin"] });

interface ProjectProps {
  params: {
    slug: string;
  };
}

function Project({ params }: ProjectProps) {
  // Récupérer l'ID du projet et le convertir en nombre
  const projectId = parseInt(params.slug, 10);

  //Récupérer les informations spécifique au projet
  const projectDetails = Projectdetails.find(
    (project) => project.id === projectId,
  );

  if (!projectDetails) {
    return <div>Projet introuvable</div>;
  }

  console.log("projectDetails", projectDetails);

  return (
    <div className="container-details">
      <div className="container-details__text">
        <h1 className={yeseva.className}>{projectDetails.title}</h1>
        <h2 className={raleway.className}>{projectDetails.subtitle}</h2>
        <p className={raleway.className}>{projectDetails.description}</p>
        <div className="container-details__text__technos">
          <h3 className={raleway.className}>
            {projectDetails.technologiestitle}
          </h3>
          <div
            className={`container-details__text__technos__techno ${raleway.className}`}
          >
            {projectDetails.technologies.map((technology, index) => (
              <p key={index}>{technology}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="container-details__img">
        <div className="container-details__img__contain-text">
          <Link
            href={`${projectId}/gallery`}
            className="container-details__img__contain-text__gallery"
          >
            <p className={raleway.className}>Galerie photos</p>
            <span></span>
          </Link>
          <Image src={arrow} width={30} height={30} alt="arrow" />
        </div>
        <Image
          src={`${projectDetails.image}`}
          width={563}
          height={281}
          alt="image"
          className="container-details__img__imgProject"
        />
        <div className="container-details__img__back-project">
          <div className="container-details__img__back-project__contain-line">
            <Link href="/projects">
              <h3 className={raleway.className}>Revenir aux projets</h3>
            </Link>

            <span></span>
          </div>
          <Link href="/projects">
            {" "}
            <Image src={arrow} width={30} height={30} alt="go back" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
