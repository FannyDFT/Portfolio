"use client";

import React from "react";
import { Projectdetails } from "@/datas/datas";
import ProjectCard from "../projects-accueil/ProjectCard";
import "./_allprojects.scss";
import Header from "../projects-accueil/Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../projects-accueil/_projectcard.scss";
import Link from "next/link";
import TitleProjects from "../projects-accueil/TitleProjects/TitleProjects";

function AllProjectsList() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 1920, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1199, min: 991 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 481 },
      items: 1,
    },
  };

  return (
    <div className="projects-contain">
      <TitleProjects />
      <Carousel responsive={responsive}>
        {Projectdetails &&
          Projectdetails.map((item) => (
            <Link href={`/projects/${item.id}`} key={item.id}>
              <ProjectCard
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                technologiestitle={item.technologiestitle}
                technologies={item.technologies}
                imageGallery={item.imageGallery}
              />
            </Link>
          ))}
      </Carousel>
    </div>
  );
}

export default AllProjectsList;
