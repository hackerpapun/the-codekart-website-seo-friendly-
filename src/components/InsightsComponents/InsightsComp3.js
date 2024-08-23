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
    >
      <div className={styles.insightsComp3Text1}>
        What benefits are waiting for you?
      </div>
      <div className={styles.insightsCompOrangeline} style={{width: 200}} />
      <div className={styles.insightsComp3Text2}>
        At CodeKart, we offer a variety of hand-picked benefits that you can
        take advantage of! Join us to experience a rewarding and supportive work
        environment.
      </div>
      <Grid container className={styles.insightsComp3CardContainer}>
        <Marquee pauseOnHover gradient speed={30}>
          {insightsComp3Data?.map((item, i) => (
              <div className={styles.insightsComp3Card} item={i}>
                <Image
                  src={item?.img} // Replace with your image path
                  alt="Description of image"
                  width={35}
                  height={35}
                />
                <div className={styles.insightsComp3CardTitle}>
                  {item?.title}
                </div>
              </div>
          ))}
        </Marquee>
      </Grid>
    </Grid>
  );
}
