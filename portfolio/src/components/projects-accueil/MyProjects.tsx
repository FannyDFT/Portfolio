import React from "react";
import Header from "./Header";
import ProjectsList from "./ProjectsList";
import "./_myprojects.scss";

function MyProjects() {
  return (
    <div className="box">
      <Header />
      <ProjectsList />
    </div>
  );
}

export default MyProjects;
