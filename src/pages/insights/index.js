import React from "react";
import { Grid } from "@mui/material";
import { montserrat } from "@/assets/fonts/fonts";
import InsightsComp1 from "@/components/InsightsComponents/InsightsComp1";
import InsightsComp2 from "@/components/InsightsComponents/InsightsComp2";
import InsightsComp3 from "@/components/InsightsComponents/InsightsComp3";
import InsightsComp4 from "@/components/InsightsComponents/InsightsComp4";
import InsightsComp5 from "@/components/InsightsComponents/InsightsComp5";
import InsightsComp6 from "@/components/InsightsComponents/InsightsComp6";

export default function index() {
  return (
    <Grid container className={`${montserrat.variable}`}>
      <InsightsComp1 />
      <InsightsComp2 />
      <InsightsComp3 />
      <InsightsComp4 />
      <InsightsComp5 />
      <InsightsComp6 />
    </Grid>
  );
}
