import React from "react";
import styles from "../../styles/insights.module.css";
import { Grid, ImageList, ImageListItem } from "@mui/material";
import { notosans } from "@/assets/fonts/fonts";
import { insightsComp4Data } from "./InsightsConstantDatas";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function InsightsComp4() {
  return (
    <Grid
      container
      className={`${styles.insightsComp4Container} ${notosans.variable}`}
    >
      <div>
        <div className={styles.insightsComp4Text}>
          Take a peek at what goes on at CodeKart!
        </div>
        <div className={styles.insightsCompOrangeline} style={{ width: 200 }} />
      </div>
      <Grid container className={styles.insightsComp4CardContainer}>
        <Grid item xs={12} lg={1} />
        <Grid item xs={12} lg={10}>
          <ImageList
            // sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={12}
            rowHeight={121}
          >
            {insightsComp4Data?.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 12}
                rows={item.rows || 12}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                  className={styles.insightsComp4Img}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={12} lg={1} />
      </Grid>
    </Grid>
  );
}
