import React from "react";
import styles from "../../styles/insights.module.css";
import { Grid } from "@mui/material";
import ButtonComp from "@/components/ButtonComp";
import { montserrat, notosans } from "@/assets/fonts/fonts";

export default function InsightsComp1() {
  return (
    <Grid container className={`${styles.insightsComp11} ${montserrat.variable}`}>
      <Grid item md={1}></Grid>
      <Grid item md={4} className={styles.insightsTextContainer} style={{padding: '0px 1rem'}}>
        <div className={styles.insightsComp12}>Join Our Team</div>
        <div className={styles.insightsCompOrangeline} />
        <div className={`${styles.insightsComp13} ${notosans.variable}`}>
          At CodeKart, we prioritize our employees, offering autonomy, support
          for self-development, and career growth. Our development team seeks
          talented individuals to thrive in our collaborative and innovative
          culture.
        </div>
        <div className={`${styles.insightsComp14} ${notosans.variable}`}>
          Explore our current open positions below!
        </div>
        <ButtonComp
          title="Open Positions"
          buttonStyles={styles.insightsButton}
        />
      </Grid>
      <Grid item md={1}></Grid>
      <Grid item md={5} style={{padding: '0px 1rem'}}>
        <video
          src="/videos/demoVideoJoinTeam.mp4"
          className={styles.insightsComp15}
          autoPlay
          muted
          loop
          preload="none"
        />
      </Grid>
      <Grid item md={1}></Grid>
    </Grid>
  );
}
