import React from "react";
import styles from "../../styles/insights.module.css";
import { Grid } from "@mui/material";
import ButtonComp from "@/components/ButtonComp";
import { montserrat, notosans } from "@/assets/fonts/fonts";
import InsightsComp1 from "@/components/InsightsComponents/InsightsComp1";
import InsightsComp2 from "@/components/InsightsComponents/InsightsComp2";
import InsightsComp3 from "@/components/InsightsComponents/InsightComp3";

export default function index() {
  return (
    <Grid container className={`${montserrat.variable}`}>
      <InsightsComp1 />
      <InsightsComp2 />
      <InsightsComp3 />
    </Grid>
  );
}
