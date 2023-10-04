"use client";

import "./_projectslist.scss";
import ProjectCard from "./ProjectCard";
import { Projects } from "../../datas/datas";
import { Project } from "@/type";

function ProjectsList() {
  const firstThreeProjects: Project[] = Projects.slice(0, 3);
  console.log(firstThreeProjects);

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
