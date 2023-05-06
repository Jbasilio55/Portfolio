import React from "react";
import ProjectItem from "./ProjectItem";
import project1 from "../img/project1.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Dive into my extensive portfolio of coding projects, which demonstrates
        my proficiency in a wide range of programming languages and technologies
        and highlights my dedication to creativity, innovation, and
        problem-solving. Each project reflects my ability to adapt and excel in
        diverse environments while consistently delivering high-quality
        solutions that make a tangible impact.
      </p>
      <div div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={project1} title="CoffeStand" />
      </div>
    </div>
  );
};

export default Projects;
