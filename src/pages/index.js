"use client";
import React from "react";
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

export default function Home() {
  return (
    <Grid container className={`${styles.homeContainer} ${montserrat.variable}`}>
      <HomeComp1 />
      <HomeComp2 />
      <HomeComp3 />
      <HomeComp4 />
      <HomeComp5 />
      <HomeComp6 />
      <HomeComp7 />
    </Grid>
  );
}
