// src/Home.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.5;
      const currentScroll = window.scrollY;
      if (currentScroll > triggerPoint) {
        setShowButtons(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <img src="/assets/1.png" alt="about" className="w-full" />
      <img src="/assets/2.png" alt="work top" className="w-full" />

      <div className="relative">
        <img src="/assets/4.png" alt="work bottom" className="w-full" />

        {/* Buttons appear on scroll */}
        {showButtons && (
          <div className="absolute top-[40%] left-[15%] flex gap-12">
            <motion.img
              src="/assets/projects.png"
              alt="projects"
              className="w-32 cursor-pointer"
              initial={{ opacity: 0, rotate: -60, y: -50 }}
              animate={{ opacity: 1, rotate: 0, y: 0 }}
              transition={{ duration: 1, type: 'spring' }}
              onClick={() => navigate('/projects')}
            />

            <motion.img
              src="/assets/resume.png"
              alt="resume"
              className="w-32 cursor-pointer"
              initial={{ opacity: 0, rotate: 60, y: -50 }}
              animate={{ opacity: 1, rotate: 0, y: 0 }}
              transition={{ duration: 1, type: 'spring', delay: 0.3 }}
              onClick={() => window.open('https://docs.google.com/document/d/1Dgkyq_79rjT1RS0J8fKet2O1I3kDjVzKvgbOIwcxDIE/edit?usp=sharing', '_blank')}
            />
          </div>
        )}
      </div>

      <img src="/assets/background.png" alt="contact" className="w-full" />

      <div className="flex justify-center gap-10 py-10 bg-[#8B4B4B]">
        <img
          src="/assets/github.png"
          alt="github"
          className="w-12 cursor-pointer"
          onClick={() => window.open('https://github.com/nuhyya', '_blank')}
        />
        <img
          src="/assets/linkedin.png"
          alt="linkedin"
          className="w-12 cursor-pointer"
          onClick={() => window.open('https://linkedin.com/in/anuhya-tyada-316695296', '_blank')}
        />
        <img
          src="/assets/mail.png"
          alt="email"
          className="w-12 cursor-pointer"
          onClick={() => window.location.href = 'mailto:anuhyatyada@gmail.com'}
        />
      </div>
    </div>
  );
};

export default Home;

