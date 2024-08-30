"use client";
import React from "react";
import styles from "../../styles/Home/HomeComp7.module.css";
import { Divider, Grid } from "@mui/material";
import ButtonCustom from "../ButtonCustom";
import { notosans } from "@/assets/fonts/fonts";

export default function HomeComp7() {
  return (
    <Grid container className={`${styles.whatwedoComp4Div} ${notosans.variable}`}>
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
      <Grid item xs={12}>
        <Divider sx={{ width: '90%', height: '1px', margin: 'auto', backgroundColor: 'darkgray', marginTop: '40px'}} />
      </Grid>
    </Grid>
  );
}
