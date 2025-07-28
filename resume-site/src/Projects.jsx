// src/Projects.jsx
import React from "react";

const projectData = [
  {
    src: "./assets/vctrl.png",
    alt: "vctrl",
    link: "https://github.com/nuhyya/git-from-scratch"
  },
  {
    src: "./assets/yadtq.png",
    alt: "yadtq",
    link: "https://github.com/nuhyya/yadtq"
  },
  {
    src: "./assets/dscm.png",
    alt: "dscm",
    link: "https://github.com/udaykiran1101/628_634_636_669_Distributed_Systems_Cluster"
  },
  {
    src: "./assets/multimodal.png",
    alt: "multimodal",
    link: "https://github.com/nuhyya/Multimodal-Emotion-Recognition-using-Deep-Learning"
  },
  {
    src: "./assets/nl2sql.png",
    alt: "nl2sql",
    link: "https://github.com/nuhyya/nl2sql"
  },
  {
    src: "./assets/fashion.png",
    alt: "fashion",
    link: "https://github.com/nuhyya/Fashion-Advice-and-Recommendation-System"
  }
];

const Projects = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Static background */}
      <img src="./assets/5.png" alt="projects top" className="w-full" />

      {/* Scrollable Project Buttons */}
      <div className="absolute top-[180px] md:top-[200px] left-0 w-full px-4 md:px-8">
        <div className="overflow-x-auto">
          <div className="flex w-max gap-8 md:gap-10">
            {projectData.map((project, idx) => (
              <img
                key={idx}
                src={project.src}
                alt={project.alt}
                className="w-[75vw] h-[75vw] max-w-[520px] max-h-[520px] flex-shrink-0 cursor-pointer"
                onClick={() => window.open(project.link, "_blank")}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Extra space using background.png twice */}
      <img src="./assets/background.png" alt="padding 1" className="w-full" />
      <img src="./assets/background.png" alt="padding 2" className="w-full" />
    </div>
  );
};

export default Projects;

