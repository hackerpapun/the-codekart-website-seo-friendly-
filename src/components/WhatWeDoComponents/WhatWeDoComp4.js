import { Grid } from "@mui/material";
import React from "react";
import ButtonCustom from "../ButtonCustom";
import styles from "../../styles/WhatWeDoStyles/WhatWeDo.module.css";
import { notosans } from "@/assets/fonts/fonts";

export default function WhatWeDoComp4() {
  return (
    <Grid
      container
      className={`${styles.whatwedoComp4Div} ${notosans.variable}`}
    >
      <Grid item xs={12} md={8}>
        <div className={styles.whatwedoComp4Text}>
          Request a proposal or consult,
          <br />
          Feel free to contact us Please.
        </div>
      </Grid>
      <Grid item xs={12} md={3} className={styles.whatwedoComp4ButtonContainer}>
        <ButtonCustom
          title="Contact Us"
          icon={true}
          buttonStyles={styles.whatwedoComp4Button}
        />
      </Grid>
    </Grid>
  );
}
