// components/Hero.tsx
import styles from '../styles/Hero.module.css'; // Import the CSS module

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        {/* Hero Section Heading */}
        <h1 className={styles.heroHeading}>Who I Am?</h1>
        
        {/* Introduction paragraph */}
        <p className={styles.heroIntro}>
          Hello! I&apos;m Siddharth Mishra, a Computer Science Enthusiast. 
          I specialize in creating modern, responsive websites and web applications that help businesses grow. 
          <br />Let&apos;s build something amazing together!
        </p>

        <a href="#projects" className={styles.ctaButton}>See My Work</a>
      </div>
    </section>
  );
};

export default Hero;
