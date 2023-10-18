import React from "react";
import "./_modale.scss";
import Image from "next/image";
import close from "../../../public/assets/images/icones/close.png";

interface ImageProps {
  imageProjects: string;
  closeModale: (index: number) => void;
}

function Modale({ imageProjects, closeModale }: ImageProps) {
  const handleImageClick = () => {
    const index = 0;
    closeModale(index);
  };
  return (
    <div className="modal-content">
      <Image
        src={close}
        width={40}
        height={40}
        alt="close"
        className="modal-content__close-button"
        onClick={handleImageClick}
      />
      <div className="modal-content__image">
        <Image src={imageProjects} width={1028} height={523} alt="img" />
      </div>
    </div>
  );
}

export default Modale;
