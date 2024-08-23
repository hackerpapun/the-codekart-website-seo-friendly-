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
    >
      <div className={styles.insightsComp2whatmakeText}>
        What make CodeKart a great
        <br />
        place to work?
      </div>
      <div className={styles.insightsCompOrangeline} />
      <Grid container className={styles.insightsComp2CardContainer}>
        {insightsComp2Data?.map((item, i) => (
          <Grid item xs={6} md={6} lg={2} key={i}>
            <div className={`${styles.insightsComp2Card}`}>
              <Image
                src={item?.img} // Replace with your image path
                alt="Description of image"
                layout="responsive"
                width={700} // Provide the width of the image
                height={475} // Provide the height of the image
              />
              <div className={styles.insightsComp2CardTitle}>{item?.title}</div>
              <div className={styles.insightsComp2CardDescription}>
                {item?.description}
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
