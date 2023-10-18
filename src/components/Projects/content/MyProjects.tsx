"use client";
import React from "react";
import Header from "../header/Header";
import "./_myprojects.scss";
import ProjectCard from "./ProjectCard";
import { Project } from "@/type";
import { Projects } from "@/datas/datas";
import "./_projectslist.scss";

function MyProjects() {
  const firstThreeProjects: Project[] = Projects.slice(0, 3);

  return (
    <div className="box">
      <Header />
      <div className="container_projects">
        {firstThreeProjects &&
          firstThreeProjects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              projectLink={`/projects/${project.id.toString()}`}
            />
          ))}
      </div>
    </div>
  );
}

export default MyProjects;
