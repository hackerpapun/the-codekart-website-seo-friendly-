import React from "react";
import styles from "../../styles/insights.module.css";
import { Grid } from "@mui/material";
import { notosans } from "@/assets/fonts/fonts";
import Image from "next/image";
import { insightsComp2Data } from "./InsightsConstantDatas";
import AllOpenPositions from "../AllOpenPositions/AllOpenPositions";

export default function InsightsComp6() {
  return (
    <Grid
      container
      className={`${styles.insightsComp6Container} ${notosans.variable}`}
    >
     <AllOpenPositions numberOfJobsToShow={4} />
    </Grid>
  );
}
