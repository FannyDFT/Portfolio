"use client";

import { Projectdetails } from "@/datas/datas";
import Image from "next/image";
import { useState } from "react";
import back from "../../../../../public/assets/images/icones/back.png";
import "./_gallery.scss";
import Modale from "@/components/Modale/Modale";

interface ProjectProps {
  params: {
    slug: string;
  };
}

function Gallery({ params }: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const projectId = parseInt(params.slug, 10);

  const projectDetails = Projectdetails.find(
    (project) => project.id === projectId,
  );

  return (
    <div className="container-gallery">
      <div className="container-gallery__header">
        <h2>Galerie photos</h2>
        <div className="container-gallery__header__content">
          <Image src={back} width={30} height={30} alt="retour" />
          <div className="container-gallery__header__content__back">
            <p>Retour</p>
            <span></span>
          </div>
        </div>
      </div>
      <div className="container-gallery__content-img">
        <div className="container-gallery__content-img__contain">
          {projectDetails &&
            projectDetails.imageGallery.map((item, index) => {
              return (
                <div
                  key={index}
                  className="container-gallery__content-img__contain__images"
                  onClick={openModal}
                >
                  <Image
                    src={`/${item}`}
                    alt="image project"
                    width={247}
                    height={247}
                  />
                </div>
              );
            })}
        </div>
      </div>
      {isModalOpen && (
        <Modale imageProjects={`/${projectDetails.imageGallery[0]}`} />
      )}
    </div>
  );
}

export default Gallery;
