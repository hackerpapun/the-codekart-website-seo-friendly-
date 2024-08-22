import React from "react";
import { Grid } from "@mui/material";
import { notosans } from "@/assets/fonts/fonts";
import AllOpenPositions from "@/components/AllOpenPositions/AllOpenPositions";

export default function JobsAndDetails() {
  return (
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
  );
}
