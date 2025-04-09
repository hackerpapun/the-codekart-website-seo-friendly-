import React from "react";
import styles from "../../styles/InsightsStyles/insights.module.css";
import { Grid } from "@mui/material";
import { notosans } from "@/assets/fonts/fonts";
import AllOpenPositions from "../AllOpenPositions/AllOpenPositions";

export default function InsightsComp6() {
  return (
    <Grid
      container
      component="section"
      aria-label="Current Job Openings at CodeKart"
      className={`${styles.insightsComp6Container} ${notosans.variable}`}
    >
      <AllOpenPositions numberOfJobsToShow={4} />
    </Grid>
  );
}
