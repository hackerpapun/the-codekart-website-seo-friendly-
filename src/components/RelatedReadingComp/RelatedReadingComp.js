import { Grid } from "@mui/material";
import React from "react";
import styles from "../../styles/RelatedReadingComp/RelatedReadingComp.module.css";
import { montserrat, notosans } from "@/assets/fonts/fonts";

export default function RelatedReadingComp({ relatedReadingData }) {
  return (
    <Grid
      container
      className={`${styles.rrc1} ${notosans.variable} ${montserrat.variable}`}
    >
      <Grid item xs={12}>
        <div className={styles.rrc2}>Related Reading</div>
        <div className={styles.rrc3}>
          {" "}
          Our young team has what it takes to
          <br />
          tackle any creative task
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className={styles.rrcOrangeline} />
        </div>
        <Grid
          container
          marginTop={5}
          display="flex"
          justifyContent="space-evenly"
        >
          {relatedReadingData?.map((item, i) => (
            <Grid item xs={5} md={5.5} lg={2.6} key={i}>
              <div className={styles.rrc4Card}>
                <div className={styles.rrc4CardImgContainer}>
                  <img
                    src={item?.img}
                    alt={item?.title}
                    className={styles.rrc4CardImg}
                  />
                  <span
                    className={styles.rrc4CardType}
                    style={{
                      backgroundColor: i % 2 === 0 ? "#FFEA60" : "#FA6400",
                    }}
                  >
                    {item?.type}
                  </span>
                </div>
                <div className={styles.rrc4CardTitle}>{item?.title}</div>
                <div className={styles.rrc4CardDate}>{item?.date}</div>
              </div>
            </Grid>
          ))}
        </Grid>

        <div className={styles.rrc4}></div>
      </Grid>
    </Grid>
  );
}
