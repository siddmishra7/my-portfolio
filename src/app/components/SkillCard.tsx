import React from 'react';
import styles from '@/app/styles/SkillCard.module.css';

interface SkillCardProps {
  name: string;
  logoUrl: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, logoUrl }) => {
  return (
    <div className={styles.card}>
      <img src={logoUrl} alt={name} className={styles.logo} />
      <p className={styles.skillName}>{name}</p>
    </div>
  );
};

export default SkillCard;
