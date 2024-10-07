"use client";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import styles from "../styles/Home/home.module.css";
import HomeComp1 from "@/components/HomeComponents/HomeComp1";
import HomeComp2 from "@/components/HomeComponents/HomeComp2";
import HomeComp3 from "@/components/HomeComponents/HomeComp3";
import HomeComp4 from "@/components/HomeComponents/HomeComp4";
import HomeComp5 from "@/components/HomeComponents/HomeComp5";
import HomeComp6 from "@/components/HomeComponents/HomeComp6";
import HomeComp7 from "@/components/HomeComponents/HomeComp7";
import { montserrat } from "@/assets/fonts/fonts";
import HomeComp8 from "@/components/HomeComponents/HomeComp8";
import { getPublicImageUrl } from "@/constants/images";

const relatedReadingData = [
  {
    type: "Resource",
    title: "Over Ride The Digital Design With Additional",
    img: getPublicImageUrl("/images/whatwedo/relatedReading1.svg"),
    date: "August 3, 2024",
  },
  {
    type: "Resource",
    title: "Free consultation with experts",
    img: getPublicImageUrl("/images/whatwedo/relatedReading2.svg"),
    date: "August 10, 2024",
  },
  {
    type: "Resource",
    title: "Quality Design projects completed",
    img: getPublicImageUrl("/images/whatwedo/relatedReading3.svg"),
    date: "August 3, 2024",
  },
  {
    type: "Resource",
    title: "Task completion planning with timelines",
    img: getPublicImageUrl("/images/whatwedo/relatedReading4.svg"),
    date: "August 10, 2024",
  },
];

export default function Home() {
  return (
    // Animated Message Icon starts
    <>
      {/* // Animated Message Icon ends */}
      <HomeComp1 />
      <HomeComp2 />
      <HomeComp3 />
      <HomeComp4 relatedReadingData={relatedReadingData} />
      <HomeComp5 />
      <HomeComp6 />
      <Grid container className={styles.marginTopContainer}>
        <HomeComp7 />
      </Grid>
      <HomeComp8 />
    </>
  );
}
