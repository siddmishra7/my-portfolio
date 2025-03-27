import React from 'react';
import SkillCard from './SkillCard';
import styles from '@/app/styles/Skills.module.css';

const SkillsSection: React.FC = () => {
  const coreSkills = [
    { name: 'JavaScript', logoUrl: '/javascriptlogo.png' },
    { name: 'React', logoUrl: '/react2.png' },
    { name: 'Node.js', logoUrl: '/node.png' },
    { name: 'Next.js', logoUrl: '/nextjs.png' },
  ];

  const learningSkills = [
    { name: 'TypeScript', logoUrl: 'typescript.png' },
    { name: 'MongoDB', logoUrl: 'MongoDB.png' },
    { name: 'Express.js', logoUrl: 'express.png' },
    { name: 'Java', logoUrl: 'java.png' },
  ];

  return (
    <section id='skills'>
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Core</h2>
        <div className={styles.cardsContainer}>
          {coreSkills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} logoUrl={skill.logoUrl} />
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Learning</h2>
        <div className={styles.cardsContainer}>
          {learningSkills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} logoUrl={skill.logoUrl} />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default SkillsSection;
