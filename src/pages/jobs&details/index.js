import React from "react";
import { Grid } from "@mui/material";
import { notosans } from "@/assets/fonts/fonts";
import AllOpenPositions from "@/components/AllOpenPositions/AllOpenPositions";
import DynamicMetadata from "@/constants/DynamicMetadata";

export default function JobsAndDetails() {
  return (
    <DynamicMetadata
      title="Jobs & Details - Codekart Solutions Private Limited"
      description="Explore job opportunities and open positions at Codekart Solutions."
    >
      <Grid
        container
        display="flex"
        alignItems="flex-start"
        minHeight="100vh"
        bgcolor="#e9ebf2"
        className={notosans.variable}
      >
        <AllOpenPositions />
      </Grid>
    </DynamicMetadata>
  );
}
