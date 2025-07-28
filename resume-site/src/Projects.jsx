// src/Projects.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-hidden relative">
      <img src="/assets/5.png" alt="projects top" className="w-full" />
      <img src="/assets/6.png" alt="projects middle" className="w-full" />

      <div className="absolute top-[40%] left-[15%] flex flex-wrap gap-6">
        {/* Replace with your actual project buttons and links */}
        <img
          src="/assets/vctrl.png"
          alt="Project 1"
          className="w-28 cursor-pointer"
          onClick={() => window.open('https://github.com/nuhyya/git-from-scratch', '_blank')}
        />
        <img
          src="/assets/yadtq.png"
          alt="Project 2"
          className="w-28 cursor-pointer"
          onClick={() => window.open('https://github.com/nuhyya/yadtq', '_blank')}
        />
         <img
          src="/assets/dscm.png"
          alt="Project 3"
          className="w-28 cursor-pointer"
          onClick={() => window.open('https://github.com/udaykiran1101/628_634_636_669_Distributed_Systems_Cluster', '_blank')}
        />
         <img
          src="/assets/multimodal.png"
          alt="Project 4"
          className="w-28 cursor-pointer"
          onClick={() => window.open('https://github.com/nuhyya/Multimodal-Emotion-Recognition-using-Deep-Learning', '_blank')}
        />
         <img
          src="/assets/nl2sql.png"
          alt="Project 5"
          className="w-28 cursor-pointer"
          onClick={() => window.open('https://github.com/nuhyya/nl2sql', '_blank')}
        />
         <img
          src="/assets/fashion.png"
          alt="Project 6"
          className="w-28 cursor-pointer"
          onClick={() => window.open('https://github.com/nuhyya/Fashion-Advice-and-Recommendation-System', '_blank')}
        />
    
      </div>

      <div className="relative">
        <img src="/assets/7.png" alt="projects bottom" className="w-full" />

        <img
          src="/assets/back.png"
          alt="back"
          className="absolute top-[10%] left-[5%] w-20 cursor-pointer"
          onClick={() => navigate('/')}
        />
      </div>
    </div>
  );
};

export default Projects;

