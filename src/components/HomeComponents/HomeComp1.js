"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/Home/HomeComp1.module.css";
import { homeComp1Data } from "./HomeConstantDatas";
import { Grid } from "@mui/material";
import { montserrat } from "@/assets/fonts/fonts";
import HomeButtonComp from "../HomeButtonComp";
import { CiDesktopMouse2 } from "react-icons/ci";
import { navconstants } from "@/constants/navconstants";
import { RedirectToNewTab } from "@/constants/RedirectToNewTab";
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
export default function HomeComp1() {
  const router = useRouter();
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Grid className={`${styles.hero1} ${montserrat.variable}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        controls
        aria-label="Background animation showcasing modern design"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source
          src="https://cdn.thecodekart.com/assets/images/home/white-abstract-creative-texture-background-in-moti-2023-11-27-05-05-44-utc.mp4"
          type="video/mp4"
        />
      </video>
      <motion.h1
        className={styles.heroTitle}
        animate={{
          backgroundPosition: ["0% 50%", "200% 50%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
      background: 'linear-gradient(90deg, #FA6400, #FF9F00, #5401AD, #6A1BA0, #FA6400)',
           backgroundSize: '300% 100%',
           WebkitBackgroundClip: 'text',
           backgroundClip: 'text',
           WebkitTextFillColor: 'transparent',
           textFillColor: 'transparent',
           fontSize: '5vw',
        }}
      >
        Inspiring Creativity, Delivering <br /> Excellence with CodeKart.
      </motion.h1>
      <p className={styles.hero1heroSubText}>
        help you to build website company that is modern, user friendly, good{" "}
        <br /> CEO, and Clean design
      </p>
      <Link href={`${navconstants.whoweare}#contactus`} passHref legacyBehavior>
        <a className={styles.hero1btn}>Get started</a>
      </Link>
      <div
        className={styles.hero1scrollContainer}
        onClick={scrollToNextSection}
      >
        <div className={styles.circle}>
          <CiDesktopMouse2 className={styles.mouseIcon} />
          <svg className={styles.circularText} viewBox="0 0 100 100">
            <path
              id="circle"
              d="M 50, 50
               m -37, 0
               a 37,37 0 1,1 74,0
               a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text fontSize="7">
              <textPath href="#circle" startOffset="50%" textAnchor="middle">
                Scroll Down To Work With Us
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </Grid>
  );
}