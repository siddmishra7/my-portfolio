"use client"

import React from 'react';
import styles from '../styles/Contact.module.css';
import styled from 'styled-components';


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
      

      <StyledWrapper>
      <div className="card">

        <a className="socialContainer containerOne" href="#">
          <img title='Github Profile' className="socialimg githubimg" src="/GitHub.png" alt="logo" />
        </a>
        <a className="socialContainer containerThree" href="#">
        <img title='Linkedin Profile' className="socialimg linkedinimg" src="/linkedin2.jpg" alt="logo" />
        </a>
        <a className="socialContainer containerFour" href="#">
        <img title='X Profile' className="socialimgx xlogoimg" src="/xlogo1.png" alt="logo" />
        </a>
      </div>
    </StyledWrapper>
    </section>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: fit-content;
    height: fit-content;
    margin: auto;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    gap: 20px;
  }

  /* for all social containers*/
  .socialContainer {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: #525252;
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: 1s;
  }

  .socialContainer:hover{
     transform: translateY(-5px);
  }

  /* instagram*/
  .containerOne:hover {
    background-color: white;
    transition-duration: 0.3s;
  }
  /* twitter*/
  .containerTwo:hover {
    background-color: #00acee;
    transition-duration: 0.3s;
  }
  /* linkdin*/
  .containerThree:hover {
    background-color: #0072b1;
    transition-duration: 0.3s;
  }
  /* Whatsapp*/
  .containerFour:hover {
    background-color: white;
    transition-duration: 0.3s;
  }

  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: 0.3s;
  }

  .socialimg {
    width: 40px;
  }

  .socialimgx{
    width: 30px
  }


  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }`;


export default ContactMe;
