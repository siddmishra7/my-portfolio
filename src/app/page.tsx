// components/BackgroundVideo.tsx

import React from 'react';
import Hero from './components/Hero';
import SkillsSection from './components/Skills';
import EducationSection from './components/Education';
import Projects from './components/Projects';
import ContactMe from './components/Contact';

const BackgroundVideo: React.FC = () => {
  return (
    <div>
      <Hero/>
      <EducationSection/>
      <SkillsSection/>
      <Projects/>
      <ContactMe/>
    </div>
  );
};

export default BackgroundVideo;
