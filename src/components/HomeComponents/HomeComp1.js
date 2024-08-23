"use client";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home/HomeComp1.module.css";
import { homeComp1Data } from "./HomeConstantDatas";
import ButtonComp from "../ButtonComp";
import { Grid } from "@mui/material";
import { montserrat } from "@/assets/fonts/fonts";

export default function HomeComp1() {
  return (
    <Grid className={`${styles.hero1} ${montserrat.variable}`}>
      <div className={styles.hero1socialMedia}>
        {homeComp1Data.socialMedia.map((media, index) => (
          <Image
            key={index}
            src={media.img}
            alt={`${media.alt} icon`}
            width={20}
            height={20}
            className={styles.hero1socialMediaLogo}
          />
        ))}
      </div>
      <div className={styles.hero1heroText}>{homeComp1Data.heroText}</div>
      <div className={styles.hero1heroSubText}>{homeComp1Data.heroSubText}</div>
      <ButtonComp title="Get Started" className={styles.hero1buttonComp} />
      <div className={styles.hero1scrollContainer}>
        <Image
          src={homeComp1Data.scrollButton}
          alt="Scroll Button"
          width={50}
          height={50}
          className={styles.hero1heroSubTextLogo}
        />
      </div>
    </Grid>
  );
}
