import React from "react";
import "./_modale.scss";
import Image from "next/image";
import close from "../../../public/assets/images/icones/close.png";

interface ImageProps {
  imageProjects: string;
  closeModale: () => boolean;
}

function Modale({ imageProjects, closeModale }: ImageProps) {
  return (
    <div className="modal-content">
      <Image
        src={close}
        width={40}
        height={40}
        alt="close"
        className="modal-content__close-button"
        onClick={closeModale}
      />
      <div className="modal-content__image">
        <Image src={imageProjects} width={1028} height={523} alt="img" />
      </div>
    </div>
  );
}

export default Modale;
