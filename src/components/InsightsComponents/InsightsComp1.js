import React from "react";
import styles from "../../styles/InsightsStyles/insights.module.css";
import { Grid } from "@mui/material";
import HomeButtonComp from "@/components/HomeButtonComp";
import { montserrat, notosans } from "@/assets/fonts/fonts";

export default function InsightsComp1() {
  return (
    <Grid
      container
      className={`${styles.insightsComp11} ${montserrat.variable}`}
      component="section"
      aria-label="Join Our Team Section"
    >
      <Grid item md={1} aria-hidden="true"></Grid>

      <Grid
        item
        md={4}
        className={styles.insightsTextContainer}
        style={{ padding: "0px 1rem" }}
      >
        <h2 className={styles.insightsComp12}>Join Our Team</h2>
        <div className={styles.insightsCompOrangeline} />

        <p className={`${styles.insightsComp13} ${notosans.variable}`}>
          At CodeKart, we prioritize our employees, offering autonomy, support
          for self-development, and career growth. Our development team seeks
          talented individuals to thrive in our collaborative and innovative
          culture.
        </p>

        <p className={`${styles.insightsComp14} ${notosans.variable}`}>
          Explore our current open positions below!
        </p>

        <HomeButtonComp
          title="Open Positions"
          buttonStyles={styles.insightsButton}
        />
      </Grid>

      <Grid item md={1} aria-hidden="true"></Grid>

      <Grid item md={5} style={{ padding: "0px 1rem" }}>
        <video
          src="/videos/demoVideoJoinTeam.mp4"
          className={styles.insightsComp15}
          autoPlay
          muted
          loop
          preload="none"
          playsInline
          aria-label="Office culture video preview"
        />
      </Grid>

      <Grid item md={1} aria-hidden="true"></Grid>
    </Grid>
  );
}
