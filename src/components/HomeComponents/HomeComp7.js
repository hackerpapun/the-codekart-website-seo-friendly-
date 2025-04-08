"use client";
import React from "react";
import styles from "../../styles/Home/HomeComp7.module.css";
import { Divider, Grid } from "@mui/material";
import ButtonCustom from "../ButtonCustom";
import { notosans } from "@/assets/fonts/fonts";
import { navconstants } from "@/constants/navconstants";

export default function HomeComp7() {
  return (
    <Grid
      container
      className={`${styles.whatwedoComp4Div} ${notosans.variable}`}
      component="section"
      aria-label="Contact Proposal Section"
    >
      <Grid item xs={12} md={8}>
        <p className={styles.whatwedoComp4Text}>
          Request a proposal or consult,
          <br />
          Feel free to contact us Please.
        </p>
      </Grid>
      <Grid item xs={12} md={3} className={styles.whatwedoComp4ButtonContainer}>
        <ButtonCustom
          title="Contact Us"
          icon={true}
          buttonStyles={styles.whatwedoComp4Button}
          onClickLink={`${navconstants.whoweare}#contactus`}
        />
      </Grid>
      <Grid item xs={12}>
        <Divider
          sx={{
            width: "90%",
            height: "1px",
            margin: "auto",
            backgroundColor: "darkgray",
            marginTop: "40px",
          }}
          role="separator"
        />
      </Grid>
    </Grid>
  );
}
