import React from "react";
import ExperienceCard from "./ExperienceCard";
import "./_experiences.scss";
import { Experiences as ExperienceData } from "../../../datas/datas";
import { ExperienceType } from "@/type";

function Experiences() {
  const experiences: ExperienceType[] = ExperienceData;
  console.log(experiences);

  return (
    <div className="container-experiences">
      <h1 className="container-experiences__title">Mes Expériences</h1>
      {experiences &&
        experiences.map((item) => (
          <ExperienceCard
            key={item.id}
            name={item.name}
            duration={item.duration}
            tasks={item.tasks}
            company={item.company}
          />
        ))}
    </div>
  );
}

export default Experiences;
