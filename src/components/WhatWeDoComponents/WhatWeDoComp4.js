import { Grid, Typography } from "@mui/material";
import React from "react";
import ButtonCustom from "../ButtonCustom";
import styles from "../../styles/WhatWeDoStyles/WhatWeDo.module.css";
import { notosans } from "@/assets/fonts/fonts";

export default function WhatWeDoComp4() {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      className={`${styles.whatwedoComp4Div} ${notosans.variable}`}
    >
      <Grid item xs={12} md={8}>
        <Typography
          variant="h5"
          className={styles.whatwedoComp4Text}
          component="div"
        >
          Request a proposal or consult,
          <br />
          Feel free to contact us Please.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        md={3}
        className={styles.whatwedoComp4ButtonContainer}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ButtonCustom
          title="Contact Us"
          icon={true}
          buttonStyles={styles.whatwedoComp4Button}
        />
      </Grid>
    </Grid>
  );
}
