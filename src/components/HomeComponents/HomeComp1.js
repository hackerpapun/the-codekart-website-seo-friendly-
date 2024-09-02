"use client";
import React from "react";
import styles from "../../styles/Home/HomeComp1.module.css";
import { homeComp1Data } from "./HomeConstantDatas";
import { Grid } from "@mui/material";
import { montserrat } from "@/assets/fonts/fonts";
import HomeButtonComp from "../HomeButtonComp";
import { CiDesktopMouse2 } from "react-icons/ci";
import { navconstants } from "@/constants/navconstants";

export default function HomeComp1() {

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Grid className={`${styles.hero1} ${montserrat.variable}`}>  
      <div className={styles.hero1socialMedia}>
        {homeComp1Data.socialMedia.map((media, index) => (
          <img
            key={index}
            src={media.img}
            alt={`${media.alt} icon`}
            className={styles.socialMediaLogo}
          />
        ))}
      </div>
      <div className={styles.hero1heroText}>{homeComp1Data.heroText}</div>
      {/* <div className={styles.hero1heroSubText}>{homeComp1Data.heroSubText}</div> */}
      <HomeButtonComp title="Contact Us" className={styles.hero1buttonComp} onClickLink={`${navconstants.whoweare}#contactus`} />
      <div className={styles.hero1scrollContainer} onClick={scrollToNextSection}>
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
