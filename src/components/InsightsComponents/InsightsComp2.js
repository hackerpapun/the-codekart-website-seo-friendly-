import React from "react";
import styles from "../../styles/InsightsStyles/insights.module.css";
import { Grid } from "@mui/material";
import { notosans } from "@/assets/fonts/fonts";
import Image from "next/image";
import { insightsComp2Data } from "./InsightsConstantDatas";

export default function InsightsComp2() {
  return (
    <Grid
      container
      className={`${styles.insightsComp2Container} ${notosans.variable}`}
      component="section"
      aria-label="Why CodeKart is a Great Place to Work"
    >
      <h2 className={styles.insightsComp2whatmakeText}>
        What makes CodeKart a great
        <br />
        place to work?
      </h2>

      <div className={styles.insightsCompOrangeline} aria-hidden="true" />

      <Grid
        container
        className={styles.insightsComp2CardContainer}
        component="ul"
        role="list"
      >
        {insightsComp2Data?.map((item, i) => (
          <Grid
            item
            xs={6}
            md={6}
            lg={2}
            key={i}
            component="li"
            role="listitem"
            aria-label={item?.title}
          >
            <div className={styles.insightsComp2Card}>
              <Image
                src={item?.img}
                alt={item?.title || "Workplace highlight image"}
                layout="responsive"
                width={700}
                height={475}
              />
              <h3 className={styles.insightsComp2CardTitle}>{item?.title}</h3>
              <p className={styles.insightsComp2CardDescription}>
                {item?.description}
              </p>
            </div>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
