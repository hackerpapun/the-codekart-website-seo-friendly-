import React from "react";
import styles from "../../styles/InsightsStyles/insights.module.css";
import { Grid } from "@mui/material";
import { notosans } from "@/assets/fonts/fonts";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { insightsComp3Data } from "./InsightsConstantDatas";

export default function InsightsComp3() {
  return (
    <Grid
      container
      className={`${styles.insightsComp3Container} ${notosans.variable}`}
      component="section"
      aria-label="Benefits at CodeKart"
    >
      <h2 className={styles.insightsComp3Text1}>
        What benefits are waiting for you?
      </h2>

      <div
        className={styles.insightsCompOrangeline}
        style={{ width: 200 }}
        aria-hidden="true"
      />

      <p className={styles.insightsComp3Text2}>
        At CodeKart, we offer a variety of hand-picked benefits that you can
        take advantage of! Join us to experience a rewarding and supportive work
        environment.
      </p>

      <Grid
        container
        className={styles.insightsComp3CardContainer}
        component="ul"
        role="list"
      >
        <Marquee
          pauseOnHover
          gradient
          speed={30}
          aria-label="Scrolling list of benefits"
        >
          {insightsComp3Data?.map((item, i) => (
            <li
              key={i}
              className={styles.insightsComp3Card}
              role="listitem"
              aria-label={item?.title}
            >
              <Image
                src={item?.img}
                alt={item?.title || "Benefit icon"}
                width={35}
                height={35}
              />
              <div className={styles.insightsComp3CardTitle}>{item?.title}</div>
            </li>
          ))}
        </Marquee>
      </Grid>
    </Grid>
  );
}
