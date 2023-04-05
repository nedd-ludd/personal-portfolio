import React from "react";
import oursImg from "../public/assets/projects/ours.jpg";
import portfolioImg from "../public/assets/projects/portfolio.jpg";
import AMImg from "../public/assets/projects/adventure.jpg";
import FBIImg from "../public/assets/projects/fbi.jpg";

import ProjectCard from "./common/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16 ">
        <h2 className="py-4">PROJECTS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="This Website"
            backgroundImg={portfolioImg}
            projectUrl="/portfolio"
            tech="Next, TailwindCSS, Python, AWS"
          />
          <ProjectCard
            title="Ours"
            backgroundImg={oursImg}
            projectUrl="/ours"
            tech="Python, Django, Django REST, React JS, MUI, Sass, PostgreSQL"
          />
          <ProjectCard
            title="Adventure Map"
            backgroundImg={AMImg}
            projectUrl="/adventure"
            tech="React, Express, Node, MongoDB, Sass"
          />
          <ProjectCard
            title="FBIs Most Wanted"
            backgroundImg={FBIImg}
            projectUrl="/fbi"
            tech="React"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
