"use client";
import React from "react";
import styles from "../../styles/Home/HomeComp5.module.css";

export default function HomeComp5() {
  return (
    <div className={styles.hero5}>
      <div className={styles.hero5Title}>What we do</div>
      <div className={styles.hero5Subtitle}>Industry</div>
      <div className={styles.hero5Grid}>
        <div className={styles.hero5IndustryItem}>Healthcare</div>
        <div className={styles.hero5IndustryItem}>Finance</div>
        <div className={styles.hero5IndustryItem}>Education</div>
        <div className={styles.hero5IndustryItem}>Manufacturing</div>
        <div className={styles.hero5IndustryItem}>Retail</div>
        <div className={styles.hero5IndustryItem}>Logistics</div>
        <div className={styles.hero5IndustryItem}>Real Estate</div>
        <div className={styles.hero5IndustryItem}>Automotive</div>
        <div className={styles.hero5IndustryItem}>Energy</div>
      </div>
    </div>
  );
}
