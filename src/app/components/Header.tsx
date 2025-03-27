"use client"

// components/Header.tsx

import React from 'react';
import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image'; // Importing the Image component
import styles from '../styles/Header.module.css'; // Import the CSS module


const Header: React.FC = () => {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle smooth scroll to top and update URL
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();  // Prevent default anchor behavior

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',  // Smooth scroll to the top
    });

    // Update the URL to #about without scrolling to the About section
    history.pushState(null, '', '#about');
  };
  return (
    <header className={styles.header}> {/* Using CSS module for styles */}
      <div className={styles.logo}>
        {/* Using Image from 'public' directory */}
        <div className='flex group'>
          <Link href="/">
            <Image src={"/logo1.png"} className='group-hover:cursor-pointer hidden' alt='logo' width={40} height={40} />
          </Link>
          <Link href="/">
            <h1 className='font-bold group-hover:cursor-pointer mt-1.5 text-xl'>SIDDHARTH MISHRA</h1>
          </Link>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="#about" onClick={handleScrollToTop}>About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#education">Education</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#skills">Skills</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#projects">Projects</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        </nav>
        <nav className={styles.navBar}>
        <div className={styles.hamburger} onClick={toggleMenu}>
              ☰
        </div>
        <aside className={`${styles.sidemenu} ${isMenuOpen ? styles.active : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="#about" onClick={handleScrollToTop}>About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#education">Education</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#skills">Skills</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#projects">Projects</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        </aside>
        </nav>

    </header>
  );
};

export default Header;
