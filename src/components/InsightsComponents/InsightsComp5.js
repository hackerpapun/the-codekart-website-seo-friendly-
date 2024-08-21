import React from "react";
import styles from "../../styles/insights.module.css";
import { Grid } from "@mui/material";
import { notosans } from "@/assets/fonts/fonts";
import { insightsComp5LinksData } from "./InsightsConstantDatas";

export default function InsightsComp5() {
  return (
    <Grid
      container
      className={`${styles.insightsComp5Container} ${notosans.variable}`}
    >
      <Grid item xs={12} lg={1} />
      <Grid item xs={12} lg={10}>
        <div className={styles.insightsComp5Container} style={{ padding: 0 }}>
          <div className={styles.insightsComp5Text1}>Stay Connected</div>
          <div className={styles.insightsCompOrangeline} />
          <div className={styles.insightsComp5Text2}>
            Follow us on social media to stay updated with the latest news,
            updates, and innovations from CodeKart
          </div>
        </div>
        <Grid container className={styles.insightsComp5CardContainer}>
          {insightsComp5LinksData?.map((item, i) => {
            return (
              <Grid item xs={6} md={6} lg={3} style={{ gap: 10 }}>
                <div
                  className={styles.insightsComp5Card}
                  item={i}
                  onClick={() =>
                    window.open(item?.url, "_blank")
                  }
                >
                  <img src={item?.img} width={40} height={40} />
                  <div>
                    <div className={styles.insightsComp5CardTitle}>
                      Codekart
                    </div>
                    <div className={styles.insightsComp5CardTitle}>
                      {item?.title}
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item xs={12} lg={1} />
    </Grid>
  );
}
