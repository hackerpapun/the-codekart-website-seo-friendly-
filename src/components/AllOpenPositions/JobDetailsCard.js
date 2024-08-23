import { Grid } from "@mui/material";
import React from "react";

export default function JobDetailsCard({ item }) {
  return (
    <Grid
      container
      bgcolor="#fff"
      marginBottom={2}
      borderRadius={2}
      padding={3}
    >
      <Grid item xs={12}>
        <div>{item?.title}</div>
        <div>
          <div>{item?.category}</div>
          <div>{item?.type}</div>
        </div>
        <div>{item?.description}</div>
      </Grid>
    </Grid>
  );
}
