import React from "react";
import "./_projects-page.scss";
import AllProjectsList from "@/components/allProjects/AllProjectsList";

function Projects() {
  return (
    <div className="container-projectsList">
      <AllProjectsList />
    </div>
  );
}

export default Projects;
