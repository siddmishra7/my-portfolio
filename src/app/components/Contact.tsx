import React from 'react';
import styles from '../styles/Contact.module.css';

const ContactMe: React.FC = () => {

  return (
    <section id='contact' className={styles.contactSection}>
      <h2 className={styles.contactHeading}>Contact Me</h2>
      <p className={styles.contactDescription}>
        Feel free to reach out to me through any of the methods below:
      </p>

      {/* Contact Methods */}
      <div className={styles.contactMethods}>
        <div className={styles.method}>
          <h3>Email</h3>
          <p>
            <a href="mailto:siddm2024@gmail.com" className={styles.contactLink}>
              siddm2024@gmail.com
            </a>
          </p>
        </div>

        <div className={styles.method}>
          <h3>Phone</h3>
          <p>
            <a href="tel:+91 9899321545" className={styles.contactLink}>
             +91 9899321545
            </a>
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className={styles.socialLinks}>
        <a 
          href="https://www.linkedin.com/in/siddharth-mishra-882035352/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <img title='LinkedIn Profile' src="/linkedinlogo.png" alt="LinkedIn" className={styles.icon} />
        </a>
        <a
          href="https://github.com/siddmishra7"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <img title='Github Profile' src="/githublogo.png" alt="GitHub" className={styles.icon} />
        </a>
        <a
          href="https://x.com/sidd12112"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <img title='X Profile' src="/xlogobg.png" alt="Twitter" className={styles.xlogo} />
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
