"use client";

import "./_projectslist.scss";
import ProjectCard from "./ProjectCard";
import { Projectdetails } from "../../datas/datas";

function ProjectsList() {
  const firstThreeProjects = Projectdetails.slice(0, 3);

  return (
    <div className="container_projects">
      {firstThreeProjects &&
        firstThreeProjects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            subtitle={project.subtitle}
          />
        ))}
    </div>
  );
}

export default ProjectsList;
