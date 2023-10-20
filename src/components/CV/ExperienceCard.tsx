import React from "react";
import "./_experiencesCard.scss";
import computer from "../../../public/assets/images/icones/computer.png";
import Image from "next/image";
import { Raleway, Yeseva_One } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

interface ExperiencesProps {
  name: string;
  company: string;
  duration: string;
  tasks: string[];
}

function ExperienceCard({ name, company, duration, tasks }: ExperiencesProps) {
  return (
    <div className="experiences">
      <div className="experiences__card">
        <div className="experiences__card__tasks">
          {tasks.map((task, index) => (
            <p className={raleway.className} key={index}>
              {task}
            </p>
          ))}
        </div>
      </div>
      <div className="experiences__containe-line">
        <div className="experiences__containe-line__contain">
          <span className="experiences__containe-line__contain__line"></span>
          <span className="experiences__containe-line__contain__circle">
            <Image src={computer} width={30} height={30} alt="computer" />
          </span>
        </div>
      </div>
      <div className="experiences__name">
        <div className="experiences__name__details">
          <h1 className={raleway.className}>
            {company} - {duration}
          </h1>
          <h2 className={raleway.className}>{name}</h2>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
