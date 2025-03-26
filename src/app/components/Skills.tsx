import React from 'react';
import SkillCard from './SkillCard';
import styles from '@/app/styles/Skills.module.css';

const SkillsSection: React.FC = () => {
  const coreSkills = [
    { name: 'JavaScript', logoUrl: '/javascriptlogo.png' },
    { name: 'React', logoUrl: '/react2.png' },
    { name: 'Node.js', logoUrl: '/node.png' },
    { name: 'Next js', logoUrl: '/nextjs.png' },
  ];

  const learningSkills = [
    { name: 'GraphQL', logoUrl: '/logo.png' },
    { name: 'Docker', logoUrl: '/logos/docker.png' },
    { name: 'Kubernetes', logoUrl: '/logos/kubernetes.png' },
    { name: 'Machine Learning', logoUrl: '/logos/ml.png' },
  ];

  return (
    <section id='skills'>
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Core Skills</h2>
        <div className={styles.cardsContainer}>
          {coreSkills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} logoUrl={skill.logoUrl} />
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Learning Skills</h2>
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
