import React from "react";
import ProjectItem from "./ProjectItem";
import project1 from "../img/project1.jpg";
import project2 from "../img/royaltyClothing.jpg";
import project3 from "../img/typingTest.jpg";
import project4 from "../img/passwordGen.jpg";
import project5 from "../img/convertor.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8 text-lg text-stone-500">
        Dive into my extensive portfolio of coding projects, which demonstrates
        my proficiency in a wide range of programming languages and technologies
        and highlights my dedication to creativity, innovation, and
        problem-solving. Each project reflects my ability to adapt and excel in
        diverse environments while consistently delivering high-quality
        solutions that make a tangible impact.
      </p>
      <div div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={project2}
          title="Royalty Clothing"
          description="React, firebase"
          website="https://royaltyclothing.netlify.app/"
          sourceCode="https://github.com/Jbasilio55/royalty_clothing"
        />
        <ProjectItem
          img={project1}
          title="CoffeeStand"
          description="JavaScript, HTML and CSS"
          website="https://coffee-stand.netlify.app/"
          sourceCode="https://github.com/Jbasilio55/CoffeeStand"
        />
        <ProjectItem
          img={project3}
          title="Typing Test"
          description="JavaScript, HTML and CSS, and API"
          website="https://typingtestwpm.netlify.app/"
          sourceCode="https://github.com/Jbasilio55/typing_app"
        />
        <ProjectItem
          img={project4}
          title="Password Generator"
          description="JavaScript, HTML and CSS"
          website="https://randompwrdgenerator.netlify.app/"
          sourceCode="https://github.com/Jbasilio55/Random_Password_Generator"
        />
        <ProjectItem
          img={project5}
          title="Unit Converter"
          description="JavaScript, HTML and CSS, and API"
          website="https://unitconvertorapplication.netlify.app/"
          sourceCode="https://github.com/Jbasilio55/unit_converter"
        />
      </div>
    </div>
  );
};

export default Projects;
