// components/Hero.tsx
import styles from '../styles/Projects.module.css'; // Import the CSS module

const Projects = () => {
  return (
    <section id="projects" className={styles.hero}>
      <div className={styles.heroContent}>
        {/* Hero Section Heading */}
        <h1 className={styles.heroHeading}>PROJECTS</h1>
        
        {/* Introduction paragraph */}
        <p className={styles.heroIntro}>
         Currently Developing
        </p>
        <p className={styles.heroOutro}>
         Coming Soon.....
        </p>

      </div>
    </section>
  );
};

export default Projects;
