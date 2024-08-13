"use client";
import React from "react";
import styles from "../styles/home.module.css";
import Button from "@mui/material/Button";
import Image from "next/image";
// import SendIcon from "@mui/icons-material/Send";
import Instagram from '../assets/images/home/instagram.png';
import Whatsapp from '../assets/images/home/wa.png';
import Linkedin from '../assets/images/home/linkedin.png';
import Twitter from '../assets/images/home/twiter.png';
import UiArrow from '../assets/images/home/uil_arrow-up.png';
import ScrollButton from '../assets/images/home/scrollBtn.png';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.socialMediaContainer}>
          <Image
            src={Instagram}
            alt="Instagram icon"
            className={styles.socialMediaLogo}
          />
          <Image
            src={Whatsapp}
            alt="WhatsApp icon"
            className={styles.socialMediaLogo}
          />
          <Image
            src={Linkedin}
            alt="Linkedin icon"
            className={styles.socialMediaLogo}
          />
          <Image
            src={Twitter}
            alt="Twitter icon"
            className={styles.socialMediaLogo}
          />
        </div>

        <div className={styles.heroText}>
          Inspiring Creativity, Delivering Excellence with CodeKart.
        </div>
        <div className={styles.heroSubText}>
          help you to build website company that is modern, user friendly, good
          CEO, and Clean design
        </div>

        <Button variant="contained" className={styles.homeButton}>
          Get Started
          <Image
            src={UiArrow}
            alt=""
            className={styles.heroSubText}
          />
        </Button>
        <div className={styles.scrollContainer}>
          <Image
            src={ScrollButton}
            className={styles.heroSubTextLogo}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
