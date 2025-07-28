// src/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Static sections */}
      <img src="./assets/1.png" alt="about" className="w-full" />
      <img src="./assets/2.png" alt="work" className="w-full" />

      {/* Folder icons: projects & resume */}
      <div className="absolute top-[38%] left-[8vw] w-[18vw] max-w-[320px] aspect-[1/1]">
        <img
          src="./assets/projects.png"
          alt="projects"
          className="w-full h-full object-contain cursor-pointer"
          onClick={() => navigate('/projects')}
        />
      </div>

      <div className="absolute top-[38%] right-[8vw] w-[18vw] max-w-[320px] aspect-[1/1]">
        <img
          src="./assets/res.png"
          alt="resume"
          className="w-full h-full object-contain cursor-pointer"
          onClick={() =>
            window.open(
              'https://docs.google.com/document/d/1Dgkyq_79rjT1RS0J8fKet2O1I3kDjVzKvgbOIwcxDIE/edit?usp=sharing',
              '_blank'
            )
          }
        />
      </div>

      {/* Footer section */}
      <div className="relative">
        <img src="./assets/4.png" alt="footer" className="w-full" />

        {/* Icon links aligned on background image */}
        <img
          src="./assets/mail.png"
          alt="mail"
          className="absolute bottom-[7%] left-[6%] w-[22vw] max-w-[430px] cursor-pointer"
          onClick={() => (window.location.href = 'mailto:anuhyatyada@gmail.com')}
        />
        <img
          src="./assets/linkedin.png"
          alt="linkedin"
          className="absolute bottom-[7%] left-1/2 -translate-x-[50%] w-[8vw] max-w-[150px] cursor-pointer"
          onClick={() =>
            window.open('https://linkedin.com/in/anuhya-tyada-316695296', '_blank')
          }
        />
        <img
          src="./assets/github.png"
          alt="github"
          className="absolute bottom-[7%] right-[5%] w-[8vw] max-w-[150px] cursor-pointer"
          onClick={() => window.open('https://github.com/nuhyya', '_blank')}
        />
      </div>
    </div>
  );
};

export default Home;

