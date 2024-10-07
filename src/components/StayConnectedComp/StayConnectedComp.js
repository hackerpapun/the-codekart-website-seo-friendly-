import React from "react";
import { stayConnectedData } from "./StayConnectedData";
import styles from "../../styles/StayConnectedComp/stayConnectedComp.module.css";
import { Grid } from "@mui/material";

export default function StayConnectedComp() {
  return (
    <>
      <div className={styles.stayConnectedCompContainer} style={{ padding: 0 }}>
        <div className={styles.stayConnectedCompText1}>Stay Connected</div>
        <div className={styles.insightsCompOrangeline} />
        <div className={styles.stayConnectedCompText2}>
          Follow us on social media to stay updated with the latest news,
          updates, and innovations from CodeKart
        </div>
      </div>

      {/* facebook, instagram, linkedin , twitter */}
      <Grid container className={styles.stayConnectedCompCardContainer}>
        {stayConnectedData?.map((item, i) => {
          return (
            <Grid item xs={6} md={6} lg={3} style={{ gap: 10 }} key={i}>
              <div
                className={styles.stayConnectedCompCard}
                item={i}
                onClick={() => window.open(item?.url, "_blank")}
              >
                <img src={item?.img} width={40} height={40} />
                <div>
                  <div className={styles.stayConnectedCompCardTitle}>
                    Codekart
                  </div>
                  <div className={styles.stayConnectedCompCardTitle}>
                    {item?.title}
                  </div>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
