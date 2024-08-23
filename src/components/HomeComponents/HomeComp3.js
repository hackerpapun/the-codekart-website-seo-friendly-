"use client";
import React from "react";
import styles from "../../styles/Home/HomeComp3.module.css";
import { Grid } from "@mui/material";
import { montserrat } from "@/assets/fonts/fonts";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

export default function HomeComp3() {
  return (
    <Grid className={`${styles.hero3} ${montserrat.variable}`}>
      <div className={styles.hero3TextContainer}>
        <h5 className={styles.hero3Subtitle}>What we do</h5>
        <h2 className={styles.hero3Title}>Service</h2>
      </div>
      <div className={styles.hero3Grid}>
        <div className={styles.hero3ServiceItem}>
          <h3 className={styles.hero3ServiceItemText}>
            Cloud-Powered Web Solutions
          </h3>
          <EastOutlinedIcon />
        </div>
        <div className={styles.hero3ServiceItem}>
          <h3 className={styles.hero3ServiceItemText}>
            AI-Driven Mobile Solutions
          </h3>
          <EastOutlinedIcon />
        </div>
        <div className={styles.hero3ServiceItem}>
          <h3 className={styles.hero3ServiceItemText}>
            Tailored Enterprise Applications
          </h3>
          <EastOutlinedIcon />
        </div>
        <div className={styles.hero3ServiceItem}>
          <h3 className={styles.hero3ServiceItemText}>
            Interactive Experience Design
          </h3>
          <EastOutlinedIcon />
        </div>
        <div className={styles.hero3ServiceItem}>
          <h3 className={styles.hero3ServiceItemText}>
            Cognitive Quality Assurance
          </h3>
          <EastOutlinedIcon />
        </div>
        <div className={styles.hero3ServiceItem}>
          <h3 className={styles.hero3ServiceItemText}>
            Expert Resource Augmentation
          </h3>
          <EastOutlinedIcon />
        </div>
      </div>
    </Grid>
  );
}
