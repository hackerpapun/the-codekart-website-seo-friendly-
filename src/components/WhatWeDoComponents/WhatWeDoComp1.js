import React from "react";
import styles from "../../styles/WhatWeDoStyles/WhatWeDo.module.css";
import { Grid } from "@mui/material";
import HomeButtonComp from "@/components/HomeButtonComp";
import { montserrat, notosans } from "@/assets/fonts/fonts";
import { getPublicImageUrl } from "@/constants/images";

export default function WhatWeDoComp1() {
  return (
    <Grid
      container
      className={`${styles.whatwedoComp11} ${montserrat.variable} ${notosans.variable}`}
    >
      <Grid item md={0.5} lg={1}></Grid>
      <Grid
        item
        md={5}
        lg={4}
        className={styles.whatwedoTextContainer}
        style={{ padding: "0px 1rem" }}
      >
        <div
          className={styles.whatwedoCompHeader}
          style={{ textAlign: "left" }}
        >
          Belief Powers Business
        </div>
        <div className={styles.whatwedoCompOrangeline} />
        <div className={styles.whatwedoComp13}>
          At Codekart, we do more than just transform businesses through
          technology. We help them make a meaningful impact on their customers
          and the communities they serve.
        </div>
        <HomeButtonComp
          title="Open Positions"
          buttonStyles={styles.whatwedoButton}
        />
      </Grid>
      <Grid item md={1}></Grid>
      <Grid item md={5} style={{ padding: "0px 1rem" }}>
        <img
          src={getPublicImageUrl("/images/whatwedo/img1.svg")}
          alt="Codekart helps businesses with impactful tech solutions"
          className={styles.whatwedoComp15}
        />
      </Grid>
      <Grid item md={0.5}></Grid>
    </Grid>
  );
}
