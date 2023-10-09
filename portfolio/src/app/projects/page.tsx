"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import "./_projects-page.scss";
import TitleProjects from "@/components/Projects/header/TitleProjects";
import { Projectdetails } from "@/datas/datas";
import ProjectCard from "@/components/Projects/content/ProjectCard";
import Link from "next/link";
import "../../components/Projects/content/_projectcard.scss";

function AllProjects() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 991 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 2,
      showDots: false,
      swipeable: true,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      showDots: false,
      swipeable: true,
    },
  };
  return (
    <div className="container-projectsList">
      <div className="container-projectsList__header">
        <TitleProjects />
      </div>
      <div className="container-projectsList__allProjects">
        <Carousel responsive={responsive} autoPlay>
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
        ;
      </div>
    </div>
  );
}

export default AllProjects;
