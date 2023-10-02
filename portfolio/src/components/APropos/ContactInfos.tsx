import Image, { StaticImageData } from "next/image";
import React from "react";

import "./_contactInfos.scss";

interface ContactProps {
  id: number;
  image: StaticImageData;
  texte: string;
  alt: string;
}

function ContactInfos({ image, texte, alt }: ContactProps) {
  return (
    <div className="contact-infos">
      <Image src={image} width={40} height={40} alt={alt} />
      <p>{texte}</p>
    </div>
  );
}

export default ContactInfos;
