import React from "react";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        About Me
      </h1>
      <p className="text-left py-8 text-xl text-stone-500">
        I’m a Software Engineer with a background in full-stack development, cloud-based applications, 
        and machine learning. After earning my B.S. in Computer Science from Western Governors University 
        and completing immersive training programs at Flatiron School and Infosys, I’ve built projects that 
        showcase both front-end design and back-end.
        <br/>
        <br/>
        Before tech, I was an Auxiliary Police Officer and led teams in high-pressure environments as a Lead Security 
        Officer at a Level One Trauma Center. That experience sharpened my communication, problem-solving, and leadership 
        skills—traits I now bring to collaborative engineering teams.
        <br/>
        <br/>
        I’m passionate about building clean, user-focused solutions and continuously learning new technologies. 
        I’m currently looking for opportunities where I can contribute to real-world software development 
        and grow under strong technical mentorship.
      </p>
    </div>
  );
};

export default AboutMe;
