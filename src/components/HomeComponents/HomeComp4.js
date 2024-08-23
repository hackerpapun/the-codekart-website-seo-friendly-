"use client";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home/HomeComp4.module.css";
import { homeComp4Data } from "./HomeConstantDatas";
import { montserrat } from "@/assets/fonts/fonts";
import { Grid } from "@mui/material";

export default function HomeComp4() {
  return (
    <Grid className={`${styles.hero4} ${montserrat.variable}`}>
      <div className={styles.hero4Title}>Blog Posts</div>
      <div className={styles.hero4Grid}>
        {homeComp4Data.blogposts.map((post, index) => (
          <div key={index} className={styles.hero4BlogItem}>
            <Image
              src={post.img}
              alt={post.alt}
              width={400}
              height={300}
              className={styles.hero4BlogImage}
            />
            <div className={styles.hero4BlogItemTitle}>{post.alt}</div>
            <div className={styles.hero4BlogItemDate}>
              August {index + 1}, 2024
            </div>
          </div>
        ))}
      </div>
    </Grid>
  );
}
