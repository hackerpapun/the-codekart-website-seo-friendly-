"use client";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home/HomeComp4.module.css";
import { blogImage1, blogImage2, blogImage3, blogImage4, homeComp4Data } from "./HomeConstantDatas";
import { montserrat } from "@/assets/fonts/fonts";
import { Grid } from "@mui/material";

export default function HomeComp4() {
  return (
    <Grid className={`${styles.hero4} ${montserrat.variable}`}>
      <div className={styles.hero4Title}>Blog Posts</div>
      <div className={styles.hero4Grid}>
        <div className={styles.hero4BlogItem}>
          <Image src={homeComp4Data.blogposts[0]} alt="Blog 1" className={styles.hero4BlogImage} />
          <div className={styles.hero4BlogItemTitle}>Over Ride The Digital Design</div>
          <div className={styles.hero4BlogItemDate}>August 1, 2024</div>
        </div>
        <div className={styles.hero4BlogItem}>
          <Image src={blogImage2} alt="Blog 2" className={styles.hero4BlogImage} />
          <div className={styles.hero4BlogItemTitle}>Free consultation with experts</div>
          <div className={styles.hero4BlogItemDate}>August 20, 2024</div>
        </div>
        <div className={styles.hero4BlogItem}>
          <Image src={blogImage3} alt="Blog 3" className={styles.hero4BlogImage} />
          <div className={styles.hero4BlogItemTitle}>Quality Design projects completed</div>
          <div className={styles.hero4BlogItemDate}>August 22, 2024</div>
        </div>
        <div className={styles.hero4BlogItem}>
          <Image src={blogImage4} alt="Blog 4" className={styles.hero4BlogImage} />
          <div className={styles.hero4BlogItemTitle}>Task completion planning with timelines</div>
          <div className={styles.hero4BlogItemDate}>August 25, 2024</div>
        </div>
      </div>
    </Grid>
  );
}
