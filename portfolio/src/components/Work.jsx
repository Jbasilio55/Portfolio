import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    title: "InfoSys - Apprenticeship (Java – Remote)",
    duration: "3 Months",
    details:
      "8 Week-intensive coding course and apprenticeship that provides students with a solid understanding of computer fundamentals and hands-on programming experience. Our curriculum covers Frontend and Backend technologies, including HTML, CSS, JavaScript, React, Angular, Java, Spring Boot, MySQL, and MongoDB, ensuring a well-rounded skillset for aspiring developers.",
  },
  {
    year: 2018,
    title:
      "Robert Wood Johnson University Hospital | Shift Supervisor (Lead Security Officer)",
    duration: "4 Years",
    details:
      "As the Lead Security Officer at a Level One Trauma Center, I was the primary liaison for the senior leadership team, addressing supply shortages, resolving internal conflicts, and facilitating information exchange. I efficiently managed the daily operations and scheduling for 60 officers while conducting investigations and submitting comprehensive reports concerning hospital activities and security team matters. I collaborated with the local police department on significant incidents that were crucial in crisis management. As a certified Handle with Care instructor, I taught de-escalation techniques, significantly reducing workplace violence incidents. My proactive approach led to successful interventions involving patients armed with firearms.",
  },
  {
    year: 2013,
    title: "New Brunswick Police Department (Auxiliary Police officer)",
    duration: "2 Years",
    details:
      "Conducted uniformed foot patrols to maintain a visible police presence during special events, effectively supporting the New Brunswick Police Department (NBPD) in traffic and crowd management. Collaborated with service members to assess and address the community's policing and safety concerns, ensuring a secure and positive environment for all residents and attendees.",
  },
  {
    year: 2012,
    title: "Robert Wood Johnson University Hospital (Security Officer)",
    duration: "6 Years",
    details:
      "I ensured the security of the facility and its associated buildings by conducting thorough patrols of the premises, vigilantly monitoring camera equipment, and inspecting buildings, machinery, and entry and exit points. This comprehensive approach guaranteed a safe and protected environment for all occupants. I assisted nursing staff, patients, and visitors with any hospital-related issues.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
