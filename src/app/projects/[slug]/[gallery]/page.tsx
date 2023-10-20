"use client";

import { Projectdetails } from "../../../../../datas/datas";
import Image from "next/image";
import { useState } from "react";
import back from "../../../../../public/assets/images/icones/back.png";
import "./_gallery.scss";
import Modale from "@/components/Modale/Modale";
import Link from "next/link";

interface ProjectProps {
  params: {
    slug: string;
  };
}

function Gallery({ params }: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(!isModalOpen);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const projectId = parseInt(params.slug, 10);

  const projectDetails = Projectdetails.find(
    (project) => project.id === projectId,
  );

  return (
    <div className="container-gallery">
      <div className="container-gallery__header">
        <h1>Galerie photos</h1>
        <div className="container-gallery__header__content">
          <Image src={back} width={30} height={30} alt="retour" />
          <div className="container-gallery__header__content__back">
            <button type="button" onClick={handleGoBack}>
              Retour
            </button>
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
                  onClick={() => openModal(index)}
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

      {isModalOpen && selectedImageIndex && projectDetails && (
        <Modale
          imageProjects={`/${projectDetails.imageGallery[selectedImageIndex]}`}
          closeModale={openModal}
        />
      )}
    </div>
  );
}

export default Gallery;
