"use client";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home/HomeComp2.module.css";
import { homeComp2Data } from "./HomeConstantDatas";
import { Grid } from "@mui/material";
import { montserrat, notosans } from "@/assets/fonts/fonts";
import { Fasthand } from "next/font/google";

const fasthand = Fasthand({
  subsets: ["latin"],
  variable: "--font-fasthand",
  weight: "400",
});

export default function HomeComp2() {
  return (
    <Grid className={`${styles.hero2} ${notosans.variable}`}>
      <h2
        id="brand-highlight"
        className={`${styles.hero2heroText} ${fasthand.variable}`}
      >
        Revitalize Your Brand
      </h2>
      <div className={styles.hero2CarouselContainer}>
        <div className={styles.hero2brandsContainer}>
          {homeComp2Data.brands1.map((brand, index) => (
            <div key={index} className={styles.hero2brandItem}>
              <Image
                src={brand.img}
                alt={brand.alt}
                width={100}
                height={50}
                className={styles.hero2brandImage}
              />
            </div>
          ))}
        </div>
        <div className={styles.hero2brandsContainer}>
          {homeComp2Data.brands2.map((brand, index) => (
            <div key={index} className={styles.hero2brandItem}>
              <Image
                src={brand.img}
                alt={brand.alt}
                width={100}
                height={50}
                className={styles.hero2brandImage}
              />
            </div>
          ))}
        </div>
      </div>
    </Grid>
  );
}
